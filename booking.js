/********* create variables *********/
const cost_PerDay_Full = 35;
const cost_PerDay_Half = 20;
let numberOfDaysSelected = 0;
let dailyRate = cost_PerDay_Full;
const day_SelectorItems = document.querySelectorAll('.day-selector li');
const full_Button = document.getElementById('full');
const half_Button = document.getElementById('half');
const calculated_CostSpan = document.getElementById('calculated-cost');
const clear_Button = document.getElementById('clear-button');
/********* calculate *********/
document.addEventListener("DOMContentLoaded", function() {
    function updateCost() {
        calculated_CostSpan.textContent = dailyRate * numberOfDaysSelected;
    }
    /********* colour change days of week *********/
    day_SelectorItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!item.classList.contains('clicked')) {
                numberOfDaysSelected++;
                item.classList.add('clicked');
                updateCost();
            }
        });
    });
    /********* clear days *********/
    clear_Button.addEventListener('click', function() {
        day_SelectorItems.forEach(item => {
            item.classList.remove('clicked');
        });
        full_Button.classList.remove('clicked');
        half_Button.classList.remove('clicked');
        numberOfDaysSelected = 0; 
        updateCost();
    });
    /********* change rate *********/
    half_Button.addEventListener('click', function() {
        dailyRate = cost_PerDay_Half;
        half_Button.classList.add('clicked');
        full_Button.classList.remove('clicked');
        updateCost();
    });
    full_Button.addEventListener('click', function() {
        dailyRate = cost_PerDay_Full;
        full_Button.classList.add('clicked');
        half_Button.classList.remove('clicked');
        updateCost();
    });
});


