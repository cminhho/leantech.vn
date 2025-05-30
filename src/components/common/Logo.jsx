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

  const textSizeClasses = {
    micro: 'text-xs',
    xs: 'text-sm',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl',
    '4xl': 'text-6xl',
    '5xl': 'text-7xl',
    '6xl': 'text-8xl'
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

  if (iconOnly) {
    return (
      <div className={`flex items-center ${clickable ? 'group cursor-pointer' : ''} ${className}`} style={style}>
        <img 
          src="/assets/images/logo-icon.svg" 
          alt="LeanTechCo Logo" 
          className={`${sizeClasses[size]} object-contain transition-all duration-300 ${clickable ? 'group-hover:scale-110' : ''}`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${clickable ? 'group cursor-pointer' : ''} ${className}`} style={style}>
      <img 
        src="/assets/images/logo-icon.svg" 
        alt="LeanTechCo Logo" 
        className={`${sizeClasses[size]} object-contain transition-all duration-300 ${clickable ? 'group-hover:scale-110' : ''}`}
      />
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold tracking-tight transition-all duration-300`}>
          <span className={`${colors.primary} transition-colors duration-300`}>lean</span>
          <span className={`${colors.primary} transition-colors duration-300`}>tech</span>
          <span className={`${colors.accent} transition-colors duration-300 ${colors.hover}`}>co.</span>
        </span>
      )}
    </div>
  );
};

export default Logo; 