// ÖDEV1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

kisiler.filter((kisi) => kisi.age < 33).forEach((x) => console.log(x.name));

//ÖDEV2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.


const kücükler = kisiler.filter((kisi) => kisi.age < 33).map((x) => x.name);
console.log(kücükler);

//ÖDEV3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

const newList = kisiler.filter((kisi) => kisi.job === 'developer').map((x) => ({
  isim: x.name,
  yas: x.age
}));

console.log(newList);