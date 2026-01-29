# Teatro Al Alba - Sitio Web

Sitio web oficial de **Teatro Al Alba**, grupo de teatro amateur de Getafe (Madrid) fundado en 1982.

## Documentación

Guías detalladas disponibles en [`docs/`](./docs/):

| Guía | Descripción |
|------|-------------|
| [Obras](./docs/obras.md) | Añadir y gestionar obras de teatro |
| [Premios](./docs/premios.md) | Registrar premios y nominaciones |
| [Representaciones](./docs/representaciones.md) | Programar funciones |
| [Imágenes](./docs/imagenes.md) | Gestión de imágenes |
| [Páginas Estáticas](./docs/paginas-estaticas.md) | Editar páginas del sitio |
| [Estilos](./docs/estilos.md) | Personalizar colores y diseño |
| [Configuración](./docs/configuracion.md) | Configuración general |

## Tecnologías

- **[Astro](https://astro.build/)** - Framework web estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos
- **[Docker](https://www.docker.com/)** + **[Traefik](https://traefik.io/)** - Despliegue

## Estructura del Proyecto

```
/
├── public/
│   └── images/           # Imágenes estáticas (galería, hero, etc.)
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── content/          # Contenido en Markdown
│   │   ├── obras/        # Obras de teatro
│   │   ├── premios/      # Premios por obra
│   │   └── representaciones/  # Próximas funciones
│   ├── data/
│   │   └── siteConfig.ts # Configuración general del sitio
│   ├── layouts/          # Plantillas base
│   ├── pages/            # Páginas del sitio
│   └── styles/           # Estilos globales
├── docker-compose.yml    # Despliegue producción
└── docker-compose.local.yml  # Desarrollo local con Docker
```

## Desarrollo Local

### Requisitos
- Node.js 18+
- npm

### Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

---

## Gestión de Contenido

### Añadir una Nueva Obra

Crear archivo en `src/content/obras/nombre-de-la-obra.md`:

```markdown
---
title: "Nombre de la Obra"
author: "Autor Original"              # Opcional
description: "Breve descripción de la obra para mostrar en listados."
year: 2024                            # Opcional - año de estreno
status: "cartelera"                   # "cartelera" o "anterior"
coverImage: "/images/galeria/.../image.jpg"
gallery:                              # Opcional - galería de fotos
  - "/images/galeria/.../foto1.jpg"
  - "/images/galeria/.../foto2.jpg"
youtubeId: "ABC123xyz"                # Opcional - ID del video de YouTube
duration: "1h 30min"                  # Opcional
genre: "Comedia"                      # Opcional
awards:                               # Opcional - lista de premios
  - "Premio Mejor Obra 2024"
order: 1                              # Opcional - orden en listados
---

## Sobre la obra

Contenido extendido en Markdown sobre la obra...

## Ficha técnica

- **Dirección:** Nombre Director
- **Reparto:** Actor 1, Actor 2...
```

**Valores de `status`:**
- `cartelera` → Aparece en la página "Cartelera" (obras actuales)
- `anterior` → Aparece en "Obras anteriores"

---

### Añadir Premios de una Obra

Crear archivo en `src/content/premios/nombre-obra.md`:

```markdown
---
obra: "Nombre de la Obra"
obraSlug: "nombre-de-la-obra"         # Slug para enlazar a la obra
obraImage: "/images/galeria/.../image.jpg"
certamenes:
  - nombre: "NOMBRE DEL CERTAMEN 2024"
    premios:
      - tipo: "premio"                # "premio" o "nominacion"
        categoria: "Mejor obra"
      - tipo: "premio"
        categoria: "Mejor actor principal"
        persona: "Nombre del Actor"   # Opcional
      - tipo: "nominacion"
        categoria: "Mejor dirección"
  - nombre: "OTRO CERTAMEN 2024"
    premios:
      - tipo: "premio"
        categoria: "Mejor montaje"
order: 1                              # Opcional - orden en listados
---
```

---

### Añadir una Representación (Función)

Crear archivo en `src/content/representaciones/YYYY-MM-DD-ciudad.md`:

```markdown
---
date: 2025-03-15                      # Fecha de la función
time: "20:00"                         # Hora
venue: "Teatro Municipal"             # Lugar/sala
city: "Madrid"                        # Ciudad
province: "Madrid"                    # Provincia
obra: "Nombre de la Obra"             # Título de la obra
obraSlug: "nombre-de-la-obra"         # Slug para enlazar
event: "Festival de Teatro 2025"      # Opcional - nombre del evento
image: "/images/galeria/.../image.jpg" # Opcional - cartel
ticketUrl: "https://..."              # Opcional - enlace compra entradas
price: "10€"                          # Opcional - precio
---
```

---

### Modificar Configuración General

Editar `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'Teatro Al Alba',
  description: 'Descripción para SEO...',
  url: 'https://teatroalalba.es',
  email: 'contacto@teatroalalba.es',
  phone: '+34 600 000 000',
  address: {
    street: 'Calle Ejemplo 1',
    postalCode: '28000',
    city: 'Ciudad',
    region: 'Provincia',
    country: 'España'
  },
  foundedYear: 1982,
  founder: 'Nombre Fundador',
  social: {
    facebook: 'https://facebook.com/...',
    instagram: 'https://instagram.com/...',
    tiktok: 'https://tiktok.com/...'
  },
  defaultImage: '/images/og/default.jpg'
};

// Menú de navegación
export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '/quienes-somos' },
  // ...
];
```

---

### Gestión de Imágenes

Las imágenes se almacenan en `public/images/`:

```
public/images/
├── galeria/          # Fotos de obras (organizadas por UUID)
│   └── uuid-xxx/
│       ├── image.jpg           # Original
│       └── l0,t0,.../          # Variantes optimizadas
│           ├── image-320x320.jpg
│           ├── image-375x375.jpg
│           └── image.jpg
├── hero-bg.jpg       # Imagen de fondo hero
└── og/               # Imágenes para redes sociales
```

**Para añadir nuevas imágenes:**
1. Crear carpeta con UUID único en `public/images/galeria/`
2. Colocar la imagen original como `image.jpg`
3. Referenciar en el contenido: `/images/galeria/uuid-xxx/image.jpg`

---

## Despliegue

### Desarrollo Local con Docker

```bash
docker-compose -f docker-compose.local.yml up --build
```

### Producción

El proyecto usa **Traefik** como reverse proxy con SSL automático (Let's Encrypt).

```bash
# Crear red externa (solo primera vez)
docker network create web

# Crear archivo para certificados
touch traefik/acme.json && chmod 600 traefik/acme.json

# Desplegar
docker-compose up -d --build
```

**Configurar dominio:** Editar las labels en `docker-compose.yml` para cambiar el host:
```yaml
- "traefik.http.routers.teatro.rule=Host(`tudominio.com`)"
```

---

## Páginas del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con hero y destacados |
| `/quienes-somos` | Historia y equipo del grupo |
| `/cartelera` | Obras actualmente en cartelera |
| `/obras-anteriores` | Archivo de obras pasadas |
| `/obra/[slug]` | Detalle de cada obra |
| `/representaciones` | Calendario de próximas funciones |
| `/premios` | Galería de premios y reconocimientos |
| `/contacto` | Formulario de contacto |

---

## Licencia

Proyecto privado de Teatro Al Alba.
