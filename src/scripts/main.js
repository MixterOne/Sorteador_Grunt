document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#drawer').addEventListener('submit', function(e){
        e.preventDefault()
        let numberMax = document.querySelector('#numberMax').value;
        numberMax = parseInt(numberMax);

        let numberRandom = Math.random() * numberMax;
        numberRandom = Math.floor(numberRandom + 1)

        document.querySelector('.result-value').innerText = numberRandom;
        document.querySelector('.result').style.display = 'block'
    })
})