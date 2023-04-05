import React, { useState } from "react";
import Navbar from "./Navbar";
import PlayMusic from "./PlayMusic";
import { AllTimeFav, MyMusic, TrendingMusic } from "./MusicData";

export const Home = () => {
  const music_list = [TrendingMusic, MyMusic, AllTimeFav];
  const [changeList, setChangeList] = useState(music_list);
  const [song, setSong] = useState();
  const [listName, setListName] = useState();

  const sendSong = (value) => {
    setSong(value);
    setListName(value.list_name);
  };

  const controls = (value, index) => {
    if (index === Object.keys(value).length) {
      index = index % Object.keys(value).length;
    }
    console.log(index);
    let new_list =
      listName === "TrendingMusic"
        ? TrendingMusic
        : listName === "MyMusic"
        ? MyMusic
        : AllTimeFav;
    // update song
    let i =
      value === "forward"
        ? new_list[index].index + 1
        : new_list[index].index - 1;
    new_list[i].index !== undefined ? setSong(new_list[i]) : setSong(song);
  };

  const changeListData = (value) => {
    if (value === "trendingMusic") {
      setChangeList([TrendingMusic]);
      setSong(undefined);
    }
    if (value === "myMusic") {
      setChangeList([MyMusic]);
      setSong(undefined);
    }
    if (value === "alltimefav") {
      setChangeList([AllTimeFav]);
      setSong(undefined);
    }
  };

  return (
    <>
      <Navbar cb={changeListData} />
      {song === undefined ? (
        React.Children.toArray(
          changeList.map((data, index) => {
            return (
              <>
                <div className="card-title" key={index}>
                  <h1>{data[0].list_name}</h1>
                </div>
                <div className="flex">
                  {data.map((data, index) => {
                    return (
                      <div className="cards" key={index}>
                        <div className="card">
                          <div className="card-img ">
                            <img
                              src={data.imgsrc}
                              alt="not found"
                              height={120}
                              width={120}
                            />
                            <div className="info">
                              <p className="text-center my-1">
                                {data.textcenter}
                              </p>
                              <p className="text-center my-2">
                                {data.music_by}
                              </p>
                              <p className="text-center my-3">
                                {data.artist_name}
                              </p>
                            </div>
                          </div>
                          <div className="button">
                            <button
                              className="btn"
                              onClick={() => sendSong(data, index)}
                            >
                              Click me
                            </button>
                          </div>
                          <div className="playhandle"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })
        )
      ) : (
        <PlayMusic data={song} cb={controls} />
      )}
    </>
  );
};
