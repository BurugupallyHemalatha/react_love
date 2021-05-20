import React,{Component} from 'react';
import './Header.css';
class Header extends Component{
    constructor(){
        super()
        this.state={
            title:' hema love react app',
            userInput:'user text here',
        
        }
    }
    
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:"hemareddy burgupally"})
        this.props.userText(event.target.value)
    }
    render(){

        console.log(">>>>render")
        return(
            
            <React.Fragment>
             <header >
                    <div className="logo">{this.state.title}</div>
                <center>
                   <input onChange={this.handleChange}/>
                   <div style={{color:'white'}}>{this.state.userInput}</div>
                </center>
            </header>
                <hr/>
            </React.Fragment>
        )
    }
    
}
export default Header;