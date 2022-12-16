import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { title, _id, author, details, image_url, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              className="me-2"
              roundedCircle
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div>
              <p className="mb-1">{author?.name}</p>
              <p className="mb-1">{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url}></Card.Img>
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning"></FaStar>
            <span className="ms-2">{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>
            <span className="ms-2">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
