class Node {
    constructor(element) {
        if (!element) {
            throw new Error("Invalid element");
        } else {
            this.element = element;
        }
    }

    addChild(node) {
        if (!node) {
            throw new Error("Invalid node");
        } else {
            if (node.hasParent) throw new Error("This node already has parent");
            this.hasParent = true;
            this.children.push(node);
        }
    }

    getChild(index) {
        if (index < 0) throw new Error("Index is out of bound");
        return this.children[index];
    }
}

class Tree {
    constructor(element, ...children) {
        if (!element) {
            throw new Error("Invalid element");
        } else {
            this.root = new Node(element);
            children.forEach((item) => this.root.children.push(item));
        }
    }
}

const tree = new Tree(1,
    [new Tree(12,
        [new Tree(121),
        new Tree(122),
        new Tree(123)])],
    new Tree(21,
        [new Tree(211),
        new Tree(222)]));

console.log(tree);

