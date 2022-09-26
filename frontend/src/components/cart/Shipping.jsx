import React from 'react';
import { Country, State } from 'country-state-city';
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
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option value={country.isoCode}>{country.name}</option>
                ))}
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value='state'>Kathmandu</option>
              {State &&
                State.getStatesOfCountry('NP').map((state) => (
                  <option value={state.isoCode}>{state.name}</option>
                ))}
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
