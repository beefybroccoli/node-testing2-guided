const server = require("./server.js");
const request = require('supertest');
const db = require("../data/dbConfig");

beforeAll(async()=>{
    //???refer to docs for this command???
    await db.migrate.rollback(); 
    //???refer to docs for this command???
    await db.migrate.latest();
})

beforeEach(async()=>{
    await db.seed.run(); //seeding the database
})

afterAll(async()=>{
    await db.destroy(); //disconnect from a database
})

describe('sanity check', ()=>{
    test('', ()=>{

    })
})

describe('[GET] /hobbits', ()=>{
    test('responds with 200 status code', async ()=>{
        const res = await request(server).get('/hobbits');
        expect(res.status).toEqual(200);
    })
    test('responds with 404 status code', async ()=>{
        const res = await request(server).get('/hobbitss');
        expect(res.status).toEqual(404);
    })
})