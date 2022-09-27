import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import myprofile from '../../assets/myprofile.png';
const Users = () => {
  return (
    <section className='tableClass'>
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Phonto</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#dfadf</td>
              <td>Processing</td>
              <td>
                <img src={myprofile} alt='user' />
              </td>
              <td>Admin</td>
              <td>10th may</td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
