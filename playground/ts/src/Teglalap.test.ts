import { Teglalap } from "./Teglalap";

test('A teglalap oldalainak helyes erteke', () => {
    const a = 3;
    const b = 5;
    const teglalap = new Teglalap (a,b);

    expect(teglalap.a).toBe(a);
    expect(teglalap.b).toBe(b);
})

test('A teglalap terulet helyes erteke', () => {
    const a = 3;
    const b = 5;
    const teglalapTerulete = 15;

    const teglalap = new Teglalap (a,b);

    expect(teglalap.getTerulet()).toBe(teglalapTerulete);
})

test('A teglalap kerulet helyes erteke', () => {
    const a = 3;
    const b = 5;
    const teglalapKerulete = 16;

    const teglalap = new Teglalap (a,b);

    expect(teglalap.getKerulet()).toBe(teglalapKerulete);
})

test('A teglalap tipus helyes erteke', () => {
    const a = 3;
    const b = 5;
    const tipus = "Teglalap";

    const teglalap = new Teglalap (a,b);

    expect(teglalap.getTipus()).toBe(tipus);
})
