const bytes = new Uint8Array([
    83, 122, 101, 114, 101, 116,
    108, 101, 107, 32, 77, 97,
    110, 97, 33, 32, 58, 41
]);
console.log(new TextDecoder().decode(bytes));
