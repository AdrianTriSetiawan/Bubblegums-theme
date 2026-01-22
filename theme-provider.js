/**
 * Bubblegums Theme Provider
 * Provides utilities for managing and applying the Bubblegums theme
 */

class ThemeProvider {
  constructor(config = {}) {
    this.themeName = 'Bubblegums';
    this.config = config;
    this.applied = false;
  }

  /**
   * Apply the theme to the document
   */
  apply() {
    if (this.applied) {
      console.warn('Bubblegums theme is already applied');
      return;
    }

    // Check if theme.css is already loaded
    const existingLink = document.querySelector('link[href*="theme.css"]');
    
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.config.cssPath || 'theme.css';
      document.head.appendChild(link);
    }

    this.applied = true;
    this.triggerThemeChange();
  }

  /**
   * Get a color value from the theme
   * @param {string} colorPath - Dot notation path to color (e.g., 'primary.main', 'accent.purple')
   */
  getColor(colorPath) {
    const cssVarMap = {
      'primary.main': '--bg-primary',
      'primary.light': '--bg-primary-light',
      'primary.dark': '--bg-primary-dark',
      'accent.purple': '--accent-purple',
      'accent.blue': '--accent-blue',
      'accent.lavender': '--accent-lavender',
      'background.main': '--bg-main',
      'background.secondary': '--bg-secondary',
      'background.card': '--bg-card',
      'text.primary': '--text-primary',
      'text.secondary': '--text-secondary',
      'text.light': '--text-light'
    };

    const cssVar = cssVarMap[colorPath];
    if (cssVar) {
      return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    }

    return null;
  }

  /**
   * Set a custom color value
   * @param {string} variable - CSS variable name
   * @param {string} value - Color value
   */
  setColor(variable, value) {
    document.documentElement.style.setProperty(variable, value);
    this.triggerThemeChange();
  }

  /**
   * Reset theme to default values
   */
  reset() {
    const root = document.documentElement;
    const customProperties = Array.from(root.style)
      .filter(prop => prop.startsWith('--'));
    
    customProperties.forEach(prop => {
      root.style.removeProperty(prop);
    });

    this.triggerThemeChange();
  }

  /**
   * Get all theme colors as an object
   */
  getAllColors() {
    const colors = {};
    const root = getComputedStyle(document.documentElement);
    
    const variables = [
      '--bg-primary',
      '--bg-primary-light',
      '--bg-primary-dark',
      '--accent-purple',
      '--accent-blue',
      '--accent-lavender',
      '--bg-main',
      '--bg-secondary',
      '--bg-card',
      '--text-primary',
      '--text-secondary',
      '--text-light'
    ];

    variables.forEach(variable => {
      const value = root.getPropertyValue(variable).trim();
      if (value) {
        colors[variable] = value;
      }
    });

    return colors;
  }

  /**
   * Trigger a custom event when theme changes
   */
  triggerThemeChange() {
    const event = new CustomEvent('themechange', {
      detail: {
        theme: this.themeName,
        colors: this.getAllColors()
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Export theme configuration
   */
  exportConfig() {
    return {
      name: this.themeName,
      colors: this.getAllColors(),
      applied: this.applied
    };
  }
}

// Auto-instantiate if in browser environment
if (typeof window !== 'undefined') {
  window.BubblegumsTheme = new ThemeProvider();
  
  // Auto-apply theme if data-auto-theme attribute is present
  if (document.documentElement.hasAttribute('data-auto-theme')) {
    window.BubblegumsTheme.apply();
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeProvider;
}
