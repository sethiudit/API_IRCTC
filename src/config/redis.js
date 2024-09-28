import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://localhost:6379',
});

redisClient.on('error', (err) => {
    console.error('Redis error: ', err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.connect().catch(console.error);

export default redisClient;