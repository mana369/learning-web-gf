import { Haromszog } from "./Haromszog";

test ('A haromszog oldalainak erteke.', () => {
    const a = 3;
    const b = 5;
    const c = 7;
    const ma = 4;

    const haromszog = new Haromszog(a, b, c, ma);

    expect(haromszog.a).toBe(a);
    expect(haromszog.b).toBe(b);
    expect(haromszog.c).toBe(c);
})

test ('A haromszog letezik.', () => {
    const a = 3;
    const b = 5;
    const c = 7;
    const ma = 4;

    //const haromszogLetezik = true;
    const haromszog = new Haromszog(a, b, c, ma);

    expect(haromszog.isLetezik()).toBeTruthy();
})

test ('A haromszog tipusanak erteke.', () => {
    const a = 3;
    const b = 5;
    const c = 7;
    const ma = 4;

    const haromszog = new Haromszog(a, b, c, ma);

    expect(haromszog.getTipus()).toMatch("Haromszog");
})

test ('A haromszog teruletenek erteke.', () => {
    const a = 3;
    const b = 5;
    const c = 7;
    const ma = 4;
    const haromszog = new Haromszog(a, b, c, ma);

expect(haromszog.getTerulet()).toEqual(6);
})

test ('A haromszog keruletenek erteke.', () => {
    const a = 3;        
    const b = 5;
    const c = 7;
    const ma = 4;
    const haromszog = new Haromszog(a, b, c, ma);
    
expect(haromszog.getKerulet()).toEqual(15);
})