import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Navlanding from './Navlanding';
import { Login } from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Adminhome } from './Admin/Home';
import Adminnav from './Admin/Nav';
import { Filmrequest } from './Admin/Filmrequest';
import { Hiringreq } from './Admin/Hiringreq';
import { Locationreq } from './Admin/Locationreq';
import { Approvedseekers } from './Admin/Approvedseekers'; 
import { Fcregister } from './Fcregister'; 
import Filmnav from './Filmcompany/Filmnav';
import { Filmhome } from './Filmcompany/Filmhome';
import { Addannouncement } from './Filmcompany/Addannouncement'; 
import { Hiringreg } from './Hiringreg'; 
import { Locationregister } from './Locationregister'; 
import { Seekerreg } from './Seekerreg'; 
import { Viewannouncement } from './Filmcompany/Viewannouncement'; 
import { Fcviewhcreq } from './Filmcompany/Fcviewhcreq'; 
import { Fcviewloc } from './Filmcompany/Fcviewloc'; 
import { Locdetail } from './Filmcompany/Locdetail'; 
import { Locreq } from './Filmcompany/Locreq'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Navlanding/>}>
      <Route index element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='fcreg' element={<Fcregister/>}/>
      <Route path='hrreg' element={<Hiringreg/>}/>
      <Route path='loreg' element={<Locationregister/>}/>
      <Route path='skreg' element={<Seekerreg/>}/>
    </Route>
   </Routes>
   </BrowserRouter>


   <BrowserRouter>
   <Routes>
     <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}/>
      <Route path='film' element={<Filmrequest/>}/>
      <Route path='hcreq' element={<Hiringreq/>}/>
      <Route path='loreq' element={<Locationreq/>}/>
      <Route path='aprvdsk' element={<Approvedseekers/>}/>
      
    </Route>
   </Routes>
   </BrowserRouter>

   <BrowserRouter>
   <Routes>
    <Route path='/filmcompany' element={<Filmnav/>}>
      <Route index element={<Filmhome/>}/>
      <Route path='addanc' element={<Addannouncement/>}/>
      <Route path='vanc' element={<Viewannouncement/>}/>
      <Route path='fcviewhcreq' element={<Fcviewhcreq/>}/>
      <Route path='fcvloc' element={<Fcviewloc/>}/>
      <Route path='locdt' element={<Locdetail/>}/>
      <Route path='fclocreq' element={<Locreq/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();