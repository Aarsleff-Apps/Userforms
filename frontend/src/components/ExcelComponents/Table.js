import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>JOBS</td>
                  <td>PREPAYMENT</td>
                  <td>G/L Account</td>
                  <td>{customer.employeeID}</td>
                  <td>{customer.employee}</td>
                  <td>{customer.department}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className='bgvi'>
                            <tr>
                                <th>#</th>
                                <th>Journal Template Name</th>
                                <th>Journal Batch Name</th>
                                <th>Account Type</th>
                                <th>Employee ID</th>
                                <th>Employee</th>
                                <th>Department</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
}