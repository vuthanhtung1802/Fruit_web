function handleNumberPrice(number) {
  let getPrice = Number(number);
  if (isNaN(getPrice)) return "0";
  let price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(getPrice);
  const result = price.slice(0, price.length - 2);
  return result;
}
export default handleNumberPrice;
