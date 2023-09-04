import { Employee, Employees } from "../Employees";


  async function getemployee(id:number):Promise<Employee>{

    const employee=  Employees.find(emp=> emp.id === id);
    if(!employee){
        throw new Error('Failed to fetch data')
    }
    return new Promise((resolve,reject)=>{
        resolve(employee)
       })
    
  }
export default async function EmployeePage(params:any){
    console.log('->>>>>',params);

    const employee:Employee = await getemployee(+params.params.id)
    
  return <>
  employee details:

   <div style={{display:'flex', padding: '5px 10px', border:'1px solid green',justifyContent:'space-around'}}>

    <span>{employee?.id}</span>
    <span>{employee?.name}</span>
    <span>{employee?.location}</span>
   </div>
  </>
}