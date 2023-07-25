const row =document.querySelector('.row')
const selectCard =document.querySelector('card')

const handleGetFlags =() =>{
    fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data =>{
            data.reverse().map(country => {
                row.innerHTML +=`
                <div class = 'col-4'>
                <div class="box">
                <img src=${country.flags.png}>
                <h3> ${country.name.official}</h3>
                <p> ${country.capital}</p>
                `
            })
        })


}


}
yellowFlags()




handleGetFlags()