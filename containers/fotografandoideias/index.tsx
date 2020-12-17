import { motion } from "framer-motion";
import { photos } from "./photos";
import GalleryPhotos from "../../components/GalleryPhotos";

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const FotografandoIdeiasContainer: React.FC = () => (
  <motion.div
    className="px-4 md:px-16"
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">Fotografando Ideias</h2>
    <p className="mb-2 text-sm">Quem faz arte é artista ou arteiro?</p>
    <p className="mb-2 text-sm">
      Eu sou um arteiro e essas são minhas artes... Um pouquinho do que se passa
      no íntimo da minha cabeça. O meu olhar peculiar dando sentido a algumas
      fotos e outras não, mas todas com a intenção de fazer as pessoas verem
      algo que não estão acostumadas.
    </p>
    <p className="text-sm">
      Ou talvez seja apenas uma falta do que fazer minha...
    </p>
    <div className="py-8" />
    <GalleryPhotos photos={photos} />
    <div className="py-8" />
  </motion.div>
);

export default FotografandoIdeiasContainer;
