class Sokszog {
    getTipus() {
        return "Sokszog";
    }
}

class Teglalap extends Sokszog {
    a;
    b;

    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    getTerulet() {
        return this.a * this.b;
    }

    getKerulet() {
        return 2 * this.a + 2* this.b;
    }

    getTipus() {
        return "Teglalap";
    }

}

class Negyzet extends Teglalap {
    constructor (a) {
        super(a, a);
    }

    getTipus() {
        return "Negyzet";
    }
}

function kiir(teglalap) {
    console.log(`A ${teglalap.getTipus()} oldalai: a=${teglalap.a}, b=${teglalap.b}.\nKerulete: ${teglalap.getKerulet()}\nTerulete: ${teglalap.getTerulet()}\n`);
}

// --------------------------------------

const teglalap1 = new Teglalap(10, 20);
kiir(teglalap1);

const teglalap2 = new Teglalap(7, 9);
kiir(teglalap2);

const negyzet1 = new Negyzet(10);
kiir(negyzet1);

const negyzet2 = new Negyzet(30);
kiir(negyzet2);