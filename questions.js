var flashCards = require('./BasicCard.js');

var Queens = new flashCards.BasicCard('Who is the singer of Queens of the Stone Age?', 'Josh Homme');
console.log(Queens.front);
console.log(Queens.back);
console.log('------------------------');

var Foo = new flashCards.BasicCard('Who is the drummer for the Foo Fighters?', 'Taylor Hawkins');
console.log(Foo.front);
console.log(Foo.back);
console.log('------------------------');

var Nin = new flashCards.BasicCard('Who worked with Trent Reznor before starting his own industrial band?' 'Richard Patrick');
console.log(Nin.front);
console.log(Nin.back);
console.log('------------------------');

// Cloze Flashcards 
//

var Queens = new flashCards.BasicCard('Josh Homme is the singer of Queens of the Stone Age.', 'Josh Homme');
console.log(Queens.front);
console.log(Queens.cloze);
console.log(Queens.back);
console.log('------------------------');

var Foo = new flashCards.BasicCard('Taylor Hawkins is the drummer for the Foo Fighters.', 'Taylor Hawkins');
console.log(Foo.front);
console.log(Foo.cloze);
console.log(Foo.back);
console.log('------------------------');

var Nin = new flashCards.BasicCard('Richard Patrick worked with Trent Reznor before starting his own industrial band.' 'Richard Patrick');
console.log(Nin.front);
console.log(Nin.cloze);
console.log(Nin.back);
console.log('------------------------');


