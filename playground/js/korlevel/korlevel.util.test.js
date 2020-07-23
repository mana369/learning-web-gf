
const { getUserMessages } = require ('./korlevel.util');

describe ('The getUserMessage fn test', () => { 
    const personData = "Szivecske;1989;17;kávé\nDobos Katalin;1989;20;sampon";
    const personData2 = "Szivecske ;1989;17; kávé\nDobos Katalin ;1989 ;20;sampon";
    const personData3 = "Szivecske ;2020; ; kávé\nDobos Katalin ;1989 ;20;sampon";
    const personData4 = "Szivecske ;1989; 15; \nDobos Katalin ;1989 ;20;sampon";
    const testTemplate = "Kedves %name%!\nEzt a levelet azért küldjünk önnek, mert ma van a %age%. születésnapja.\n"+
        "Ezen alkalomból szeretnék megajándékozni egy %discount% % mértékű kedvezménnyel az ön által kedvelt %product% nevű termékre.\n"+
        "Üdvözletel: Minta Kompánia.";
    

    it('Test of userMessage function', () => {
        
        expect(getUserMessages(personData, testTemplate))
            .toEqual("Kedves Szivecske!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 17 % mértékű kedvezménnyel az ön által kedvelt kávé nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.\n"+
            "Kedves Dobos Katalin!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 20 % mértékű kedvezménnyel az ön által kedvelt sampon nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.")
    });
    
    it('test of userMessage fn with spaces', () => {

        expect(getUserMessages(personData2, testTemplate))
            .toEqual("Kedves Szivecske!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 17 % mértékű kedvezménnyel az ön által kedvelt kávé nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.\n"+
            "Kedves Dobos Katalin!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 20 % mértékű kedvezménnyel az ön által kedvelt sampon nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.")
    });    
    it('test of userMessage fn without some user data(discount)', () => {

        expect(getUserMessages(personData3, testTemplate))
            .toEqual("Kedves Szivecske!\nEzt a levelet azért küldjünk önnek, mert ma van a 0. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 0 % mértékű kedvezménnyel az ön által kedvelt kávé nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.\n"+
            "Kedves Dobos Katalin!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 20 % mértékű kedvezménnyel az ön által kedvelt sampon nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.")
    });
    it('test of userMessage fn without some user data(product)', () => {

        expect(getUserMessages(personData4, testTemplate))
            .toEqual("Kedves Szivecske!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 15 % mértékű kedvezménnyel az ön által kedvelt  nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.\n"+
            "Kedves Dobos Katalin!\nEzt a levelet azért küldjünk önnek, mert ma van a 31. születésnapja.\n"+
            "Ezen alkalomból szeretnék megajándékozni egy 20 % mértékű kedvezménnyel az ön által kedvelt sampon nevű termékre.\n"+
            "Üdvözletel: Minta Kompánia.")
    });
});
