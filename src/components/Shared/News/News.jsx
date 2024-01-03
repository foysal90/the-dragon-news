import React from "react";
import { Button, Card } from "react-bootstrap";
import { IoIosArrowRoundBack, IoMdArrowBack } from "react-icons/io";

import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../../Pages/EditorsInsights/EditorsInsights";

const News = () => {
    const newsDetails = useLoaderData();
    const {title,image_url, details, category_id} = newsDetails;
  return (
    <div>
      <h1 className="mb-2">Dragon News</h1>
      <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button className="bg-danger flex gap-1 items-center p-2 mt-3"><IoMdArrowBack/>All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsights/>
       
          
        
          
     
    </div>
  );
};

export default News;
