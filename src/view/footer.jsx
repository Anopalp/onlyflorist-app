import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted my-auto'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <strong>
            OnlyFlorist
          </strong>
        </div>
      </MDBFooter>
    </div>
  );
}