import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary',
  large = false, 
  className = '', 
  href, // 👈 Nova prop
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props 
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = large ? 'large' : '';
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  // Se tiver a prop href, renderiza como link <a>
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target={target} 
        rel={rel} 
        {...props}
      >
        {children}
      </a>
    );
  }

  // Caso contrário, renderiza como <button>
  return (
    <button 
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
}