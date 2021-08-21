import React from "react";
import Hostels from './Hostels';
import Rooms from './Rooms';

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props);    
    
    this.state={
        showhostel: false,
        stage: localStorage.getItem("stage"),
    };

  }
  saveGender = (e) => {
        // to be done on success
    localStorage.setItem("stage", "hostels");
    let users = {
        name: e.target.getAttribute("name")
    };
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      stage : "hostels"
    });
  }
  
  render(){

    const stage = this.state.stage;

    const renderModule = () => {
        if( stage == "hostels"){
          return <Hostels/>;
        } 
        else if( stage == "rooms"){
          return <Rooms/>;
        }          
        else {
          return <>  <div name="male" onClick={this.saveGender}>MALE</div>
                    <div name="female" onClick={this.saveGender}>FEMALE</div></>;
        }
      }
      return(
          <>
            {renderModule()}  
        
          </>
      )
  }
}  