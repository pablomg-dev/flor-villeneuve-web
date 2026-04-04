# Flor Villeneuve Web

Sitio web de **Florencia Villeneuve** — mentora esotérica, astróloga y escritora con base en Montevideo, Uruguay.

Migración de WordPress (\lorhesiendo.com\) a un stack moderno con Astro.

## Stack

- **Framework:** [Astro 4](https://astro.build/)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Lenguaje:** TypeScript (strict mode)
- **Fuentes:** @fontsource (Cormorant Garamond, Cormorant, Jost)
- **Email:** [Resend](https://resend.com/)
- **Deploy:** [Netlify](https://www.netlify.com/)
- **Package manager:** pnpm

## Estructura

\\\
src/
├── components/
│ ├── layout/ # Header, Footer, Nav
│ ├── sections/ # Hero, Services, Mentoria, Packs, About, BookPreview, Contact
│ └── ui/ # Button, ServiceCard, PackCard, SectionTitle
├── layouts/
│ └── BaseLayout.astro # Layout base con SEO y metadata
├── pages/
│ ├── index.astro # Home
│ ├── mentoria.astro # Mentoría personalizada
│ ├── formacion/ # Escuela esotérica
│ │ ├── index.astro # Overview
│ │ ├── tarot.astro
│ │ ├── astrologia.astro
│ │ └── numerologia.astro
│ ├── packs.astro # Packs de consulta
│ ├── creativos.astro # Talleres artísticos y proyectos musicales
│ ├── bio.astro # Biografía
│ ├── libro.astro # "La visceversa de un escondite"
│ ├── contacto.astro # Formulario de contacto
│ └── api/contact.ts # API route con Resend
├── styles/global.css # Fuentes, Tailwind, animaciones
└── types/index.ts # Interfaces TypeScript
\\\

## Navegación

1. Inicio → \/\
2. Mentoría → \/mentoria\
3. Formación → \/formacion\ (tarot, astrología, numerología)
4. Packs → \/packs\
5. Creativos → \/creativos\
6. Bio → \/bio\
7. Libro → \/libro\
8. Contacto → \/contacto\

## Desarrollo

### Requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Instalación

\\\ash
pnpm install
\\\

### Variables de entorno

Copiá \.env.example\ a \.env\ y completá:

\\\env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=tu@email.com
\\\

### Comandos

| Comando           | Acción                  |
| ----------------- | ----------------------- |
| \pnpm dev\        | Servidor de desarrollo  |
| \pnpm build\      | Build de producción     |
| \pnpm preview\    | Preview del build local |
| \pnpm astro ...\  | CLI de Astro            |

## Diseño

### Paleta

| Token | Color | Uso |
| ----- | ----- | --- |

| \
ight\ | \#1A1A2E\ | Fondos oscuros secundarios |
| \deep\ | \#0D1429\ | Fondo principal (dark) |
| \gold\ | \#C9A96E\ | Acento, CTAs, links hover |
| \goldLight\| \#E2C99A\ | Hover de acento |
| \parchment\| \#E8DCC8\ | Texto claro |
| \earth\ | \#4A3728\ | Texto en secciones claras |
| \mist\ | \#F5F0E8\ | Fondos claros |
| \ink\ | \#1C1612\ | Texto oscuro |

### Tipografía

- **Display / Headings:** Cormorant Garamond — serif elegante, evoca lo místico y lo literario
- **Subheadings:** Cormorant — variante refinada para subtítulos
- **Body / UI:** Jost — sans-serif geométrica moderna, legible y limpia

## SEO

- Meta tags por página (title, description, og:image, og:locale: es_UY)
- Canonical URL por página
- Schema.org Person en la home
- \lang="es"\ en el HTML

## Redirects

Configurados en \
etlify.toml\:

| Desde                       | A             |
| --------------------------- | ------------- |
| \/formaciones\              | \/formacion\| |
| \/guias-y-acompanamientos\  | \/mentoria\   |
| \/about\                    | \/bio\        |
| \/mi-libro\                 | \/libro\      |
| \/contact\                  | \/contacto\   |

## Notas

- Dominio actual: \lorhesiendo.com\
- No hay precios en ninguna página — todo se coordina por WhatsApp (+598 92 497 675)
- El formulario del libro envía un fragmento via Resend
- Sección de proyectos musicales en \/creativos\ con placeholders listos para completar
- Redes: [@florhesiendo](https://instagram.com/florhesiendo)

## Licencia

Todos los derechos reservados — Florencia Villeneuve © 2026
