from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3004')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='check_main.png', full_page=True)

    # Get computed styles for body
    body_color = page.evaluate('getComputedStyle(document.body).color')
    body_bg = page.evaluate('getComputedStyle(document.body).backgroundColor')
    print(f'Body text color: {body_color}')
    print(f'Body background: {body_bg}')

    # Check if CSS variables are defined
    primary = page.evaluate('getComputedStyle(document.documentElement).getPropertyValue("--color-primary")')
    text_primary = page.evaluate('getComputedStyle(document.documentElement).getPropertyValue("--color-text-primary")')
    bg_light = page.evaluate('getComputedStyle(document.documentElement).getPropertyValue("--color-background-light")')
    print(f'--color-primary: [{primary}]')
    print(f'--color-text-primary: [{text_primary}]')
    print(f'--color-background-light: [{bg_light}]')

    # Check a heading element
    h2_color = page.evaluate('''() => {
        const h2 = document.querySelector('h2');
        return h2 ? getComputedStyle(h2).color : 'no h2 found';
    }''')
    print(f'H2 text color: {h2_color}')

    # Check if Tailwind classes are working
    has_text_primary_class = page.evaluate('''() => {
        const el = document.querySelector('.text-text-primary');
        return el ? 'found' : 'not found';
    }''')
    print(f'Element with .text-text-primary: {has_text_primary_class}')

    browser.close()
    print('Done!')
