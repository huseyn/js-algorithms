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
    linkedList.add(1);
    expect(linkedList.Count).toBe(1);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    linkedList.add(2);
    expect(linkedList.Count).toBe(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(2);
    linkedList.add(3);
    expect(linkedList.Count).toBe(3);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(3);
  });

  /*IndexOf method tests*/
  it('should return index of node in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.indexOf(3)).toBe(-1);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(3)).toBe(2);
    expect(linkedList.indexOf(4)).toBe(-1);
  });

  /*Remove method tests*/
  it('should return -1 in linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.remove(1)).toBe(-1);
  });

  it('should return 0 and remove node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    expect(linkedList.remove(1)).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should return 0 and remove node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.remove(1)).toBe(0);
    expect(linkedList.head.Element).toBe(2);
    expect(linkedList.tail.Element).toBe(2);
  });

  it('should return 1 in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(2);
    expect(linkedList.remove(2)).toBe(1);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(1);
  });

  /*RemoveAt method tests */
  it('should throw exception when try to remove', () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.removeAt(-1)).toThrow();
    expect(() => linkedList.removeAt(1)).toThrow();
  });

  it('should return first element and remove first element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    expect(linkedList.removeAt(0)).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should return first element and remove first element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.removeAt(0)).toBe(1);
    expect(linkedList.head.Element).toBe(2);
    expect(linkedList.tail.Element).toBe(2);
  });

  it('should return second element and remove second element in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.removeAt(1)).toBe(2);
    expect(linkedList.head.Element).toBe(1);
    expect(linkedList.tail.Element).toBe(1);
  });

  /*Insert method tests */
  it('should throw exception when try to insert', () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.insert(-1, 5)).toThrow();
  });
  
});