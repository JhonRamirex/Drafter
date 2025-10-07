## Pipeline y rendimiento

### Objetivos
- LCP < 2.5s móvil (4G Slow), CLS ~ 0, TTI < 3.5s
- -70% transferencia en imágenes y reducción de peticiones
- Mantener SEO y accesibilidad

### Flujo de build
1. Generar variantes de imágenes
```
npm run images
```
Genera AVIF/WebP a anchos 320,640,960,1280,1920 en `public/optimized` y un `manifest.images.json`.

2. Build de la app (incluye transformación <img> → <picture> en HTML)
```
npm run build:full
```

### Añadir nuevas imágenes
- Coloca los originales en `public/...` manteniendo jerarquía.
- Ejecuta `npm run images` para crear variantes y actualizar el manifiesto.
- Usa `<img src="/ruta/en/public/..." alt="...">` en el código. El plugin lo convertirá a `<picture>` con `srcset` en build.
- Opt-out: agrega `data-no-picture` al `<img>` si no quieres la conversión.

### Marcar LCP y preloads
- El héroe/above-the-fold debe usar `<img fetchpriority="high">` y no llevar `loading="lazy"`.
- Añade manualmente un `<link rel="preload" as="image" imagesrcset="..." imagesizes="(max-width: 768px) 100vw, 50vw">` en la página crítica.

### Medición
- Ejecuta el preview y luego:
```
npm run perf:audit:lighthouse
```
Guarda JSON en `.perf/<fecha>/lh.json`.

### Buenas prácticas
- `alt` significativo, `width/height` definidos para evitar CLS.
- `loading="lazy"` y `decoding="async"` en imágenes no críticas.
- Revisa que sólo 1–2 recursos tengan preload por página.



