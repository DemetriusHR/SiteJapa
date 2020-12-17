import { motion } from "framer-motion";
import { photos } from "./photos";
import GalleryPhotos from "../../components/GalleryPhotos";

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const FotografandoMundoContainer: React.FC = () => (
  <motion.div
    className="px-16"
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">Fotografando o Mundo</h2>
    <p className="text-sm">
      Olhando por ai a gente consegue ver muito mais do que só momentos,
      conseguimos ver histórias em cada canto em que passamos. Fotografar o
      mundo é olhar em volta de nós com curiosidade e se interessar pelas
      histórias.
    </p>
    <div className="py-8" />
    <GalleryPhotos photos={photos} />
    <div className="py-8" />
  </motion.div>
);

export default FotografandoMundoContainer;
