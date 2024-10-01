// 1. Musbat sonni 1 ga oshirish
let a = 5; 
if (a > 0) {
    a += 1;
}
console.log("1: ", a);

// 2. Musbat sonni 1 ga kamaytirish
let b = 5; 
if (b > 0) {
    b -= 1;
}
console.log("2: ", b);

// 3. Musbatni 1 ga oshirish, manfiyni 2 ga kamaytirish, 0 bo'lsa 10 qilish
let c = 0; 
if (c > 0) {
    c += 1;
} else if (c < 0) {
    c -= 2;
} else {
    c = 10;
}
console.log("3: ", c);

// 4. Musbat sonlar sonini aniqlash
let d = 1, e = -2, f = 3;
let positiveCount = 0;
if (d > 0) positiveCount++;
if (e > 0) positiveCount++;
if (f > 0) positiveCount++;
console.log("4: ", positiveCount);

// 5. Manfiy sonlar sonini aniqlash
let g = 1, h = -2, i = 3;
let negativeCount = 0;
if (g < 0) negativeCount++;
if (h < 0) negativeCount++;
if (i < 0) negativeCount++;
console.log("5: ", negativeCount);

// 6. Katta sonni aniqlash
let j = 5, k = 3;
let max = (j > k) ? j : k;
console.log("6: ", max);

// 7. Kichik sonning tartib raqamini aniqlash
let l = 5, m = 3;
let minIndex = (l < m) ? 'l' : 'm';
console.log("7: ", minIndex);

// 8. Avval kattasini, keyin kichigini chiqarish
let n = 5, o = 3;
if (n > o) {
    console.log("8: ", n, o);
} else {
    console.log("8: ", o, n);
}

// 9. a kichik, b katta qilish
let p = 5, q = 3;
if (p >= q) {
    let temp = p;
    p = q;
    q = temp;
}
console.log("9: ", p, q);

// 10. Teng bo'lmasa yig'indini, teng bo'lsa 0 qilish
let r = 5, s = 3;
if (r !== s) {
    r = s = r + s;
} else {
    r = s = 0;
}
console.log("10: ", r, s);

// 11. Teng bo'lmasa kattasini, teng bo'lsa 0 qilish
let t = 5, u = 3;
if (t !== u) {
    t = u = (t > u) ? t : u;
} else {
    t = u = 0;
}
console.log("11: ", t, u);

// 12. Kichik sonni aniqlash
let v = 5, w = 3, x = 8;
let min = Math.min(v, w, x);
console.log("12: ", min);

// 13. O'rtacha sonni aniqlash
let y = 5, z = 3, aa = 8;
let mid = [y, z, aa].sort((x, y) => x - y)[1];
console.log("13: ", mid);

// 14. Sonlarni kichikdan kattaga chiqarish
let ab = 5, ac = 3, ad = 8;
let sorted = [ab, ac, ad].sort((x, y) => x - y);
console.log("14: ", sorted);

// 15. Yig'indisi eng katta bo'lgan ikkita sonni chiqarish
let ae = 5, af = 3, ag = 8;
let sortedSum = [ae, af, ag].sort((x, y) => y - x);
console.log("15: ", sortedSum[0], sortedSum[1]);

// 16. Son musbat ekanligini tekshirish
let ah = 5;
console.log("16: ", ah > 0);

// 17. Son toq ekanligini tekshirish
let ai = 5;
console.log("17: ", ai % 2 !== 0);

// 18. Son juft ekanligini tekshirish
let aj = 4;
console.log("18: ", aj % 2 === 0);

// 19. a > 2 va b <= 3 shartini tekshirish
let ak = 5, al = 3;
console.log("19: ", ak > 2 && al <= 3);

// 20. a >= 0 yoki b < -2 shartini tekshirish
let am = 5, an = -3;
console.log("20: ", am >= 0 || an < -2);

// 21. a <= b <= c shartini tekshirish
let ao = 1, ap = 2, aq = 3;
console.log("21: ", ao <= ap && ap <= aq);

// 22. b soni a va c orasida yotishini tekshirish
let ar = 1, as = 2, at = 3;
console.log("22: ", ar < as && as < at);

// 23. Ikkala son toq ekanligini tekshirish
let au = 5, av = 7;
console.log("23: ", au % 2 !== 0 && av % 2 !== 0);

// 24. Hech bo'lmaganda bittasi toq ekanligini tekshirish
let aw = 4, ax = 7;
console.log("24: ", aw % 2 !== 0 || ax % 2 !== 0);

// 25. Faqat bittasi toq ekanligini tekshirish
let ay = 4, az = 7;
console.log("25: ", (ay % 2 !== 0 && az % 2 === 0) || (ay % 2 === 0 && az % 2 !== 0));
 
//26.
// Valyuta kurslari
let dollarToSum = 11000.34;
let euroToSum = 12354.03;

let ticketPrice = 500 * dollarToSum;  // Samolyot bileti $500
let hotelPrice = 250 * dollarToSum;   // Mehmonxona to'lovi $250
let entertainmentPrice = 120 * euroToSum; // Muloqot joylari uchun 120 yevro

// Xarajatlar yig'indisi
let totalCost = ticketPrice + hotelPrice + entertainmentPrice;

// Alisherning mablag'i
let alisherMoney = prompt("Alisherda qancha pul borligini so'mda kiriting:");

// Pul yetarlimi yoki yo'qmi tekshirish
if (alisherMoney >= totalCost) {
    console.log("Oq yo'l, Alisher!");
} else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}
