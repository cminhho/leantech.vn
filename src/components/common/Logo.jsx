import React from 'react';

const Logo = ({ 
  size = 'md', 
  variant = 'default', 
  className = '',
  showText = true,
  iconOnly = false,
  style = {}
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8', 
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
    '2xl': 'h-20 w-20'
  };

  const textSizeClasses = {
    xs: 'text-sm',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl',
    '2xl': 'text-4xl'
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'white':
        return {
          text: 'text-white',
          accent: 'text-secondary'
        };
      case 'dark':
        return {
          text: 'text-gray-900',
          accent: 'text-primary'
        };
      case 'light':
        return {
          text: 'text-gray-600',
          accent: 'text-primary'
        };
      default:
        return {
          text: 'text-white',
          accent: 'text-secondary'
        };
    }
  };

  const colors = getColorClasses();

  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`} style={style}>
        <img 
          src="/assets/images/logo-icon.svg" 
          alt="LeanTechCo Logo" 
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`} style={style}>
      <img 
        src="/assets/images/logo-icon.svg" 
        alt="LeanTechCo Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold`}>
          <span className={colors.text}>lean</span>
          <span className={colors.text}>tech</span>
          <span className={colors.accent}>co.</span>
        </span>
      )}
    </div>
  );
};

export default Logo; 