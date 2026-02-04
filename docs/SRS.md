# SRS: Boutique Hotel Website - "The Linden"

## Overview

A website for "The Linden", a boutique hotel located in Charleston, South Carolina.
The Linden is a 24-room luxury boutique hotel housed in a restored 1890s mansion,
blending Southern charm with contemporary design. Known for its curated art collection,
rooftop bar, and personalized concierge service. Opened in 2021 by hospitality duo
James & Clara Mitchell.

---

## Pages (3 pages)

### 1. Home

- Hero section: full background image + hotel tagline
- Room highlights (3 signature rooms with image, name, brief description, price per night)
- Experience section (rooftop bar, curated art tours, private dining)
- Guest reviews / rating display
- Booking CTA → click opens modal
  - Name
  - Check-in date
  - Check-out date
  - Number of guests
  - Room preference (dropdown)

### 2. Rooms

- All rooms displayed from CSV data
- Category filter (Suite, Deluxe, Standard)
- Each room card: image + room name + description + price per night + badge (Signature / Most Popular / New)
- Grid layout with pagination

### 3. About

- The story of James & Clara Mitchell
- Hotel philosophy ("Where history meets modern comfort")
- The 1890s mansion restoration journey
- Interior / exterior gallery images

---

## Images

All images sourced from Pexels or similar stock image sites.
Search terms: boutique hotel, luxury hotel room, hotel lobby, rooftop bar, Charleston architecture.

---

## Design Direction

Reference images collected in docs/design/references/.
Use frontend-design skill to generate design system before implementation.

---

## Room Data (CSV)

Separate CSV file provided. Structure:

| category | room_name | description | price_per_night | capacity | size_sqft | badge |
|----------|-----------|-------------|-----------------|----------|-----------|-------|
| Suite | The Charleston Suite | Panoramic harbor view with private balcony and clawfoot tub | 450 | 2 | 850 | Signature |
| Suite | The Garden Suite | Ground floor suite with private garden terrace | 380 | 2 | 720 | |
| Deluxe | The Magnolia Room | King bed with restored fireplace and bay window | 280 | 2 | 550 | Most Popular |
| Deluxe | The Azalea Room | Queen bed with courtyard view and reading nook | 240 | 2 | 480 | |
| Deluxe | The Palmetto Room | King bed with rooftop access and city view | 300 | 2 | 520 | New |
| Standard | The Jasmine Room | Cozy queen room with garden view | 180 | 2 | 380 | |
| Standard | The Ivy Room | Twin beds with courtyard view | 160 | 2 | 350 | |
| Standard | The Wisteria Room | Queen bed with street view and writing desk | 190 | 2 | 400 | |