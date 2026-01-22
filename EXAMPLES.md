# Bubblegums Theme - Examples

This directory contains examples of how to use the Bubblegums theme in different scenarios.

## Example 1: Basic HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Bubblegum Site</title>
    <link rel="stylesheet" href="theme.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>Welcome to Bubblegums!</h1>
            <p>This is a simple page using the bubble gum theme.</p>
            <button class="btn-primary">Click Me</button>
        </div>
    </div>
</body>
</html>
```

## Example 2: Using the Theme Provider

```html
<!DOCTYPE html>
<html lang="en" data-auto-theme>
<head>
    <meta charset="UTF-8">
    <title>Theme Provider Example</title>
    <link rel="stylesheet" href="theme.css">
    <script src="theme-provider.js"></script>
</head>
<body>
    <div class="card">
        <h2>Theme Provider Demo</h2>
        <button onclick="customizeTheme()">Customize Theme</button>
        <button onclick="resetTheme()">Reset Theme</button>
    </div>

    <script>
        function customizeTheme() {
            // Change primary color to a custom value
            window.BubblegumsTheme.setColor('--bg-primary', '#FF1493');
            alert('Theme customized!');
        }

        function resetTheme() {
            window.BubblegumsTheme.reset();
            alert('Theme reset to defaults!');
        }

        // Listen for theme changes
        document.addEventListener('themechange', (e) => {
            console.log('Theme changed:', e.detail);
        });
    </script>
</body>
</html>
```

## Example 3: Using with JavaScript

```javascript
// Import the theme configuration
import theme from './theme.json';

// Use colors in your JavaScript
const primaryColor = theme.colors.primary.main;
const accentColor = theme.colors.accent.purple;

// Apply to canvas, charts, etc.
const ctx = canvas.getContext('2d');
ctx.fillStyle = primaryColor;
ctx.fillRect(0, 0, 100, 100);
```

## Example 4: Custom Component Styling

```html
<style>
.custom-header {
    background: linear-gradient(135deg, var(--bg-primary), var(--accent-purple));
    color: var(--text-light);
    padding: 40px;
    border-radius: var(--border-radius-large);
}

.custom-button {
    background-color: var(--accent-blue);
    color: var(--text-light);
    border: none;
    padding: 12px 24px;
    border-radius: 20px;
    cursor: pointer;
}

.custom-button:hover {
    background-color: var(--accent-purple);
    transform: scale(1.05);
}
</style>

<div class="custom-header">
    <h1>My Custom Header</h1>
    <button class="custom-button">Custom Button</button>
</div>
```

## Example 5: Responsive Card Grid

```html
<style>
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
</style>

<div class="card-grid">
    <div class="card">
        <h3>Card 1</h3>
        <p>Content here</p>
        <span class="badge">New</span>
    </div>
    <div class="card">
        <h3>Card 2</h3>
        <p>Content here</p>
        <span class="badge">Featured</span>
    </div>
    <div class="card">
        <h3>Card 3</h3>
        <p>Content here</p>
    </div>
</div>
```
