import LinkedList from './LinkedList.js';

console.log('Happy developing ✨')

const list = new LinkedList();

console.log(list.toString());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");


console.log(list.size()); // 6 items
console.log(list.getHead()); // turtle
console.log(list.getTail()); // snake
console.log(list.at(3)); // parrot
console.log(list.pop()); // returns snake
console.log(list.size()); // 5 items
console.log(list.getTail()); // hamster
console.log(list.contains("cat")); // true
console.log(list.contains("Parrot")); // true - case is ignored
console.log(list.contains("hamster")); // true
console.log(list.contains("hámster")); // false - accents make it different
console.log(list.contains("snake")); // false - is popped
console.log(list.find("parrot")); // 3
console.log(list.find("snake")); // null
console.log(list.toString()); // ( turtle ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> null


// extra credit
list.insertAt(3,"dinosaur");
console.log(list.toString()); // ( turtle ) -> ( dog ) -> ( cat ) -> ( dinosaur ) -> ( parrot ) -> ( hamster ) -> null

list.removeAt(4);
console.log(list.toString()); // ( turtle ) -> ( dog ) -> ( cat ) -> ( dinosaur ) -> ( hamster ) -> null
list.removeAt(9); // does nothing as list is not as long
console.log(list.toString()); // ( turtle ) -> ( dog ) -> ( cat ) -> ( dinosaur ) -> ( hamster ) -> null






