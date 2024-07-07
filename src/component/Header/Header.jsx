import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDeliveryDining } from "react-icons/md";
import { PiFlowArrow } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoRestaurant } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import "../Header/Header.css";
import "animate.css";

import home from "../../assets/banner.png";

const Header = () => {
  return (
    <>
      <div className="main-container">
        <Container>
          <Row>
            <Col className="animate__animated animate__fadeInLeftBig">
              <div className="heading">
                <span>Fastest</span>
                <br />
                <span className="delivery-name animate__animated   ">Delivery</span>
                <span className="and-icon">
                  <MdDeliveryDining className="icon" />
                </span>
                <br />
                <span>Easy</span>
                <span className="pick-up">Pickup</span>
              </div>
              <div className="slogan">
                <span className="slogan-content">
                  Flow with traffic <PiFlowArrow className="flow" />
                </span>
              </div>
              <div className="para">
                <span className="head-para">
                  Let us know your current location to deliver the foods faster and safer from
                  our enlisted restaurants.
                </span>
              </div>
              <div className="button">
                <button className="order-button">Order Now</button>
                <button className="track-button">Track Status</button>
              </div>
            </Col>

            <Col className="animate__animated animate__fadeInRightBig">
              <div className="banner">
                <img src={home} alt="image" className="banner-image" />
              </div>
            </Col>
          </Row>

          <div className="island animate__animated animate__fadeInUp">
            <div className="div">
              <TbTruckDelivery className="island-icon" />
              <div className="island-content">
                Fastest <br />
                Delivery
              </div>
            </div>

            <div className="div">
              <RiDiscountPercentFill className="island-icon" />
              <div className="island-content">
                Daily
                <br />
                Discounts
              </div>
            </div>

            <div className="div">
              <FaHotel className="island-icon" />
              <div className="island-content">
                100+
                <br />
                Hotels
              </div>
            </div>

            <div className="div">
              <IoRestaurant className="island-icon" />
              <div className="island-content">
                100+
                <br />
                Cuisines
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
