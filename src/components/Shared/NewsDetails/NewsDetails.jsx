import React from "react";
import "./NewsDetails.css";
import { PiEyeBold } from "react-icons/pi";
import { Button, Container } from "react-bootstrap";
const NewsDetails = ({ bulletin }) => {
  const { rating, total_view, title, author, image_url, details } = bulletin;
  return (
    <Container className="border border-stone-400 mt-5 p-5">
      <div className="d-flex gap-2 mb-3 p-3 bg-stone-100 ">
        <div >
          <img className="img" src={author.img} alt="" />
        </div>
        <div className="mb-2">
          <p>{author.name}</p>
          <p>
            <small>{author.published_date}</small>
          </p>
        </div>
      </div>
      <h5 className="mb-2 font-bold text-2xl">{title}</h5>
      <img className="w-100 mb-5" src={image_url} alt="" />
      <p>{details}</p>
      <h5 className="text-orange-500">Read more...........</h5>
      <div className="d-flex relative mt-4 ">
        <h5>Rating: {rating.number}</h5>
        <h6 className="absolute right-5 flex gap-2 loading-none"><PiEyeBold className="h-5 w-5" />  {total_view}</h6>
      </div>
    </Container>
  );
};

export default NewsDetails;
