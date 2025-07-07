import type { CSSProperties } from 'react';

interface GSIconBaseProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  sx?: CSSProperties;
  filter?: string;
  color?: string;
}

// Función para generar filtro CSS basado en color hexadecimal
function hexToFilter(hexColor: string): string {
  // Convertir hex a RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calcular filtros CSS (aproximación)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const saturation = Math.max(r, g, b) - Math.min(r, g, b);
  
  // Para colores oscuros, usar filtro más simple
  if (brightness < 128) {
    return `brightness(0) saturate(100%) invert(${brightness / 255 * 100}%)`;
  }
  
  // Para colores claros, usar filtro más complejo
  return `brightness(0) saturate(100%) invert(${brightness / 255 * 100}%) sepia(${saturation / 255 * 100}%) saturate(1000%) hue-rotate(${Math.atan2(b - g, r - g) * 180 / Math.PI}deg)`;
}

export default function GSIconBase({ 
  src, 
  alt, 
  size = 'medium', 
  sx = {}, 
  filter,
  color = '#23283A' // Color por defecto más oscuro
}: GSIconBaseProps) {
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: 18, height: 18 };
      case 'large':
        return { width: 32, height: 32 };
      default:
        return { width: 22, height: 22 };
    }
  };

  // Usar el filtro proporcionado o generar uno basado en el color
  const finalFilter = filter || hexToFilter(color);

  return (
    <img 
      src={src} 
      alt={alt} 
      width={getSize().width} 
      height={getSize().height}
      style={{ filter: finalFilter, ...sx }}
    />
  );
} 