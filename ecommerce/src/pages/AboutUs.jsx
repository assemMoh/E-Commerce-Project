import React from 'react'
import '../css/About.css'

export function AboutUs() {
  return (
    <div className="container abtcontainer mt-4 mb-4 ">
      <div className="row ">
        <div className="col-6 mt-5 mb-5">
          <img className='aboutimg' src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="col-6 mt-5 abouttext">
          <h2 className='text-center mb-3 text-light'>About Us</h2>
          <p className='text-light'>Welcome to our website! We are a team dedicated to providing high-quality products and exceptional customer service. Our mission is to make your shopping experience enjoyable and convenient.</p>
          <p className='text-light'>At React Shop, we offer a wide range of products to cater to your needs. Whether you're looking for clothing, accessories, electronics, or home goods, we've got you covered.</p>
          <p className='text-light'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti quisquam quibusdam nam autem numquam laborum quis, dignissimos, libero corrupti sit cum ab nisi, id rerum recusandae inventore dolorum expedita!
            Nostrum dolore cupiditate beatae culpa ab quas nobis cumque laborum voluptatibus qui, expedita animi, fuga pariatur quasi error facilis perferendis. Perferendis, iusto? Quo ratione perferendis deleniti iure dolorum recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};


