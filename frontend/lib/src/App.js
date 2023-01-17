import { BrowserRouter as Router } from 'react-router-dom';
import{ AppLayout } from "./components/layout/app-layout"
function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout/>
      </Router>
    </div> 
  );
}
export default  App;

// import React, { Suspense } from 'react';
// import { Container } from '@mui/material';
// import {BrowserRouter as Router } from 'react-router-dom';
// // import { NotificationContainer } from 'react-notifications';
// import { AppLayout } from './components/layout/app-layout';
// // import { UserProvider } from './context/user-context';
// const App = () => (
//   // <UserProvider>
// //  <Suspense fallback={null}>
//   <Container className='page-container'>
//     <Router>
//       <AppLayout/>
//       {/* <NotificationContainer/>  */}
//     </Router>
//   </Container>
//   // </Suspense>
//   // </UserProvider>
// )
// export default App