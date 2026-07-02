const comanda = [
  {pedido: "Torresmo", preço: 40.50, quantidade: 1},
  {pedido: "Bebida", preço: 7.50, quantidade: 5},
  {pedido: "Batata Frita", preço: 38.00, quantidade: 1},
  {pedido: "Chopp", preço: 12.00, quantidade: 2},
];
// Digite seu código abaixo
let total = 0;

for (let i = 0; i < comanda.length; i++) {
    total += comanda[i].preço * comanda[i].quantidade;
}

let totalComServico = total * 1.10;

console.log("Total da comanda: R$ " + total.toFixed(2));
console.log("Total com 10%: R$ " + totalComServico.toFixed(2));