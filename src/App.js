// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import Service from './Components/Service';
import ListVolunteers from './Components/ListVolunteers';
import NewRequestPage from './Components/NewRequestPage';
import DualLoginPage from './Components/DualLoginPage';
import Requests from './Components/Requests';
import Home from './Components/Home';
import MyAssigment from './Components/MyAssigment';

function App() {
  return (

    <Routes>
      <Route path="/" element={<DualLoginPage />} />
      <Route path="/LoginPage/:type" element={<LoginPage />} />
      <Route path="/Requests/:type/:id" element={<Requests />} />
      <Route path="/Requests/:id" element={<Requests />} />
       <Route path="/MyAssigment/:id" element={<MyAssigment />} />

      <Route path="/NewRequestPage/" element={<NewRequestPage />} />
      <Route path="/LoginPage/:name/:type/:id" element={<LoginPage />} />

      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignUp/:type" element={<SignUp />} />
      <Route path="/ListVolunteers/:id" element={<ListVolunteers />} />
      <Route path="/Service/:id" element={<Service />} />
      <Route path="/NewRequestPage/:id" element={<NewRequestPage />} />
      <Route path="/Home/:name/:type/:id" element={<Home />} />

    </Routes>
  );
}

export default App;
