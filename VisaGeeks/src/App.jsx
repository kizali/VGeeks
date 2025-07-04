import FooterComponent from './component/Footer.jsx';

import AboutUs from './component/AboutUs.jsx';
import React from 'react';
import UserExperience from './component/UserExperince.jsx';
import HeaderComponent from './component/header.jsx';
import ContactUs from './component/ContactUs.jsx';

function App() {
  return (
    <>
      <HeaderComponent />
      <AboutUs />
      <UserExperience />
      <ContactUs />
      <FooterComponent />
    </>
  );
}

export default App;
