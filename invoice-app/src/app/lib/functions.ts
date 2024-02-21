export function formatPrice(price: number): string {
  let pounds = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  });

  return pounds.format(price);
}

export function formatDate(data: string): string {
  return new Date(data).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
