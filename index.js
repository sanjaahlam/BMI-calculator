document.getElementById('submit').addEventListener("click",bmicalculator);
function bmicalculator(){
    let height = parseInt(document.getElementById('cm').value);
    let weight =parseFloat( document.getElementById('kg').value);

    let bmi;
    let newHeight= parseFloat(height/100);

    bmi= weight / (newHeight  * newHeight);
bmi = bmi.toFixed(1);
console.log(bmi);

document.getElementById('result').innerHTML = bmi;
}