import NavBar from "../navBar/NavBar";
import { Parallax } from "react-scroll-parallax";
import "./mainPage.css";

function MainPage() {

  return(
    <>
        <img src="idk" />
      <Parallax translateY={['100%', '-100%']}>
      <div className="mainBlurb">
        <div style={{minHeight: 800}}>
        </div>

        <NavBar />
      </div>
      </Parallax>
    </>
  );
}

export default MainPage;