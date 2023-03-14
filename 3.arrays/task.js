function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) {
        return true;
      } else return false;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(item => item.gender === gender).map(item => item.age).reduce((acc, item, index, arr) => {
    acc = acc + item; 
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc; 
  }, 0);
 
  return result;
}