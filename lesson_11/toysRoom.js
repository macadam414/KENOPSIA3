// сразу про паттерны тут напишу

// кажется, просто написав это все я применил пару паттернов
// самый очевидный — Factory (мой метод addToy)
// еще есть два Обзервера — ensureAllClassesPresent и displayAllToys
// а еще chatGPT подсказывает, что у меня есть паттерн Стратегии в методе sortToysBy 
// да-да, я залил чату GPT код, с вопросом о том, какие паттерны тут есть, а какие можно добавить на случай, если бы их было недостаточно
// честно скажу, я не пересматривал занятие про паттерны, выполняя это, поэтому прибег к такому немного читерному способу... 
// с другой стороны: а читерство ли это? 
// интересно ваше мнение по этому вопросу

// а теперь можете кровоточить глазами от этого страшного кода, в котором где-нибудь да найдется ошибка в правилах чистого кода
// (даже не где-нибудь, а, я уверен, много где)


const Toys = require('./toys')
const Cars = require('./cars')
const Dolls = require('./dolls')
const Balls = require('./balls')
const Cubes = require('./cubes')





class ToyRoom {
    constructor(budget) {
      this.budget = budget;
      this.toys = [];
    }


    addToy(toy) {
        if (toy.price <= this.budget) {
         this.toys.push(toy);
        this.budget -= toy.price;
         console.log(`${toy.name} добавлен(а) в комнату! Остаток бюджета: ${this.budget}`);
        } else {
         console.log(`Недостаточно средств для покупки ${toy.name}`);
        }
    } 

    

    sortToysBy(parameter) {
        this.toys.sort((a, b) => a[parameter] - b[parameter]);
        console.log(`Игрушки отсортированы по параметру ${parameter}`);
    }



    findToysInRange(parameter, min, max) {
        const toysInRange = this.toys.filter(toy => toy[parameter] >= min && toy[parameter] <= max);
        console.log(`Игрушки в диапазоне от ${min} до ${max} по параметру ${parameter}:`);

        toysInRange.forEach (toy => {
            console.log(`${toy.constructor.name}: ${toy.name}, Цена: ${toy.price}, Размер: ${toy.size}`);
        })
      
    }

// ну тут, наверное, стоит объяснить идею методов, потому что в задании такого не было
// я представил себе несуществующих детей в этой детской комнате и мне стало их жалко, потому что половина игрушек,
// которые я добавил для примера, не были куплены, и вышло так, что у них были только машины и куклы
// ну вот я и придумал такой прикол, чтобы проверять наличие хотя бы одной игрушки в каждом классе, а при недостатке возвращалась бы
// в условный магазин, где была куплена, самая дорогая игрушка из класса, в котором больше всего сущностей игрушек
// очень гуманно я считаю :) для меня так даже слишком 
// 




 
    ensureAllClassesPresent() {
        const classesPresent = new Set();
    
        this.toys.forEach(toy => {
          if (!(toy instanceof Toys)) {
            console.log('Ошибка: Некорректный объект игрушки');
            return;
          }
    
          classesPresent.add(toy.constructor);
        });
    
        if (![Cars, Dolls, Balls, Cubes].every(cls => classesPresent.has(cls))) {
          console.log('Не хватает какого-то класса. Продаем игрушку...');
          const classToSell = this.findMostFrequentClass();
          this.sellToyFromClass(classToSell);
        } else {
          console.log('В комнате есть хотя бы по одной игрушке каждого класса.');
        }
      }
    
      // а это вспомогательный метод для определения класса с наибольшим количеством игрушек в комнате 
      findMostFrequentClass() {
        const classInstances = {};
      
        this.toys.forEach(toy => {
          const className = toy.constructor;
          classInstances[className] = classInstances[className] || [];
          classInstances[className].push(toy);
        });
      
        let mostFrequentClass = null;
        let maxCount = 0;
      
        for (const className in classInstances) {
          if (classInstances[className].length > maxCount) {
            maxCount = classInstances[className].length;
            mostFrequentClass = classInstances[className][0];
          }
        }
      
        return mostFrequentClass;  
      }
      
 
      sellToyFromClass(classInstanceToSell) {
        const classToSell = classInstanceToSell.constructor;
        const toysOfClass = this.toys.filter(toy => toy.constructor === classToSell);
      
        if (toysOfClass.length > 0) {
          const maxPriceToy = toysOfClass.reduce((maxToy, currentToy) => (currentToy.price > maxToy.price) ? currentToy : maxToy, toysOfClass[0]);
      
          this.budget += maxPriceToy.price;
          this.toys = this.toys.filter(toy => toy !== maxPriceToy);
          console.log(`Продана самая дорогая игрушка ${maxPriceToy.name} за ${maxPriceToy.price} денег. Остаток бюджета: ${this.budget}`);
        } else {
          console.log(`Ошибка: Не удалось продать игрушку. Класс ${classToSell.name} отсутствует в комнате.`);
        }
      }
      
      displayAllToys() {
        console.log('Игрушки в комнате:');
        this.toys.forEach(toy => {
          console.log(`${toy.constructor.name}: ${toy.name}, Цена: ${toy.price}, Размер: ${toy.size}`);
        });
      }
    }
    
    




module.exports = ToyRoom
