import { getCoolName } from "../app/Service";

describe('Service test suit', ()=>{
    test('name should be cool', ()=>{
        const actual = getCoolName();
        const expected = 'Very-Coolname';
        expect(actual).toBe(expected); 
    });
})