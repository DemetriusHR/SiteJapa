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

const FotografandoIdeiasContainer: React.FC = () => (
  <motion.div className="px-16" variants={postVariants}>
    <div className="py-8" />
    <h2 className="uppercase font-bold text-2xl mb-4">
      Fotografando Ideias
    </h2>
    <p className="mb-2 text-sm">Quem faz arte é artista ou arteiro?</p>
    <p className="mb-2 text-sm">
      Eu sou um arteiro e essas são minhas artes... Um pouquinho do que se passa
      no íntimo da minha cabeça. O meu olhar peculiar dando sentido a algumas
      fotos e outras não, mas todas com a intenção de fazer as pessoas verem
      algo que não estão acostumadas.
    </p>
    <p className="text-sm">Ou talvez seja apenas uma falta do que fazer minha...</p>
    <div className="py-8" />
  </motion.div>
);

export default FotografandoIdeiasContainer;
