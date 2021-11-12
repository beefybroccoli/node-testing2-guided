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

describe ('[GET] /hobbits/:id', ()=>{
    test('responds with 200 status code', async ()=>{
        const res = await request(server).get('/hobbits/1');
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject({
            "id": 1,
            "name": "sam"
        });
    })
    test('responds with 404 status code', async ()=>{
        const res = await request(server).get('/hobbitss/1');
        expect(res.status).toEqual(404);
    })
})

describe('[POST] /hobbits/', ()=>{
    test('responds with 201 status code', async () =>{
        const res = await request(server).post('/hobbits/')
            .send({name:"tomtom"});
        const newId = res.body[0];
        const newHobbit = await request(server).get('/hobbits/5');
        expect(res.status).toEqual(201);
        expect(newId).toEqual(5);
        expect(newHobbit.status).toEqual(200);
        expect(newHobbit.body).toMatchObject({
            "id": 5,
            "name": "tomtom"
        });
    })

})