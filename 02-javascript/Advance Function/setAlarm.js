// let alarm = function(){
//     console.log('Subah ho gyi, Mamu');
// };

let alarm = () => console.log(`Subah ho gyi, Mamu ${new Date()}`);

// setTimeout(
//     () => console.log('Subah ho gyi, Mamu'), 
//     5000);
// console.log('Alarm Set');

// let timerId = setTimeout(alarm, 1000);
// console.log(`Alarm set with timerID:${timerId}`);

// clearTimeout(timerId);

setInterval(alarm, 5000);