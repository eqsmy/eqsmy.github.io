import "../styles/styles.css";

function Home() {
  return (
    <div className="page">
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
            I am a rising Junior at Stanford University majoring in{" "}
            <mark>&nbsp;Symbolic Systems&nbsp;</mark> with a concentration in
            Human-Centered Artificial Intelligence. I want to{" "}
            <u>
              develop products that can make a real difference in people's lives
            </u>
            . I strongly believe that nothing is truly impossible to accomplish
            given the right team of people and the willingness to get your hands
            dirty and listen to every relevant feedback loop available.
          </p>
        </box>

        <box className="narrow">
          <p className="in-box">
            <em>
              My current experience revolves predominantly around Product
              Management and development of internal tools, and I am very
              interested in stepping into more-technical roles to further hone
              my <mark>&nbsp;software engineering&nbsp;</mark> skills. Check out
              my{" "}
              <mark>
                &nbsp;
                <u>
                  <a href="/about">Resume</a>
                </u>
                &nbsp;
              </mark>{" "}
              tab for more information about my work and leadership experience.
            </em>
          </p>
        </box>
      </section>
    </div>
  );
}

export default Home;
