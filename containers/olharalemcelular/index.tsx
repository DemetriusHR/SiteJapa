import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";

import { photos } from "./photos";
import GalleryPhotos from "../../components/GalleryPhotos";

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const OlharAlemCelularContainer: React.FC = () => (
  <motion.div
    className="px-4 md:px-16"
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">Olhar além do celular</h2>
    <p className="text-sm">
      Projeto selecionado no Edital 001/2020 para manutenção das ações de
      formação técnico-culturais, visando a valorização da identidade regional,
      da história, da tradição, e das diversas manifestações artísticas do
      município de Tupã.
    </p>
    <div className="py-8" />
    <div className="video-config-olhar">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=DWskD1D63U8&feature=youtu.be&ab_channel=Jo%C3%A3oWitor"
        light={true}
      />
    </div>
    <div className="py-8" />
    <GalleryPhotos photos={photos} />
    <div className="py-8" />
  </motion.div>
);

export default OlharAlemCelularContainer;
