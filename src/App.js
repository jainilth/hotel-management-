import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout'
import Readmore from './components/booking/read more/Readmore';
import Edit from './components/Edit';
import Newbooking from './components/booking/newbooking/Newbooking';
import Totalbooking from './components/booking/totalbooked/Totalbooking';



function Booking() {
  return (
    <>
      <Newbooking />
      <Totalbooking />
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='booking' element={<Booking />} />
            <Route path='booking/:id' element={<Readmore />} />
            <Route path='booking/edit/:id' element={<Edit />} />
            <Route path='booking/totalbooking' element={<Totalbooking />} />
          </Route>
          <Route path='/newbooking' element={<Newbooking />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
