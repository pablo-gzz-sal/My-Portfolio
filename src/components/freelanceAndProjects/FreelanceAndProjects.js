import React from "react";
import "./FreelanceAndProjects.css";
import firebase from "../../svg/firebase.svg";
import helloProject from "../../images/helloProject.png";
import hotelProject from "../../images/hotelProject.png";
import gifsProject from "../../images/gifsProject.png";
import devsProject from "../../images/devsProject.png";
import daltonist from "../../images/daltonist.PNG";
import fetivi from "../../images/fetivi.PNG";
import diocletians from "../../images/diocletians.PNG";
import homes4hope from "../../images/homes4hope.PNG";
import expenses from "../../images/expenses.PNG";
import meals from "../../images/meals.PNG";

function FreelanceAndProjects({ darkMode, language }) {
  return (
    <section
      className={
        darkMode ? "freelanceAndProjects lightPro" : "freelanceAndProjects"
      }
      id="freelanceAndProjects"
    >
      <div className="projectsSection freelanceSection" id="projects">
        <h2 className="titleProjects titleFreelance">
          {language ? "Proyectos de Freelance" : "Freelance Projects"}
        </h2>
        <div className="projects">
          <span className="individualProject">
            <a href="https://thedaltonist.com/en/" target="_blank">
              <img src={daltonist} alt="project image" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">The Daltonist</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-wordpress fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-google fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-yoast fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://www.fetiviandfuresti.com/" target="_blank">
              <img src={fetivi} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Fetivi and Furesti</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-wix fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-google fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://www.diocletiansdream.com/" target="_blank">
              <img src={diocletians} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Diocletian's Dream</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-wordpress fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-yoast fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://homes4hope.ca/" target="_blank">
              <img src={homes4hope} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Homes4Hope</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-wordpress fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="projectsSection">
        <h2 className="titleProjects">
          {language ? "Portafolio" : "Portfolio"}
        </h2>
        <div className="projects">
          <span className="individualProject">
            <a
              href="https://vigorous-goldberg-d63323.netlify.app/"
              target="_blank"
            >
              <img
                src={helloProject}
                alt="project image"
                className={darkMode ? "projectImg projectImgWhite" : "projectImg"}
              />
              <h3 className="titleProjectInd">Hello Pale Blue Dot</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-ro4pj.netlify.app/" target="_blank">
              <img src={hotelProject} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Hotel Rooms Reservations</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-efggn.netlify.app/" target="_blank">
              <img src={gifsProject} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">GIFOS</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://proyecto-prueba-e30fa.web.app/" target="_blank">
              <img src={devsProject} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Devs United</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <img src={firebase} alt="firebase logo" />
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://expenses-project.vercel.app/" target="_blank">
              <img src={expenses} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Add New Expense</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://food-order-app-opal.vercel.app/" target="_blank">
              <img src={meals} alt="" className={darkMode ? "projectImg projectImgWhite" : "projectImg"} />
              <h3 className="titleProjectInd">Order App</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default FreelanceAndProjects;
