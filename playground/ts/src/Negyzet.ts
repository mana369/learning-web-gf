import { Kor } from "./Kor";
import { Teglalap } from "./Teglalap";

export class Negyzet extends Teglalap {
    constructor (a: number) {
        super(a, a);
    }

    getTipus(): string {
        return "Negyzet";
    }

    getAtlo() {
        const negyzetAtlo = Math.sqrt(this.a * this.a + this.a * this.a)
        return Math.trunc(negyzetAtlo * 1000)/1000;
    }

    getBeirhatoKor(): Kor {
        return new Kor(this.a / 2);
    }

    getKoreIrhatoKor(): Kor {
        return new Kor(this.getAtlo() / 2);
    }
}