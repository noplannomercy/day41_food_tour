#!/usr/bin/env python3
"""
Image Optimizer for Web Performance
Downloads images from URLs, resizes them, and converts to WebP format.
"""

import sys
import os
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO

def format_size(bytes):
    """Format bytes to human-readable size."""
    if bytes < 1024:
        return f"{bytes} B"
    elif bytes < 1024 * 1024:
        return f"{bytes / 1024:.1f} KB"
    else:
        return f"{bytes / (1024 * 1024):.1f} MB"

def download_and_optimize(url, output_name, target_width=None):
    """
    Download image from URL, resize, and convert to WebP.

    Args:
        url: Image URL to download
        output_name: Output filename (without extension)
        target_width: Target width in pixels (maintains aspect ratio)
    """
    try:
        print(f"[DOWNLOAD] Downloading image from URL...")
        print(f"           {url}")

        # Download image
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        original_size = len(response.content)
        print(f"[OK] Downloaded {format_size(original_size)}")

        # Open image
        img = Image.open(BytesIO(response.content))
        original_format = img.format
        original_dimensions = img.size
        print(f"[OK] Original: {original_dimensions[0]}x{original_dimensions[1]} {original_format}")

        # Resize if needed
        if target_width:
            target_width = int(target_width)
            if img.width > target_width:
                # Calculate new height to maintain aspect ratio
                aspect_ratio = img.height / img.width
                new_height = int(target_width * aspect_ratio)
                img = img.resize((target_width, new_height), Image.LANCZOS)
                print(f"[OK] Resized to {target_width}x{new_height}")
        else:
            # Auto-resize based on image dimensions
            if img.width > 1920:
                target_width = 1920
            elif img.width > 1200:
                target_width = 1200
            elif img.width > 800:
                target_width = 800
            else:
                target_width = img.width

            if target_width < img.width:
                aspect_ratio = img.height / img.width
                new_height = int(target_width * aspect_ratio)
                img = img.resize((target_width, new_height), Image.LANCZOS)
                print(f"[OK] Auto-resized to {target_width}x{new_height}")

        # Convert to RGB if necessary (WebP doesn't support some modes)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Create white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Create output directory
        output_dir = Path('public/images')
        output_dir.mkdir(parents=True, exist_ok=True)

        # Save as WebP
        output_path = output_dir / f"{output_name}.webp"
        img.save(output_path, 'WEBP', quality=85, method=6)

        optimized_size = output_path.stat().st_size
        savings = ((original_size - optimized_size) / original_size) * 100

        print(f"\n[SUCCESS] Image optimized!")
        print(f"          Saved to: {output_path}")
        print(f"          Size: {format_size(optimized_size)} (saved {savings:.1f}%)")
        print(f"\n[USAGE] Use in your code:")
        print(f'        <img src="/images/{output_name}.webp" alt="..." />')

        return str(output_path)

    except requests.exceptions.RequestException as e:
        print(f"[ERROR] Error downloading image: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"[ERROR] Error processing image: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) < 3:
        print("Usage: python optimize.py <image-url> <output-name> [width]")
        print("\nExamples:")
        print("  python optimize.py https://images.pexels.com/.../photo.jpeg hero-bg")
        print("  python optimize.py https://images.pexels.com/.../photo.jpeg steak-ribeye 800")
        sys.exit(1)

    url = sys.argv[1]
    output_name = sys.argv[2]
    target_width = sys.argv[3] if len(sys.argv) > 3 else None

    download_and_optimize(url, output_name, target_width)

if __name__ == '__main__':
    main()
