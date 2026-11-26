# Aula CHS

Plataforma web para preparar la oposición de **M2 Química** de la **Confederación Hidrográfica del Segura (CHS)**: temario oficial de la convocatoria, resumen de ideas clave por tema, tests de práctica y simulacros con el formato real del examen.

## Plaza preparada

**M2 · Química** en la Confederación Hidrográfica del Segura (puestos TED009 y TED010, Santomera, ámbito territorial 6), de la convocatoria de personal laboral fijo del MITECO (OEP 2023-2024), firmada el 6 de julio de 2026.

- **Primer ejercicio:** 90 preguntas tipo test (45 del temario común y 45 del específico) en 90 minutos; cada error resta 1/3. Máximo 40 puntos (20 por parte), mínimo 20.
- **Segundo ejercicio:** supuesto práctico de 2 horas, de 0 a 60 puntos, mínimo 30.
- Para superar la oposición hacen falta 50 puntos en total. Requisito: Grado en Química.

## Funcionalidades

- **Temario oficial:** los 15 temas comunes del grupo M2 (Anexo VI) y los 32 específicos de Química (Anexo VII), con ideas clave por tema.
- **Bloque complementario** (no entra en el examen): legislación de aguas, la CHS y su cuenca, y análisis químico de aguas en laboratorio, como apoyo para el supuesto práctico.
- **Simulacro oficial:** 45 preguntas comunes + 45 de Química, 90 minutos, penalización de 1/3 y puntuación por partes sobre 20.
- **Tests por tema** en modo estudio (corrección inmediata con explicación) y modo examen (cronometrado, con hoja de respuestas).
- **Simulacro personalizado**, **repaso de fallos**, **progreso** con historial y gráfica, **preguntas propias** y **copia de seguridad** en JSON.
- La sección *Convocatoria* resume las plazas, los requisitos, la solicitud y los ejercicios.
- **Importar temas propios** (sección *Importar*): pega o sube JSON con temas completos (título, ideas clave y preguntas). Al cargar un tema, sus preguntas de ejemplo dejan de usarse. Si recargas un tema, las preguntas con el mismo enunciado se actualizan y las nuevas se añaden. La página incluye las instrucciones de formato para copiarlas en otra conversación.

## Uso

No necesita instalación ni servidor: abre `index.html` en el navegador.

Para publicarla en GitHub Pages: *Settings → Pages → Deploy from a branch*, y elige la rama y la carpeta raíz.

Para generar una versión de un único archivo (`dist/aula-chs.html`):

```bash
node tools/build-single.js
```

El progreso se guarda en el `localStorage` del navegador; usa *Progreso → Copia de seguridad* para no perderlo.

## Formato de importación

```json
{
  "tema": "q21",
  "titulo": "Título del tema",
  "resumen": ["Idea clave 1", "Idea clave 2"],
  "preguntas": [
    { "p": "Enunciado", "correcta": "Texto de la correcta", "incorrectas": ["…", "…", "…"], "e": "Explicación" }
  ]
}
```

Códigos: `c01`–`c15` (temario común), `q01`–`q32` (Química) y `a01`–`a11` (complementario). También se aceptan `{"temas": [...]}`, listas de temas, varios bloques seguidos y variantes como `pregunta`/`enunciado`, `opciones` (lista u objeto `{"A": …}`) con `respuesta_correcta` como letra, texto o número.

## Ampliar el banco de preguntas

Las preguntas están en `js/data.js` (convocatoria y temario común), `js/data-quimica.js` (parte específica) y `js/data-agua.js` (bloque complementario). Cada pregunta tiene este formato, con la respuesta **correcta siempre en primera posición** (la aplicación baraja las opciones al mostrarlas):

```js
["Enunciado", ["Correcta", "Incorrecta 1", "Incorrecta 2", "Incorrecta 3"], "Explicación y artículo"]
```

Para añadir un tema nuevo, agrega un objeto a `temas` con `id`, `bloque` (`C`, `Q` o `X`), `titulo`, `norma`, `resumen` y `preguntas`.

## Aviso

Material de práctica no oficial. Adapta el temario al de tu convocatoria concreta (personal funcionario o laboral, categoría y especialidad) y contrasta cada pregunta con la versión consolidada de las normas en el BOE.
