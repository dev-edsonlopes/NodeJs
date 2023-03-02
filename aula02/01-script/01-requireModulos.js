/*
    --- comandos Terminal para instalar modulos ---
            npm install 'nome_do_modulo'

    exemplo.:
            npm install lodash
*/

const _ = require('lodash')  // Obs: É comum os desenvolvedores referenciar-los as bliotecas com " _ ".

setInterval(() => {
        console.log(_.random(1, 1000))
}, 2000) 