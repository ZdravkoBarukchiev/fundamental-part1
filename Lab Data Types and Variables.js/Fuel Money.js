function fuelMoney(dictance, passengers, price) {
  let fuelForEmpty = dictance * 0.07;
  let fuelForPassehgers = passengers * 0.1;
  let totalPrice = (fuelForEmpty + fuelForPassehgers) * price;
  console.log(`Needed money for that trip is ${totalPrice.toFixed(3)}lv.`);
}
fuelMoney(260, 9, 2.49);
