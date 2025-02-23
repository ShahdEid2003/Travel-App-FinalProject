import request from 'supertest';
import app from '../src/server/server';  

describe('Testing the server endpoints', () => {
    test('GET / should return status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

