# Imágenes del Proyecto

Esta carpeta contiene todas las imágenes utilizadas en la aplicación GrowSimple.

## Estructura recomendada:

```
images/
├── logo.png              # Logo principal de la aplicación
├── icons/                # Iconos personalizados
├── backgrounds/          # Imágenes de fondo
├── avatars/             # Imágenes de perfil de usuarios
└── content/             # Imágenes de contenido
```

## Formatos soportados:

- **PNG**: Para logos, iconos y imágenes con transparencia
- **JPG/JPEG**: Para fotografías e imágenes sin transparencia
- **SVG**: Para iconos vectoriales y logos escalables
- **WebP**: Para mejor compresión (soporte moderno)

## Tamaños recomendados:

### Logo:
- **Ancho máximo**: 180px
- **Alto máximo**: 50px
- **Formato**: PNG con transparencia

### Iconos:
- **Tamaño**: 24x24px o 32x32px
- **Formato**: SVG o PNG

### Imágenes de fondo:
- **Resolución**: Mínimo 1920x1080px
- **Formato**: JPG o WebP

## Cómo usar las imágenes:

### En componentes React:
```tsx
// Importación directa
import logo from '../../assets/images/logo.png';

// Uso en JSX
<img src={logo} alt="Logo" />

// O usando la ruta pública
<img src="/src/assets/images/logo.png" alt="Logo" />
```

### En CSS:
```css
.logo {
  background-image: url('/src/assets/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

## Optimización:

1. **Comprime las imágenes** antes de subirlas
2. **Usa formatos apropiados** para cada tipo de imagen
3. **Considera usar WebP** para mejor rendimiento
4. **Mantén nombres descriptivos** para las imágenes 