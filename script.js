const row =document.querySelector('.row')
const selectCard =document.querySelector('#select')

const handleGetFlags =() =>{
    fetch(`https://restcountries.com/v3.1/region/${selectCard.value}`)
        .then(res => res.json())
        .then(data =>{
            data.map(country => {
                row.innerHTML +=`
                <div class = 'col-4'>
                <div class="box">
                <img src=${country.flags.png}>
                <h3> ${country.translations.rus.official}</h3>
                <p> ${country.capital}</p>
                <p> ${country.population}</p>
                `
            })
        })


}
selectCard.addEventListener('change',() =>{
    console.log(selectCard.value)
    row.innerHTML = '';
    handleGetFlags()

})
handleGetFlags()