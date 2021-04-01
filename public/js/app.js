console.log('Client side javascript file is loaded!')


const submitForm = document.querySelector('form')
const prg1 = document.getElementById('prg1')
const prg2 = document.getElementById('prg2')

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.querySelector('input').value
    fetch(`http://localhost:3000/weather?address=${search}`)
        .then(response => {
            response.json()
                .then(data => {
                    if (data.err) {
                        prg1.innerHTML = "Error:"
                        prg2.innerHTML = data.err
                        return console.log(data.err)
                    }
                    prg1.innerText = data.location
                    prg2.innerText = data.forecast
                    console.log(data.location)
                    console.log(data.forecast);
                })
        })
})