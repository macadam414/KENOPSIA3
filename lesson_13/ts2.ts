interface User {
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  
  type Person = User | Admin;
  
  const persons: Person[] = [
    {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
    },
    {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator',
    },
    {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
    },
    {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver',
    },
  ];

  persons.forEach((person, index) => {
    console.log(`Person ${index + 1}:`);
    console.log(JSON.stringify(person, null, 2));
    console.log('----------------------'); // ну типа для красивого разделения в консоли, очевидно
  });

