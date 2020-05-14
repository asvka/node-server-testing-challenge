const supertest = require('supertest')
const server = require('../index')
const db = require('../data/config')

beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

describe('Gemstone API tests', () => {
    it('Gets gem list from server', async () => {
        const res = await supertest(server).get('/gemstones')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveLength(7)
        expect(res.body[0].name).toBe('Aquamarine')
    })
    it('Does not get gem list from server', async () => {
        const res = await supertest(server).get('/gemstones/gemstone')
        expect(res.statusCode).toBe(404)
    })
    it('Posts a new gemstone', async () => {
        const data = { name: 'Sapphire', mohs_scale: 9 }
        const res = await supertest(server).post('/gemstones').send(data)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.name).toBe('Sapphire')
    })
    it('Fails to post a new gemstone', async () => {
        const data = { name: 'Sapphire', mohs_scale: 9 }
        const res = await supertest(server).post('/gemstones/gemstone').send(data)
        expect(res.statusCode).toBe(404)
    })
    it('Deletes a gemstone', async () => {
        const res = await supertest(server).delete('/gemstones/1')
        expect(res.body.name).toBeFalsy()
        expect(res.statusCode).toBe(204)
    })
    it('Does not delete a gemstone', async () => {
        const res = await supertest(server).delete('/gemstones/gemstone/1')
        expect(res.statusCode).toBe(404)
    })
})
