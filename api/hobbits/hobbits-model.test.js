const { testing } = require("../../knexfile");
const modelHobit = require("./hobbits-model");
const db = require("../../data/dbConfig");

test('is testing environment', ()=>{
    expect(process.env.NODE_ENV).toBe('testing');
})

beforeAll(async()=>{

})

beforeEach(async()=>{
    
})

afterAll(async()=>{
    
})