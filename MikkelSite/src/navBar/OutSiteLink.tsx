interface LinkProps {
  name: string;
  img: string;
  url: string;
  desc: string;
}

function OutSiteLink({name,img,url,desc}: LinkProps) {
  
  const sendToLink = () => {
    window.location.href = url;
  }

  return(
    <div>
      <img src={img} onClick={sendToLink}></img>
      <label onClick={sendToLink}>{name}</label>
      <p>{desc}</p>
    </div>
  );
}

export default OutSiteLink