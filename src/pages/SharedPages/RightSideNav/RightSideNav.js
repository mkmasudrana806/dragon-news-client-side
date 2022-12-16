import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCaurosel from "../caurosels/BrandCaurosel";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleToGoogleSignIn = () => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleToGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h3>Find Us On</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twiter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaGithub></FaGithub> Github
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCaurosel></BrandCaurosel>
      </div>
    </div>
  );
};

export default RightSideNav;
