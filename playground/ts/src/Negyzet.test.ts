import { Negyzet } from "./Negyzet";

describe('Negyzet tesztek.', () => {
    const aSide = 5;
    const negyzet = new Negyzet(aSide);

    it('A negyzet oldalainak erteke.', () => {

        expect(negyzet.a).toBe(aSide);
    });

    it('A negyzet tipusanak erteke.', () => {

        expect(negyzet.getTipus()).toMatch("Negyzet");
    });


    it('A negyzet atlojanak erteke.', () => {

        const atloNegyzet = 7.071;

        expect(negyzet.getAtlo()).toEqual(atloNegyzet);
    })

    it('A negyzet beirhato korenek ertekelese.', () => {
        const beirhatokorSugara = 2.5;
        
        const kor = negyzet.getBeirhatoKor();
        expect(kor.r).toBe(beirhatokorSugara);
    })

    it('Negyzet kore irhato korenek kiertekelese.', () => {

        const koreirhatoKorSugara = 3.5355;
        const kor = negyzet.getKoreIrhatoKor(); 

        expect(kor.r).toBe(koreirhatoKorSugara);
    })
});
