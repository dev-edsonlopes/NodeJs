//factory para retonar novos objetos ou uma nova instancia

 module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
 }

 
