import { Negyzet } from "./Negyzet";
import { Haromszog } from "./Haromszog";
import { Kor } from "./Kor";
import { Teglalap } from "./Teglalap";
import { kiir } from "./utils";


const teglalap1 = new Teglalap(10, 20);
kiir(teglalap1);

const teglalap2 = new Teglalap(7, 9);
kiir(teglalap2);

const negyzet1 = new Negyzet(10);
kiir(negyzet1);

const negyzet2 = new Negyzet(30);
kiir(negyzet2);

const haromszog = new Haromszog(3,5,7,4);
kiir(haromszog);

const kor = new Kor(3);
kiir(kor);

console.log("Negyyetbe irhato kor")
kiir(negyzet1.getBeirhatoKor());

console.log("Negyyet kore irhato kor")
kiir(negyzet1.getKoreIrhatoKor());
