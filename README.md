# 🍬 Bubblegums Theme

A playful, vibrant color theme featuring sweet bubble gum colors - perfect for creating fun and energetic user interfaces!

## 🎨 Color Palette

The Bubblegums theme features a delightful combination of pinks, purples, and soft blues:

### Primary Colors
- **Hot Pink**: `#FF69B4` - Main brand color
- **Light Pink**: `#FFB6D9` - Lighter shade for backgrounds
- **Deep Pink**: `#FF1493` - Darker shade for emphasis

### Accent Colors
- **Orchid**: `#DA70D6` - Purple accent
- **Sky Blue**: `#87CEEB` - Blue accent
- **Lavender**: `#E6E6FA` - Soft purple background

### Background Colors
- **Lavender Blush**: `#FFF0F5` - Main background
- **Misty Rose**: `#FFE4E1` - Secondary background
- **White**: `#FFFFFF` - Card backgrounds

## 🚀 Quick Start

### Using CSS

1. Include the theme CSS file in your HTML:
```html
<link rel="stylesheet" href="theme.css">
```

2. The theme will automatically apply to your page elements!

### Using CSS Variables

All theme colors are available as CSS custom properties:

```css
.my-element {
  background-color: var(--bg-primary);
  color: var(--text-on-primary);
  border: 2px solid var(--border-color);
}
```

### Using the JSON Configuration

Import the theme configuration in your JavaScript:

```javascript
import theme from './theme.json';

// Access colors
const primaryColor = theme.colors.primary.main; // #FF69B4
const accentPurple = theme.colors.accent.purple; // #DA70D6
```

## 📦 Installation

### NPM (coming soon)
```bash
npm install bubblegums-theme
```

### Direct Download
Download the files from this repository:
- `theme.css` - The main theme stylesheet
- `theme.json` - Theme configuration
- `demo.html` - Live demo page

## 🎯 Features

- **CSS Custom Properties**: All colors defined as CSS variables for easy customization
- **Ready-to-use Components**: Styled buttons, cards, forms, and badges
- **Smooth Transitions**: Delightful hover effects and animations
- **Responsive Design**: Works beautifully on all screen sizes
- **JSON Configuration**: Structured theme data for programmatic use
- **Design Tokens**: Consistent spacing, typography, and border radius values

## 🧩 Available Components

### Buttons
```html
<button class="btn-primary">Click Me!</button>
```

### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>
```

### Badges
```html
<span class="badge">New</span>
```

### Form Elements
```html
<input type="text" placeholder="Your text here">
<textarea placeholder="Your message"></textarea>
```

## 🎨 Demo

Open `demo.html` in your browser to see all components and colors in action!

## 📋 CSS Variables Reference

| Variable | Description | Value |
|----------|-------------|-------|
| `--bg-primary` | Primary pink | #FF69B4 |
| `--bg-primary-light` | Light pink | #FFB6D9 |
| `--bg-primary-dark` | Deep pink | #FF1493 |
| `--accent-purple` | Purple accent | #DA70D6 |
| `--accent-blue` | Blue accent | #87CEEB |
| `--bg-main` | Main background | #FFF0F5 |
| `--text-primary` | Primary text color | #4A4A4A |
| `--text-light` | Light text (for dark backgrounds) | #FFFFFF |

## 🎭 Customization

You can override any CSS variable to customize the theme:

```css
:root {
  --bg-primary: #your-color;
  --accent-purple: #your-accent;
}
```

## 📄 License

MIT License - feel free to use this theme in your projects!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 💖 Credits

Created with love by AdrianTriSetiawan

---

Enjoy the sweet, playful vibes of the Bubblegums theme! 🍬✨
