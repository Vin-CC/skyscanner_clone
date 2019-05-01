const redis = require('redis');
const {RateLimiterRedis} = require('rate-limiter-flexible');
const config = require('../bin/config');

const redisClient = redis.createClient({
  enable_offline_queue: false,
});

const opts = {
  redis: redisClient,
  points: config.requests, // 10 requests
  duration: config.duration, // per 1 second by IP
}

const rateLimiter = new RateLimiterRedis(opts);

const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
    .then((rateLimiterRes) => {
        const headers = {
            "Retry-After": rateLimiterRes.msBeforeNext / 1000,
            "X-RateLimit-Limit": opts.points,
            "X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
            "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
        }
        res.set(headers);
        next();
    })
    .catch(() => {
        res.status(429).send('Too Many Requests');
    });
};

module.exports = rateLimiterMiddleware;
