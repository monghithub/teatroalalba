# Edición de Páginas Estáticas

Las páginas estáticas se encuentran en `src/pages/` y están escritas en formato Astro (`.astro`).

## Páginas Disponibles

| Archivo | URL | Descripción |
|---------|-----|-------------|
| `index.astro` | `/` | Página principal |
| `quienes-somos.astro` | `/quienes-somos` | Historia del grupo |
| `contacto.astro` | `/contacto` | Información de contacto |
| `cartelera.astro` | `/cartelera` | Obras en cartelera |
| `obras-anteriores.astro` | `/obras-anteriores` | Archivo de obras |
| `representaciones.astro` | `/representaciones` | Calendario de funciones |
| `premios.astro` | `/premios` | Galería de premios |

## Estructura de una Página Astro

```astro
---
// Zona de script (JavaScript/TypeScript)
import BaseLayout from '../layouts/BaseLayout.astro';
import { siteConfig } from '../data/siteConfig';
---

<!-- Zona de plantilla (HTML) -->
<BaseLayout title="Título de la Página" description="Descripción para SEO">
  <section class="...">
    <!-- Contenido -->
  </section>
</BaseLayout>
```

## Editar "Quiénes Somos"

Archivo: `src/pages/quienes-somos.astro`

### Cambiar Textos

Buscar las etiquetas `<p>` y `<h2>` para modificar:

```astro
<!-- Historia -->
<p>
  Teatro Al Alba nació en <strong>1982</strong> en Getafe...
</p>

<!-- Filosofía -->
<blockquote class="...">
  "No se trata de contar historias, se trata de formar parte de ellas..."
</blockquote>
```

### Cambiar Imagen

Buscar la etiqueta `<img>` y cambiar el `src`:

```astro
<img
  src="/images/galeria/uuid-nuevo/image.jpg"
  alt="Teatro Al Alba - Historia"
  ...
/>
```

### Datos Dinámicos

Algunos datos vienen de `siteConfig`:
- `{siteConfig.foundedYear}` → Año de fundación
- `{siteConfig.founder}` → Nombre del fundador

Para cambiarlos, editar `src/data/siteConfig.ts`.

## Editar Página de Contacto

Archivo: `src/pages/contacto.astro`

### Información de Contacto

Los datos de contacto vienen de `siteConfig`:
- Email: `{siteConfig.email}`
- Teléfono: `{siteConfig.phone}`
- Dirección: `{siteConfig.address.*}`
- Redes sociales: `{siteConfig.social.*}`

Para cambiarlos, editar `src/data/siteConfig.ts`.

### Formulario de Contacto

El formulario usa Formspree. Para configurarlo:

1. Crear cuenta en [Formspree](https://formspree.io)
2. Crear nuevo formulario
3. Copiar el ID del formulario
4. Reemplazar en el código:

```astro
<form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
```

### Mapa de Google

Para cambiar la ubicación del mapa:

1. Ir a [Google Maps](https://maps.google.com)
2. Buscar la dirección
3. Clic en "Compartir" → "Insertar mapa"
4. Copiar el código del iframe
5. Reemplazar el `src` del iframe existente

```astro
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  ...
></iframe>
```

## Editar Página Principal (Index)

Archivo: `src/pages/index.astro`

### Secciones Típicas

1. **Hero**: Imagen de fondo y texto principal
2. **Obra destacada**: Obra actual en cartelera
3. **Próximas funciones**: Calendario
4. **Sobre nosotros**: Resumen
5. **CTA**: Llamada a la acción

### Cambiar Imagen Hero

Buscar el componente Hero o la sección con imagen de fondo:

```astro
<section style="background-image: url('/images/hero-bg.jpg')">
```

Subir nueva imagen a `public/images/` y actualizar la ruta.

## Componentes Reutilizables

Las páginas usan componentes de `src/components/`:

```
src/components/
├── common/
│   ├── Button.astro      # Botones
│   ├── Card.astro        # Tarjetas
│   └── SectionTitle.astro
├── home/
│   └── Hero.astro        # Hero de inicio
├── layout/
│   ├── Header.astro      # Cabecera
│   └── Footer.astro      # Pie de página
└── obras/
    └── ObraCard.astro    # Tarjeta de obra
```

### Editar Header/Footer

- Header: `src/components/layout/Header.astro`
- Footer: `src/components/layout/Footer.astro`

El menú de navegación se configura en `src/data/siteConfig.ts`:

```typescript
export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '/quienes-somos' },
  // Añadir o modificar aquí
];
```

## Buenas Prácticas

1. **No eliminar clases CSS**: Las clases de Tailwind controlan el diseño
2. **Mantener estructura**: Respetar la jerarquía de secciones
3. **Probar en desarrollo**: Usar `npm run dev` para ver cambios en tiempo real
4. **SEO**: Actualizar `title` y `description` en cada página
