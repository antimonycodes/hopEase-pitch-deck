import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import sampleVideo from "../assets/vid.mp4"; // Update the path to match your file's location

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const startTime = 5; // Start time in seconds
  const endTime = 15; // End time in seconds

  const togglePlay = () => {
    const video = document.getElementById("video-player") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.currentTime = startTime; // Ensure it starts at the specified start time
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = document.getElementById("video-player") as HTMLVideoElement;

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.pause();
        video.currentTime = startTime; // Reset to start time
        setIsPlaying(false);
      }
      setCurrentTime(video.currentTime);
    };

    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [startTime, endTime]);

  return (
    <>
      <motion.div
        className="relative h-screen bg-emerald-500 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="absolute top-8 text-white text-2xl text-center">
          A viral video of a hospital staff caught stealing drugs from the
          hospital <br /> and selling them at his wife’s shop
        </h1>
        <motion.div
          className="relative w-4/5 max-w-3xl aspect-video bg-black overflow-hidden rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Video Element */}
          <video
            id="video-player"
            className="w-full h-full object-cover"
            src={sampleVideo}
            controls={false}
            autoPlay={true}
          ></video>

          {/* Overlay Play Button */}
          {!isPlaying && (
            <motion.button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-5.197-3.021A1 1 0 008 9.026v6.052a1 1 0 001.555.832l5.197-3.021a1 1 0 000-1.664z"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>
        {/* Play/Pause Button */}
        <div className="absolute bottom-10 flex space-x-4">
          <button
            onClick={togglePlay}
            className="px-6 py-2 bg-white text-emerald-500 font-bold rounded-md shadow-md hover:bg-emerald-500 hover:text-white transition-all"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <span className="text-white font-bold">
            {Math.floor(currentTime)} / {endTime}s
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Video;
