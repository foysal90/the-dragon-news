import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { Card } from "react-bootstrap";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import moment from "moment";

const FakeApi = () => {
  const fakeD = useLoaderData();
  console.log(fakeD);
  const { articles } = fakeD;
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <Card className="mb-4 ">
            <Card.Header className="flex  items-center">
              {/* <Image className="h-8" src={author?.img} roundedCircle /> */}
              <div className="ps-2 flex-grow-1">
                <p className="mb-0"> {article.author}</p>
                <p>
                  <small>
                    {moment(article.publishedAt).format("YYYY-MM-D")}
                  </small>
                </p>
              </div>
              <div className="flex">
                <CiBookmark></CiBookmark> <CiShare2></CiShare2>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Text>
                <p>{article.description}</p>
              </Card.Text>
              <Card.Text>
                <Link
                  to={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted flex"></Card.Footer>
          </Card>

          {/* <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <p>Author: {article.author}</p>
          <p>Published at: {article.publishedAt}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a> */}
        </div>
      ))}
    </div>
  );
};

export default FakeApi;
