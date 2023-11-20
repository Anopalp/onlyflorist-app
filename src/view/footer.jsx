import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
        © 2023 Copyright:
        <p className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          OnlyFlorist
        </p>
      </div>
    </MDBFooter>
  );
}