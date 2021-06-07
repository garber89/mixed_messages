//messages array, messages will be objects
const messages = [{passage: 'John 14:17', quote:'Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you. '},{passage: 'Proverbs 1:23', quote: 'Turn you at my reproof: Behold, I will pour out my spirit unto you, I will make known my words unto you.'}, {passage: 'Matthew 10:26', quote: 'Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known.'}];
const inspiration = ['yes','this','works'];
const health = ['this','yes','works'];
const mindful = ['works','yes','this'];
let randNum = (arr) => Math.floor(Math.random()*arr.length)
const randomMessage = array => {
    const randNumber = randNum(messages);
    return `${array[randNumber].passage} ${array[randNumber].quote}`;}
const randomMessage2 = (array1, array2, array3) => {
    // const randNumber = randNum();
    return `${array1[randNum(array1)]} ${array2[randNum(array2)]} ${array3[randNum(array3)]}`;}

//root div to display messages

const display = document.getElementById('root');
const button = document.getElementById('true');
const button2 = document.getElementById('mixed');
button.addEventListener('click', function(){display.innerHTML = randomMessage(messages)});
button2.addEventListener('click', function(){display.innerHTML = randomMessage2(inspiration, health, mindful)})