
let regexp = /love/

alert(regexp.test('I love JavaScript')); // true

alert(regexp.test('I JavaScript')); // false


regexp = /ing$/;

alert(regexp.test('Good morning')); // true

alert(regexp.test('Good morning!')); // false

