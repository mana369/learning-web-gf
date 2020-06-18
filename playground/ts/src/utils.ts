function kiir(sikidom: Sikidom) {
    if (sikidom instanceof Kor) {
        console.log(`A ${sikidom.getTipus()} r = ${sikidom.r} , kerulete: ${sikidom.getKerulet()} es terulete: ${sikidom.getTerulet()}\n`);
    } else if (sikidom instanceof Teglalap) {
        console.log(`A ${sikidom.getTipus()} a = ${sikidom.a}, b = ${sikidom.b}, kerulete: ${sikidom.getKerulet()} es terulete: ${sikidom.getTerulet()}\n`);
    } else {
        console.log(`A ${sikidom.getTipus()} kerulete: ${sikidom.getKerulet()} es terulete: ${sikidom.getTerulet()}\n`);
    }
}