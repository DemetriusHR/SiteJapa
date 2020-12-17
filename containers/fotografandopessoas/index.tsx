import { motion } from "framer-motion";

import { photos } from "./photos";
import GalleryPhotos from "../../components/GalleryPhotos";

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const FotografandoPessoasContainer: React.FC = () => (
  <motion.div
    className="px-16"
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">Fotografando Pessoas</h2>
    <p className="text-sm">
      Mostrando as pessoas como eu vejo elas, transformando segundos em algo
      quase eterno através da luz.
    </p>
    <div className="py-8" />
    <GalleryPhotos photos={photos} />
    <div className="py-8" />
  </motion.div>
);

export default FotografandoPessoasContainer;
