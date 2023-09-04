import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";
import { Employee, Employees } from "./Employees";

async function getEmployees(): Promise<Employee[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Employees);
    }, 2000);
  });
}

export default async function SuspendPage() {
  const employees = await getEmployees();

  return (
    <>
      <h1>delayed list</h1>
      <ul>
        {employees.map((emp, i) => (
          <li key={i}>
            <Link href={`/suspended-component/${emp.id}`}>{emp.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
