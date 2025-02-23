const request = require('supertest');
const app = require('../src/server/server');

describe('Server API Endpoints', () => {
    test('GET / should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
