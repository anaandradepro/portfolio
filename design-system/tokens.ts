// Design System — Single Source of Truth
// All design tokens live here. Components use Tailwind semantic classes only.

export interface DesignTokens {
  colors: Record<string, string>;
  sidebar: Record<string, string>;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
  };
}

const tokens: DesignTokens = {
  colors: {
    // Base
    background: "10 6% 5%",            // very dark #0d0d0f
    foreground: "0 0% 93%",             // light gray #ededed

    // Card
    card: "260 15% 10%",                // dark purple-tinted
    cardForeground: "0 0% 93%",

    // Popover
    popover: "260 15% 10%",
    popoverForeground: "0 0% 93%",

    // Primary (lilac/purple)
    primary: "265 60% 65%",             // vibrant lilac #9b6cd4
    primaryForeground: "0 0% 100%",

    // Secondary
    secondary: "260 20% 16%",           // muted purple
    secondaryForeground: "0 0% 93%",

    // Muted
    muted: "260 10% 15%",
    mutedForeground: "0 0% 60%",

    // Accent
    accent: "265 50% 55%",
    accentForeground: "0 0% 100%",

    // Destructive
    destructive: "0 72% 51%",
    destructiveForeground: "0 0% 100%",

    // Border / Input / Ring
    border: "260 15% 18%",
    input: "260 15% 18%",
    ring: "265 60% 65%",

    // Chart colors
    chart1: "265 60% 65%",
    chart2: "280 50% 55%",
    chart3: "240 50% 55%",
    chart4: "300 45% 55%",
    chart5: "320 45% 55%",
  },

  sidebar: {
    background: "260 15% 8%",
    foreground: "0 0% 85%",
    primary: "265 60% 65%",
    primaryForeground: "0 0% 100%",
    accent: "260 20% 16%",
    accentForeground: "0 0% 93%",
    border: "260 15% 15%",
    ring: "265 60% 65%",
  },

  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },

  spacing: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    64: "16rem",
  },

  typography: {
    fontFamily: {
      sans: "'Inter', 'Outfit', system-ui, -apple-system, sans-serif",
      mono: "'Geist Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    lineHeight: {
      tight: "1.15",
      snug: "1.3",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
  },
};

export default tokens;
