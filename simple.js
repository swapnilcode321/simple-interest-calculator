let Princple = document.querySelector('#Princple')
let intrest = document.querySelector('#intrest')
let year = document.querySelector('#year')
let btn = document.querySelector('#btn')
let text = document.querySelector('#text')

btn.addEventListener('click',()=>{

    const Prinicple_input=Number(Princple.value)
    const intrest_input=Number(intrest.value)
    const year_input=Number(year.value)

    const Total_intrest= (Prinicple_input*intrest_input*year_input) /100
    const total_amount=Prinicple_input+ Total_intrest
    text.innerHTML=` :-  After ${year_input}. your investment will be wirth ${total_amount} with simple interest is ${Total_intrest} `
})
