// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// 1. a <p> with red text that says “Hey I’m red!

const redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!";

// container is already selected above.
// const contanier = document.querySelector('#container');

container.appendChild(redPara);

// 2. an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";

container.appendChild(blueH3);

// 3. a <div> with a black border and pink background color and add a h1 and p tags to it

const blackPink = document.createElement('div');
// blackPink.textContent = "test"

// Adding CSS properties using inline style.
// blackPink.style.background = 'pink';
// blackPink.style.border = "1px solid black"
// blackPink.style.cssText = "background: pink; border: 1px solid black; "


// Adding CSS properties using setAttribute
// blackPink.setAttribute('style' 'background: pink; border: 1px solid black;');

// adding CSS using classList
blackPink.classList.add('blackPink');


const blackPinkH1 = document.createElement('h1');
blackPinkH1.textContent = "I'm a div";
const blackPinkP = document.createElement('p');
blackPink.textContent = "ME TOO!";

blackPink.appendChild(blackPinkH1);
blackPink.appendChild(blackPinkP)

container.appendChild(blackPink);
