export default class CalculaFrete {

    static calculaFrete(distancia, preco, peso) {
        if (distancia <= 100) {
            return 0;
        }else if (distancia <= 300) {
            return ( (0.02 * preco) + 2 * (0.05 * peso/1000))
        }else {
            return ( (0.04 * preco) + 2 * (0.1 * peso/1000))
        }
    }

}