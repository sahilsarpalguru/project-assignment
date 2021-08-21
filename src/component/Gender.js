import React from "react";
import Hostels from './Hostels';

export default class Gender extends React.Component {
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


      return(
          <>
              <div name="male" onClick={this.saveGender}>MALE</div>
                    <div name="female" onClick={this.saveGender}>FEMALE</div></>
        
          </>
      )
  }
}  