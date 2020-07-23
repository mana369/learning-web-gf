import { myProgram } from "./task-1";

test('test', () => {
    const a = myProgram(3,2);
    const b = myProgram(3,5);
    const c = myProgram(5,2);

    expect(a).toBeUndefined();
    expect(b).toBeUndefined();
    expect(c).toBeUndefined();
});