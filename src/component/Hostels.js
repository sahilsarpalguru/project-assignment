import React from "react";
import Button from "react-bootstrap/Button";
import Rooms from "./Rooms";

class Hostel extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      showhostel: false,
      stage: localStorage.getItem("stage"),
  };
  }

  // we will do persitance
  // 
  handleRooms = (event) => {
    let users = JSON.parse(localStorage.getItem("users"));
    users.room = event.target.value;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("stage", "rooms");
    this.setState({
      stage : "rooms"
    });

  }  

  render() {
    const stage = this.state.stage;
    
    const renderModule = () => {
      if( stage == "rooms"){
        return <Rooms/>;
      }          
      else {
        return <>  
                <div>Choose A Hostel</div>
          <div className="hostelGroup">
            <Button as="input" type="reset" value="B 1" onClick={this.handleRooms}/>
            <Button as="input" type="reset" value="B 2" onClick={this.handleRooms}/>
            <Button as="input" type="reset" value="B 3" onClick={this.handleRooms} />
            <Button as="input" type="reset" value="B 4" onClick={this.handleRooms}/>
          </div>
      </>;
      }
    }

    return (
      <>
       {renderModule()}
      </>
    );
  }
}

export default class Hostels extends React.Component {
  constructor(props) {
  super(props);
  this.state={
    showrooms: false
  };

  }
  handleRooms(event){
    console.log("clicking");
    this.setState(
        {showrooms:!this.state.showrooms}
    );    
  }  

  render(){
    return(
        <>
        <Hostel></Hostel>
      </>
      
    )
  }
} 