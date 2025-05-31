/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // ===========================================
      // PRIMITIVE TOKENS (Core Values)
      // ===========================================
      colors: {
        // Brand Core Colors
        brand: {
          50: '#f0f4ff',
          100: '#e5edff',
          200: '#d1deff',
          300: '#b8cbff',
          400: '#9fb1ff',
          500: '#1331d2', // Primary brand color
          600: '#0e24a8',
          700: '#0a1a7f',
          800: '#071155',
          900: '#03082b',
          950: '#020419',
        },
        
        // Semantic Colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // Neutral Grays (Enterprise Grade)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // ===========================================
        // SEMANTIC TOKENS (Purpose-based)
        // ===========================================
        
        // UI Semantic Colors
        primary: '#1331d2',           // Main brand action
        secondary: '#00B8FF',         // Secondary actions
        accent: '#F9FAFB',           // Highlight/accent
        
        // Text Semantic Colors
        text: {
          primary: '#0e101b',         // Main text
          secondary: '#344054',       // Secondary text  
          tertiary: '#6b7280',        // Helper text
          inverse: '#ffffff',         // Text on dark backgrounds
          disabled: '#a3a3a3',        // Disabled text
          link: '#1331d2',           // Link text
          'link-hover': '#0e24a8',    // Link hover
          'link-visited': '#7c3aed',  // Visited links
          muted: '#9ca3af',          // Muted/subtle text
          'on-primary': '#ffffff',    // Text on primary backgrounds
          'on-secondary': '#000000',  // Text on secondary backgrounds
          'on-surface': '#111827',    // Text on surface backgrounds
          placeholder: '#9ca3af',     // Placeholder text
        },
        
        // Background Semantic Colors
        background: {
          primary: '#ffffff',         // Main background
          secondary: '#f9fafb',       // Secondary background
          tertiary: '#f3f4f6',        // Cards, panels
          dark: '#0a0a0a',           // Dark backgrounds
          overlay: 'rgba(0,0,0,0.5)', // Modal overlays
          glass: 'rgba(255,255,255,0.05)', // Glass morphism
          'glass-light': 'rgba(255,255,255,0.1)',
          'glass-dark': 'rgba(0,0,0,0.1)',
          elevated: '#ffffff',        // Elevated surfaces
          sunken: '#f8fafc',         // Sunken/inset areas
          brand: '#1331d2',          // Brand background
          'brand-light': '#f0f4ff',   // Light brand background
          'brand-dark': '#0a1a7f',    // Dark brand background
        },
        
        // Border Semantic Colors
        border: {
          primary: '#e5e7eb',         // Default borders
          secondary: '#d1d5db',       // Stronger borders
          tertiary: '#f3f4f6',        // Subtle borders
          focus: '#1331d2',          // Focus states
          error: '#ef4444',          // Error borders
          success: '#22c55e',        // Success borders
          warning: '#f59e0b',        // Warning borders
          info: '#3b82f6',           // Info borders
          disabled: '#f3f4f6',       // Disabled borders
          'on-dark': 'rgba(255,255,255,0.1)', // Borders on dark backgrounds
          'on-brand': 'rgba(255,255,255,0.2)', // Borders on brand backgrounds
          divider: '#e5e7eb',        // Divider lines
          'divider-light': '#f3f4f6', // Light dividers
        },
        
        // Surface Colors (Enterprise)
        surface: {
          primary: '#ffffff',
          secondary: '#f9fafb',
          tertiary: '#f3f4f6',
          inverse: '#111827',
          overlay: 'rgba(17, 24, 39, 0.8)',
          elevated: '#ffffff',
          'elevated-1': '#ffffff',
          'elevated-2': '#fefefe',
          'elevated-3': '#fdfdfd',
          brand: '#1331d2',
          'brand-subtle': '#f0f4ff',
          'brand-muted': '#e5edff',
          dark: '#111827',
          'dark-elevated': '#1f2937',
        },
        
        // Interactive States (Comprehensive)
        interactive: {
          default: '#1331d2',
          hover: '#0e24a8',
          active: '#0a1a7f',
          disabled: '#d1d5db',
          focus: '#1331d2',
          'focus-ring': 'rgba(19, 49, 210, 0.1)',
          
          // Secondary Interactive States
          'secondary-default': '#6b7280',
          'secondary-hover': '#374151',
          'secondary-active': '#111827',
          'secondary-disabled': '#e5e7eb',
          
          // Subtle Interactive States
          'subtle-default': 'transparent',
          'subtle-hover': '#f3f4f6',
          'subtle-active': '#e5e7eb',
          'subtle-disabled': 'transparent',
          
          // Ghost Interactive States
          'ghost-default': 'transparent',
          'ghost-hover': 'rgba(19, 49, 210, 0.1)',
          'ghost-active': 'rgba(19, 49, 210, 0.2)',
          'ghost-disabled': 'transparent',
        },
        
        // Status Colors with Full State Support
        status: {
          // Success States
          'success-bg': '#f0fdf4',
          'success-bg-hover': '#dcfce7',
          'success-bg-active': '#bbf7d0',
          'success-border': '#22c55e',
          'success-border-hover': '#16a34a',
          'success-border-active': '#15803d',
          'success-text': '#15803d',
          'success-text-light': '#166534',
          
          // Warning States
          'warning-bg': '#fffbeb',
          'warning-bg-hover': '#fef3c7',
          'warning-bg-active': '#fde68a',
          'warning-border': '#f59e0b',
          'warning-border-hover': '#d97706',
          'warning-border-active': '#b45309',
          'warning-text': '#b45309',
          'warning-text-light': '#92400e',
          
          // Error States
          'error-bg': '#fef2f2',
          'error-bg-hover': '#fee2e2',
          'error-bg-active': '#fecaca',
          'error-border': '#ef4444',
          'error-border-hover': '#dc2626',
          'error-border-active': '#b91c1c',
          'error-text': '#b91c1c',
          'error-text-light': '#991b1b',
          
          // Info States
          'info-bg': '#eff6ff',
          'info-bg-hover': '#dbeafe',
          'info-bg-active': '#bfdbfe',
          'info-border': '#3b82f6',
          'info-border-hover': '#2563eb',
          'info-border-active': '#1d4ed8',
          'info-text': '#1d4ed8',
          'info-text-light': '#1e40af',
          
          // Neutral States
          'neutral-bg': '#f9fafb',
          'neutral-bg-hover': '#f3f4f6',
          'neutral-bg-active': '#e5e7eb',
          'neutral-border': '#d1d5db',
          'neutral-border-hover': '#9ca3af',
          'neutral-border-active': '#6b7280',
          'neutral-text': '#374151',
          'neutral-text-light': '#6b7280',
        },
        
        // Component-specific Semantic Colors
        component: {
          // Button Colors
          'button-primary-bg': '#1331d2',
          'button-primary-bg-hover': '#0e24a8',
          'button-primary-bg-active': '#0a1a7f',
          'button-primary-text': '#ffffff',
          'button-primary-border': '#1331d2',
          
          'button-secondary-bg': '#ffffff',
          'button-secondary-bg-hover': '#f9fafb',
          'button-secondary-bg-active': '#f3f4f6',
          'button-secondary-text': '#374151',
          'button-secondary-border': '#d1d5db',
          
          'button-outline-bg': 'transparent',
          'button-outline-bg-hover': '#f0f4ff',
          'button-outline-bg-active': '#e5edff',
          'button-outline-text': '#1331d2',
          'button-outline-border': '#1331d2',
          
          // Form Colors
          'form-bg': '#ffffff',
          'form-bg-disabled': '#f9fafb',
          'form-border': '#d1d5db',
          'form-border-hover': '#9ca3af',
          'form-border-focus': '#1331d2',
          'form-text': '#111827',
          'form-text-placeholder': '#9ca3af',
          'form-text-disabled': '#d1d5db',
          
          // Card Colors
          'card-bg': '#ffffff',
          'card-bg-hover': '#fefefe',
          'card-bg-active': '#fdfdfd',
          'card-border': '#e5e7eb',
          'card-border-hover': '#d1d5db',
          'card-shadow': 'rgba(0, 0, 0, 0.1)',
          
          // Navigation Colors
          'nav-bg': '#ffffff',
          'nav-border': '#e5e7eb',
          'nav-link-text': '#374151',
          'nav-link-text-hover': '#111827',
          'nav-link-text-active': '#1331d2',
          'nav-link-bg-hover': '#f3f4f6',
          'nav-link-bg-active': '#f0f4ff',
          
          // Table Colors
          'table-bg': '#ffffff',
          'table-bg-odd': '#f9fafb',
          'table-bg-hover': '#f3f4f6',
          'table-border': '#e5e7eb',
          'table-header-bg': '#f9fafb',
          'table-header-text': '#374151',
          
          // Modal/Overlay Colors
          'modal-bg': '#ffffff',
          'modal-overlay': 'rgba(0, 0, 0, 0.5)',
          'modal-border': '#e5e7eb',
          
          // Notification Colors
          'notification-bg': '#ffffff',
          'notification-border': '#e5e7eb',
          'notification-shadow': 'rgba(0, 0, 0, 0.15)',
        },
        
        // Accessibility Colors
        accessibility: {
          'focus-visible': '#1331d2',
          'focus-ring': 'rgba(19, 49, 210, 0.2)',
          'high-contrast-text': '#000000',
          'high-contrast-bg': '#ffffff',
          'high-contrast-border': '#000000',
          'skip-link-bg': '#1331d2',
          'skip-link-text': '#ffffff',
        },
        
        // Dark Mode Support (Future)
        dark: {
          'text-primary': '#f9fafb',
          'text-secondary': '#e5e7eb',
          'text-tertiary': '#d1d5db',
          'bg-primary': '#111827',
          'bg-secondary': '#1f2937',
          'bg-tertiary': '#374151',
          'border-primary': '#374151',
          'border-secondary': '#4b5563',
        },
      },

      // ===========================================
      // TYPOGRAPHY TOKENS
      // ===========================================
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Text Sizes (Enhanced Scale)
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0em' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '0em' }],
        
        // Display Sizes (Enhanced)
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.05em' }],
        '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.05em' }],
        '6xl': ['60px', { lineHeight: '64px', letterSpacing: '-0.075em' }],
        '7xl': ['72px', { lineHeight: '76px', letterSpacing: '-0.075em' }],
        '8xl': ['96px', { lineHeight: '100px', letterSpacing: '-0.1em' }],
        '9xl': ['128px', { lineHeight: '132px', letterSpacing: '-0.1em' }],
        
        // Semantic Typography (Enhanced with Responsive Values)
        'display-lg': ['clamp(48px, 5vw, 60px)', { lineHeight: '1.1', letterSpacing: '-0.075em', fontWeight: '700' }],
        'display-md': ['clamp(36px, 4vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '700' }],
        'display-sm': ['clamp(30px, 3.5vw, 36px)', { lineHeight: '1.2', letterSpacing: '-0.05em', fontWeight: '600' }],
        
        'heading-lg': ['clamp(24px, 2.5vw, 30px)', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-md': ['clamp(20px, 2vw, 24px)', { lineHeight: '1.3', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-sm': ['clamp(18px, 1.5vw, 20px)', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        
        'body-lg': ['clamp(16px, 1.2vw, 18px)', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.3', letterSpacing: '0.025em', fontWeight: '400' }],
        
        // Specialized Typography
        'hero-title': ['clamp(32px, 6vw, 72px)', { lineHeight: '1.1', letterSpacing: '-0.075em', fontWeight: '700' }],
        'hero-subtitle': ['clamp(16px, 2vw, 20px)', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        
        'section-title': ['clamp(28px, 4vw, 40px)', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
        'section-subtitle': ['clamp(14px, 1.5vw, 18px)', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        
        'card-title': ['clamp(18px, 1.8vw, 22px)', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '600' }],
        'card-body': ['clamp(13px, 1.2vw, 15px)', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
        
        // Micro Interactions
        'badge': ['11px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'button': ['14px', { lineHeight: '1.2', letterSpacing: '0.025em', fontWeight: '500' }],
        'link': ['14px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '500' }],
      },

      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },

      // ===========================================
      // SPACING TOKENS (8px Grid System)
      // ===========================================
      spacing: {
        'px': '1px',
        '0': '0',
        '0.5': '2px',   // 0.125rem
        '1': '4px',     // 0.25rem
        '1.5': '6px',   // 0.375rem
        '2': '8px',     // 0.5rem - Base unit
        '2.5': '10px',  // 0.625rem
        '3': '12px',    // 0.75rem
        '3.5': '14px',  // 0.875rem
        '4': '16px',    // 1rem
        '5': '20px',    // 1.25rem
        '6': '24px',    // 1.5rem
        '7': '28px',    // 1.75rem
        '8': '32px',    // 2rem
        '9': '36px',    // 2.25rem
        '10': '40px',   // 2.5rem
        '11': '44px',   // 2.75rem
        '12': '48px',   // 3rem
        '14': '56px',   // 3.5rem
        '16': '64px',   // 4rem
        '20': '80px',   // 5rem
        '24': '96px',   // 6rem
        '28': '112px',  // 7rem
        '32': '128px',  // 8rem
        '36': '144px',  // 9rem
        '40': '160px',  // 10rem
        '44': '176px',  // 11rem
        '48': '192px',  // 12rem
        '52': '208px',  // 13rem
        '56': '224px',  // 14rem
        '60': '240px',  // 15rem
        '64': '256px',  // 16rem
        '72': '288px',  // 18rem
        '80': '320px',  // 20rem
        '96': '384px',  // 24rem
      },

      // ===========================================
      // BORDER & RADIUS TOKENS (Angular Design)
      // ===========================================
      borderRadius: {
        'none': '0',
        'sm': '0',
        DEFAULT: '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0'
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },

      // ===========================================
      // SHADOW TOKENS (Enterprise Grade)
      // ===========================================
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        
        // Semantic Shadows
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        'elevation-4': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        'elevation-5': '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
        
        // Focus Shadows
        'focus-primary': '0 0 0 3px rgba(19, 49, 210, 0.1)',
        'focus-error': '0 0 0 3px rgba(239, 68, 68, 0.1)',
        'focus-success': '0 0 0 3px rgba(34, 197, 94, 0.1)',
      },

      // ===========================================
      // ANIMATION & TRANSITION TOKENS
      // ===========================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },

      transitionTimingFunction: {
        'ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },

      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fade-in': 'fadeIn 200ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      // ===========================================
      // LAYOUT TOKENS
      // ===========================================
      maxWidth: {
        'xs': '320px',
        'sm': '384px',
        'md': '448px',
        'lg': '512px',
        'xl': '576px',
        '2xl': '672px',
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
        '6xl': '1152px',
        '7xl': '1280px',
        'full': '100%',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
        'prose': '65ch',
        'container': '1280px',
      },

      // ===========================================
      // Z-INDEX TOKENS
      // ===========================================
      zIndex: {
        'hide': '-1',
        'auto': 'auto',
        'base': '0',
        'docked': '10',
        'dropdown': '1000',
        'sticky': '1100',
        'banner': '1200',
        'overlay': '1300',
        'modal': '1400',
        'popover': '1500',
        'skipLink': '1600',
        'toast': '1700',
        'tooltip': '1800',
      },
    },
  },
  plugins: [],
} 