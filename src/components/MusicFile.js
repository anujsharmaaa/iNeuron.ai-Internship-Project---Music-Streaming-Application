import { React, useState } from "react";
import CardSection from "./PropsCards.jsx";

function MusicFile({ music_list, sendList }) {
  const [trendingMusic, SetMusic] = useState(false);
  const TrendingMusicClick = () => {
    SetMusic(trendingMusic);
  };

  return <LocalComponent music_list={music_list} cb={TrendingMusicClick} />;
}

export default MusicFile;
export { LocalComponent };

function LocalComponent({ music_list, cb, sendList }) {
  return (
    <>
      {music_list.map((data, index) => {
        return (
          <>
            <div className="card-title">
              <h1>{data[0].list_name}</h1>
            </div>
            <div className="flex">
              {data.map((data, index) => {
                return (
                  <CardSection
                    data={data}
                    onClick={cb}
                    list_name={data.list_name}
                    sendList={sendList}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
