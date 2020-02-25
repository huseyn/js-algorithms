const LinkedList = require('../LinkedList');


describe('LinkedList', () => {

  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  it('should add node to linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.Count).toBe(0);
    linkedList.Add(1);
    expect(linkedList.Count).toBe(1);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    linkedList.Add(2);
    expect(linkedList.Count).toBe(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(2);
    linkedList.Add(3);
    expect(linkedList.Count).toBe(3);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(3);
  });

  it('should return index of node in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.IndexOf(5)).toBe(-1);
    linkedList.Add(1);
    expect(linkedList.IndexOf(1)).toBe(0);
  });

  it('should return -1 in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.Remove(1)).toBe(-1);
  });

  it('should return 0 in linked list and head&tail should be null', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    expect(linkedList.Remove(1)).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should return 0 in linked list and head&tail should be changed', ()=>{
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.Remove(1)).toBe(0);
    expect(linkedList.head.Element).toBe(2);
    expect(linkedList.tail.Element).toBe(2);
  });

  it('should return 1 in linked list and tail should not be changed', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.Remove(2)).toBe(1); 
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(1);
  });
});