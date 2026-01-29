# Gestión de Premios

Los premios se organizan por obra y se gestionan en `src/content/premios/`.

## Estructura

Cada archivo representa los premios de una obra específica, agrupados por certamen/festival.

## Crear Registro de Premios para una Obra

1. Crear archivo en `src/content/premios/nombre-obra.md`
2. Usar el siguiente formato:

```markdown
---
obra: "Nombre de la Obra"
obraSlug: "nombre-de-la-obra"
obraImage: "/images/galeria/uuid/image.jpg"
certamenes:
  - nombre: "NOMBRE DEL CERTAMEN 2024"
    premios:
      - tipo: "premio"
        categoria: "Mejor obra"
      - tipo: "premio"
        categoria: "Mejor actor principal"
        persona: "Nombre del Actor"
      - tipo: "nominacion"
        categoria: "Mejor dirección"
  - nombre: "OTRO FESTIVAL 2024"
    premios:
      - tipo: "premio"
        categoria: "Mejor montaje"
order: 1
---
```

## Campos del Frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `obra` | string | ✅ | Nombre completo de la obra |
| `obraSlug` | string | ✅ | Slug de la obra (para enlazar) |
| `obraImage` | string | ✅ | Imagen representativa |
| `certamenes` | array | ✅ | Lista de certámenes |
| `order` | number | ❌ | Orden en la página de premios |

### Estructura de Certamen

```yaml
certamenes:
  - nombre: "Nombre del Certamen/Festival"
    premios:
      - tipo: "premio"        # o "nominacion"
        categoria: "Categoría del premio"
        persona: "Nombre"     # Opcional - para premios individuales
```

### Tipos de Premio

- **`premio`**: Premio ganado (se muestra con icono de trofeo)
- **`nominacion`**: Nominación (se muestra con icono diferente)

## Ejemplo Completo

```markdown
---
obra: "La Trampa"
obraSlug: "la-trampa"
obraImage: "/images/galeria/23b40218-6e2a-48bd-9cd1-d174ac9b6acf/image.jpg"
certamenes:
  - nombre: "51 EDICIÓN CERTAMEN DE TEATRO DE ALBOX (ALMERÍA)"
    premios:
      - tipo: "premio"
        categoria: "Mejor montaje"
  - nombre: "MUESTRA DE TEATRO DE PARLA 2022"
    premios:
      - tipo: "premio"
        categoria: "Mejor puesta en escena"
      - tipo: "premio"
        categoria: "Mejor espacio sonoro"
      - tipo: "premio"
        categoria: "Mejor actor principal"
        persona: "Felipe del Cerro"
      - tipo: "premio"
        categoria: "Mejor actriz secundaria"
        persona: "Petri Calle"
  - nombre: "XII CERTAMEN ATENEA LORANCA (FUENLABRADA)"
    premios:
      - tipo: "premio"
        categoria: "Mejor obra"
      - tipo: "premio"
        categoria: "Mejor actor principal"
        persona: "Felipe del Cerro"
  - nombre: "XVII CERTAMEN LAGASCA 2024 (ÁVILA)"
    premios:
      - tipo: "nominacion"
        categoria: "Mejor actriz de reparto"
        persona: "Petri Calle"
      - tipo: "nominacion"
        categoria: "Mejor actor principal"
        persona: "Felipe del Cerro"
      - tipo: "nominacion"
        categoria: "Mejor obra"
order: 2
---
```

## Añadir Premios a una Obra Existente

1. Abrir el archivo de premios de la obra
2. Añadir un nuevo certamen al array `certamenes`:

```yaml
certamenes:
  # ... certámenes existentes ...
  - nombre: "NUEVO CERTAMEN 2025"
    premios:
      - tipo: "premio"
        categoria: "Categoría ganada"
```

## Añadir Premio Individual

Para premios a actores/técnicos específicos, incluir el campo `persona`:

```yaml
- tipo: "premio"
  categoria: "Mejor actor secundario"
  persona: "Javier Garrido"
```

## Buenas Prácticas

1. **Nombres de certámenes**: Usar mayúsculas y incluir año y ubicación
2. **Orden de certámenes**: Del más reciente al más antiguo, o por importancia
3. **Consistencia**: Usar los mismos nombres de categorías cuando se repitan
4. **Vincular obra**: Asegurarse de que `obraSlug` coincida con el nombre del archivo en `src/content/obras/`
