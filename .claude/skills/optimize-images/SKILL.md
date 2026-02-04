---
name: optimize-images
description: Download images from URLs, resize them to optimal dimensions, and convert to WebP format. Use when optimizing website images, converting Pexels stock photos, or improving site performance.
allowed-tools: Bash(python *)
disable-model-invocation: true
argument-hint: [image-url] [output-name] [width]
---

# Image Optimizer for Web Performance

Download images from URLs (like Pexels), resize them to optimal dimensions, and convert to WebP format for better performance. Images are saved to the `public/images/` directory with proper organization.

## Usage

Basic usage (auto-detects optimal size):
```bash
python .claude/skills/optimize-images/scripts/optimize.py <image-url> <output-name>
```

With custom width (maintains aspect ratio):
```bash
python .claude/skills/optimize-images/scripts/optimize.py <image-url> <output-name> <width>
```

## Examples

Download and optimize a hero image:
```bash
python .claude/skills/optimize-images/scripts/optimize.py https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg hero-bg
```

Download and resize to 800px wide:
```bash
python .claude/skills/optimize-images/scripts/optimize.py https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg steak-ribeye 800
```

## What it does

1. **Downloads** the image from the provided URL
2. **Resizes** to optimal dimensions (default 1200px wide for large images, 800px for thumbnails)
3. **Converts** to WebP format (typically 25-35% smaller than JPEG)
4. **Saves** to `public/images/` directory
5. **Reports** the file size savings and output path

## Image size recommendations

- **Hero images**: 1920px wide
- **Category banners**: 1200px wide
- **Product cards**: 800px wide
- **Thumbnails**: 400px wide

## Output

Images are saved as:
- `public/images/{output-name}.webp`

Update your code to use:
```typescript
<img src="/images/{output-name}.webp" alt="..." />
```

## Benefits

- **Faster loading**: WebP images are 25-35% smaller than JPEG
- **Better caching**: Local files cached by browser
- **No external dependencies**: No Pexels API rate limits
- **Optimized sizes**: Properly sized images reduce bandwidth
