import React from "react";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="row">
          <img
            src={require(`../../assets/photo/photo.jpg`).default}
            alt="the developer"
            className="photo col-2"
          />
          <p className="col-10">
            My name is Yin (Lyly) Long. I am a Junior front-end developer.
            Currently I work as a web designer and graphic designer in Toronto.
            I have 1-year front-end development experience and 7-year design
            experience. I am seeking more front-end development opportunities at
            this moment.
          </p>
          <p>
            I am a fast learner who is capable of completing any project from
            start to finish, generating business growth and customer loyalty by
            producing and implementing effective web, UIUX and graphic design
            solutions in an effective manner. In addition, I am also responsible
            for cultivating solid business relationships with all team members,
            which results in creative projects being completed ahead of
            schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
