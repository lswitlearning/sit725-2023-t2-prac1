function changeText() {
    // this should change the displlay text
    let textList = ['hello','How are you','I am now taking SIT725','Nice to meet you','Great'];
    let randomNumber = getRandomNumber(0, textList.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max) {
    // generate a random number between a range
    return Math.floor(Math.random()*(max-min + 1)+min);
}