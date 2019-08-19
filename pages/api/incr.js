const { send } = require('micro');
const redis = require('redis');

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = parseInt(process.env.REDIS_PORT, 10) || 6379;

const client = redis.createClient(REDIS_PORT, REDIS_HOST);

const { promisify } = require('util');
const incrAsync = promisify(client.incr).bind(client);

export default async (req, res) => {
	const count = await incrAsync('count');
	send(res, 200, {
		count: count,
		incremented: true
	});
};
