import React from "react";
import { useNavigate } from "react-router-dom";

const SecondSection = (props) => { //props
  const navigate = useNavigate();
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-img ">
            <img
              src={props.data.imgsrc}   //props
              alt="not found"
              height={120}
              width={120}
              // style={{ borderRadius: 10 }}
            />
            <div className="info">
              <p className="text-center my-1">{props.data.textcenter}</p>    {/* props  */}
              <p className="text-center my-2">{props.data.music_by} </p>  {/* props  */}
              <p className="text-center my-3">{props.data.artist_name}</p>    {/* props  */}
            </div>
          </div>
          <div className="button">
            <button
              className="btn"
              onClick={() =>
                navigate("./playMusic", {
                  state: {
                    index: props.data.index,      //props
                    imgsrc: props.data.imgsrc,     //props
                    artist_name: props.data.artist_name,      //props
                    listName: props.data.list_name,    //props
                    path: props.data.src,    //props
                  },
                })
              }
            >
              {props.data.button}     {/* props  */}
            </button>
          </div>
          <div className="playhandle"></div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
