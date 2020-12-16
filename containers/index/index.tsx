import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

const imagemUmAntes = require("./imgs/1_antes.jpg");
const imagemUmDepois = require("./imgs/1_depois.jpg");
const imagemDoisAntes = require("./imgs/2_antes.jpg");
const imagemDoisDepois = require("./imgs/2_depois.jpg");
const imagemTresAntes = require("./imgs/3_antes.jpg");
const imagemTresDepois = require("./imgs/3_depois.jpg");
const imagemQuatroAntes = require("./imgs/4_antes.jpg");
const imagemQuatroDepois = require("./imgs/4_depois.jpg");
const imagemCincoAntes = require("./imgs/5_antes.jpg");
const imagemCincoDepois = require("./imgs/5_depois.jpg");
const imagemSeisAntes = require("./imgs/6_antes.jpg");
const imagemSeisDepois = require("./imgs/6_depois.jpg");
const imagemSeteAntes = require("./imgs/7_antes.jpg");
const imagemSeteDepois = require("./imgs/7_depois.jpg");

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};


const IndexContainer: React.FC = () => (
  <div className="px-32">
    <div className="py-8" />
    <div className="md:w-6/12 margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemUmAntes}
          leftImageLabel="Antes"
          rightImage={imagemUmDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemDoisAntes}
          leftImageLabel="Antes"
          rightImage={imagemDoisDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemTresAntes}
          leftImageLabel="Antes"
          rightImage={imagemTresDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="md:w-6/12 margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemQuatroAntes}
          leftImageLabel="Antes"
          rightImage={imagemQuatroDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="md:w-6/12 margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemCincoAntes}
          leftImageLabel="Antes"
          rightImage={imagemCincoDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemSeisAntes}
          leftImageLabel="Antes"
          rightImage={imagemSeisDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
    <div className="md:w-6/12 margin-center">
      <motion.div variants={postVariants}>
        <ReactCompareImage
          leftImage={imagemSeteAntes}
          leftImageLabel="Antes"
          rightImage={imagemSeteDepois}
          rightImageLabel="Depois"
          sliderLineWidth={1}
        />
      </motion.div>
    </div>
    <div className="py-8" />
  </div>
);

export default IndexContainer;
