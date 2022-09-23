import React from 'react'

const TotalOrders = () => {
  return (
    <div>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">order id</th>
            <th scope="col">date</th>
            <th scope="col">from</th>
            <th scope="col">to</th>
            <th scope="col">receiver info</th>
            <th scope="col">payment</th>
            <th scope="col">paid</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td >1</td>
            <td>@mdo</td>
            <td >1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th >2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td >1</td>
            <td>@fat</td>
            <th >2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TotalOrders;
