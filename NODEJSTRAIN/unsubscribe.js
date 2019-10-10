var EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();

// var fooHandler=function(){
//     console.log('handler called');

//     //unsubscribe
//     emitter.removeListener('foo',fooHandler);
//     console.log('handler called after');
// };

// emitter.on('foo', fooHandler);

emitter.on('foo', function(){
    console.log('called')
});
emitter.on('foo', function(){
    console.log('called2')
});


//Emit twice
emitter.emit('foo');
