// Genera dist/aula-chs.html: la aplicación en un único archivo HTML (CSS y JS en línea),
// útil para abrirla sin servidor o compartirla como un solo fichero.
// Uso: node tools/build-single.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
let html = read("index.html");
html = html.replace('<link rel="stylesheet" href="css/styles.css">', () => "<style>\n" + read("css/styles.css") + "\n</style>");
html = html.replace('<script src="js/data.js"></script>', () => "<script>\n" + read("js/data.js") + "\n</script>");
html = html.replace('<script src="js/data-quimica.js"></script>', () => "<script>\n" + read("js/data-quimica.js") + "\n</script>");
html = html.replace('<script src="js/data-agua.js"></script>', () => "<script>\n" + read("js/data-agua.js") + "\n</script>");
html = html.replace('<script src="js/data-mis-temas.js"></script>', () => "<script>\n" + read("js/data-mis-temas.js") + "\n</script>");
html = html.replace('<script src="js/app.js"></script>', () => "<script>\n" + read("js/app.js") + "\n</script>");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "aula-chs.html"), html);
console.log("dist/aula-chs.html generado (" + Math.round(html.length / 1024) + " KB)");
