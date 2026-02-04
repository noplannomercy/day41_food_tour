# Image Optimizer Skill

A Claude Code skill that downloads images from URLs, resizes them to optimal dimensions, and converts them to WebP format for improved website performance.

## Features

- ✅ Downloads images from any URL (Pexels, Unsplash, etc.)
- ✅ Automatically resizes to web-optimized dimensions
- ✅ Converts to WebP format (25-35% smaller than JPEG)
- ✅ Saves to `public/images/` for easy use in Next.js
- ✅ Reports file size savings
- ✅ Maintains aspect ratios
- ✅ Handles transparency properly

## Installation

The skill requires Python with `Pillow` and `requests`:

```bash
pip install -r requirements.txt
```

## Usage

### From Claude Code

Invoke the skill with:

```
/optimize-images <image-url> <output-name> [width]
```

Examples:

```
/optimize-images https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg hero-bg

/optimize-images https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg steak-ribeye 800
```

### Direct Script Usage

```bash
cd .claude/skills/optimize-images/scripts
python optimize.py <image-url> <output-name> [width]
```

## Recommended Image Sizes

| Use Case | Width | Example |
|----------|-------|---------|
| Hero images | 1920px | Full-width backgrounds |
| Category banners | 1200px | Section headers |
| Product cards | 800px | Menu items, thumbnails |
| Small thumbnails | 400px | Icons, small previews |

## Benefits

### Performance Improvements

- **Smaller file sizes**: WebP images are typically 25-35% smaller than JPEG at the same quality
- **Faster loading**: Reduced file sizes mean faster page loads
- **Better caching**: Local files are cached by the browser
- **No external dependencies**: No reliance on external CDNs or API rate limits

### Example Savings

A typical 1200px wide hero image:
- Original JPEG: 450 KB
- Optimized WebP: 135 KB
- **Savings: 70%** 🎉

## Output

Images are saved to:
```
public/images/{output-name}.webp
```

Use in your Next.js app:
```jsx
<img src="/images/{output-name}.webp" alt="Description" />

// Or with Next.js Image component:
import Image from 'next/image'

<Image
  src="/images/{output-name}.webp"
  alt="Description"
  width={800}
  height={600}
/>
```

## Batch Processing

To optimize all images from your `src/data/images.ts` file, you can create a batch script or ask Claude to process them one by one.

Example workflow:
1. Extract all image URLs from your data file
2. Run the optimizer for each URL with appropriate dimensions
3. Update your data file to use the local WebP paths

## Technical Details

- **Resize algorithm**: Lanczos resampling (high quality)
- **WebP quality**: 85 (excellent quality, good compression)
- **Transparency handling**: Converts RGBA to RGB with white background
- **Auto-sizing**: Automatically chooses optimal width if not specified

## Troubleshooting

### Module not found error

Install required packages:
```bash
pip install Pillow requests
```

### Permission denied error

Ensure the `public/images/` directory is writable:
```bash
mkdir -p public/images
chmod 755 public/images
```

### Download timeout

For slow connections, the script times out after 30 seconds. The image URL might be slow or unreachable.

## License

This skill is part of The Oak & Barrel project and follows the same license.
