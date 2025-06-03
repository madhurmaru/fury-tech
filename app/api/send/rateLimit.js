import { RateLimiterMemory } from 'rate-limiter-flexible';

const limiter = new RateLimiterMemory({
  points: 3, // 3 requests
  duration: 60, // per 60 seconds
});

export async function rateLimit(request) {
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  try {
    await limiter.consume(clientIp);
    return null;
  } catch {
    return new Response('Too many requests', { status: 429 });
  }
}
