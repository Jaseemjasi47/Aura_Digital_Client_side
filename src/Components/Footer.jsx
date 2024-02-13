import React from 'react';

function Footer() {
  return (
    <footer className="text-center bg-body-tertiary footer" style={{ backgroundColor: 'black',  color: 'white'}}>
      <div className="pt-2">
        {/* Section: Social media */}
        <section className="m-4">
          <div className="row d-flex ">
            {/* Facebook */}
            <div className="col">Facebook</div>
            {/* Twitter */}
            <div className="col">Twitter</div>
            {/* Google */}
            <div className="col">Youtube</div>
            {/* Instagram */}
            <div className="col">Instagram</div>
          </div>
        </section>
        {/* Section: Social media */}
      </div>
      <div className="copyright"></div>
      <div className="text-center p-3" style={{ backgroundColor: 'black',  color: 'white'}}>
        © 2024 Copyright
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
