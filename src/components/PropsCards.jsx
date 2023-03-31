import React from "react";
import { useNavigate } from "react-router-dom";

const SecondSection = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-img ">
            <img
              src={props.data.imgsrc}
              alt="not found"
              height={120}
              width={120}
              // style={{ borderRadius: 10 }}
            />
            <div className="info">
              <p className="text-center my-1">{props.data.textcenter}</p>
              <p className="text-center my-2">{props.data.music_by} </p>
              <p className="text-center my-3">{props.data.artist_name}</p>
            </div>
          </div>
          <div className="button">
            <button
              className="btn"
              onClick={() =>
                navigate("./playMusic", {
                  state: {
                    index: props.data.index,
                    imgsrc: props.data.imgsrc,
                    artist_name: props.data.artist_name,
                    listName: props.data.list_name,
                    path: props.data.src,
                  },
                })
              }
            >
              {props.data.button}
            </button>
          </div>
          <div className="playhandle"></div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
