/**
 *
 * signinAbout
 *
 */

import React from 'react';


function signinAbout() {
  return (
    <div id="signin-form">
      <section className="pb_section pb_section_v1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScSJeK0j7jOOs8eJya0sD9fy3uUFsZdp5bDoh-DF5vITlEogQ/viewform?embedded=true"
                width="640" height="1151" frameBorder="0" marginHeight="0" marginWidth="0">Loading...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

signinAbout.propTypes = {

};

export default signinAbout;