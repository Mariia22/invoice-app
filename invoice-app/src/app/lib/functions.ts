export function formatPrice(price: number): string {
  let pounds = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  });

  return pounds.format(price).replace(/^(\D+)/, '$1 ').replace(/\s+/, ' ');
}

export function formatDate(data: Date): string {
  return data.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
