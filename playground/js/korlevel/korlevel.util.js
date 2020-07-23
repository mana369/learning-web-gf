
/**
 * 
 * @param {string} personData 
 * @param {string} messageTemplate 
 * @returns {string}
 */
function getUserMessages(personData, messageTemplate) {
    return personData
      .split('\n')
      //.map((element) => element.split(';'))
      .map((element) => {
        const it = element.split(';');
        return {
          name: it[0].trim(),
          birthday: Number(it[1]),
          age: getAge(it[1].trim()),
          discount: Number(it[2]),
          product: it[3].trim(),
        };
      })
      .map((person) => {
        return messageTemplate
          .replace('%name%', person.name)
          .replace('%age%', person.age)
          .replace('%discount%', person.discount)
          .replace('%product%', person.product);
      })
      .join('\n');
  }
  
  function getAge(birthday) {
    let today = new Date();
    let year = today.getFullYear();
    return year - birthday;
  }

module.exports = { getUserMessages };
