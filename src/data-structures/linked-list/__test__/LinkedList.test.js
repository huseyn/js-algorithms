const LinkedList = require('../LinkedList');


describe('LinkedList', () => {

  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  it('should add node to linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.Count).toBe(0);
    linkedList.Add("Huseyn");
    expect(linkedList.Count).toBe(1);
  });

  it('should return index of node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add("Huseyn");
    expect(linkedList.IndexOf("Huseyn")).toBe(0);
  });

  it('should return -1 of node in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.IndexOf("test")).toBe(-1);
  });

});