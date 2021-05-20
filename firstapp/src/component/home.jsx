import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    filterNews=(userInput)=>{
        const output=this.state.news.filter((data)=>{
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }
    render(){ 
       // console.log(this.state.news) 
        return(
        <>
        <Header userText={(data)=>{this.filterNews(data)}}/>
           <h1> chinny </h1>      
           <h6> kutti </h6>
           <NewsDisplay newsdata={this.state.filtered}/>
           <img src =""/>
           <Footer year={2021}/>
         </>
  
        )
    }
}
export default Home;