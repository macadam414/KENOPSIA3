export class ObjectManipulator<T extends Record<string, any>> {

    constructor(protected obj: T) {}
  
    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & Record<K, V>> {
      return new ObjectManipulator({...this.obj, [key]: value});
    }
  
    public get<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
    }
  
    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
      const newObj = {...this.obj};
      delete newObj[key];
      return new ObjectManipulator(newObj);
    }
  
    public getObject(): T {
      return this.obj;
    }
  }
  
  const manipulator = new ObjectManipulator({
    name: 'John',
    age: 30,
    occupation: 'Developer',
  });
  
  console.log('Initial Object:');
  console.log(manipulator.getObject());
  console.log('----------------------');
  
  const modifiedObject = manipulator
    .set('age', 31)
    .set('city', 'New York')
    .delete('occupation');
  
  console.log('Modified Object:');
  console.log(modifiedObject.getObject());
  console.log('----------------------');