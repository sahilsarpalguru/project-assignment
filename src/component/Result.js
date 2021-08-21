import React from "react";
import Modal from "react-bootstrap/Modal";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modalcss">
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Your room has been booked successfully.</p>
          </Modal.Body>

          <Modal.Footer>
            {
                <div>
                    <p>Hostel No.</p>
                    <p>Room No.</p>
                </div>
            }
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}