/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

const showObjectKeys = (obj, key) => {
  const newObj = {...obj};
  delete newObj[key];
  return newObj;
}
console.log(showObjectKeys(audi));