import './server';

console.log('Server initialization completed.');

interface Greeting {
	message: string;
	timestamp: Date;
}

function createGreeting(name: string): Greeting {
	return {
		message: `Hello, ${name}! Welcome to your TypeScript Node.js project.`,
		timestamp: new Date()
	};
}

function displayGreeting(greeting: Greeting): void {
	console.log(`[${greeting.timestamp.toISOString()}] ${greeting.message}`);
}

// Example usage
const greeting = createGreeting('Developer');
displayGreeting(greeting); 