import tabletcase from "../assets/images/tabletcase.png"
import heels from "../assets/images/heels.png"
import glasses from "../assets/images/glasses.png"
import phone from "../assets/images/phone.png"
import lamp from "../assets/images/lamp.png"
import coat from "../assets/images/coat.png"
import flowers from "../assets/images/flowers.png"
import earphones from "../assets/images/earphones.png"
import headphones from "../assets/images/headphones.png"
import bed from "../assets/images/bed.png"
import dog from "../assets/images/dog.png"
import chair from "../assets/images/chair.png"
import tenis from "../assets/images/tenis.png"
import pillow from "../assets/images/pillow.png"
import cat from "../assets/images/cat.png"
import book from "../assets/images/book.png"
import notebook from "../assets/images/notebook.png"
import lipstick from "../assets/images/lipstick.png"
import sneakers from "../assets/images/sneakers.png"
import car from "../assets/images/car.png"
import perfume from "../assets/images/perfume.png"
import keys from "../assets/images/keys.png"
import cupcake from "../assets/images/cupcake.png"
import gramophone from "../assets/images/gramophone.png"
import coffeeMaker from "../assets/images/coffeemaker.png"
import bunny from "../assets/images/bunny.png"
import coffee from "../assets/images/coffee.png"


export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const sizes = [2.5,3,3.5]
 
const tabletCaseObj = {
    name: 'tabletCase',
    image: tabletcase,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const heelsObj = {
    name: 'heels',
    image: heels,
    width: shuffle(sizes)[0],
    left: Math.random() * ((window.innerWidth - (window.innerWidth/3))),
    fit: 'no'
}
const glassesObj = {
    name: 'glasses',
    image: glasses,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const phoneObj = {
    name: 'phone',
    image: phone,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const lampObj = {
    name: 'lamp',
    image: lamp,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const coatObj = {
    name: 'coat',
    image: coat,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const flowersObj = {
    name: 'flowers',
    image: flowers,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const earphonesObj = {
    name: 'earphones',
    image: earphones,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const headphonesObj =  {
    name: 'headphones',
    image: headphones,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const bedObj = {
    name: 'bed',
    image: bed,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const dogObj = {
    name: 'dog',
    image: dog,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const chairObj = {
    name: 'chair',
    image: chair,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const tenisObj = {
    name: "tenis",
    image: tenis,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const pillowObj = {
    name: 'pillow',
    image: pillow,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const catObj = {
    name: 'cat',
    image: cat,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const bookObj = {
    name: 'book',
    image: book,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const notebookObj = {
    name: 'notebook',
    image: notebook,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const lipstickObj = {
    name: 'lipstick',
    image: lipstick,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const sneakersObj = {
    name: 'sneakers',
    image: sneakers,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const carObj = {
    name: 'car',
    image: car,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const perfumeObj = {
    name: 'perfume',
    image: perfume,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const keysObj = {
    name: 'keys',
    image: keys,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const cupcakeObj = {
    name: 'cupcake',
    image: cupcake,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const gramophoneObj = {
    name: 'gramophone',
    image: gramophone,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'no'
}
const coffeeMakerObj = {
    name: 'coffeeMaker',
    image: coffeeMaker,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const bunnyObj = {
    name: 'bunny',
    image: bunny,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}
const coffeeObj = {
    name: 'coffee',
    image: coffee,
    width: shuffle(sizes)[0],
    left: Math.random() * (window.innerWidth - (window.innerWidth/3)),
    fit: 'yes'
}

export  const images = [tabletCaseObj, heelsObj, glassesObj, phoneObj, lampObj, coatObj, flowersObj, earphonesObj, headphonesObj, bedObj, dogObj, chairObj, tenisObj, pillowObj, catObj, bookObj, notebookObj, lipstickObj, sneakersObj, carObj, perfumeObj, keysObj, cupcakeObj, gramophoneObj, coffeeMakerObj, bunnyObj, coffeeObj];
// export shuffle;
