const request = require('supertest');
const app = require('../server');

describe('Health Endpoints', () => {
  it('should return 200 for /healthz', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
  });

  it('should return 200 for /readyz', async () => {
    const res = await request(app).get('/readyz');
    expect(res.statusCode).toBe(500);
  });
});