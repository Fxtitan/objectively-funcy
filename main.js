// Your code here.
const getFirstName = (firstName) => {
  return firstName.firstName;
}

const getLastName = (lastName) => {
  return lastName.lastName;
}

const getFullName = (fullName) => {
  return fullName.firstName + ' ' + fullName.lastName;
}

const setFirstName = (obj, str) => {
  return obj.firstName = str;
}

const setAge = (givenPerson, num) => {
  return givenPerson.age = num;
}

const giveBirthday = (givenPerson) => {
  if (!givenPerson.age) {
    return givenPerson.age = 1;
  } else {
  return givenPerson.age + givenPerson.age ++;
  }
}

const marry = (singleMan, singleWoman ) => {
  singleMan.married = true;
  singleWoman.married = true;
  singleMan.spouseName = getFullName(singleWoman);
  singleWoman.spouseName = getFullName(singleMan);
}

const divorce = (marriedMan, marriedWoman) => {
  marriedMan.married = false;
  marriedWoman.married = false;
  delete marriedMan.spouseName;
  delete marriedWoman.spouseName;
}





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
