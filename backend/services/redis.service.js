import redis from "ioredis";


const redisClient = new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    
}); 

redisClient.on('connect', () => {
    console.log('Redis client connected'
        
    )});
redisClient.on('error', (err) => console.log('Redis Client Error', err));

export default redisClient