import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary',
  large = false, 
  className = '', 
  ...props 
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = large ? 'large' : '';

  return (
    <button 
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()} 
      {...props}
    >
      {children}
    </button>
  );
}