const getAge = function(death, birth) {
        
    if (!death) {
        death = new Date().getFullYear();
    }
        return death - birth;
}

const findTheOldest = function (people) {


  return people.reduce((oldest, currentPerson) => {
    const getOldest = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const getCurrentPerson = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

    return getCurrentPerson > getOldest ? currentPerson : oldest;

  });




};
// Do not edit below this line
module.exports = findTheOldest;
