const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const STAR_LOGO_PATH = path.join(ROOT_DIR, 'star_logo.svg');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4'
};

const SVG_TARGET_HASHES = [
  'oxurWBlh6N6S4TWSCjuQlCy2j8',
  'lh8lBZeakNG0kAKM4AyYn82hDKo',
  'Wc0p8IWpAVhAXlZ4gamieBhuOQ',
  'wi2sg9rdfZWxOdvkteCVwurNqLw',
  'star_logo'
];

function requestHandler(req, res) {
  // CORS & No-Cache Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle client abort / disconnect gracefully
  req.on('error', () => {});
  res.on('error', () => {});

  let cleanUrl = (req.url || '/').split('?')[0].split('#')[0];
  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch (e) {}

  // 1. If requesting hero logo SVG -> serve star_logo.svg
  if (SVG_TARGET_HASHES.some(h => cleanUrl.includes(h))) {
    if (fs.existsSync(STAR_LOGO_PATH)) {
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      fs.createReadStream(STAR_LOGO_PATH).pipe(res);
      return;
    }
  }

  // 2. Route aliases & loopholes prevention
  if (cleanUrl === '/studio' || cleanUrl === '/studio.html') {
    res.writeHead(302, { 'Location': '/about' });
    res.end();
    return;
  }
  if (cleanUrl === '/services' || cleanUrl === '/services.html') {
    res.writeHead(302, { 'Location': '/experience' });
    res.end();
    return;
  }

  // Intercept any script_main request to local patched version
  if (cleanUrl.includes('script_main')) {
    const localMain = path.join(ROOT_DIR, 'assets', 'script_main.BjEjiiE7.mjs');
    if (fs.existsSync(localMain)) {
      res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
      fs.createReadStream(localMain).pipe(res);
      return;
    }
  }

  // 3. Resolve target file
  let filePath = '';
  if (cleanUrl === '/' || cleanUrl === '') {
    filePath = path.join(ROOT_DIR, 'index.html');
  } else {
    const rawPath = path.join(ROOT_DIR, cleanUrl.replace(/^\/+/, ''));
    if (fs.existsSync(rawPath) && fs.statSync(rawPath).isFile()) {
      filePath = rawPath;
    } else if (fs.existsSync(rawPath + '.html') && fs.statSync(rawPath + '.html').isFile()) {
      filePath = rawPath + '.html';
    } else {
      // Try inside assets/
      const assetPath = path.join(ROOT_DIR, 'assets', path.basename(cleanUrl));
      if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
        filePath = assetPath;
      }
    }
  }

  if (filePath && fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // Fallback to index.html for single-page routing
    const indexPath = path.join(ROOT_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  }
}

// Single server instance supporting dual-stack IPv4/IPv6
const PORT = 3000;
const server = http.createServer(requestHandler);

server.on('error', (err) => {
  console.error('[SERVER ERROR]', err);
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`[LIVE] Portfolio Server Running at: http://localhost:${PORT}/`);
  console.log(`[DIRECTORY] Serving: ${ROOT_DIR}`);
  console.log(`======================================================\n`);
});

// Also bind 3001 on the same process so whether user visits 3000 or 3001, it ALWAYS works
const serverBackup = http.createServer(requestHandler);
serverBackup.on('error', () => {});
serverBackup.listen(3001, () => {
  console.log(`[LIVE] Also available at: http://localhost:3001/`);
});
