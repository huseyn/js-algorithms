const LinkedList = require('../LinkedList');


describe('LinkedList', () => {

  /*Create instance of linked list*/
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
  });

  /*Add method tests*/
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

  /*IndexOf method tests*/
  it('should return index of node in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.IndexOf(3)).toBe(-1);
    linkedList.Add(1);
    linkedList.Add(2);
    linkedList.Add(3);
    expect(linkedList.IndexOf(1)).toBe(0);
    expect(linkedList.IndexOf(2)).toBe(1);
    expect(linkedList.IndexOf(3)).toBe(2);
    expect(linkedList.IndexOf(4)).toBe(-1);
  });

  /*Remove method tests*/
  it('should return -1 in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.Remove(1)).toBe(-1);
  });

  it('should return 0 and remove node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    expect(linkedList.Remove(1)).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should return 0 and remove node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.Remove(1)).toBe(0);
    expect(linkedList.head.Element).toBe(2);
    expect(linkedList.tail.Element).toBe(2);
  });

  it('should return 1 in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(2);
    expect(linkedList.Remove(2)).toBe(1);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(1);
  });

  /*RemoveAt method tests */
  it('should throw exception', () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.RemoveAt(-1)).toThrow();
    expect(() => linkedList.RemoveAt(1)).toThrow();
  });

  it('should return first element and remove first element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    expect(linkedList.RemoveAt(0)).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should return first element and remove first element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.RemoveAt(0)).toBe(1);
    expect(linkedList.head.Element).toBe(2);
    expect(linkedList.tail.Element).toBe(2);
  });

  it('should return second element and remove second element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.Add(1);
    linkedList.Add(2);
    expect(linkedList.RemoveAt(1)).toBe(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(1);
  });

});