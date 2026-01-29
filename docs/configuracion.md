# Configuración General del Sitio

La configuración central se encuentra en `src/data/siteConfig.ts`.

## Archivo de Configuración

```typescript
export const siteConfig = {
  // Información básica
  name: 'Teatro Al Alba',
  description: 'Grupo de teatro amateur de Getafe, Madrid...',
  url: 'https://teatroalalba.es',

  // Contacto
  email: 'acalalbateatro@gmail.com',
  phone: '+34 627 502049',

  // Dirección
  address: {
    street: 'C/Pinto 24B',
    postalCode: '28901',
    city: 'Getafe',
    region: 'Madrid',
    country: 'España'
  },

  // Historia
  foundedYear: 1982,
  founder: 'Alberto Garrido Ruiz',

  // Redes sociales
  social: {
    facebook: 'https://www.facebook.com/TeatroAlAlba/',
    instagram: 'https://www.instagram.com/teatroalalba/',
    tiktok: 'https://www.tiktok.com/@teatroalalba'
  },

  // SEO
  defaultImage: '/images/og/teatro-alalba-og.jpg'
};

export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '/quienes-somos' },
  { name: 'Cartelera', href: '/cartelera' },
  { name: 'Representaciones', href: '/representaciones' },
  { name: 'Premios', href: '/premios' },
  { name: 'Obras anteriores', href: '/obras-anteriores' },
  { name: 'Contacto', href: '/contacto' }
];
```

## Campos de Configuración

### Información Básica

| Campo | Descripción |
|-------|-------------|
| `name` | Nombre del grupo (aparece en header, footer, SEO) |
| `description` | Descripción para SEO y redes sociales |
| `url` | URL del sitio en producción |

### Contacto

| Campo | Descripción |
|-------|-------------|
| `email` | Email de contacto |
| `phone` | Teléfono (formato internacional) |

### Dirección

```typescript
address: {
  street: 'Nombre de la calle y número',
  postalCode: 'Código postal',
  city: 'Ciudad',
  region: 'Provincia/Región',
  country: 'País'
}
```

### Redes Sociales

```typescript
social: {
  facebook: 'URL completa del perfil',
  instagram: 'URL completa del perfil',
  tiktok: 'URL completa del perfil',
  // Añadir más redes si es necesario:
  twitter: 'https://twitter.com/...',
  youtube: 'https://youtube.com/...'
}
```

## Modificar Navegación

### Añadir Nueva Página al Menú

```typescript
export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '/quienes-somos' },
  // ... otras páginas ...
  { name: 'Nueva Página', href: '/nueva-pagina' },  // Añadir aquí
  { name: 'Contacto', href: '/contacto' }
];
```

### Eliminar Página del Menú

Simplemente eliminar la línea correspondiente del array.

### Cambiar Orden

Reordenar las líneas en el array.

### Enlaces Externos

```typescript
{ name: 'Blog', href: 'https://blog.ejemplo.com', external: true }
```

(Nota: requiere actualizar el componente Header para manejar `external`)

## Uso en Componentes

### Importar Configuración

```astro
---
import { siteConfig, navigation } from '../data/siteConfig';
---

<p>Email: {siteConfig.email}</p>
<p>Fundado en: {siteConfig.foundedYear}</p>
```

### En el Layout Base

El layout ya importa la configuración para:
- Título del sitio
- Meta descripción
- Open Graph tags
- Datos estructurados (JSON-LD)

## SEO y Meta Tags

### Título de Páginas

Formato: `{Título de Página} | {Nombre del Sitio}`

```astro
<BaseLayout title="Quiénes somos">
<!-- Resultado: Quiénes somos | Teatro Al Alba -->
```

### Descripción

```astro
<BaseLayout
  title="Contacto"
  description="Ponte en contacto con Teatro Al Alba..."
>
```

### Imagen Open Graph

Por defecto usa `siteConfig.defaultImage`. Para personalizar por página:

```astro
<BaseLayout
  title="La Trampa"
  image="/images/galeria/la-trampa/og.jpg"
>
```

## Datos Estructurados

El sitio genera automáticamente JSON-LD para:
- Organización (Theater Group)
- Página web
- Breadcrumbs

Estos datos ayudan a Google a entender el contenido.

## Variables de Entorno

Para datos sensibles (API keys, etc.), usar `.env`:

```bash
# .env
PUBLIC_FORMSPREE_ID=abc123
```

Acceso en Astro:
```astro
---
const formId = import.meta.env.PUBLIC_FORMSPREE_ID;
---
```

## Configuración de Build

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teatroalalba.es',  // URL de producción
  integrations: [sitemap()]
});
```

### Cambiar URL de Producción

1. Actualizar `siteConfig.url`
2. Actualizar `site` en `astro.config.mjs`
3. Actualizar dominio en `docker-compose.yml` (Traefik labels)

## Checklist de Configuración

- [ ] Nombre del grupo correcto
- [ ] Email de contacto actualizado
- [ ] Teléfono correcto
- [ ] Dirección completa
- [ ] URLs de redes sociales válidas
- [ ] Imagen OG subida
- [ ] URL de producción configurada
