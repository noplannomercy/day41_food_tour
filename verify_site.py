from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3003')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='final_check.png', full_page=True)
    print("Screenshot saved to final_check.png")
    browser.close()
