import moment from "moment";
import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const NewsCard = ({ news }) => {
  // const [ratings, setRatings] = useState(0)
  const { title, author, total_view, rating, image_url, _id, details } = news;
  
  return (
    <Card className="mb-4 ">
      <Card.Header className="flex  items-center">
        <Image className="h-8" src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0"> {author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div className="flex">
          <CiBookmark></CiBookmark> <CiShare2></CiShare2>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details?.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details?.slice(0, 250)}.....{" "}
              <Link className="btn btn-link" to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted flex">
        <div className="flex-grow-1 flex items-center">
        <Rating className="w-24"
        value={Math.round(rating?.number || 0)} readOnly />
          {rating?.number}
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> <small>{total_view}</small>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
