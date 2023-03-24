const sales = [
  {amount: 10000, quantity: 10}, 
  {amount: 10001, quantity: 11},
  {amount: 10002, quantity: 12}
];



function addTotal (sales, sortBy) {

  const res = sales.map(sale => ({ ...sale, Total: sale.amount * sale.quantity }));
    
  switch (sortBy) {
    case 'fromBiggest': 
      return res.sort((a, b) => b.Total - a.Total);
    case 'fromSmallest': 
      return res.sort((a, b) => a.Total - b.Total);
  } 
};

console.log(addTotal(sales, 'fromSmallest'));