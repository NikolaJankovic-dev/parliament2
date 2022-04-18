export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const sizes = [2,2.5,3]
 
const tabletCase = {
    name: 'tabletCase',
    image: 'https://i.imgur.com/n2xfOsb.png',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'yes'
}
const heels = {
    name: 'heels',
    image: 'https://i.imgur.com/0UWvTI7.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const glasses = {
    name: 'glasses',
    image: 'https://i.imgur.com/q1l9D20.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'yes'
}
const phone = {
    name: 'phone',
    image: 'https://i.imgur.com/8eywuS4.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const lamp = {
    name: 'lamp',
    image: 'https://i.imgur.com/z6LquxB.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const coat = {
    name: 'coat',
    image: 'https://i.imgur.com/1i6kRBv.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const flowers = {
    name: 'flowers',
    image: 'https://i.imgur.com/Qsx1mYe.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const earphones = {
    name: 'earphones',
    image: 'https://i.imgur.com/ZaGIrPz.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'yes'
}
const headphones =  {
    name: 'headphones',
    image: 'https://i.imgur.com/IXg7PNG.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const bed = {
    name: 'bed',
    image: 'https://i.imgur.com/q6ZEvDu.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const dog = {
    name: 'dog',
    image: 'https://i.imgur.com/AUDXr9T.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const chair = {
    name: 'chair',
    image: 'https://i.imgur.com/dv57RfZ.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const tenis = {
    name: 'tenis',
    image: 'https://i.imgur.com/eIznayX.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const pillow = {
    name: 'pillow',
    image: 'https://i.imgur.com/EAYBdYA.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const cat = {
    name: 'cat',
    image: 'https://i.imgur.com/szM4aet.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const book = {
    name: 'book',
    image: 'https://i.imgur.com/saVX4lV.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const laptop = {
    name: 'laptop',
    image: 'https://i.imgur.com/kbBOby0.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const lipstick = {
    name: 'lipstick',
    image: 'https://i.imgur.com/T4fzUCZ.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const sneakers = {
    name: 'sneakers',
    image: 'https://i.imgur.com/hDVtTDk.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'no'
}
const car = {
    name: 'car',
    image: 'https://i.imgur.com/LWUoVKQ.png',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const perfume = {
    name: 'perfume',
    image: 'https://i.imgur.com/0V8Mu7U.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const keys = {
    name: 'keys',
    image: 'https://i.imgur.com/pKsXEPy.png',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'yes'
}
const cupcake = {
    name: 'cupcake',
    image: 'https://i.imgur.com/Q1sutoa.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const gramophone = {
    name: 'gramophone',
    image: 'https://i.imgur.com/CG5lCYo.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'no'
}
const coffeeMaker = {
    name: 'coffeeMaker',
    image: 'https://i.imgur.com/U1EwLgz.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}
const bunny = {
    name: 'bunny',
    image: 'https://i.imgur.com/Sq78OCL.jpg',
    width: shuffle(sizes)[0],
    left: Math.random() * 50,
    fit: 'yes'
}
const coffee = {
    name: 'coffee',
    image: 'https://i.imgur.com/U1EwLgz.png',
    width: shuffle(sizes)[0],
    left: Math.random() * -60,
    fit: 'yes'
}

 const images = [tabletCase, heels, glasses, phone, lamp, coat, flowers, earphones, headphones, bed, dog, chair, tenis, pillow, cat, book, laptop, lipstick, sneakers, car, perfume, keys, cupcake, gramophone, coffeeMaker, bunny, coffee];
export const imagesArray = shuffle(images);
// export shuffle;
