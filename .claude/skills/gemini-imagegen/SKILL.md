---
name: gemini-imagegen
description: Generate and edit images using Google's Gemini API. Use this skill when creating images from text prompts, generating food photos, product mockups, or any image generation task. Supports text-to-image with aspect ratio control.
triggers:
  - generate image
  - create image
  - make image
  - 이미지 생성
  - 이미지 만들어
---

# Gemini Image Generation Skill

## Overview
This skill enables image generation using Google's Gemini 2.0 Flash model.

## Requirements
- Python 3.10+
- `uv` package manager
- `GOOGLE_API_KEY` environment variable

## Setup
1. Get API key from https://aistudio.google.com/apikey
2. Set environment variable:
   ```bash
   export GOOGLE_API_KEY=your_api_key_here
   ```

## Usage

### Generate Image
```bash
uv run "${SKILL_DIR}/main.py" \
  --prompt "Your image description" \
  --output "/path/to/output.png" \
  --aspect "landscape"  # square, landscape, portrait
```

### Aspect Ratios
- `square`: 1:1 (1024x1024)
- `landscape`: 16:9 (1536x864)
- `portrait`: 9:16 (864x1536)

## Example Prompts for Korean Food Tour

### Food Photos
- "Delicious Korean bibimbap in a hot stone bowl, top view, food photography, warm lighting"
- "Korean BBQ pork belly (samgyeopsal) grilling on a charcoal grate, smoke rising, appetizing"
- "Tteokbokki (Korean spicy rice cakes) in a red sauce, street food stall setting"
- "Traditional Korean market food stall with various dishes, Gwangjang Market style"

### Tour/Guide Photos
- "Friendly Asian tour guide explaining food to tourists in a Korean market"
- "Group of tourists enjoying Korean street food together, happy expressions"

### Atmosphere
- "Cozy Korean restaurant interior with warm wooden decor and soft lighting"
- "Bustling Korean night market with neon signs and food stalls"

## Output
- Images are saved to the specified output path
- Default format: PNG
- Recommended: Convert to WebP for web use

## Error Handling
- If generation fails, check API key validity
- Rate limits may apply (check Google AI Studio quotas)
