const monthEl = document.getElementById("monthName");
const dayEl = document.getElementById("main1");
const dateEl = document.getElementById("main2");
const yearEl = document.getElementById("year");



const date = new Date()
const month = date.getMonth()



console.log(date)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear)


monthEl.innerText = date.toLocaleString( "en" , {
    month:"long"
})
dayEl.innerText = date.toLocaleString( "en" , {
    weekday:"long"
})
dateEl.innerText = date.getDate()
yearEl.innerText = date.getFullYear()
