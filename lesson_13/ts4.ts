/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using the original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T, U>(mapper: (value: T) => U, input: T[]): U[];
export function map<T, U>(mapper: (value: T) => U): (input: T[]) => U[];
export function map<T, U>(mapper?: (value: T) => U, input?: T[]): U[] | ((input: T[]) => U[]) | typeof map {
  if (arguments.length === 1) {
    return (subInput: T[]) => subInput.map(mapper!);
  }
  if (arguments.length === 2) {
    return input!.map(mapper!);
  }
  return map as typeof map;
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using the original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: (value: T) => boolean): (input: T[]) => T[];
export function filter<T>(filterer: (value: T) => boolean, input: T[]): T[];
export function filter<T>(filterer?: (value: T) => boolean, input?: T[]): T[] | ((input: T[]) => T[]) | typeof filter {
  if (arguments.length === 1) {
    return (subInput: T[]) => subInput.filter(filterer!);
  }
  if (arguments.length === 2) {
    return input!.filter(filterer!);
  }
  return filter as typeof filter;
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number): (b: number) => number;
export function add(a: number, b: number): number;
export function add(a?: number, b?: number): number | ((b: number) => number) | typeof add {
  if (arguments.length === 1) {
    return (subB: number) => a! + subB;
  }
  if (arguments.length === 2) {
    return a! + b!;
  }
  return add as typeof add;
}


const mapResult = map((x: number) => x * 2)([1, 2, 3]);
console.log('mapResult:', mapResult);

const filterResult = filter((x: number) => x % 2 === 0)([1, 2, 3, 4, 5]);
console.log('filterResult:', filterResult);

const addResult = add(3)(4);
console.log('addResult:', addResult);

const addFunction = add(3);
const addFunctionResult = addFunction(4);
console.log('addFunctionResult:', addFunctionResult);