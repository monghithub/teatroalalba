# Personalización de Estilos

El sitio usa **Tailwind CSS v4** con un tema personalizado definido en `src/styles/global.css`.

## Paleta de Colores

### Colores Principales

| Color | Variable | Uso |
|-------|----------|-----|
| **Burgundy** | `burgundy-*` | Color principal/acento (botones, enlaces, destacados) |
| **Charcoal** | `charcoal-*` | Textos y fondos oscuros |
| **Cream** | `cream-*` | Fondos claros |

### Escala de Colores

Cada color tiene variantes del 50 (más claro) al 950 (más oscuro):

```css
/* Burgundy - Rojo vino */
--color-burgundy-50: #fdf2f4;   /* Muy claro */
--color-burgundy-100: #fce7eb;
--color-burgundy-200: #f9d0d9;
--color-burgundy-300: #f4a9ba;
--color-burgundy-400: #ec7994;
--color-burgundy-500: #df4d72;
--color-burgundy-600: #c9305a;  /* Principal */
--color-burgundy-700: #a92349;
--color-burgundy-800: #8d2041;
--color-burgundy-900: #781d3b;
--color-burgundy-950: #900C3F;  /* Muy oscuro */
```

## Cambiar Colores

Editar `src/styles/global.css`:

### Cambiar el Color Principal

Para cambiar el burgundy por otro color (ej: azul):

```css
@theme {
  /* Reemplazar toda la escala burgundy */
  --color-burgundy-50: #eff6ff;
  --color-burgundy-100: #dbeafe;
  --color-burgundy-200: #bfdbfe;
  --color-burgundy-300: #93c5fd;
  --color-burgundy-400: #60a5fa;
  --color-burgundy-500: #3b82f6;
  --color-burgundy-600: #2563eb;
  --color-burgundy-700: #1d4ed8;
  --color-burgundy-800: #1e40af;
  --color-burgundy-900: #1e3a8a;
  --color-burgundy-950: #172554;
}
```

### Generar Nueva Paleta

Usar herramientas como:
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

## Tipografía

### Fuentes Actuales

```css
@theme {
  --font-sans: 'Inter', system-ui, sans-serif;      /* Texto general */
  --font-serif: 'Playfair Display', Georgia, serif; /* Títulos */
  --font-display: 'Playfair Display', Georgia, serif;
}
```

### Cambiar Fuentes

1. Añadir la fuente (Google Fonts) en `src/layouts/BaseLayout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=NuevaFuente:wght@400;700&display=swap" rel="stylesheet">
```

2. Actualizar en `global.css`:

```css
@theme {
  --font-sans: 'NuevaFuente', system-ui, sans-serif;
}
```

## Clases de Utilidad Personalizadas

### Hero Overlay

Degradado para secciones hero con imagen de fondo:

```css
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(21, 21, 21, 0.3) 0%,
    rgba(21, 21, 21, 0.6) 100%
  );
}
```

Uso:
```html
<div class="hero-overlay absolute inset-0"></div>
```

### Hover en Imágenes

```css
.img-hover {
  @apply transition-transform duration-500 ease-out;
}
.img-hover:hover {
  @apply scale-105;
}
```

Uso:
```html
<img class="img-hover" src="..." />
```

## Animaciones

### Fade In

```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

### Slide Up

```css
.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
```

### Con Delay

```css
.animate-fade-in-delay-1 { animation-delay: 0.2s; }
.animate-fade-in-delay-2 { animation-delay: 0.4s; }
```

## Estilos Base

```css
@layer base {
  body {
    @apply bg-cream-100 text-charcoal-900 font-sans antialiased;
  }

  h1, h2, h3 {
    @apply font-serif;
  }
}
```

### Cambiar Fondo General

```css
body {
  @apply bg-white text-gray-900;  /* Fondo blanco */
}
```

### Cambiar Fuente de Títulos

```css
h1, h2, h3 {
  @apply font-sans;  /* Usar sans-serif en títulos */
}
```

## Uso de Colores en Componentes

### En Clases de Tailwind

```html
<!-- Texto -->
<p class="text-burgundy-600">Texto en color principal</p>
<p class="text-charcoal-900">Texto oscuro</p>

<!-- Fondos -->
<div class="bg-burgundy-950">Fondo burgundy oscuro</div>
<div class="bg-cream-100">Fondo crema claro</div>

<!-- Bordes -->
<div class="border-burgundy-600">Con borde</div>

<!-- Hover -->
<button class="bg-burgundy-600 hover:bg-burgundy-700">
  Botón
</button>
```

## Responsive Design

Tailwind usa breakpoints móvil-primero:

| Prefijo | Ancho mínimo |
|---------|--------------|
| (ninguno) | 0px (móvil) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

Ejemplo:
```html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Título responsive
</h1>
```

## Debugging

Para ver las clases aplicadas, usar las DevTools del navegador (F12) e inspeccionar elementos.

Para probar cambios rápidamente:
```bash
npm run dev
```

Los cambios en CSS se reflejan automáticamente.
