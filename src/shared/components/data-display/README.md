# Componentes de Texto GS (GrowSimple)

Esta carpeta contiene componentes de texto reutilizables para el proyecto GrowSimple, diseñados para mantener consistencia en la tipografía y reducir la duplicación de código.

## Componentes Disponibles

### GSTextHeading
Componente para títulos principales con diferentes variantes de encabezado.

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' (default: 'h3')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextHeading variant="h4">Mi Título Principal</GSTextHeading>
```

### GSTextSection
Componente para títulos de sección con fontWeight 700.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextSection size="large">Título de Sección</GSTextSection>
```

### GSTextDescription
Componente para texto descriptivo con color #94A3B8.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextDescription size="large">Texto descriptivo largo</GSTextDescription>
```

### GSTextBody
Componente para texto de cuerpo con diferentes tamaños y colores.

**Props:**
- `size`: 'xs' | 'small' | 'medium' | 'large' (default: 'medium')
- `color`: 'primary' | 'secondary' | 'muted' (default: 'primary')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextBody size="medium" color="muted">Texto de cuerpo</GSTextBody>
```

### GSTextStats
Componente para texto de estadísticas con fontWeight 700.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextStats size="medium">123</GSTextStats>
```

### GSTextDate
Componente para texto de fechas con color #94A3B8.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextDate size="medium">05/15 - 05/15</GSTextDate>
```

### GSTextUser
Componente para nombres de usuario con fontWeight 700.

**Props:**
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `children`: ReactNode
- `sx`: SxProps (opcional)

**Ejemplo:**
```tsx
<GSTextUser size="medium">Kris Land</GSTextUser>
```

## Uso

Importa los componentes desde el archivo de índice:

```tsx
import { 
  GSTextHeading, 
  GSTextSection, 
  GSTextDescription, 
  GSTextBody, 
  GSTextStats, 
  GSTextDate, 
  GSTextUser 
} from '../../shared/components/data-display';
```

## Beneficios

1. **Consistencia**: Todos los textos mantienen el mismo estilo visual
2. **Mantenibilidad**: Cambios de estilo centralizados
3. **Reutilización**: Reduce la duplicación de código
4. **Tipado**: TypeScript completo para mejor desarrollo
5. **Flexibilidad**: Permite personalización mediante props `sx`

## Colores Estándar

- **Primary**: #23283A (texto principal)
- **Secondary**: #64748B (texto secundario)
- **Muted**: #94A3B8 (texto descriptivo/fechas) 