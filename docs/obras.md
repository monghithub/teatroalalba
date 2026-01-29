# Gestión de Obras de Teatro

Las obras de teatro se gestionan mediante archivos Markdown en la carpeta `src/content/obras/`.

## Crear una Nueva Obra

1. Crear un archivo en `src/content/obras/` con el nombre en formato slug:
   - Ejemplo: `mi-nueva-obra.md`
   - Usar minúsculas, sin acentos, guiones en lugar de espacios

2. Añadir el contenido con el siguiente formato:

```markdown
---
title: "Nombre de la Obra"
author: "Autor Original"
description: "Breve descripción de la obra (aparece en listados y SEO)."
year: 2024
status: "cartelera"
coverImage: "/images/galeria/uuid-de-carpeta/image.jpg"
gallery:
  - "/images/galeria/uuid/foto1.jpg"
  - "/images/galeria/uuid/foto2.jpg"
  - "/images/galeria/uuid/foto3.jpg"
youtubeId: "dQw4w9WgXcQ"
duration: "1h 30min"
genre: "Comedia"
awards:
  - "Premio Mejor Obra - Certamen X 2024"
  - "Premio Mejor Actor - Festival Y 2024"
order: 1
---

## Sobre la obra

Aquí va el contenido extendido sobre la obra. Puedes usar **Markdown** completo:

- Listas
- **Negritas**
- *Cursivas*
- [Enlaces](https://ejemplo.com)

## Sinopsis

Descripción detallada de la trama...

## Ficha técnica

| Rol | Persona |
|-----|---------|
| **Dirección** | Nombre del Director |
| **Reparto** | Actor 1, Actor 2, Actor 3 |
| **Escenografía** | Nombre |
| **Vestuario** | Nombre |
| **Iluminación** | Nombre |

## Galería

Las imágenes de la galería se mostrarán automáticamente si están definidas en el frontmatter.
```

## Campos del Frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `title` | string | ✅ | Nombre de la obra |
| `description` | string | ✅ | Descripción breve para listados y SEO |
| `status` | string | ✅ | `"cartelera"` o `"anterior"` |
| `coverImage` | string | ✅ | Ruta a la imagen de portada |
| `author` | string | ❌ | Autor original de la obra |
| `year` | number | ❌ | Año de estreno |
| `gallery` | string[] | ❌ | Array de rutas a imágenes |
| `youtubeId` | string | ❌ | ID del video de YouTube (no URL completa) |
| `duration` | string | ❌ | Duración de la obra |
| `genre` | string | ❌ | Género (Comedia, Drama, etc.) |
| `awards` | string[] | ❌ | Lista de premios recibidos |
| `order` | number | ❌ | Orden en listados (menor = primero) |

## Valores de Status

- **`cartelera`**: La obra aparece en la página "Cartelera" como obra actual en repertorio
- **`anterior`**: La obra aparece en "Obras anteriores" como parte del archivo histórico

## Ejemplo Real

```markdown
---
title: "La Trampa"
author: "Robert Thomas"
description: "Un thriller psicológico lleno de giros inesperados que mantendrá al público en vilo hasta el último momento."
year: 2022
status: "anterior"
coverImage: "/images/galeria/23b40218-6e2a-48bd-9cd1-d174ac9b6acf/image.jpg"
gallery:
  - "/images/galeria/23b40218-6e2a-48bd-9cd1-d174ac9b6acf/l0,t0,w1290,h1782/image.jpg"
youtubeId: "ABC123xyz"
duration: "1h 45min"
genre: "Thriller"
awards:
  - "Premio Mejor Montaje - Certamen de Albox 2022"
  - "Premio Mejor Actor - Muestra de Parla 2022"
order: 2
---

## Sobre la obra

"La Trampa" es una de las obras más aclamadas de nuestro repertorio...
```

## Modificar una Obra Existente

1. Abrir el archivo correspondiente en `src/content/obras/`
2. Editar los campos del frontmatter o el contenido Markdown
3. Guardar y el sitio se actualizará automáticamente (en desarrollo) o tras rebuild (en producción)

## Eliminar una Obra

1. Eliminar el archivo `.md` de `src/content/obras/`
2. Opcionalmente, eliminar las imágenes asociadas de `public/images/galeria/`

## Cambiar una Obra de Cartelera a Anterior

Simplemente cambiar el campo `status`:

```markdown
# De cartelera activa
status: "cartelera"

# A obra anterior
status: "anterior"
```
