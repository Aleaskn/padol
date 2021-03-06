import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { theme } from './themes/app.globalStyle'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Firebase, { FirebaseContext } from './components/Firebase';
import { UserAuthContextProvider } from './components/context/UseAuthContext';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
