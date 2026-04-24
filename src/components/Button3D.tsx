import { ComponentPropsWithoutRef, Ref } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type Button3DProps = ComponentPropsWithoutRef<'button'> & {
  /**
   * Defines the visual style of the custom 3D button.
   */
  variant?: ButtonVariant;
  fullWidth?: boolean;
  /* React 19 pattern: Treat ref as a normal prop */
  ref?: Ref<HTMLButtonElement>;
};

/**
 * 3D-styled geometric button applying robust Box Shadows instead of standard borders.
 * Built for high-conversion and game-like "playful" UI aesthetics.
 */
export function Button3D({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ref, 
  ...props 
}: Button3DProps) {
  
  // Core structural classes for the 3D shape and active (pushed) interaction
  const baseClasses = "relative select-none font-bold uppercase tracking-widest rounded-2xl px-6 py-3 transition-all active:translate-y-[2px] active:shadow-none outline-none";
  const widthClasses = fullWidth ? "w-full" : "";

  // Theming configuration
  const variants = {
    primary: "bg-[#58cc02] text-white hover:bg-[#46a302] shadow-[0_4px_0_0_#58a700]",
    secondary: "bg-[#1cb0f6] text-white hover:bg-[#1899d6] shadow-[0_4px_0_0_#1899d6]",
    outline: "bg-white text-[#1cb0f6] border-2 border-[#e5e5e5] hover:bg-gray-50 shadow-[0_4px_0_0_#e5e5e5]",
  };

  const variantClasses = variants[variant];

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${widthClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
