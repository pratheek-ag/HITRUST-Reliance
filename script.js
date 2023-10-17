let solvScore = document.querySelector('#ss');
let solvPer = document.querySelector('#sp');
let herScore = document.querySelector('#hs');
let herPer = document.querySelector('#hp');

let getAns = () => {
    let val = document.querySelector('#val');
    let xVal = parseFloat(solvPer.value) + parseFloat(herPer.value);


    let ans = parseFloat(solvScore.value) * (parseFloat(solvPer.value) / xVal) + parseFloat(herScore.value) * (parseFloat(herPer.value) / xVal);
    console.log(solvScore.value,solvPer.value,xVal,herScore.value,herPer.value);

    ans = Math.round(parseFloat(ans));

    val.textContent = ans;
}


solvScore.addEventListener('change', (event) => {
    console.log('solvScore changed');
    console.log(event.target.value);
});


solvPer.addEventListener('change', (event) => {
    console.log('solvPer changed');
    console.log(event.target.value);
});

herScore.addEventListener('change', (event) => {
    console.log('herScore changed');
    console.log(event.target.value);
});

herPer.addEventListener('change', (event) => {
    console.log('herPer changed');
    console.log(event.target.value);
});

let btn = document.querySelector('#btn');

btn.addEventListener('click',getAns);


