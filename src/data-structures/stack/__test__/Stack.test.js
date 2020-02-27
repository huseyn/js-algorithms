const Stack = require('../Stack');

describe('Stack', () => {

    it('should create an empty stack', () => {
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.count).toBe(0);
        expect(stack.container.length).toBe(0);
    });
});