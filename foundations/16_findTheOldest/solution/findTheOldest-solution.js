const getAge = function(death, birth) {
        
    if (!death) {
        death = new Date().getFullYear();
    }
        return death - birth;
}

const findTheOldest = function (people) {


  return people.reduce((oldest, currentPerson) => {
    const oldest = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentPerson = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

    return oldest > currentPerson ? oldest : currentPerson;

  });

}
/* ALTERNATIVE SOLUTION
const getAge = function (person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
  // if the left side has any other value, no assignment happens
  // here, we use ??= to set the current year for our subtraction below only if there is no year of death
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
};
*/

module.exports = findTheOldest;
