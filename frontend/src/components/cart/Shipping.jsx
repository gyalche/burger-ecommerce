import React from 'react';

const Shipping = () => {
  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No</label>
            <input type='text' name='' placeholder='Enter complete address' />
          </div>
          <div>
            <label>City</label>
            <input type='text' name='' placeholder='Enter city' />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value='country'>Country</option>
              <option value='country'>Nepal</option>
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value='state'>Kathmandu</option>
              <option value='state'>Pokhara</option>
            </select>
          </div>

          <div>
            <label>Pincode</label>
            <input type='text' name='' placeholder='pincode.no' />
          </div>
          <div>
            <label>Phone Number</label>
            <input type='text' name='' placeholder='Enter phone number' />
          </div>
          <button type='submit'>Confirm</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
