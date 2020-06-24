import { Haromszog } from "./Haromszog";

describe('Haromszog tesztek.', () => {
    const a = 3;
    const b = 5;
    const c = 7;
    const ma = 4;

    const haromszog = new Haromszog(a, b, c, ma);

    it('A haromszog oldalainak erteke.', () => {

        expect(haromszog.a).toBe(a);
        expect(haromszog.b).toBe(b);
        expect(haromszog.c).toBe(c);
    });

    it('A haromszog letezik.', () => {
        //const haromszogLetezik = true;

        expect(haromszog.isLetezik()).toBeTruthy();
    });

    it('A haromszog tipusanak erteke.', () => {

        expect(haromszog.getTipus()).toMatch("Haromszog");
    });

    it('A haromszog teruletenek erteke.', () => {

        expect(haromszog.getTerulet()).toEqual(6);
    });

    it('A haromszog keruletenek erteke.', () => {
        
        expect(haromszog.getKerulet()).toEqual(15);
    });

})