const request = require("supertest");
const app = require("../app");

describe("Health endpoints", () => {
  test("GET /healthz returns 200", async () => {
    const res = await request(app).get("/healthz");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /readyz returns 200", async () => {
    const res = await request(app).get("/readyz");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ready");
  });
});