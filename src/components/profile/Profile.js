import React from "react";
import pp from "../../images/pabloPP.PNG";
import "./Profile.css";

function Profile({darkMode, language}) {
  return (
    <section className={darkMode ? "profile profileWhite" : "profile"} id="profile">
      <div className="profilePicture">
        <img className="imageAbout" src={pp} alt="profilePicture" />
      </div>
      <div className={darkMode ? "aboutInfo aboutInfoWhite" : "aboutInfo"}>
        <h1 className="titleAbout">
          {language ? "Desarrollador de software con experiencia en administración de negocios" : "Software developer with a background in business"}
        </h1>
        <p className="paragraphAbout">
          {language ? "Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas. Freelancer en este momento creando sitios web para versiones de escritorio, tabletas y dispositivos móviles con una excelente experiencia de UX y UI. Me considero una persona proactiva y orientada a resultados." : "I value simple content structure, clean design patterns, and thoughtful interactions. Freelancer at the moments creating websites for desktop, tablet and mobile versions with an excellent UX and UI experience. I consider myself a pro-active and results-oriented person."}
        </p>
        <button className={darkMode ? "buttonAbout buttonAboutWhite" : "buttonAbout"} type="button">
          <a 
            href="https://drive.google.com/file/d/1WhIXY56f94D33DKJkMFOHUx5TYtnpf1I/view?usp=sharing"
            target="_blank"
          >
            {" "}
            {language ? "CV" :  "Resume"}{" "}
          </a>
        </button>
      </div>
    </section>
  );
}

export default Profile;
