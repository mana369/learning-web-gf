import { Sikidom } from "Sikidom";

export class Haromszog implements Sikidom {
    constructor(public a: number, public b: number, public c: number) {}

    isLetezik(): boolean {
        return this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.a + this.b;
    }

    getTipus() {
        return "Haromszog";
    }

    getTerulet() {
        return 0;
    }

    getKerulet() {
        return this.a + this.b + this.c;
    }
}