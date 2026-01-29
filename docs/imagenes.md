# Gestión de Imágenes

Las imágenes se almacenan en `public/images/` y son accesibles directamente por URL.

## Estructura de Carpetas

```
public/images/
├── galeria/              # Fotos de obras y eventos
│   └── {uuid}/           # Carpeta por imagen (UUID único)
│       ├── image.jpg     # Imagen original
│       └── l0,t0,.../    # Variantes optimizadas (opcional)
│           ├── image-320x320.jpg
│           ├── image-375x375.jpg
│           └── image.jpg
├── hero-bg.jpg           # Imagen de fondo del hero
└── og/                   # Imágenes para redes sociales (Open Graph)
```

## Añadir una Nueva Imagen

### Método Simple

1. Crear carpeta con UUID único en `public/images/galeria/`:
   ```bash
   mkdir public/images/galeria/mi-nueva-imagen
   ```

2. Copiar la imagen como `image.jpg`:
   ```bash
   cp foto.jpg public/images/galeria/mi-nueva-imagen/image.jpg
   ```

3. Referenciar en el contenido:
   ```markdown
   coverImage: "/images/galeria/mi-nueva-imagen/image.jpg"
   ```

### Generar UUID

Puedes usar cualquier identificador único. Opciones:

```bash
# En Linux/Mac
uuidgen | tr '[:upper:]' '[:lower:]'

# Resultado: a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

O simplemente usar nombres descriptivos:
- `obra-la-trampa-2022`
- `cartel-festival-getafe`
- `foto-elenco-2024`

## Formatos Recomendados

| Formato | Uso |
|---------|-----|
| `.jpg` / `.jpeg` | Fotos (mejor compresión) |
| `.png` | Imágenes con transparencia |
| `.webp` | Formato moderno (menor tamaño) |
| `.svg` | Iconos y logos |

## Optimización de Imágenes

### Tamaños Recomendados

| Uso | Tamaño | Proporción |
|-----|--------|------------|
| Portada obra | 800x1200 px | 2:3 (vertical) |
| Galería | 1200x800 px | 3:2 (horizontal) |
| Hero | 1920x1080 px | 16:9 |
| Cartel evento | 600x900 px | 2:3 |
| Thumbnail | 400x400 px | 1:1 |

### Herramientas de Optimización

**Online:**
- [Squoosh](https://squoosh.app/) - Google
- [TinyPNG](https://tinypng.com/)
- [Compressor.io](https://compressor.io/)

**CLI:**
```bash
# Instalar imagemagick
sudo apt install imagemagick

# Redimensionar
convert original.jpg -resize 1200x800 optimizada.jpg

# Comprimir
convert original.jpg -quality 80 comprimida.jpg
```

## Uso en Contenido

### En Obras (Markdown)

```markdown
---
coverImage: "/images/galeria/uuid/image.jpg"
gallery:
  - "/images/galeria/uuid/foto1.jpg"
  - "/images/galeria/uuid/foto2.jpg"
---
```

### En Páginas Astro

```astro
<img
  src="/images/galeria/uuid/image.jpg"
  alt="Descripción de la imagen"
  class="w-full h-auto"
  loading="lazy"
/>
```

### Como Fondo CSS

```astro
<section style="background-image: url('/images/hero-bg.jpg')">
```

## Imágenes para Redes Sociales (Open Graph)

Para que las previsualizaciones en redes sociales se vean bien:

1. Crear imagen de 1200x630 px
2. Guardar en `public/images/og/`
3. Configurar en `siteConfig.ts`:

```typescript
defaultImage: '/images/og/teatro-alalba-og.jpg'
```

## Cambiar Imagen Hero Principal

1. Preparar imagen de al menos 1920x1080 px
2. Guardar como `public/images/hero-bg.jpg`
3. O cambiar la ruta en el componente Hero

## Eliminar Imágenes No Usadas

1. Identificar imágenes huérfanas (no referenciadas)
2. Eliminar la carpeta completa:
   ```bash
   rm -rf public/images/galeria/uuid-no-usado/
   ```

## Buenas Prácticas

1. **Nombres descriptivos**: Aunque uses UUID, puedes añadir contexto
   - `a1b2c3d4-la-trampa-cartel/`

2. **Alt text**: Siempre incluir descripción accesible
   ```html
   <img alt="Escena de La Trampa - Teatro Al Alba" />
   ```

3. **Lazy loading**: Usar en imágenes bajo el fold
   ```html
   <img loading="lazy" />
   ```

4. **Compresión**: Mantener imágenes bajo 500KB cuando sea posible

5. **Backup**: Mantener originales en alta resolución fuera del repo

## Solución de Problemas

### Imagen no se muestra

1. Verificar que la ruta empieza con `/`
2. Comprobar que el archivo existe en `public/images/`
3. Verificar mayúsculas/minúsculas en el nombre

### Imagen muy pesada

1. Redimensionar a tamaño apropiado
2. Comprimir con calidad 80-85%
3. Considerar formato WebP

### Error 404 en imagen

La ruta debe ser relativa a `public/`:
```
Archivo: public/images/galeria/foto.jpg
URL:     /images/galeria/foto.jpg  ✅
URL:     public/images/galeria/foto.jpg  ❌
```
