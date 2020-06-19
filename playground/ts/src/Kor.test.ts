import { Kor } from "./Kor";

test ("A kor sugaranak helyes erteke.", () => {
    const r = 3;
    const kor = new Kor(r); 
    
    expect(kor.r).toBe(r);
})

test('A kor kerulet helyes erteke', () => {
    const r = 3;
    const kor = new Kor(r); 

    const korKerulet = 18.849

    expect(kor.getKerulet()).toBe(korKerulet);
})

test('A kor terulet helyes erteke', () => {
    const r = 3;
    const kor = new Kor(r); 

    const korTerulet = 28.274;

    expect(kor.getTerulet()).toBe(korTerulet);
})

test ('A kor tipus helyes erteke.', () => {
    const r = 3;
    const kor = new Kor(r); 
    const tipus = "Kor";

    expect(kor.getTipus()).toBe(tipus);
})
