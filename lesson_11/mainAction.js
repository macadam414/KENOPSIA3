const Cars = require('./cars')
const Dolls = require('./dolls')
const Balls = require('./balls')
const Cubes = require('./cubes')
const ToyRoom = require('./toysRoom')

const smallCar = new Cars('Маленькая машина', 10, 'small', 'Toyota');
const mediumCar = new Cars('Средняя машина', 18, 'medium', 'Honda');
const bigCar = new Cars('Большая машина', 25, 'big', 'Ford')

const smallDoll = new Dolls('Маленькая кукла', 8, 'small', 'red');
const mediumDoll = new Dolls('Средняя кукла', 15, 'medium', 'green');
const bigDoll = new Dolls('Большая кукла', 20, 'big', 'blue');

const smallBall = new Balls('Маленький мяч', 10, 'small', 'tennis');
const mediumBall = new Balls('Средний мяч', 14, 'medium', 'volleyball');
const largeBall = new Balls('Большой мяч', 20, 'large', 'football');

const smallCube = new Cubes('Маленький кубик', 8, 'small', 'wood');
const mediumCube = new Cubes('Средний кубик', 10, 'medium', 'wood');
const bigCube = new Cubes('Большой кубик', 12, 'big', 'wood');


const toyRoom = new ToyRoom(100);


toyRoom.addToy(bigCar);
toyRoom.addToy(smallCar);
toyRoom.addToy(mediumCar);
toyRoom.addToy(smallDoll);
toyRoom.addToy(mediumDoll);
toyRoom.addToy(bigDoll);
toyRoom.addToy(smallBall);
toyRoom.addToy(mediumBall);
toyRoom.addToy(largeBall);
toyRoom.addToy(smallCube);
toyRoom.addToy(mediumCube);
toyRoom.addToy(bigCube);



toyRoom.ensureAllClassesPresent()

toyRoom.addToy(mediumBall);

toyRoom.ensureAllClassesPresent()

toyRoom.addToy(bigCube);

toyRoom.ensureAllClassesPresent()



toyRoom.sortToysBy('size');

toyRoom.displayAllToys()


toyRoom.findToysInRange('price', 10, 18);


// вообще, просматривая уже более-менее финальную версию кода, я думаю,
// что можно было бы автоматизировать вот этот прикол с проверкой наличия всех классов игрушек в комнате,
// а условием стало бы как раз невозможность покупки игрушки
// ну типа... когда будет невозможность купить игрушку, то оно автоматически вызывало бы метод ensureAllClassesPresent, который уже
// выполнял бы все свои действия, а потом, без надобности в повторном вызове addToy для того же объекта, покупал бы эту игрушку, на которую
// сначала не хватало бюджета
// но, скажу честно, я представляю, что потрачу на реализацию этого еще часа два, так что, пожалуй, не стану
