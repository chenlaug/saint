import Text from "./components/Text";
import BtnYes from "./components/Btn/BtnYes";
import BtnNo from "./components/Btn/BtnNo";
import loveHeart from "./assets/gif/heart-indie.gif";
import Minnie from "./assets/gif/Minnie.gif";
import "./App.css";
import { useEffect, useState } from "react";
import lastChristmas from "./assets/music/LastChristmas_CardiB.mp3";

export default function App() {
  const [yes, setYes] = useState(false);

  useEffect(() => {
    const audio = new Audio(lastChristmas);
    if (yes) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [yes]);

  return (
    <div className="center">
      <img src={yes ? Minnie : loveHeart} alt="Heat's Gif" />
      <Text yes={yes} />
      <div className="Btns">
        <BtnYes className="btnYes" setYes={setYes} />
        <BtnNo className="btnNo" />
      </div>
    </div>
  );
}
