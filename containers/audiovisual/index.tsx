import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { videos } from "./videos";

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const AudioVisualContainer: React.FC = () => (
  <motion.div
    className="md:px-16"
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">AudioVisual</h2>
    <div className="py-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video) => (
        <div key={video.key} className="justify-center">
          <div className="video-config">
            <ReactPlayer url={video.url} light={true} />
          </div>
        </div>
      ))}
    </div>
    <div className="py-8" />
  </motion.div>
);

export default AudioVisualContainer;
