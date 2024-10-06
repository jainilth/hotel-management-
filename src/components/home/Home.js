import React from 'react'
import { FaBed, FaUtensils, FaSpa, FaWifi, FaTv } from 'react-icons/fa';
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='container text-center'>
      {/* Hero Section */}
      <div className="hero-section text-center bg-image">
        <h1 className="display-4 hero-title">Welcome to Luxury Stay Hotel</h1>
        <p className="lead hero-subtitle">Experience unparalleled comfort, fine dining, and world-class service at our hotel.</p>
        <hr className="my-4 hero-line" />
        <p className="hero-description">Explore the finest in hospitality and personalized services that make every moment memorable.</p>
      </div>

      {/* Room Types Section */}
      <div className='my-5'>
        <h2 className='mb-4'>Explore Our Rooms</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card room-card'>
              <img src='../normal.jpg' alt='Non-Deluxe Room' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Non-Deluxe Room</h5>
                <p className='card-text'>Affordable and comfortable, perfect for budget-conscious travelers.</p>
                <ul className='list-unstyled'>
                  <li><FaWifi /> Free Wi-Fi</li>
                  <li><FaTv /> Flat-screen TV</li>
                  <li><FaBed /> Queen-sized Bed</li>
                  {/* <button className='btn btn-outline-primary' onClick={() => {
                    setModel(true)
                  }}>View More</button> */}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card room-card'>
              <img src='../d-2.jpg' alt='Deluxe Room' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Deluxe Room</h5>
                <p className='card-text'>Spacious and luxurious, with modern amenities and stunning views.</p>
                <ul className='list-unstyled'>
                  <li><FaWifi /> Free Wi-Fi</li>
                  <li><FaTv /> Flat-screen TV</li>
                  <li><FaBed /> King-sized Bed</li>
                  {/* <button className='btn btn-outline-primary'>View More</button> */}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card room-card'>
              <img src='5-star.jpg' alt='5-Star Room' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>5-Star Room</h5>
                <p className='card-text'>Ultimate luxury with personalized services and elegant decor.</p>
                <ul className='list-unstyled'>
                  <li><FaWifi /> Free Wi-Fi</li>
                  <li><FaSpa /> Access to Spa</li>
                  <li><FaBed /> King-sized Bed with Egyptian Cotton Sheets</li>
                  {/* <button className='btn btn-outline-primary'>View More</button> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hotel Information Section */}
      <div className='row my-5 hotel-info-section'>
        <div className='col-md-6'>
          <img src='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9uJTIwZGVsdXhlJTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww' alt='Hotel Lobby' className='img-fluid' />
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <h2>About Luxury Stay Hotel</h2>
          <p>
            At Luxury Stay Hotel, we pride ourselves on offering a premium experience with unmatched comfort and service.
            Located in the heart of the city, our hotel provides a perfect blend of luxury and convenience. Whether you're
            here for business or leisure, we ensure that your stay is relaxing and memorable.
          </p>
          <p>
            Our top-notch amenities include spacious rooms, gourmet dining, a full-service spa, a rooftop pool, and
            personalized concierge services to attend to your every need.
          </p>
        </div>
      </div>

      {/* Facilities Section */}
      <div className='row my-5'>
        <div className='col-md-4'>
          <div className='card feature-card'>
            <div className='card-body'>
              <FaUtensils className='icon mb-3' size={40} />
              <h5 className='card-title'>Gourmet Dining</h5>
              <p className='card-text'>
                Enjoy world-class cuisine at our restaurant, offering a variety of gourmet dishes.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card feature-card'>
            <div className='card-body'>
              <FaSpa className='icon mb-3' size={40} />
              <h5 className='card-title'>Spa & Wellness</h5>
              <p className='card-text'>
                Unwind and rejuvenate at our full-service spa with relaxing treatments.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card feature-card'>
            <div className='card-body'>
              <FaBed className='icon mb-3' size={40} />
              <h5 className='card-title'>Luxury Rooms</h5>
              <p className='card-text'>
                Spacious, elegantly designed rooms with all the modern amenities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='my-5 testimonials-section'>
        <h2>Guest Reviews</h2>
        <div className='row'>
          <div className='col-md-6'>
            <blockquote className='blockquote'>
              <p className='mb-0'>"The Deluxe Room was amazing! The service was impeccable, and the views were breathtaking."</p>
              <footer className='blockquote-footer my-2'>Anna Smith, Leisure Traveler</footer>
            </blockquote>
          </div>
          <div className='col-md-6'>
            <blockquote className='blockquote'>
              <p className='mb-0'>"The 5-Star Room is luxury at its finest. Every detail was perfect, from the decor to the amenities."</p>
              <footer className='blockquote-footer my-2'>James Brown, Business Traveler</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className='my-5 cta-section'>
        <h2>Book Your Stay Today</h2>
        <p>
          Choose your perfect room and experience luxury like never before. Reserve now for exclusive offers.
        </p>
        <Link className='btn btn-success btn-lg' to='/newbooking'>Reserve Now</Link>
      </div>

      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      </div>
    </div>
  );
}


export default Home
