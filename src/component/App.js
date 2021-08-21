import React from "react"; // imported from node modules
import Display from "./Display"; //
import Onboarding from "./Onboarding"; //
import ButtonPanel from "./ButtonPanel"; //
import calculate from "../logic/calculate"; //
import "./App.css"; //
import firebase from "firebase/app";
export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
      isAuthenticated: localStorage.getItem("isauthenticated"),
      stage : localStorage.getItem("stage"),
    };
  }

  handleClick = buttonName => {
    let result = calculate(this.state, buttonName);
    result.operation = "+";
    this.setState(result); // state
    // this.mycustomclassLevelVariable  = {...this.mycustomclassLevelVariable, ...result}
  };

    /**
     * localstorge
     * 1. isauthenticated enum (false, true, pending)
     * 2. stages : {
        *  "gender" ,
        *  "hostel",
        *  "floor",
        *  "succeess"
     * }
     */

  loginViaFB = () => {

    // to be done on success
    localStorage.setItem("isauthenticated", "pending");

    this.setState({
      isAuthenticated : "pending"
    });
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log("firebase result ", result);
    //     /** @type {firebase.auth.OAuthCredential} */
    //     var credential = result.credential;

    //     // The signed-in user info.
    //     var user = result.user;

    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     var accessToken = credential.accessToken;

    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log("firebase error", error);
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;

    //     // ...
    //   });
  }

  render() {
    const isAuthenticated = this.state.isAuthenticated;

    const renderModule = () => {
        if( isAuthenticated== "true"){
          return <Display value={this.state.next || this.state.total || "0"} />;
        }  
        else if(this.state.isAuthenticated == "pending")
        { 
          return <Onboarding />;
          // if(this.state.stage == "hostel") {
          //   return <button onClick={this.loginViaFB}>loginViaFB</button>
          // }else if{
          //   return <button onClick={this.loginViaFB}>loginViaFB</button>

          // } 
            
        }
        else {
          return <button onClick={this.loginViaFB}>loginViaFB</button> // Authentication
        }
      }


    return (
      <>
      
        {renderModule()}  
        
      </>
      // <div className="component-app">
      //   <Display value={this.state.next || this.state.total || "0"} />
      //   <ButtonPanel clickHandler={this.handleClick} />
      //   <button onClick={this.loginViaFB}>loginViaFB</button>
      // </div>
    );
  }
}
