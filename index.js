
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, eventName) {
    let appreciationCards = [];
    for (let x = 0; x < names.length; x++) {
        appreciationCards.push(`Thank you for the ${eventName} gift, ${names[x]}!`);
        //debugger;
    }
    
    return appreciationCards;
}
// made sure it worked! >:) uncomment below
// console.log(writeCards(["ava", "bell", "eli", "lol"], "birthday"))

function countDown(anyPositiveInt) {
    while (anyPositiveInt > 0) {
        console.log(anyPositiveInt);
        anyPositiveInt --;
    }
    console.log(anyPositiveInt);
}
// it works!! uncomment below
// countDown(10)