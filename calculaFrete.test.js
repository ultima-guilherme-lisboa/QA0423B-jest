import CalculaFrete from  "./CalculaFrete.js"

let distanciaCliente = 0

let produtoTest = {
    nome: "Camisa",
    preco: 100,
    peso: 1000
}


test(`Cliente que mora a 50 - Frete Gratis`, ()=> {
    distanciaCliente = 50
    expect(CalculaFrete.calculaFrete(distanciaCliente,produtoTest.preco,produtoTest.peso)).toBe(0)
})

test(`Cliente que mora a 100 - Limite do Frete Gratis`, ()=> {
    distanciaCliente = 100
    expect(CalculaFrete.calculaFrete(distanciaCliente,produtoTest.preco,produtoTest.peso)).toBe(0)
})

test(`Cliente que mora a 253 - Primeira Faixa do Frete`, ()=> {
    distanciaCliente = 253
    expect(CalculaFrete.calculaFrete(distanciaCliente,produtoTest.preco,produtoTest.peso)).toBe(2.1)
})

test(`Cliente que mora a 300 - Limite da Primeira Faixa do Frete`, ()=> {
    distanciaCliente = 300
    expect(CalculaFrete.calculaFrete(distanciaCliente,produtoTest.preco,produtoTest.peso)).toBe(2.1)
})

test(`Cliente que mora a 999} - Ultima faixa de frete`, ()=> {
    distanciaCliente = 999
    expect(CalculaFrete.calculaFrete(distanciaCliente,produtoTest.preco,produtoTest.peso)).toBe(4.2)
})

