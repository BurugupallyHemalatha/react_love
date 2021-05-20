import React  from 'react';

const NewsDisplay = (props) => {
    //console.log("inside news>>>",props)
    const renderNews=props.newsdata.map((data) => {
        return(
        <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.happy}</p>
        </div>
        )
    })
    return(
        <div>
            <center>
                {renderNews}
            </center>
        </div>
    )
    

}
export default NewsDisplay;