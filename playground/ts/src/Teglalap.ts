
class Teglalap implements Sikidom {
    public a: number;
    public b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getTerulet(): number {
        return this.a * this.b;
    }

    getKerulet(): number {
        return 2 * this.a + 2* this.b;
    }

    getTipus(): string {
        return "Teglalap";
    }

}