#!/usr/bin/env python3
"""
Gemini Image Generation Script
Generates images using Google's Gemini 2.0 Flash model.
"""

import argparse
import base64
import os
import sys
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "google-genai"])
    from google import genai
    from google.genai import types


def generate_image(prompt: str, output_path: str, aspect: str = "square") -> str:
    """Generate an image using Gemini API."""
    
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GOOGLE_API_KEY environment variable is not set")
    
    client = genai.Client(api_key=api_key)
    
    # Aspect ratio mapping
    aspect_config = {
        "square": "1:1",
        "landscape": "16:9",
        "portrait": "9:16"
    }
    
    aspect_ratio = aspect_config.get(aspect, "1:1")
    
    # Enhanced prompt for better quality
    enhanced_prompt = f"{prompt}. High quality, professional photography style."
    
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-preview-image-generation",
            contents=enhanced_prompt,
            config=types.GenerateContentConfig(
                response_modalities=["Text", "Image"],
                image_generation_config=types.ImageGenerationConfig(
                    aspect_ratio=aspect_ratio
                )
            )
        )
        
        # Extract and save image
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                image_data = part.inline_data.data
                
                # Ensure output directory exists
                output_file = Path(output_path)
                output_file.parent.mkdir(parents=True, exist_ok=True)
                
                # Save image
                with open(output_file, "wb") as f:
                    f.write(base64.b64decode(image_data))
                
                print(f"✅ Image saved to: {output_path}")
                return str(output_file.absolute())
        
        raise ValueError("No image data in response")
        
    except Exception as e:
        print(f"❌ Error generating image: {e}")
        raise


def main():
    parser = argparse.ArgumentParser(description="Generate images using Gemini API")
    parser.add_argument("--prompt", "-p", required=True, help="Image description prompt")
    parser.add_argument("--output", "-o", required=True, help="Output file path")
    parser.add_argument(
        "--aspect", "-a",
        choices=["square", "landscape", "portrait"],
        default="square",
        help="Aspect ratio (default: square)"
    )
    
    args = parser.parse_args()
    
    try:
        result = generate_image(args.prompt, args.output, args.aspect)
        print(f"Generated: {result}")
    except Exception as e:
        print(f"Failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
