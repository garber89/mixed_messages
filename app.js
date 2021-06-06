//messages array, messages will be objects
const messeges = [{name: '', quote:''},{name: '', quote: ''},];

const randomMessage = array => Math.floor(Math.random()*array.length)

//root div to display messages

const display = document.getElementById('root');
const button = document.getElementById('true');
button.addEventListener('click', function(){display.innerHTML = randomMessage})