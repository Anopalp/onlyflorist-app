import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div>
      <MDBFooter className='text-center text-lg-start text-muted my-auto' style={{ backgroundColor: 'rgb(41, 51, 92)' }}>
        <div className='footer-text text-center p-3'>
          © 2020 Copyright:
          <strong>
            OnlyFlorist
          </strong>
        </div>
      </MDBFooter>
    </div>
  );
}