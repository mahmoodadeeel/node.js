const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 40 ,50 ,70];
console.log(people);

module.exports = people;

//export multiple objects

module.exports = {
    people : people,
    ages: ages
}