const sales = [
  {amount: 10000, quantity: 10}, 
  {amount: 10001, quantity: 11},
  {amount: 10002, quantity: 12}
];

function addTotal (sales) {
  return sales.map(sale => ({ ...sale, Total: sale.amount * sale.quantity }))
    .sort((a, b) => a.Total - b.Total);
};

console.log(addTotal(sales));