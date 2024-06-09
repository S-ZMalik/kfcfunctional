import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'

function App() {
  useEffect(() => {
    geoLoactionFunc();
  }, []);

  async function geolocationAddressFunc(latitude, longitude) {
    let api = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=665c98accedb7340257334szte539ae`

    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  function geoLoactionFunc() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        geolocationAddressFunc(latitude, longitude);
      }, (error) => {
        console.log("function", error);
      })
    }
  }

  return (
      <>
      <ScrollRestoration/>
      <Outlet/>
      </>
  )
}

export default App