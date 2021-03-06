import { motion } from "framer-motion";
import Link from "next/link";

const BolsaImg = require("./imgs/bolsa.jpg");
const FotografandoMundoImg = require("./imgs/pordosol.jpg");
const FotografandoPessoasImg = require("./imgs/fotografandopessoas.jpg");
const AudioVisualImg = require("./imgs/audiovisual.jpg");
const OlharAlemdoCelularImg = require("./imgs/olharalemdocelular.jpg");

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const PortfolioContainer: React.FC = () => (
  <div className="px-6 md:px-32">
    <div className="py-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Link href="/portfolio/fotografando-ideias">
        <motion.div
          className="cursor-pointer hover:opacity-90"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <img
            src={BolsaImg}
            alt="Bolsa com rosto e mãos saindo dela"
            className="rounded-full object-cover h-48 w-48 m-auto mb-4"
          />
          <h2 className="uppercase font-bold text-center text-xl mb-4">
            Fotografando Ideias
          </h2>
          <p className="text-center text-xs">
            Quem faz arte é artista ou arteiro? Eu sou um arteiro e essas são
            minhas artes...
          </p>
        </motion.div>
      </Link>
      <Link href="/portfolio/fotografando-o-mundo">
        <motion.div
          className="cursor-pointer hover:opacity-90"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <img
            src={FotografandoMundoImg}
            alt="Bolsa com rosto e mãos saindo dela"
            width={230}
            height={230}
            className="rounded-full object-cover h-48 w-48 m-auto mb-4"
          />
          <h2 className="uppercase font-bold text-center text-xl mb-4">
            Fotografando o mundo
          </h2>
          <p className="text-center text-xs">
            Olhando por ai eu fotografo algumas coisas, e aqui estão elas.
          </p>
        </motion.div>
      </Link>
      <Link href="/portfolio/fotografando-pessoas">
        <motion.div
          className="cursor-pointer hover:opacity-90"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <img
            src={FotografandoPessoasImg}
            alt="Bolsa com rosto e mãos saindo dela"
            width={230}
            height={230}
            className="rounded-full object-cover h-48 w-48 m-auto mb-4"
          />
          <h2 className="uppercase font-bold text-center text-xl mb-4">
            Fotografando Pessoas
          </h2>
          <p className="text-center text-xs">
            Algumas fotos de pessoas que posaram pra mim.
          </p>
        </motion.div>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <Link href="/portfolio/audiovisual">
        <motion.div
          className="cursor-pointer hover:opacity-90"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <img
            src={AudioVisualImg}
            alt="Bolsa com rosto e mãos saindo dela"
            width={230}
            height={230}
            className="rounded-full object-cover h-48 w-48 m-auto mb-4"
          />
          <h2 className="uppercase font-bold text-center text-xl mb-4">
            Audiovisual
          </h2>
          <p className="text-center text-xs">Minhas aventuras no audiovisual</p>
        </motion.div>
      </Link>
      <Link href="/portfolio/olhar-alem-do-celular">
        <motion.div
          className="cursor-pointer hover:opacity-90"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div>
            <img
              src={OlharAlemdoCelularImg}
              alt="Bolsa com rosto e mãos saindo dela"
              width={230}
              height={230}
              className="rounded-full object-cover h-48 w-48 m-auto mb-4"
            />
          </div>
          <h2 className="uppercase font-bold text-center text-xl mb-4">
            Olhar além do celular
          </h2>
          <p className="text-center text-xs">Projeto fotográfico</p>
        </motion.div>
      </Link>
    </div>
    <div className="py-8" />
  </div>
);

export default PortfolioContainer;
