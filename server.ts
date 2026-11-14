import path from "path";
import fs from "fs";

const PORT = Number(process.env.PORT) || 3000;
const DIST_DIR = path.join(import.meta.dir, "dist");
const PUBLIC_DIR = path.join(import.meta.dir, "public");

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    const decodedPath = decodeURIComponent(url.pathname);

    if (decodedPath === "/" || decodedPath === "") {
      const indexPath = path.join(DIST_DIR, "index.html");
      if (fs.existsSync(indexPath)) return new Response(Bun.file(indexPath));
    }

    // Check DIST_DIR
    let filePath = path.join(DIST_DIR, decodedPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return new Response(Bun.file(filePath));
    }

    // Check PUBLIC_DIR for static assets & videos
    let pubPath = path.join(PUBLIC_DIR, decodedPath);
    if (fs.existsSync(pubPath) && fs.statSync(pubPath).isFile()) {
      return new Response(Bun.file(pubPath));
    }

    // SPA fallback to index.html
    const indexPath = path.join(DIST_DIR, "index.html");
    if (fs.existsSync(indexPath)) {
      return new Response(Bun.file(indexPath));
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`\n======================================================`);
console.log(`🚀 Adar Cep Shop - Kırşehir Tanıtım Sitesi Aktif!`);
console.log(`🌐 Yerel Adres: http://localhost:${server.port}`);
console.log(`======================================================\n`);
