import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import InstagramLink from "./InstagramComponent";
import CustomCarousel from "./CustomCarousel"; // Adjust the path accordingly
import RevampCarousel from "./RevampCarousel";
import BannerCarousel from "./BannerCarousel";
import {
  Card,
  Form,
  Container,
  Row,
  Col,
  Carousel,
  Button,
} from "react-bootstrap";

function App() {
  const handleResetButtonClick = () => {
    const textarea = document.querySelector(".custom-text-area");
    const customerName = document.querySelector(".input-name");
    const custonerNumber = document.querySelector(".input-number");
    textarea.value = "";
    custonerNumber.value = "";
    customerName.value = "";
  };
  return (
    <Container className="custom-container">
      <img
        src="/logo2.png"
        className="img-fluid"
        style={{ display: "block", margin: "0 auto" }}
      />
      {/*<div className="mb-3 mt-4">
        <BannerCarousel className="makeClear" />
  </div>*/}
      <h1 className="center mt-4">Meet Your Stylist</h1>
      <Card.Body className="bannerBody mb-2">
        Hey, I'm The Hair Reaper, your Brooklyn hairstylist. I specialize in
        unique custom wigs, refreshing looks, and stunning styles that empower.
        With flexible appointments, I cater to your schedule. Let's turn your
        hair dreams into reality – contact me to book now!{" "}
      </Card.Body>
      <div className="mb-4">
        <Card className="custom">
          <h1 className="mb-4 center">Custom Units</h1>
          <CustomCarousel />
          <h5 className="mt-4 center">The Hair Reaper Custom Unit</h5>
          <p>
            Alongside providing Wig construction and Revamp services, The Hair
            Reaper will also provide custom units at a first come and a first
            serve basis. These units will be uploaded to all The Hair Reapers
            social media platforms. Clients will then be given the opportunity
            to consult with the stylist through email at regarding any details
            and payment for the desired unit.{" "}
          </p>
          <h5 className="center"> The Hair Reaper Provides the hair</h5>
          <p>
            For custom units where The Hair Reaper provides the Hair, the price
            will fluctuate. This is based on length, texture, and color (613 or
            natural color). The hair provided by The Hair Reaper will be sold in
            a bundle deal. This bundle deal does not include The Hair Reapers
            labor fee. The labor fee is determined by the needs of the client.
            However, all clients are required to consult with the stylist
            through text at <a href="tel:3476755013">(347) 675-5013</a>. To
            ensure that the stylist has the desired texture/length of hair
            available.{" "}
          </p>
        </Card>
      </div>
      <h1 className="mb-4 center">Unit Revamps</h1>
      <RevampCarousel />
      <Card className="revamp">
        <p className="mt-4 center">
          The Hair Reaper provides lace/wig revamp and reconstruction services
          as well as. Most wig revamps require <strong>Hair Ventilation</strong>
          .
        </p>
        <p className="center">
          The term <strong>Hair Ventilation</strong> means a method of affixing
          individual strands of hair into a wig cap base or lace. This method is
          very tedious and time consuming. Contingent to its prolonged process;
          pricing for this service will vary (Starting at $70 dollars and can go
          up to $150 dollars). Pricing is determined by the amount of hair that
          is missing from the closure/frontal, as well as labor. Unfortunately,
          this does not include styling! If the client will like styling that
          will be an additional $25.{" "}
        </p>
        <h5>Revamps without ventilating may include but not subject to</h5>
        <ul>
          <li>Deep conditioning</li>
          <li>Coloring </li>
          <li>Styling (curled ,straightened ,crimped or cut)</li>
          <li>Tweezing </li>
        </ul>
        <h5 className="center">Consultation</h5>
        <p>
          <strong>PLEASE BE ADVISED THAT EVERY UNIT CANNOT BE REVAMPED!</strong>{" "}
          This is because some units after wear and tear simply cannot be
          revived. Therefore, it is Imperative to consult with the stylist
          through text at <a href="tel:3476755013">(347) 675-5013</a> before
          selecting a drop off date.
        </p>
        <h5>Consultation text should include:</h5>
        <ul>
          <li>
            Picture of damage (displaying the missing hair from the
            closure/frontal as well as the condition of the unit).{" "}
          </li>
          <li>
            Desired revamped style (whether it is a change of part, color, or
            length).{" "}
          </li>
          <li>
            Detailed description as to the materials being dropped off or mailed
            (this is to ensure that both parties are covered in the case of an
            issue).{" "}
          </li>
        </ul>
      </Card>
      {/* 
<Form>
  <Row className="text-center">
    <h3 className="mt-4 grey">
      <strong></strong>Lets Keep In Touch
    </h3>
    <Col>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Number" />
      </Form.Group>
    </Col>

    <Form.Group>
      <Form.Label>Message</Form.Label>
      <Form.Control
        as="textarea"
        rows={7}
        placeholder="Enter your message"
        className="custom-text-area"
      />

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-primary">Send</button>
        <button className="btn btn-secondary">Clear</button>
      </div>
    </Form.Group>
  </Row>
</Form>
*/}

      <img
        src="/footer2.png"
        className="img-fluid mb-4"
        style={{ display: "block", margin: "0 auto" }}
      />
      <Card
        className="contact
    "
      >
        <InstagramLink />
      </Card>
    </Container>
  );
}

export default App;
