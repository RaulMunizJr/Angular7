var em=require('events').EventEmitter;

var emitter=new em();

emitter.on('onswipe',function(ev){
    console.log('swipe fan is on',ev)
    ev.handled=true
})

emitter.on('onswipe',function(ev){
    if(ev.handled){
    console.log('its already switched on')
    }
})

// emitter.on('onshoot',function(){
//     console.log('onshoot fan is on')
// })

// emitter.on('onshoot',function(){
//     console.log('onshoot light is on')
// })

emitter.emit('onswipe',{handled:false})

//emitter.emit('onshoot')