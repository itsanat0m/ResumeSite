import NavBar from "../navBar/NavBar";
import { Parallax } from "react-scroll-parallax";
import "./mainPage.css";

function MainPage() {

  return(
    <>
        <img src="idk" />
      <Parallax translateY={['100%', '-100%']}>
      <div className="mainBlurb">
        <div className="aboutMe">
          <img src="idk" />
          <div>
            <h1>About Me</h1>
            <p>I am a student at UNC Chapel Hill studying comuter science.</p>
          </div>
        </div>
        <div className="workExp">
          <img src="idk" />
          <div>
            <h1>Work Experience</h1>
            <p>Dude I lowkey got like no real CS experience im so cooked.</p>
          </div>
        </div>
        <div className="school">
          <img src="idk" />
          <div>
            <h1>Schooling</h1>
            <p>Im so done with school oh my god get me the fuck OUTTA HERE</p>
          </div>
        </div>
        <NavBar />
      </div>
      </Parallax>
    </>
  );
}

export default MainPage;