const { testing } = require("../../knexfile");
const modelHobbit = require("./hobbits-model");
const db = require("../../data/dbConfig");

//sanity test
test('is testing environment', ()=>{
    expect(process.env.NODE_ENV).toBe('testing');
})

beforeAll(async()=>{
    await db.migrate.rollback(); //???refer to docs for this command???
    await db.migrate.latest(); //???refer to docs for this command???
})

beforeEach(async()=>{
    await db.seed.run(); //seeding the database
})

afterAll(async()=>{
    await db.destroy(); //disconnect from a database
})

describe('getAll()', ()=>{

    test('resolve all hobbits in the db', async ()=>{
        const data = await modelHobbit.getAll();
        expect(data).toHaveLength(4);
    })
    
})

describe('getById()', ()=>{
    test('', ()=>{})
})

describe('insert()', ()=>{
    test('', ()=>{})
})

describe('update()', ()=>{
    test('', ()=>{})
})
