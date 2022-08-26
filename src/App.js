import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="links">
          <a href="/#">&nbsp;Home&nbsp;</a>
          <span className="divider">|</span>
          <a href="#resume">&nbsp;Resume&nbsp;</a>
          <span className="divider">|</span>
          <a target="_blank" href="http://www.linkedin.com/in/elysiasmyers">
            &nbsp;LinkedIn&nbsp;
          </a>
        </div>
      </header>
      <main role="main" className="wrapper">
        <div className="page content">
          <div className="full home">
            <h1 align="center">Hello!</h1>
            <space />
            <h2 align="center">I'm Elysia Smyers</h2>
            <div align="center">
              <img
                src="https://cdn.glitch.com/5fe60a68-2fd8-4c91-b74a-b259c25c948a%2FIMG_1164_Original.jpg?v=1627958979432"
                className="illustration"
                alt="Photo of Elysia"
              />
            </div>
            <div align="center" className="spaced">
              <a href="#aboutme" className="active">
                <img
                  className="arrow"
                  src="https://cdn.glitch.com/5fe60a68-2fd8-4c91-b74a-b259c25c948a%2FGroup%201%20(1).png?v=1628033858326"
                />
              </a>
            </div>
          </div>

          <section id="aboutme" className="aboutme full">
            <box className="narrow">
              <p className="in-box">A bit about me</p>
            </box>
            <box className="narrow">
              <p className="in-box">
                I am a rising Senior at Stanford University majoring in{" "}
                <mark>&nbsp;Symbolic Systems&nbsp;</mark> with a concentration
                in Human-Centered Artificial Intelligence and a minor in
                Computer Science. I want to{" "}
                <u>
                  develop products that can make a real difference in people's
                  lives
                </u>
                . Symbolic Systems has provided me with a diverse set of skills
                in computer science, philosophy, psychology, linguistics, and
                mathematics, affording me the ability to think deeply and
                creatively about how to build user-centered products that push
                the bounds of perceived possibility.
              </p>
            </box>

            <box className="narrow">
              <p className="in-box">
                <em>
                  My current experience revolves predominantly around Technical
                  Product Management and development of internal tools, and I am
                  very interested in stepping into more-technical roles to
                  further hone my <mark>&nbsp;software engineering&nbsp;</mark>{" "}
                  skills. Check out my{" "}
                  <mark>
                    &nbsp;
                    <u>
                      <a href="#resume">Resume</a>
                    </u>
                    &nbsp;
                  </mark>{" "}
                  for more information about my work and leadership experience.
                </em>
              </p>
            </box>
            <div align="center" className="spaced">
              <a href="#resume" className="active">
                &nbsp;
                <img
                  className="arrow"
                  src="https://cdn.glitch.com/5fe60a68-2fd8-4c91-b74a-b259c25c948a%2FGroup%201%20(1).png?v=1628033858326"
                />
              </a>
              &nbsp;
            </div>
          </section>

          <section className="full resume" id="resume">
            <box className="narrow">
              <p className="in-box">My Resume</p>
            </box>
            <box className="narrow">
              <p className="in-box">
                Please feel free to reach out to me about anything on my resume
                --{" "}
                <mark>
                  &nbsp;I love meeting and connecting with new people!&nbsp;
                </mark>
                My contact information is available below on my resume, or you
                can click the tab above to access my LinkedIn profile.
              </p>
              <p className="in-box">
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/e/2PACX-1vQeQ5pM6nWZiGXzMD5AMa_UkqNi0Qtq7rVV7i8OqbrYBZySqGC9MihKHoCDJGUVRsiWXpngYxCBtrQ4/pub"
                >
                  <u>
                    (Click here to view resume if it is not appearing below.)
                  </u>
                </a>
              </p>
            </box>
            <p align="center">
              <iframe
                id="test"
                className="c1"
                frameBorder="0"
                //src="https://docs.google.com/document/d/e/2PACX-1vQeQ5pM6nWZiGXzMD5AMa_UkqNi0Qtq7rVV7i8OqbrYBZySqGC9MihKHoCDJGUVRsiWXpngYxCBtrQ4/pub?embedded=true"
                src="./assets/resumes/resume_1.0.pdf/"
              ></iframe>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
