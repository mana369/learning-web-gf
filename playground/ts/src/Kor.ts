export class Kor implements Sikidom {
    constructor(public r: number) {}

    getKerulet() {
        return 2 * this.r * Math.PI;
    }

    getTerulet() {
        return Math.pow(this.r, 2) * Math.PI;
    }

    getTipus() {
        return "Kor";
    }
}