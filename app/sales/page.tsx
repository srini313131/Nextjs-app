const getSales: () => Promise<any[]> = async () => {
  try {
    const results = new Promise<any[]>((resolve, reject) => resolve([]));
    return results;
  } catch (error) {
    console.log("err=>>>", error);
    return new Promise<any[]>((resolve, reject) => resolve([]));
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
