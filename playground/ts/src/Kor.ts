import { Sikidom } from "./Sikidom";

export class Kor implements Sikidom {
    public _r: number;

    constructor(r: number) {
        this._r = r;
    }

    get r() {
        return this._r;
    }

    get d() {
        return this._r * 2;
    }

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