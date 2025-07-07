# Componentes de Botones GS (GrowSimple)

Esta carpeta contiene componentes de botones reutilizables para el proyecto GrowSimple, diseñados para mantener consistencia en la interfaz y reducir la duplicación de código.

## Componentes Disponibles

### GSButtonPrimary
Botón principal con gradiente verde y estilo destacado.

**Props:**
- `children`: ReactNode
- `startIcon`: ReactNode (opcional)
- `endIcon`: ReactNode (opcional)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)
- `to`: string (opcional, para navegación)

**Ejemplo:**
```tsx
<GSButtonPrimary startIcon={<AddIcon />} size="large">
  Add New Project
</GSButtonPrimary>
```

### GSButtonView
Botón de vista con fondo amarillo claro.

**Props:**
- `children`: ReactNode
- `startIcon`: ReactNode (opcional)
- `endIcon`: ReactNode (opcional)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')

**Ejemplo:**
```tsx
<GSButtonView startIcon={<GridViewIcon />}>
  Grid View
</GSButtonView>
```

### GSButtonSecondary
Botón secundario con fondo gris.

**Props:**
- `children`: ReactNode
- `startIcon`: ReactNode (opcional)
- `endIcon`: ReactNode (opcional)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')

**Ejemplo:**
```tsx
<GSButtonSecondary>
  All Campaign
</GSButtonSecondary>
```

### GSButtonAction
Botón de acción versátil con variantes contained y outlined.

**Props:**
- `children`: ReactNode
- `startIcon`: ReactNode (opcional)
- `endIcon`: ReactNode (opcional)
- `variant`: 'contained' | 'outlined' (default: 'contained')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)

**Ejemplo:**
```tsx
<GSButtonAction variant="contained" startIcon={<SaveIcon />} fullWidth>
  Save Project
</GSButtonAction>

<GSButtonAction variant="outlined" sx={{ float: 'right' }}>
  Enhance
</GSButtonAction>
```

### GSButtonIcon
Botón de icono para acciones compactas.

**Props:**
- `children`: ReactNode
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `color`: 'primary' | 'secondary' | 'default' (default: 'default')

**Ejemplo:**
```tsx
<GSButtonIcon size="small" color="primary">
  <EditIcon />
</GSButtonIcon>
```

### GSButtonLink
Botón que actúa como enlace con estilo de texto.

**Props:**
- `children`: ReactNode
- `startIcon`: ReactNode (opcional)
- `endIcon`: ReactNode (opcional)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `color`: 'primary' | 'secondary' | 'muted' (default: 'primary')

**Ejemplo:**
```tsx
<GSButtonLink startIcon={<LinkIcon />} color="muted">
  View Details
</GSButtonLink>
```

## Uso

Importa los componentes desde el archivo de índice:

```tsx
import { 
  GSButtonPrimary, 
  GSButtonView, 
  GSButtonSecondary, 
  GSButtonAction, 
  GSButtonIcon, 
  GSButtonLink 
} from '../../shared/components/inputs';
```

## Tamaños Disponibles

Todos los componentes de botón soportan tres tamaños:

- **small**: px: 2, py: 0.75, fontSize: '0.875rem'
- **medium**: px: 2.5, py: 1, fontSize: '1rem' (default)
- **large**: px: 3, py: 1.25, fontSize: '1.1rem'

## Colores y Estilos

### GSButtonPrimary
- **Fondo**: Gradiente verde `linear-gradient(90deg, #83F888 0%, #3CB5B9 100%)`
- **Texto**: Blanco
- **Hover**: Opacidad 0.95

### GSButtonView
- **Fondo**: Amarillo claro `#FFF8E1`
- **Texto**: `#23283A`
- **Hover**: `#FFF3C0`

### GSButtonSecondary
- **Fondo**: Gris claro `#F1F5F9`
- **Texto**: `#23283A`
- **Hover**: `#E2E8F0`

### GSButtonAction
- **Contained**: Mismo gradiente que Primary
- **Outlined**: Borde gris con hover suave

## Beneficios

1. **Consistencia**: Todos los botones mantienen el mismo estilo visual
2. **Mantenibilidad**: Cambios de estilo centralizados
3. **Reutilización**: Reduce la duplicación de código
4. **Tipado**: TypeScript completo para mejor desarrollo
5. **Flexibilidad**: Permite personalización mediante props `sx`
6. **Accesibilidad**: Mantiene las propiedades de accesibilidad de Material-UI 