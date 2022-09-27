import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { GiArmoredBoomerang } from 'react-icons/gi';
const Orders = () => {
  return (
    <section className='tableClass'>
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>

              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#dfadf</td>
              <td>Processing</td>
              <td>23</td>
              <td>$2343</td>
              <td>Cash</td>
              <td>Dawa</td>

              <td>
                <Link to={`/order/${'id'}`}>
                  <AiOutlineEye />
                </Link>

                <button>
                  <GiArmoredBoomerang />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
