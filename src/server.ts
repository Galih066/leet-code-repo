import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { twoSum } from './services/TwoSum';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

interface ApiError extends Error {
	status?: number;
}

app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Welcome to TypeScript Node.js API' });
});

app.get('/api/protected', (req: Request, res: Response) => {
	const apiKey = req.headers['x-api-key'];

	if (!apiKey || apiKey !== process.env.API_KEY) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}

	res.json({ message: 'Access granted to protected route' });
});

app.use((err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err.stack);
	res.status(err.status || 500).json({
		error: {
			message: err.message || 'Internal Server Error',
			status: err.status || 500
		}
	});
});

app.use((_req: Request, res: Response) => {
	res.status(404).json({ error: 'Route not found' });
});

const praCase_1 = [2, 7, 11, 15]
const praRslt_1 = 9

const praCase_2 = [3, 2, 4]
const praRslt_2 = 6

const praCase_3 = [3, 3]
const praRslt_3 = 6

twoSum(praCase_3, praRslt_3)

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}); 