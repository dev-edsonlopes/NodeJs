const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    //Desafio.:
    const funcionariaChinesa = funcionarios.filter(funcionario => funcionario.genero === "F" && funcionario.pais === "China")
    const chinesaMenorSalario = funcionariaChinesa.reduce((func1, func2) => func1.salario < func2.salario ? func1 : func2)
    console.log(chinesaMenorSalario)


})