import * as React from "react";

export default function About() {
  return (
    <div className="page uncentered narrow" id="aboutme">
      <h1 className="title uncentered">My Resume</h1>
      <p className="instructions">
        See my resume below to learn about my recent work experiences and
        interests. Please feel free to reach out to me about anything on my
        resume --{" "}
        <mark>&nbsp;I love meeting and connecting with new people!&nbsp;</mark>
        My contact information is available below on my resume, or you can click
        the tab above to access my LinkedIn profile.
      </p>
      <space />
      <p>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/e/2PACX-1vQeQ5pM6nWZiGXzMD5AMa_UkqNi0Qtq7rVV7i8OqbrYBZySqGC9MihKHoCDJGUVRsiWXpngYxCBtrQ4/pub"
        >
          <u>(Click here to view resume if it is not appearing below.)</u>
        </a>
      </p>
      <p align="center">
        <iframe
          id="test"
          className="c1"
          frameBorder="0"
          width="90%"
          height="950"
          src="https://docs.google.com/document/d/e/2PACX-1vQeQ5pM6nWZiGXzMD5AMa_UkqNi0Qtq7rVV7i8OqbrYBZySqGC9MihKHoCDJGUVRsiWXpngYxCBtrQ4/pub?embedded=true"
        ></iframe>
      </p>
    </div>
  );
}
