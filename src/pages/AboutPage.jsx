import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeMode";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`about-page ${theme === "dark" ? "dark-mode" : ""}`}>
      <h1>About Our Project</h1>
      <section>
        <h2>Project Overview</h2>
        <p>
          Explanation of the process and a link to the Fake Store API
          documentation.
        </p>
      </section>
      <section>
        <h2>Challenges Faced</h2>
        <p>Details about struggles faced and how they were overcome.</p>
      </section>
      <section>
        <h2>Favorite Languages</h2>
        <p>Explanation of favorite languages and reasons why.</p>
      </section>
    </div>
  );
};

export default AboutPage;
