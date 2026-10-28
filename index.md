# Kenshi Security

El antivirus que vigila tus USB y descargas. Protección complementaria para Windows 10 y 11 (64 bits), en español. Hecho en Lima, Perú. Por ahora solo para computadoras de hogar: todavía no es apto para empresas.

- Descarga directa (gratis): https://github.com/kenshi241011/kenshi-updates/releases/latest/download/KenshiSecurity-x64.msi
- Sitio web: https://kenshy-security.netlify.app/
- WhatsApp: +51 992 140 169 (https://wa.me/51992140169)

## Qué hace

- **Análisis de USB**: al conectar una memoria muestra un aviso con el progreso del análisis. Detecta programas disfrazados de documento (por ejemplo `Factura.pdf.exe`), nombres con texto invertido (RTLO), accesos directos maliciosos (virus de accesos directos) y `autorun.inf` peligrosos. «Limpiar USB» pone las amenazas en cuarentena y vuelve a mostrar las carpetas que el virus ocultó. Gratis a mano; automático al conectar con licencia.
- **Bloqueo al ejecutar** (con licencia): si se abre un programa que coincide con una firma de malware, Kenshi lo cierra en menos de un segundo y lo pone en cuarentena.
- **Protección web** (con licencia): DNS seguro (Quad9) y una lista firmada de miles de sitios de malware y phishing (URLhaus y ThreatFox de abuse.ch), aplicada a todos los navegadores y programas. Extensión para Chrome y Edge.
- **Tiempo real** (con licencia): vigila Descargas, Escritorio y Documentos; cada archivo nuevo se analiza al terminar de guardarse.
- **Cuarentena** (gratis): lo detectado se aísla sin borrarse y se puede restaurar.
- **Análisis rápido o de toda la PC** (gratis): el rápido revisa Descargas, Escritorio, temporales, inicio de Windows y USB conectadas; el completo, todos los discos.
- **Análisis programado** (gratis): una vez al día a la hora elegida; si la PC estaba apagada, se hace al encenderla.
- **Analizar con Kenshi** (gratis): en el clic derecho del Explorador para archivos, carpetas y discos.
- **Vigilancia del inicio de Windows** (gratis): avisa cuando un programa se agrega al inicio y quita solo los que son malware.
- **Escudo anti-ransomware** (gratis): archivos cebo ocultos en Documentos, Escritorio e Imágenes; si un programa los modifica, Kenshi lo cierra.
- **Descargas sospechosas**: detecta programas sin firma descargados de internet con nombre de documento (por ejemplo `Factura_pago.exe`) y scripts descargados.

## Definiciones (28 de octubre de 2026)

| Dato | Valor |
|---|---|
| Huellas de malware real (SHA-256) | 22.668 |
| Reglas de detección YARA | 4.155 |
| Sitios peligrosos bloqueados | 3.575 |
| Actualización | cada 24 horas, firmada digitalmente (Ed25519) |

Fuentes: abuse.ch (MalwareBazaar, URLhaus, ThreatFox), ReversingLabs, YARA Forge (ESET, Google, Trellix, Signature Base y otros).

## Planes

| Plan | Precio | Incluye |
|---|---|---|
| Gratis | S/ 0 | Análisis rápido, de toda la PC y programado; análisis manual de archivos, carpetas, discos y USB; «Analizar con Kenshi»; vigilancia del inicio de Windows; escudo anti-ransomware; cuarentena; actualizaciones diarias; sin límite de tiempo |
| 3 meses | S/ 30 (pago único) | Tiempo real, bloqueo al ejecutar, análisis automático de USB, protección web |
| 6 meses | S/ 70 (pago único) | Lo mismo que 3 meses |
| 1 año | S/ 95 (pago único) | Lo mismo que 3 meses, por un año |

## Cómo comprar

1. **Desde la app**: instala Kenshi Security, ve a Configuración → Licencia → «Solicítala aquí», escribe tu nombre, elige el plan y envía la solicitud. Cuando se aprueba, la licencia se activa sola en tu PC.
2. **Por WhatsApp**: escribe al +51 992 140 169 con el plan que quieres; recibes un serial que pegas en Configuración → Licencia → Activar.

## Preguntas frecuentes

**¿Reemplaza a Microsoft Defender?** No. Es una protección complementaria; mantén Microsoft Defender activado.

**¿Por qué Windows muestra un aviso al instalar?** El instalador aún no tiene un certificado comercial de firma de código. Pulsa «Más información» y luego «Ejecutar de todas formas». Solo pasa la primera vez; las actualizaciones se instalan desde la app y están firmadas por Kenshi.

**¿Qué pasa cuando termina mi licencia?** Vuelve a la versión gratuita: puedes seguir analizando a mano. Tiempo real, bloqueo al ejecutar y protección web se desactivan hasta que renueves.

**¿Kenshi borra mis archivos?** Nunca por su cuenta: aísla lo detectado en cuarentena.

**¿Detecta todos los virus?** Ningún antivirus detecta todo. Kenshi reconoce el malware de sus definiciones, actualizadas a diario, y rasgos sospechosos como dobles extensiones o accesos directos maliciosos.

## Términos y Condiciones

https://kenshy-security.netlify.app/terminos.html — pago único sin renovación automática, una licencia por equipo, devolución en 7 días si no se logra instalar o activar por causa de Kenshi, privacidad conforme a la Ley N.º 29733; solo para uso doméstico (no apto para empresas).
