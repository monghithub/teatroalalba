# Gestión de Representaciones

Las representaciones (funciones programadas) se gestionan en `src/content/representaciones/`.

## Nomenclatura de Archivos

Usar el formato: `YYYY-MM-DD-ciudad.md`

Ejemplos:
- `2025-03-15-madrid.md`
- `2025-04-20-getafe.md`
- `2025-05-10-fuenlabrada.md`

## Crear una Nueva Representación

```markdown
---
date: 2025-03-15
time: "20:00"
venue: "Teatro Municipal"
city: "Madrid"
province: "Madrid"
obra: "La Boda de los pequeños burgueses"
obraSlug: "la-boda-de-los-pequenos-burgueses"
event: "Festival de Teatro Amateur 2025"
image: "/images/galeria/uuid/image.jpg"
ticketUrl: "https://entradas.ejemplo.com/evento123"
price: "10€"
---
```

## Campos del Frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `date` | date | ✅ | Fecha de la función (YYYY-MM-DD) |
| `time` | string | ✅ | Hora de inicio ("HH:MM") |
| `venue` | string | ✅ | Nombre del teatro/sala |
| `city` | string | ✅ | Ciudad |
| `province` | string | ✅ | Provincia |
| `obra` | string | ✅ | Nombre de la obra |
| `obraSlug` | string | ✅ | Slug de la obra (para enlazar) |
| `event` | string | ❌ | Nombre del festival/evento |
| `image` | string | ❌ | Cartel o imagen del evento |
| `ticketUrl` | string | ❌ | URL para comprar entradas |
| `price` | string | ❌ | Precio de las entradas |

## Ejemplos

### Representación Básica

```markdown
---
date: 2025-10-04
time: "18:30"
venue: "C.C. El Bercial"
city: "Getafe"
province: "Madrid"
obra: "La Boda de los pequeños burgueses"
obraSlug: "la-boda-de-los-pequenos-burgueses"
---
```

### Representación en Festival

```markdown
---
date: 2025-11-22
time: "20:00"
venue: "Teatro Tomás y Valiente"
city: "Fuenlabrada"
province: "Madrid"
obra: "La Boda de los pequeños burgueses"
obraSlug: "la-boda-de-los-pequenos-burgueses"
event: "XII Certamen Atenea Loranca"
image: "/images/galeria/cc968a55-9fd9-403a-8184-366d37420026/image.jpg"
ticketUrl: "https://www.fuenlabrada.es/entradas"
price: "8€"
---
```

### Representación Fuera de Madrid

```markdown
---
date: 2025-11-16
time: "19:00"
venue: "Casa de la Cultura"
city: "Calamonte"
province: "Badajoz"
obra: "La Boda de los pequeños burgueses"
obraSlug: "la-boda-de-los-pequenos-burgueses"
event: "Muestra de Teatro de Extremadura"
---
```

## Representaciones Pasadas

Las representaciones con fecha anterior a hoy se muestran automáticamente como "pasadas" o se ocultan según la configuración de la página.

No es necesario eliminar representaciones pasadas - pueden servir como histórico.

## Múltiples Funciones el Mismo Día

Si hay varias funciones el mismo día en la misma ciudad, añadir un sufijo:

- `2025-03-15-madrid-tarde.md`
- `2025-03-15-madrid-noche.md`

O si son en ciudades diferentes:
- `2025-03-15-madrid.md`
- `2025-03-15-getafe.md`

## Vincular con la Obra

El campo `obraSlug` debe coincidir exactamente con el nombre del archivo de la obra (sin `.md`):

| Archivo de obra | obraSlug |
|-----------------|----------|
| `la-trampa.md` | `la-trampa` |
| `la-boda-de-los-pequenos-burgueses.md` | `la-boda-de-los-pequenos-burgueses` |
| `a-cuadros.md` | `a-cuadros` |

## Cancelar una Representación

Opción 1: Eliminar el archivo `.md`

Opción 2: Añadir un campo personalizado y manejarlo en el código:
```markdown
cancelled: true
```

## Ordenación

Las representaciones se ordenan automáticamente por fecha, mostrando primero las más próximas.
