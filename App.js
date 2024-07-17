import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import ErrorComponent from './components/common/ErrorComponent';
import LoginPage from './components/Logindet/LoginPage';
import Signup from './components/signup/Signup';
// import Maildetail from './components/signup/Maildetail';
import PasswordDet from './components/signup/PasswordDet';
// import LoginPass from './components/Logindet/LoginPass';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
        <Route path={routes.main.path} element={<routes.main.element />}>
          <Route
            path={`${routes.emails.path}/:type`}
            element={<routes.emails.element />}
            errorElement={<ErrorComponent />}
          />
          <Route
            path={routes.view.path}
            element={<routes.view.element />}
            errorElement={<ErrorComponent />}
          />
        </Route>
        <Route
          path={routes.invalid.path}
          element={<Navigate to={`${routes.emails.path}/inbox`} />}
        />
       <Route 
          path="/login"
          element={<LoginPage />}
        />
        <Route 
          path="/signup"
          element={<Signup />}
        />
        {/* <Route 
          path="/maildet"
          element={<Maildetail />}
        /> */}
         <Route 
          path="/password"
          element={<PasswordDet />}
        />
{/* 
        <Route 
          path="/loginpass"
          element={<LoginPass />}
        /> */}
       
      </Routes>

      {/* <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<ProfileSettings />} />
      </Routes> */}
    </Router>
  );
};

export default App;
