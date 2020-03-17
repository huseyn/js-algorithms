class Hashtable {
    constructor(length) {
        this.array = new Array(length);
        this.length = length;
    }

    hashCode(element) {
        var h = 0, l = element.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + element.charCodeAt(i++) | 0;
        return Math.abs(h);
    };

    put(element) {
        const hashCode = this.hashCode(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            this.array[index] = element;
        } else {
            this.array[hashCode] = element;
        }
    }
}

const ht = new Hashtable(1000);
ht.put('huseyn');