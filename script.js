
const container = document.querySelector('.container')
const template = document.querySelector('#template')
const addTemplate = document.getElementById('add-template')

const numbers = document.querySelectorAll('.circle-numbers')
const submitBtn = document.querySelector('#submit-btn')



let numbersSelected = []
let amountOfNumbersChosen = 0



numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbersSelected.push(number.innerHTML)
        amountOfNumbersChosen = numbersSelected.length
        number.classList.toggle('change-background')
     
    })
})


submitBtn.addEventListener('click', () => {

    if (amountOfNumbersChosen > 5) return
   
    console.log(numbersSelected);

    const templateClone = template.content.cloneNode(true)
    container.textContent = ''

    const div = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const paragraph = document.createElement('p')

    span.textContent = `You selected ${amountOfNumbersChosen} out of 5 `
    h1.textContent = `Thank you! `
    paragraph.textContent = `We appreciate you taking the time to give a rating.If you ever need more support, don’t hesitate to get in touch!`


    div.append(span)
    templateClone.append(div, h1, paragraph)
    addTemplate.append(templateClone)
    container.append(addTemplate)
})