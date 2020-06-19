import { Sikidom } from "./Sikidom";

export class Kor implements Sikidom {
    constructor(public r: number) {}

    getKerulet() {
        const kerulet = 2 * this.r * Math.PI;
        return Math.trunc(kerulet * 1000) / 1000;
    }

    getTerulet() {
        const terulet = Math.pow(this.r, 2) * Math.PI;
        return Math.trunc(terulet * 1000) / 1000;
    }

    getTipus() {
        return "Kor";
    }
}