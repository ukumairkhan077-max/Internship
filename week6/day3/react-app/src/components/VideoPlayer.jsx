import { useRef, useState } from "react";
import "./VideoPlayer.css";

function VideoPlayer() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = async () => {
    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="player">

      <video ref={videoRef} width="700">
        <source
          src="/Videos/demo.mp4"
          type="Video/mp4"
        />
        Your browser doesn't support video.
      </video>

      <div className="buttons">

        <button onClick={togglePlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>

      </div>

    </div>
  );
}

export default VideoPlayer;