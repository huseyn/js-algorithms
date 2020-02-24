const LinkedList = require('../LinkedList');


describe('LinkedList', () => {

  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  it('should return index of node in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.IndexOf("test")).toBe(-1);
  });
  
});