import React from 'react';
import {Link} from 'react-router-dom';
const Post=(props)=>{
    console.log(props)
    return(

        <div className="panel panel-success">
            <div className="panel-heading">
                <center>POST PAGE</center>
            </div>
            <div className="panel-body">
                <h3>Tech_worldh</h3>
        <img src="/images/yumzyx.jpg" alt="logo"/>         
              <p>In ancient times, a King had a boulder placed on a roadway. He then hid himself and watched to see if anyone would move the boulder out of the way. Some of the king’s wealthiest merchants and courtiers came by and simply walked around it.

Many people loudly blamed the King for not keeping the roads clear, but none of them did anything about getting the stone out of the way.

A peasant then came along carrying a load of vegetables. Upon approaching the boulder, the peasant laid down his burden and tried to push the stone out of the road. After much pushing and straining, he finally succeeded.</p>

               <h3> javascript</h3>
               <Link to="/post/postdetails?page=1">details</Link> 

               <h3> node</h3>
               <Link to="/post/node">details</Link>

               <h3> react</h3>
               <Link to="/post/react">details</Link>
            </div>
        </div>
        
    )
}
 export default Post;