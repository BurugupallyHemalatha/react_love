import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import home from './home';
import post from './post';
import profile from './profile';
import Footer from './Footer';
import Header from './Header';
import postdetails from './postdetails';


 const Routing=()=>{
     return(
         <BrowserRouter>
         <Header/>
    
         <Route  exact path ='/' component={home}/>
         <Route  exact path ='/post' component={post}/>
         <Route  path='/post/:id' component={postdetails}/>
         <Route  path ='/profile' component={profile}/>
         
         <Footer/>
         </BrowserRouter>

     )
 }
 export default Routing;
 
