
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

const makeClear = () => {
    const divs = document.querySelectorAll('.my-section');
    console.log(divs);
    for (const div of divs) {
        div.style.backgroundColor = "transparent";
    }
}

const changeBg = (sel, color) => {
    document.querySelector(sel).style.backgroundColor = color;
}

