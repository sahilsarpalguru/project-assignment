import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Result from './Result';

class Floor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dropDown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Floor List
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">1st Floor</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2nd Floor</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3rd Floor</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
class Room extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="buttonsGroup">
          <Button as="input" type="reset" value="Room 1" />
          <Button as="input" type="reset" value="Room 2" />
          <Button as="input" type="reset" value="Room 3" />
          <Button as="input" type="reset" value="Room 4" />
          <Button as="input" type="reset" value="Room 5" />
          <Button as="input" type="reset" value="Room 6" />
          <Button as="input" type="reset" value="Room 7" />
          <Button as="input" type="reset" value="Room 8" />
          <Button as="input" type="reset" value="Room 9" />
          <Button as="input" type="reset" value="Room 10" />
        </div>
        <div>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default class Rooms extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <>
        <div className="floorDetails">
          <p>Choose a floor</p>
        </div>
        <Floor></Floor>
        <Room></Room>
        <Result></Result>
      </>
    );
  }
}
