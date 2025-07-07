# Sistema de Iconos GS (GrowSimple)

Este directorio contiene todos los iconos organizados del proyecto, siguiendo la convención `GSIconNombre`.

## Estructura

```
icons/
├── mui/           # Iconos de Material-UI
├── custom/        # Iconos SVG personalizados
├── index.ts       # Exportaciones centralizadas
└── README.md      # Esta documentación
```

## Iconos de Material-UI

Los iconos de Material-UI están envueltos en componentes personalizados que proporcionan:
- **Tamaños consistentes**: `small` (18px), `medium` (24px), `large` (28px)
- **Props extendidas**: Todas las props de `SvgIconProps` de MUI
- **Nomenclatura consistente**: `GSIconNombre`

### Uso

```tsx
import { GSIconAdd, GSIconSave, GSIconCalendar } from '@components/icons';

// Uso básico
<GSIconAdd />

// Con tamaño personalizado
<GSIconSave size="large" />

// Con props adicionales de MUI
<GSIconCalendar size="small" color="primary" />
```

### Iconos disponibles

- `GSIconList` - Lista (ViewList)
- `GSIconGridView` - Vista de cuadrícula (GridView)
- `GSIconAdd` - Agregar (Add)
- `GSIconAddBox` - Agregar caja (AddBoxOutlined)
- `GSIconRocket` - Cohete (RocketLaunch)
- `GSIconTrendingUp` - Tendencia ascendente (TrendingUp)
- `GSIconCheckCircle` - Círculo de verificación (CheckCircle)
- `GSIconCalendar` - Calendario (CalendarToday)
- `GSIconNotifications` - Notificaciones (Notifications)
- `GSIconAssignment` - Asignación (Assignment)
- `GSIconDescription` - Descripción (Description)
- `GSIconFolder` - Carpeta (FolderOpen)
- `GSIconSave` - Guardar (Save)

## Iconos SVG Personalizados

Los iconos SVG personalizados están organizados en componentes que proporcionan:
- **Tamaños consistentes**: `small` (18px), `medium` (22px), `large` (32px)
- **Filtros CSS**: Para cambiar colores dinámicamente
- **Props de estilo**: Compatibles con el sistema de estilos de MUI

### Uso

```tsx
import { GSIconProjects, GSIconDashboard } from '@components/icons';

// Uso básico
<GSIconProjects />

// Con tamaño personalizado
<GSIconDashboard size="large" />

// Con filtro de color personalizado
<GSIconProjects filter="brightness(0) saturate(100%) invert(100%)" />

// Con estilos adicionales
<GSIconProjects sx={{ marginRight: 1 }} />
```

### Iconos disponibles

- `GSIconDashboard` - Dashboard
- `GSIconProjects` - Proyectos
- `GSIconResearch` - Investigación
- `GSIconPlan` - Planificación
- `GSIconCampaigns` - Campañas
- `GSIconProduction` - Producción
- `GSIconAnalytics` - Analytics
- `GSIconIntegrations` - Integraciones
- `GSIconTeams` - Equipos
- `GSIconTemplates` - Plantillas
- `GSIconSchedule` - Programación
- `GSIconBrand` - Marca
- `GSIconBanner` - Banner de estadísticas
- `GSIconRocketCustom` - Cohete personalizado
- `GSIconProplanCollapse` - Colapso de Proplan

## Importación

### Importación individual
```tsx
import { GSIconAdd, GSIconProjects } from '@components/icons';
```

### Importación completa (no recomendado para performance)
```tsx
import * as Icons from '@components/icons';
```

## Filtros CSS Predefinidos

Los iconos SVG personalizados incluyen filtros CSS predefinidos para cambiar colores:

### Filtro por defecto (gris oscuro)
```css
brightness(0) saturate(100%) invert(6%) sepia(6%) saturate(1034%) hue-rotate(200deg) brightness(95%) contrast(95%)
```

### Filtro para gris claro
```css
brightness(0) saturate(100%) invert(8%) sepia(8%) saturate(1034%) hue-rotate(200deg) brightness(95%) contrast(95%)
```

### Filtro para blanco
```css
brightness(0) saturate(100%) invert(100%)
```

## Migración

Para migrar de imports directos a este sistema:

### Antes
```tsx
import AddIcon from '@mui/icons-material/Add';
import ProjectsIcon from '../../assets/svg/projects-ico.svg';

<AddIcon />
<img src={ProjectsIcon} alt="Projects" />
```

### Después
```tsx
import { GSIconAdd, GSIconProjects } from '@components/icons';

<GSIconAdd />
<GSIconProjects />
```

## Beneficios

1. **Consistencia**: Tamaños y estilos uniformes
2. **Mantenibilidad**: Cambios centralizados
3. **TypeScript**: Tipado completo
4. **Performance**: Imports optimizados
5. **Flexibilidad**: Props extendidas disponibles
6. **Organización**: Estructura clara y escalable 