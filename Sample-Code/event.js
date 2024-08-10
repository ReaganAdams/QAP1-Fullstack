/ Import the events module to create and handle events
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Create an event listener that listens for the 'event' event
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Trigger the 'event' event
myEmitter.emit('event');
