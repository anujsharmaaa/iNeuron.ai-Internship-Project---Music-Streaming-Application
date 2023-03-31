import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import TrendingMusic, { AllTimeFav, MyMusic } from "./MusicData";
import MusicFile from "./MusicFile";
import Navbar from "./Navbar";


function Home() {
  // const {state} = useLocation()
  const music_list = [TrendingMusic, AllTimeFav, MyMusic];
  const [data, setData] = useState(music_list)

  const sendList = (value) => {
    if (value === "alltimefav") {
      var all_list = [AllTimeFav]
      setData(all_list)
    }
    if (value === "mymusic") {
      var my_list = [MyMusic]
      setData(my_list)
    }
    if (value === "trending") {
      var trending_list = [TrendingMusic]
      setData(trending_list)
    }
    // setData(value)
  }
  return (
    <div>
      <Navbar sendList={sendList} />
      <MusicFile music_list={data} />
    </div>
  );
}

export default Home;
