import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();
    server.use(express.json());

    server.get('/api/hola', (req, res) => {
        res.json({ mensaje: 'Hola desde Express + Next.js 🚀' });
    });

    // ✅ Todas las demás rutas las maneja Next
    server.use((req, res) => {
        return handle(req, res);
        });

    // Iniciar servidor
    server.listen(PORT, () => {
        const baseURL = `http://localhost:${PORT}`;
        console.log(`\n✅ Servidor iniciado correctamente 🚀`);
        console.log(`🌐 Frontend corriendo en: ${baseURL}`);
        console.log(`🧩 Endpoints disponibles en: ${baseURL}\n`);
    });
});
