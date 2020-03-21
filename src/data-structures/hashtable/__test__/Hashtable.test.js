const Hashtable = require('../Hashtable');

describe('Hashtable', () => {

    /*Create instance of Hashtable*/
    it('should create empty hashtable', () => {
        const hashtable = new Hashtable(10);
        expect(hashtable).not.toBeNull();
    });

    it('should put element to hashtable', () => {
        const hashtable = new Hashtable(3);
        expect(hashtable.count).toBe(0);
        expect(hashtable.length).toBe(3);
        hashtable.put('a');
        expect(hashtable.count).toBe(1);
        expect(hashtable.length).toBe(3);
        hashtable.put('b');
        expect(hashtable.count).toBe(2);
        expect(hashtable.length).toBe(3);
        hashtable.put('c');
        expect(hashtable.count).toBe(3);
        expect(hashtable.length).toBe(3);
        hashtable.put('d');
        expect(hashtable.count).toBe(4);
        expect(hashtable.length).toBe(6);
    });

    it('should remove element from hashtable', () => {
        const hashtable = new Hashtable(3);
        expect(hashtable.count).toBe(0);
        expect(hashtable.length).toBe(3);
        hashtable.put('a');
        hashtable.put('b');
        hashtable.put('c');
        hashtable.put('d');
        expect(hashtable.count).toBe(4);
        expect(hashtable.remove('a')).toBe('a');
        expect(hashtable.count).toBe(3);
        expect(hashtable.remove('c')).toBe('c');
        expect(hashtable.count).toBe(2);
        expect(hashtable.remove('d')).toBe('d');
        expect(hashtable.count).toBe(1);
        expect(hashtable.remove('b')).toBe('b');
        expect(hashtable.count).toBe(0);
        expect(hashtable.remove('a')).toBe(-1);
    });
});