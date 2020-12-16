import { motion } from "framer-motion";

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const FotografandoMundoContainer: React.FC = () => (
  <motion.div className="px-16" variants={postVariants}>
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">
      Fotografando o Mundo
    </h2>
    <p className="text-sm">
      Olhando por ai a gente consegue ver muito mais do que só momentos,
      conseguimos ver histórias em cada canto em que passamos. Fotografar o
      mundo é olhar em volta de nós com curiosidade e se interessar pelas
      histórias.
    </p>
    <div className="py-8" />
  </motion.div>
);

export default FotografandoMundoContainer;
