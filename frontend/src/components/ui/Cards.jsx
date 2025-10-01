import "./Cards.css";

const Cards = ({
  height,
  width,
  imgBeforeFlip,
  head,
  imgAfterFlip,
  content,
}) => {
  const getIdFromPath = (path) => {
    return path.split("/").pop().split(".")[0];
  };

  return (
    <div className="card-container fade-move-up" style={{ height, width }}>
      <div className="card-inner">
        <div className="card-front" >
          <img
            src={imgBeforeFlip}
            id={getIdFromPath(imgBeforeFlip)}
            alt="Front"
          />

          <h3 style={{  color: "#B4A36C"
}}>{head}</h3>
        </div>

        <div className="card-back" id={getIdFromPath(imgBeforeFlip)+'bg'}>
          <img
            src={imgBeforeFlip}
            id={getIdFromPath(imgBeforeFlip)}
            alt="Back"
          />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
