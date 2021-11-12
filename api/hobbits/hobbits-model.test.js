const { testing } = require("../../knexfile");
const modelHobbit = require("./hobbits-model");
const db = require("../../data/dbConfig");

//sanity test
test('is testing environment', ()=>{
    expect(process.env.NODE_ENV).toBe('testing');
})

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

describe( 'Hobbit Model', ()=>{

    describe('getAll()', ()=>{

        let data;

        beforeEach( async ()=>{
            data = await modelHobbit.getAll();
        })

        test('resolve all hobbits in the db', async ()=>{
            const data = await modelHobbit.getAll();
            expect(data).toHaveLength(4);
        })

        test('resolve the correct shapes', async () =>{
          expect(data).toMatchObject(
            [
                {
                    "id": 1,
                    "name": "sam"
                },
                {
                    "id": 2,
                    "name": "frodo"
                },
                {
                    "id": 3,
                    "name": "pippin"
                },
                {
                    "id": 4,
                    "name": "merry"
                }
            ]
            
          )  
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

})
