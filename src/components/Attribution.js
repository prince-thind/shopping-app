import pixabayImage from "../images/pixabay.svg";

function Attribution() {
  return (
    <div className="material-box attribution">
      All Images Obtained from{" "}
      <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
        <img src={pixabayImage} alt="pixabay" className="attribution-image"/>
      </a>
    </div>
  );
}

export default Attribution;
