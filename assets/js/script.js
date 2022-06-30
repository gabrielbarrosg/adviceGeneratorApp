function generateAdvice(){
    const url = 'https://api.adviceslip.com/advice';
    fetch(url).then(response =>{
        return response.json();
    }).then(data =>{
        document.getElementById('advice-number').innerHTML =`ADVICE #${data.slip.id}`;
        document.getElementById('advice-text').innerHTML =`"${data.slip.advice}"`;
    })
}