import React from 'react'
import './User.css'

const User = () => {
  return (

    <div className='userTable'>
        <h2>Users</h2>
        <button type="button" class="btn-solid theme-primary">Add User<i class="fa fa-plus-square" aria-hidden="true"></i>
</button>

        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope='col'>Address</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>Caneda</td>
                    <td>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                            <button type="button" class="btn-text theme-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                   </button>
                   </td>
                        
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>Caneda</td>
                    <td>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                            <button type="button" class="btn-text theme-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                   </button>
                   </td>
                        
                </tr>
            </tbody>
            

        </table>

        
    </div>
  )
}
export default User;
