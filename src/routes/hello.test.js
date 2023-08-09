/* eslint-disable */
const request = require('supertest');
const app = require('../app');

test('/hello responds with world!', async () => {
    const res = await request(app).get('/hello');

    expect(res.body).toEqual({ hello: 'world' });
});
