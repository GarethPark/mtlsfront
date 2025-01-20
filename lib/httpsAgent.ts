import https from 'https';
import fs from 'fs';
import path from 'path';

// Create and export an HTTPS Agent with the client certificate and key
const httpsAgent = new https.Agent({
  cert: fs.readFileSync(path.resolve(process.cwd(), '/Users/garethpark/Documents/certs/client-cert.pem')), // Path to client certificate
  key: fs.readFileSync(path.resolve(process.cwd(), '/Users/garethpark/Documents/certs/client-key.pem')),   // Path to client private key
  rejectUnauthorized: true, // Ensures server certs are validated
});

export default httpsAgent;
