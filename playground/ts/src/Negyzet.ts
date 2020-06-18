export class Negyzet extends Teglalap {
    constructor (a: number) {
        super(a, a);
    }

    getTipus(): string {
        return "Negyzet";
    }

    getAtlo() {
        return Math.sqrt(this.a * this.a + this.a * this.a);
    }

    getBeirhatoKor(): Kor {
        return new Kor(this.a / 2);
    }

    getKoreIrhatoKor(): Kor {
        return new Kor(this.getAtlo() / 2);
    }
}