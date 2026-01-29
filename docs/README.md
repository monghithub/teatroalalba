# Documentación - Teatro Al Alba

Guías detalladas para gestionar el sitio web de Teatro Al Alba.

## Índice

### Gestión de Contenido

| Documento | Descripción |
|-----------|-------------|
| [Obras](./obras.md) | Añadir, editar y gestionar obras de teatro |
| [Premios](./premios.md) | Registrar premios y nominaciones |
| [Representaciones](./representaciones.md) | Programar funciones y eventos |
| [Imágenes](./imagenes.md) | Subir y optimizar imágenes |

### Personalización

| Documento | Descripción |
|-----------|-------------|
| [Páginas Estáticas](./paginas-estaticas.md) | Editar Quiénes somos, Contacto, etc. |
| [Estilos](./estilos.md) | Cambiar colores, tipografía y diseño |
| [Configuración](./configuracion.md) | Datos del sitio, navegación, SEO |

## Inicio Rápido

### Añadir una obra nueva

1. Crear `src/content/obras/mi-obra.md`
2. Añadir frontmatter con título, descripción, imagen
3. Ver [docs/obras.md](./obras.md) para detalles

### Añadir una función

1. Crear `src/content/representaciones/2025-03-15-ciudad.md`
2. Añadir fecha, hora, lugar, obra
3. Ver [docs/representaciones.md](./representaciones.md) para detalles

### Cambiar colores

1. Editar `src/styles/global.css`
2. Modificar variables `--color-burgundy-*`
3. Ver [docs/estilos.md](./estilos.md) para detalles

## Flujo de Trabajo

```
1. Editar archivos localmente
2. Probar con `npm run dev`
3. Verificar cambios en http://localhost:4321
4. Commit y push a GitHub
5. Desplegar con Docker
```

## Estructura del Proyecto

```
teatroalalba/
├── docs/                 # 📚 Esta documentación
├── public/images/        # 🖼️ Imágenes
├── src/
│   ├── content/          # 📝 Contenido (obras, premios, representaciones)
│   ├── data/             # ⚙️ Configuración
│   ├── pages/            # 📄 Páginas
│   ├── components/       # 🧩 Componentes
│   └── styles/           # 🎨 Estilos
└── docker-compose.yml    # 🐳 Despliegue
```

## Ayuda

Si tienes dudas sobre algún tema específico, consulta el documento correspondiente o revisa los ejemplos existentes en `src/content/`.
