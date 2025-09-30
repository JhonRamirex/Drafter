# Drafter Visual Flow

Proyecto web para el estudio de fotografía profesional **Drafter Studio**. Permite mostrar portfolios de moda, gastronomía, arquitectura, retrato y más, con animaciones visuales modernas y una experiencia interactiva y responsiva.

## 🚀 Tecnologías principales

- **React** + **TypeScript**
- **Vite** (entorno de desarrollo rápido)
- **Tailwind CSS** (utilidades CSS y responsividad)
- **GSAP** (animaciones avanzadas)
- **shadcn-ui** (componentes UI reutilizables)

## 📁 Estructura del proyecto

```
drafter-visual-flow/
├── public/                # Imágenes y assets estáticos
│   └── Moda/              # Imágenes de la sección Moda
│   └── ...                # Otras carpetas de imágenes
├── src/
│   ├── components/        # Componentes reutilizables (Hero, FashionGallery, etc)
│   ├── pages/             # Páginas principales (Moda, Gastronomia, Arquitectura...)
│   ├── data/              # Datos de imágenes y categorías
│   ├── hooks/             # Custom hooks
│   ├── App.tsx            # Componente raíz
│   └── main.tsx           # Entrada principal
├── index.html             # HTML principal (favicon, fuentes, etc)
├── tailwind.config.ts     # Configuración de Tailwind
├── package.json           # Dependencias y scripts
└── README.md              # Documentación
```

## 🎨 Componentes principales

- **Hero**: Sección principal con logo, animaciones y texto destacado.
- **CosmicSection**: Sección con fondo animado y gradientes, usada para destacar categorías.
- **FashionGallery**: Galería de fotos de moda en grid responsivo, sin espacios entre imágenes, manteniendo proporciones.
- **Services / Paquetes / AdditionalContent**: Tarjetas de servicios y paquetes, con selector de categorías y botones para agendar cita.
- **AppointmentForm**: Botón que redirige a la página de citas con URL fija, recibe datos dinámicos según el servicio.
- **BlogCard**: Tarjetas de blog con enlaces a URLs fijas para cada artículo.
- **BlogImageGallery**: Galería de imágenes con navegación por botones y teclado (flechas izquierda/derecha, Escape).
- **ImageGallery**: Componente reutilizable de galería de imágenes con navegación completa.
- **StarsBackground**: Fondo animado de estrellas, color configurable por sección.
- **Navigation**: Navbar transparente, solo textos.

## 🖼️ Agregar imágenes

1. Coloca tus imágenes en la carpeta `public/` o en subcarpetas como `public/Moda/`.
2. Usa rutas absolutas desde `/` para referenciarlas en los componentes, por ejemplo:
   ```js
   src: "/Moda/PORTADA 7.webp"
   ```
3. Evita caracteres especiales o espacios en los nombres de archivo para máxima compatibilidad.

## ✏️ Modificar secciones o galerías

- Edita los archivos en `src/pages/` para cambiar el contenido de cada sección.
- Para cambiar las imágenes de una galería, edita el array `images` que se pasa al componente `FashionGallery`.
- Puedes crear nuevas secciones duplicando componentes y ajustando los props.

## 🛠️ Cómo correr el proyecto en desarrollo

1. Instala Node.js (recomendado v18+)
2. Instala dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🌐 Despliegue

Puedes desplegar el proyecto en cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc):

1. Genera la build de producción:
   ```sh
   npm run build
   ```
2. Sube la carpeta `dist/` generada a tu hosting.

## 💡 Notas y recomendaciones

- El favicon principal está en `public/LogoNegroDrafter.webp` y se configura en `index.html`.
- El color de las estrellas del fondo se define en cada página usando el prop `color` en `StarsBackground`.
- Las animaciones principales usan GSAP para máxima fluidez y rendimiento.
- El layout es completamente responsive y mobile-first.

## 📞 Contacto y soporte

Para dudas, sugerencias o soporte, contacta a [Drafter Studio](mailto:info@drafter.es) o abre un issue en el repositorio.

---

**Drafter Visual Flow** © Drafter Studio. Todos los derechos reservados.
