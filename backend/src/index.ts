import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import memberRoutes from './routes/members';
import eventRoutes from './routes/events';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(
    cors({
        origin: "https://we-gather-psi.vercel.app/",
        credentials: true,
    })
);

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'We Gather backend running'});
});

app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});