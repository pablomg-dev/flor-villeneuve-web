# Flor Villeneuve Web

Sitio web de **Florencia Villeneuve** — mentora esotérica, astróloga y escritora con base en Montevideo, Uruguay.

Migración de WordPress para el nuevo sitio `florenciavilleneuve.com`.

## Stack

- **Framework:** [Astro 4](https://astro.build/)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Lenguaje:** TypeScript (strict mode)
- **Fuentes:** @fontsource (Cormorant Garamond, Cormorant, Jost)
- **Forms:** [Netlify Forms](https://docs.netlify.com/forms/setup/)
- **Deploy:** [Netlify](https://www.netlify.com/)
- **Package manager:** pnpm

## Estructura

```
src/
├── components/
│   ├── layout/          # Header, Footer, Nav
│   ├── sections/        # Hero, Services, Mentoria, Packs, About, BookPreview, Contact
│   └── ui/              # Button, ServiceCard, PackCard, SectionTitle
├── layouts/
│   └── BaseLayout.astro # Layout base con SEO y metadata
├── pages/
│   ├── index.astro          # Home
│   ├── mentoria.astro       # Mentoría personalizada
│   ├── formacion/           # Escuela esotérica
│   │   ├── index.astro      # Overview
│   │   ├── tarot.astro
│   │   ├── astrologia.astro
│   │   └── numerologia.astro
│   ├── packs.astro          # Packs de consulta
│   ├── creativos.astro      # Talleres artísticos y proyectos musicales
│   ├── bio.astro            # Biografía
│   └── contacto.astro       # Formulario de contacto (Netlify Forms)
├── styles/
│   └── global.css           # Fuentes, Tailwind, animaciones
├── types/
│   └── index.ts             # Interfaces TypeScript
└── content/
    └── blog/                # Preparado para blog futuro
```

## Navegación

| #   | Sección   | Ruta                                          |
| --- | --------- | --------------------------------------------- |
| 1   | Inicio    | `/`                                           |
| 2   | Mentoría  | `/mentoria`                                   |
| 3   | Formación | `/formacion` (tarot, astrología, numerología) |
| 4   | Packs     | `/packs`                                      |
| 5   | Creativos | `/creativos`                                  |
| 6   | Bio       | `/bio`                                        |
| 7   | Contacto  | `/contacto`                                   |

## Desarrollo

### Requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Instalación

```bash
pnpm install
```

### Comandos

| Comando          | Acción                                  |
| ---------------- | --------------------------------------- |
| `pnpm dev`       | Servidor de desarrollo                  |
| `pnpm build`     | Build de producción (typecheck + build) |
| `pnpm preview`   | Preview del build local                 |
| `pnpm astro ...` | CLI de Astro                            |

## Diseño

### Paleta de colores

| Token       | Color     | Uso                                  |
| ----------- | --------- | ------------------------------------ |
| `night`     | `#1A1A2E` | Fondos oscuros secundarios           |
| `deep`      | `#0D1429` | Fondo principal (dark mode)          |
| `gold`      | `#C9A96E` | Acento, CTAs, hover de links         |
| `goldLight` | `#E2C99A` | Hover de acento                      |
| `parchment` | `#E8DCC8` | Texto sobre fondo oscuro             |
| `earth`     | `#4A3728` | Texto sobre fondo claro              |
| `mist`      | `#F5F0E8` | Fondos claros (secciones alternadas) |
| `ink`       | `#1C1612` | Texto oscuro principal               |

### Tipografía

| Rol                | Fuente             | Estilo                                          |
| ------------------ | ------------------ | ----------------------------------------------- |
| Display / Headings | Cormorant Garamond | Serif elegante, evoca lo místico y lo literario |
| Subheadings        | Cormorant          | Variante refinada para subtítulos               |
| Body / UI          | Jost               | Sans-serif geométrica, legible y limpia         |

### Principios

- Modo dark por defecto con secciones claras intercaladas (`mist`/`parchment`)
- Acento dorado para CTAs, hover de links, separadores y bordes de cards
- Sin sombras duras — opacidad y bordes finos
- Espaciado generoso (`py-24` mínimo entre secciones)
- Animaciones de entrada suaves con CSS (fade + translateY)
- Mobile first, responsive en todos los breakpoints

## SEO

- Meta tags por página (title, description, og:image, og:locale: `es_UY`)
- Canonical URL por página
- Schema.org `Person` en la home
- `lang="es"` en el HTML

## Redirects

Configurados en `netlify.toml` para preservar SEO de la web anterior:

| Desde                      | A            |
| -------------------------- | ------------ |
| `/formaciones`             | `/formacion` |
| `/guias-y-acompanamientos` | `/mentoria`  |
| `/about`                   | `/bio`       |
| `/mi-libro`                | `/bio`       |
| `/contact`                 | `/contacto`  |

## Formularios

El formulario de contacto usa **Netlify Forms** — sin API routes ni dependencias externas.

| Formulario       | `name`     | Dónde              |
| ---------------- | ---------- | ------------------ |
| Contacto general | `contacto` | `/contacto` y home |

Netlify detecta automáticamente los formularios con `data-netlify="true"` y envía las respuestas al dashboard.

## Notas

- Dominio actual: `florenciavilleneuve.com` (Anteriormente `florhesiendo.com`)
- No hay precios en ninguna página — todo se coordina por WhatsApp (`+598 92 497 675`)
- Sección de proyectos musicales en `/creativos` con placeholders listos para completar
- Red social: [@florencia.villeneuve](https://instagram.com/florencia.villeneuve)

## Licencia

Todos los derechos reservados — Florencia Villeneuve © 2026
