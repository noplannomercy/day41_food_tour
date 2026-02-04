#!/usr/bin/env python3
"""
Batch Image Optimizer
Reads image URLs from src/data/images.ts and optimizes all of them.
"""

import re
import sys
from pathlib import Path
from optimize import download_and_optimize

def extract_image_urls(images_file):
    """Extract all image URLs from the images.ts file."""
    content = images_file.read_text(encoding='utf-8')

    # Find all Pexels URLs
    url_pattern = r"'(https://images\.pexels\.com/[^']+)'"
    urls = re.findall(url_pattern, content)

    # Also extract the key names for better naming
    mapping = {}

    # Extract hero
    hero_match = re.search(r"hero:\s*'(https://[^']+)'", content)
    if hero_match:
        mapping[hero_match.group(1)] = ('hero-bg', 1920)

    # Extract about images
    about_pattern = r"(founder|restaurant|interior):\s*'(https://[^']+)'"
    for match in re.finditer(about_pattern, content):
        name, url = match.groups()
        mapping[url] = (f'about-{name}', 1200)

    # Extract event images
    event_pattern = r"(jazzNight|acoustic):\s*'(https://[^']+)'"
    for match in re.finditer(event_pattern, content):
        name, url = match.groups()
        clean_name = 'jazz-night' if name == 'jazzNight' else 'acoustic'
        mapping[url] = (f'events-{clean_name}', 1200)

    # Extract menu items (use the key as the name)
    menu_pattern = r"'([^']+)':\s*'(https://[^']+)'"
    for match in re.finditer(menu_pattern, content):
        key, url = match.groups()
        if url.startswith('https://images.pexels.com'):
            # Convert to slug format
            slug = key.lower().replace("'", "").replace(" ", "-").replace("&", "and")
            mapping[url] = (f'menu-{slug}', 800)

    # Extract category images
    category_pattern = r"'(Appetizers|Sushi & Sashimi|Prime Steaks|Burgers & Grills|Craft Beverages)':\s*'(https://[^']+)'"
    for match in re.finditer(category_pattern, content):
        cat, url = match.groups()
        slug = cat.lower().replace(" ", "-").replace("&", "and")
        mapping[url] = (f'category-{slug}', 1200)

    # Extract feature images
    feature_pattern = r"(primeCuts|freshSushi|craftBeer|liveMusic):\s*'(https://[^']+)'"
    for match in re.finditer(feature_pattern, content):
        name, url = match.groups()
        # Convert camelCase to kebab-case
        slug = re.sub(r'([a-z])([A-Z])', r'\1-\2', name).lower()
        mapping[url] = (f'feature-{slug}', 800)

    return mapping

def main():
    """Main function to batch process all images."""
    images_file = Path('src/data/images.ts')

    if not images_file.exists():
        print("[ERROR] Could not find src/data/images.ts")
        sys.exit(1)

    print("[INFO] Reading image URLs from src/data/images.ts...")
    url_mapping = extract_image_urls(images_file)

    print(f"[INFO] Found {len(url_mapping)} unique images to optimize\n")

    success_count = 0
    failed_count = 0

    for i, (url, (name, width)) in enumerate(url_mapping.items(), 1):
        print(f"\n[{i}/{len(url_mapping)}] Processing: {name}")
        print("-" * 60)

        try:
            download_and_optimize(url, name, width)
            success_count += 1
        except Exception as e:
            print(f"[ERROR] Failed to process {name}: {e}")
            failed_count += 1

        print()

    print("\n" + "=" * 60)
    print(f"[SUMMARY] Batch processing complete!")
    print(f"          Success: {success_count}")
    print(f"          Failed: {failed_count}")
    print(f"          Total: {len(url_mapping)}")
    print("=" * 60)

    if success_count > 0:
        print("\n[NEXT STEPS]")
        print("1. Update src/data/images.ts to use local paths:")
        print("   Example: '/images/hero-bg.webp'")
        print("2. Remove or comment out the Pexels URLs")
        print("3. Test the website to ensure all images load correctly")

if __name__ == '__main__':
    main()
