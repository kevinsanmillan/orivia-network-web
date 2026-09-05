# Orivia Network Web

Sitio web comercial de Orivia Network - Servicios de telecomunicaciones (mó¥¥¥viles, fibra óptica, paquetes convergentes).

## Estructura del proyecto

```
orivia-network-web/
├── index.html          # Landing page principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
└── README.md           # DocumentaciÃ³n
```

## CaracterÃ©sticas

- **DiseÃ±o responsive**: Adaptable a mÃ³viles, tablets y escritorio
- **Secciones incluidas**:
  - Header con navegaciÃ³n
  - Hero section con CTA
  - Servicios (MÃ³viles, Fibra, Convergentes)
  - Tarifas destacadas con precios
  - Formulario de contacto/alta
  - Footer con informaciÃ³n de contacto
- **OptimizaciÃ³n SEO**: Meta descripciÃ³n, tÃ©tulos jerÃ¡rquicos
- **Animaciones suaves**: Fade-in al hacer scroll

## Tarifas incluidas

### MÃ³viles
- Orange 100 GB: 9,56â¬¬/mes
- Movistar 120 GB: 12,36â¬¬/mes
- Vodafone Ilimitada: 10,68â¬¬/mes

### Fibra
- Fibra 600 Mb: 30,13â¬¬/mes
- Fibra 1 Gb: 42,23â¬¬/mes

### Convergentes
- Fibra 600 Mb + 100 GB: 38,60â¬¬/mes (Recomendado)
- Fibra 1 Gb + 200 GB: 59,17â¬¬/mes

*Precios basados en tarifas Orivia Network 2026*

## Despliegue

### OpciÃ³n 1: Cloudflare Pages (Recomendado)

1. Conectar repositorio en Cloudflare Pages
2. Configurar build (no requiere build step para sitio estÃ¡tico)
3. Desplegar automÃ¡ticamente en cada push

### OpciÃ³n 2: GitHub Pages

1. Ir a Settings > Pages
2. Seleccionar branch `main` y carpeta `/root`
3. El sitio estarÃ¡ disponible en `https://kevinsanmillan.github.io/orivia-network-web`

### OpciÃ³n 3: Netlify / Vercel

1. Importar repositorio
2. Configurar dominio personalizado (opcional)
3. Desplegar

## PrÃ³ximos pasos

### Fase 1: Web bÃ¡sica (Completado â)
- [x] Landing page con tarifas
- [x] Formulario de contacto
- [x] Despliegue en Cloudflare/GitHub Pages

### Fase 2: IntegraciÃ³n de pagos
- [ ] Conectar Stripe para cobros online
- [ ] Formulario de alta completo con validaciÃ³n
- [ ] PÃ¡gina de confirmaciÃ³n de pedido
- [ ] Emails automÃ¡ticos de confirmaciÃ³n

### Fase 3: AutomatizaciÃ³n
- [ ] IntegraciÃ³n con operador mayorista (API)
- [ ] Flujo de activaciÃ³n automÃ¡tica
- [ ] Panel de administraciÃ³n para pedidos
- [ ] Seguimiento de envÃ©os de SIM/router

### Fase 4: Marketing
- [ ] SEO avanzado (schema.org, sitemap)
- [ ] Google Analytics / Plausible
- [ ] CampaÃ±as de ads (Google/Meta)
- [ ] Blog con contenido SEO

## TecnologÃ©as

- HTML5
- CSS3 (con variables CSS)
- JavaScript (Vanilla, sin frameworks)
- GitHub (repositorio y control de versiones)
- Cloudflare (DNS y hosting)

## Contacto

- **Email**: info@orivia.network
- **UbicaciÃ³n**: Barcelona, EspaÃ±a

---

Â© 2026 Orivia Network. Todos los derechos reservados.
