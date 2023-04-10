const Logg = require('./logg');
const Person = require('./person');


const pers = new Person('Alan ', 25,'kannur');
pers.welcome();

const log=new Logg();

log.on('message', (data) => console.log(data));
log.log('hello');