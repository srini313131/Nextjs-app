const getSales: () => Promise<Sale[]> = async () => {
  try {
    const resp = await fetch("http://localhost:8080/sales");

    return resp.json();
  } catch (error) {
    console.log("err=>>>", error);
  }
};
type Sale = {
  saleDate: Date;
  storeLocation: string;
  customer: {
    email: string;
  };
  purchaseMethod: string;
};
export default async function SalesPage() {
  const sales = await getSales();
  console.log("sales->>>>", sales);
  return (
    <>
      <ul>
        {sales.map((sale, i) => (
          <li key={i}>
            {sale.purchaseMethod} {sale.customer.email} {sale.storeLocation}
          </li>
        ))}
      </ul>
    </>
  );
}
