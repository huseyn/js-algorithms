const Hashtable = require('../Hashtable');

describe('Hashtable', ()=>{

    /*Create instance of Hashtable*/
    it('should create empty hashtable', ()=>{
        const hashtable = new Hashtable(10);
        expect(hashtable).not.toBeNull();
    });
});