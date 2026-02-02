import OutSiteLink from "./OutSiteLink";
import "./NavBar.css";

function NavBar() {

  return (
    <div className="navBar">
      <OutSiteLink name='GitHub' img='idfk' url = 'https://www.github.com/itsanat0m' desc = 'My GitHub containing ongoing projects and a majority of schoolwork!' />
      <OutSiteLink name='LinkedIn' img='idfk' url = 'https://www.linkedin.com/in/adam-c-mikkelsen' desc = 'My LinkedIn profile with skills and current job positions!' />
    </div>
  );
}

export default NavBar