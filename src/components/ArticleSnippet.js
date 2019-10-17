import React from "react";
import { Card } from "react-bootstrap";
import { ImageSnippet } from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import { P, H3, H5, CardStyled } from "../styles/GenericStyles";

function ArticleSnippet(props) {
  const { title, subtitle, category, date, resume } = props;
  return (
    <CardStyled>
      <a href="#">
        <Card.Body className="p-0 text-left d-md-flex">
          <ImageSnippet
            className="d-none d-lg-block"
            style={{ width: "25%" }}
            src={squarePlaceholder}
          />
          <div className="p-4">
            <H5>{category}</H5>
            <H3>{title}</H3>
            <P className="mb-0">{resume}</P>
          </div>
        </Card.Body>
      </a>
    </CardStyled>
  );
}

export default ArticleSnippet;
