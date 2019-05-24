const request = require('supertest')

const server = require('../server')

describe('server', () => {
    describe('GET /api/sleeps', () => {
        it('do something', () => {
            return request(server)
            .get('/api/sleeps')
            .expect(401)
        })
    })
})




