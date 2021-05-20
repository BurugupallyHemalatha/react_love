import React from 'react';
const postdetails=(props)=>{
    console.log(props)
    return(

    
        <div className="panel panel-info">
            <div className="panel-heading">
                <h2>{props.match.params.id} page</h2>
                <center>postdetails PAGE</center>
                
            </div>
            <div className="panel-body">
                <h3>{props.match.params.id} page</h3>
        
                <p> {props.match.params.id}In ancient times, a King had a boulder placed on a roadway. He then hid himself and watched to see if anyone would move the boulder out of the way. Some of the king’s wealthiest merchants and courtiers came by and simply walked around it.

Many people loudly blamed the King for not keeping the roads clear, but none of them did anything about getting the stone out of the way.

A peasant then came along carrying a load of vegetables. Upon approaching the boulder, the peasant laid down his burden and tried to push the stone out of the road. After much pushing and straining, he finally succeeded.</p>
<h3>you are on page no {props.location.search.split('=')[1]} </h3>
            </div>
        </div>
    
           )
}
 export default postdetails;