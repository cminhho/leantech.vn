import React from 'react';

const Logo = ({ 
  size = 'md', 
  variant = 'default', 
  className = '',
  showText = true,
  iconOnly = false,
  style = {},
  clickable = true
}) => {
  const sizeClasses = {
    micro: 'h-3 w-3',
    xs: 'h-4 w-4',
    sm: 'h-5 w-5', 
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
    '3xl': 'h-12 w-12',
    '4xl': 'h-16 w-16',
    '5xl': 'h-20 w-20',
    '6xl': 'h-24 w-24'
  };

  // Typography system following design tokens
  const textSizeClasses = {
    micro: 'caption font-semibold',
    xs: 'body-sm font-semibold',
    sm: 'body-md font-display',
    md: 'body-lg font-display',
    lg: 'heading-sm font-display', 
    xl: 'heading-md font-display',
    '2xl': 'heading-lg font-display',
    '3xl': 'display-sm font-display',
    '4xl': 'display-md font-display',
    '5xl': 'display-lg font-display',
    '6xl': 'display-lg font-display'
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'white':
        return {
          primary: 'text-white',
          accent: 'text-secondary',
          hover: 'group-hover:text-secondary/90'
        };
      case 'dark':
        return {
          primary: 'text-gray-900',
          accent: 'text-secondary',
          hover: 'group-hover:text-primary'
        };
      case 'light':
        return {
          primary: 'text-gray-600',
          accent: 'text-secondary',
          hover: 'group-hover:text-primary'
        };
      case 'primary':
        return {
          primary: 'text-primary',
          accent: 'text-secondary',
          hover: 'group-hover:text-primary/80'
        };
      default:
        return {
          primary: 'text-white',
          accent: 'text-secondary',
          hover: 'group-hover:text-secondary/90'
        };
    }
  };

  const colors = getColorClasses();

  // Enhanced interaction states for better UX
  const interactionClasses = clickable 
    ? 'group cursor-pointer transition-all duration-normal hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20' 
    : '';

  if (iconOnly) {
    return (
      <div 
        className={`flex items-center ${interactionClasses} ${className}`} 
        style={{...style, borderRadius: 0}}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/assets/images/logo-icon.svg`}
          alt="LeanTechCo - Đối tác chuyển đổi số toàn diện" 
          className={`${sizeClasses[size]} object-contain transition-all duration-normal ${clickable ? 'group-hover:scale-110' : ''}`}
        />
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center gap-2 ${interactionClasses} ${className}`} 
      style={{...style, borderRadius: 0}}
    >
      <img 
        src={`${process.env.PUBLIC_URL}/assets/images/logo-icon.svg`}
        alt="LeanTechCo Logo" 
        className={`${sizeClasses[size]} object-contain transition-all duration-normal ${clickable ? 'group-hover:scale-110' : ''}`}
      />
      {showText && (
        <div className={`${textSizeClasses[size]} transition-all duration-normal`}>
          <span className={`${colors.primary} transition-colors duration-normal font-bold tracking-tight`}>lean</span>
          <span className={`${colors.primary} transition-colors duration-normal font-bold tracking-tight`}>tech</span>
          <span className={`${colors.accent} transition-colors duration-normal ${colors.hover} font-bold tracking-normal`}>co.</span>
        </div>
      )}
    </div>
  );
};

export default Logo; 