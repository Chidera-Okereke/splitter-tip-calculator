//Assignment of Variables
var perc = document.querySelectorAll('.tip');
const bill = document.querySelector('#bill');
const people = document.querySelector('#nopeople');
const tip = document.querySelector('#result');
const total = document.querySelector('#amount');
var reset = document.querySelector('#reset')
var custom = document.querySelector('#Custom')
var selected = document.querySelector('.selected')
perc = Array.from(perc)

// EventListeners
    let demo = 15
    perc.forEach((percentage)=>{
        percentage.addEventListener('click', e=>{
            // Make a default tip button
            demo=percentage.dataset.value
            amount(demo)
            selected.classList.remove("selected")
        })
        bill.addEventListener('keyup', e=> {
            amount(demo);
        })
        people.addEventListener('keyup', e=>{
            amount(demo);
        })
        // Enable Custom Input
        custom.addEventListener('keyup', e=>{
            demo=custom.value;
            console.log(demo);
            // if (demo!=0) {
                amount(demo);
                selected.classList.remove('selected');
            // }else{
            //    return;
            // }
        })
    })
// FUNCTION FOR TIP AMOUNT AND TOTAL AMOUNT
    function amount(a){
        if (a == 0) {
            return;
        } else {
            let billz = (bill.value*(a/100))/people.value;
            tip.value="$" + billz;
            // Function for total amount
            let result = billz + (bill.value/people.value);
            total.value="$"+ result;
        }   
    }
// Display error when number of people is zero
    perc.forEach((percentage)=>{
        percentage.addEventListener('click', e=> {
            if (people.value == "" || people.value == 0) {
                document.getElementById("nopeople").style.borderColor= 'red';
                console.log('red');
                tip.value= '$0.00';
                total.value= '$0.00';
                document.getElementById('error').style.display="inline";
            }else{
                document.getElementById('error').style.display="none";
            }
        })
    })
    document.addEventListener('DOMContentLoaded', e=>{
        if (people.value == "" || people.value == "0") {
            document.getElementById('error').style.display="inline"
            document.getElementById("nopeople").style.borderColor= 'red';
            console.log('red');
            tip.value= '$0.00';
            total.value= '$0.00';
        } else {
            document.getElementById('error').style.display="none"
        }
    })
    people.addEventListener('keyup', e=>{
        if (people.value == " " || people.value == "0") {
            document.getElementById("nopeople").style.borderColor= 'red';
            console.log('red');
            tip.value= '$0.00';
            total.value= '$0.00';
            document.getElementById('error').style.display="inline"
        } else {
            document.getElementById('error').style.display="none"
        }
    }
    )

// Activate the Reset Button
    reset.addEventListener('click', e=>{
        active();
    })
    function active(){
        tip.value="$0.00";
        total.value="$0.00";
        people.value=1;
        bill.value=0;
        demo = 15;
        selected.classList.add('selected');
        reset.style.cursor="not-allowed";
        reset.style.backgroundColor="hsl(184, 14%, 56%)"
        custom.value = "";
}


// Keep Focus on the last selected Percentage Button