const { testing } = require("../../knexfile");
const modelHobit = require("./hobbits-model");
const db = require("../../data/dbConfig");

//sanity test
test('is testing environment', ()=>{
    expect(process.env.NODE_ENV).toBe('testing');
})

beforeAll(async()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async()=>{
    await db.seed.run(); //seeding the database
})

afterAll(async()=>{
    await db.destroy(); //disconnect from a database
})