
const btnEl = document.querySelector('#btn')
const quoteEl = document.querySelector('#quote')
const authorEl = document.querySelector('#author')

async function getQuote() {
    const apiURL = 'https://api.quotable.io/random'
    quoteEl.innerText = 'Loading...'
    authorEl.innerText = ''
    btnEl.innerText = 'Updating...'
    const response = await fetch(apiURL)
    const data = await response.json()
    quoteEl.innerText = data.content
    authorEl.innerText = data.author
    btnEl.innerText = 'Get Quote'
    // console.log(data)
}

getQuote()

btnEl.addEventListener('click', getQuote)