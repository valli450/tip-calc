const receipt = document.querySelector('.amount__input');
const button5 = document.querySelector('.percent-5');
const button10 = document.querySelector('.percent-10');
const button15 = document.querySelector('.percent-15');
const button25 = document.querySelector('.percent-25');
const button50 = document.querySelector('.percent-50');
const custom = document.getElementById('custom-percent');
const numberOfPeople = document.getElementById('persons');
const error = document.querySelector('.number__error');
const borderred = document.querySelector('.number__people');

let tps = 0;

/*numberOfPeople.addEventListener('input', people);*/


/* Button solution */
function tipButton(stl){
    switch(stl){
        case('percent-5'):
            tps = 0;
            tps+=5;
            button5.classList.add('active');
            button10.classList.remove('active');
            button15.classList.remove('active');
            button25.classList.remove('active');
            button50.classList.remove('active');
            break;
        case('percent-10'):
            tps = 0;
            tps+=10;
            button5.classList.remove('active');
            button10.classList.add('active');
            button15.classList.remove('active');
            button25.classList.remove('active');
            button50.classList.remove('active');
            break;
        case('percent-15'):
            tps = 0;
            tps+=15;
            button5.classList.remove('active');
            button10.classList.remove('active');
            button15.classList.add('active');
            button25.classList.remove('active');
            button50.classList.remove('active');
            break;
        case('percent-25'):
            tps = 0;
            tps+=25;
            button5.classList.remove('active');
            button10.classList.remove('active');
            button15.classList.remove('active');
            button25.classList.add('active');
            button50.classList.remove('active');
            break;
        case('percent-50'):
            tps = 0;
            tps+=50;
            button5.classList.remove('active');
            button10.classList.remove('active');
            button15.classList.remove('active');
            button25.classList.remove('active');
            button50.classList.add('active');
            break;
        case('custom'): 
            let c = custom.value;
            tps+=c;
            break
    };
}


function getBill(){
}

function customTips(){
    
}

function getNumber(){
    if (numberOfPeople.value <= 0){
        error.classList.add('error');
        borderred.classList.add('error');
    }else{
        error.classList.remove('error');
        borderred.classList.remove('error');
    }
    let l = numberOfPeople.value
    calculatePerson(l);
    console.log(`nop=${numberOfPeople.value}`)
}

function calculatePerson(l){
    let billAmount = receipt.value;
    let numbe = l;
    let tip = tps/100;
    
    let tipPerPerson = Math.ceil(((billAmount * tip)/numbe)*100)/100;
    console.log(`tpp=${tipPerPerson}`)

    let totalTips1 = Math.ceil(((billAmount / numbe)+tipPerPerson)*100)/100;
    console.log(`tT1=${totalTips1}`)

    blockReturn(tipPerPerson, totalTips1);
}

    
function blockReturn(tpp, tp){
   document.getElementById('tip-per-person').innerHTML=`$${tpp}`;
   document.getElementById('final-amount').innerHTML=`$${tp}`;
}

function refresh(){
    receipt.value = '';
    custom.value = '';
    numberOfPeople.value = '';
    tps = 0;
    button5.classList.remove('active');
    button10.classList.remove('active');
    button15.classList.remove('active');
    button25.classList.remove('active');
    button50.classList.remove('active');
    document.getElementById('tip-per-person').innerHTML=`$0.00`;
    document.getElementById('final-amount').innerHTML=`$0.00`;
}
