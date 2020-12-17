import styled from "styled-components";
import { motion } from "framer-motion";

const EuImg = require("./imgs/eu.jpg");

const SobreWrapper = styled.div`
  .icon {
    border-radius: 50%;
  }

  .text-link {
    display: flex;
    align-content: center;
  }

  .link {
    :hover {
      .icon {
        background-color: #bebebe;
      }

      .text-link {
        opacity: 0.8;
      }
    }
  }
`;

const variants = {
  hidden: { opacity: 0, y: -2 },
  visible: { opacity: 1, y: 0 },
};

const SobreContainer: React.FC = () => (
  <SobreWrapper className="px-16">
    <div className="py-8" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <img src={EuImg} className="w-60 m-auto" alt="Foto do João Witor" />
      </motion.div>
      <motion.article
        initial="hidden"
        animate="visible"
        variants={variants}
        className="col-span-2"
      >
        <h3 className="font-extrabold uppercase mb-4">Quem é João Witor?</h3>
        <p className="mb-4">
          Desde os 12 anos sendo um curioso por edição e se especializando cada
          vez mais em design gráfico, edição de fotografia e produção
          audiovisual. Apaixonado por arte e fotografando tudo o que vê, em Tupã
          SP, trabalho profissionalmente na área de edição desde 2017.
        </p>
        <p className="mb-4">
          Resumindo, publicitário que nas horas vagas trabalha.
        </p>
        <p>Meu curriculo você encontra no LinkedIn.</p>
      </motion.article>
      <motion.ul
        className="flex flex-col"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row"
            target="_blank"
            href="http://www.facebook.com/ojoaowitor"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  facebook tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div className="text-link">
                <div className="text-center w-full md:w-auto">
                  <div>Facebook</div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row"
            target="_blank"
            href="http://www.instagram.com/ojapa11"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  instagram tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div>
                <div className="text-link">
                  <div className="text-center w-full md:w-auto">
                    <div>Instagram</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row"
            target="_blank"
            href="http://www.linkedin.com/in/joãowitor"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  linkedin tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div className="text-link">
                <div className="text-center w-full md:w-auto">
                  <div>LinkedIn</div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row"
            target="_blank"
            href="http://behance.com/joaowitor"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  behance tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div className="text-link">
                <div className="text-center w-full md:w-auto">
                  <div>Behance</div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row md:flex-wrap"
            target="_self"
            href="mailto:jpzvideos@hotmail.com"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  mail tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div className="text-link">
                <div className="text-center w-full md:w-auto">
                  <div>jpzvideos@hotmail.com</div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="mb-6">
          <a
            className="flex link flex-col md:flex-row"
            target="_self"
            href="tel:+14997051933"
          >
            <span className="m-auto md:mr-4 md:ml-0 icon ico  mobile tiny">
              <div className="ico-bg"></div>
              <div className="icon "></div>
            </span>
            <div>
              <div className="text-link">
                <div className="text-center w-full md:w-auto">
                  <div>14 99705 1933</div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </motion.ul>
    </div>
    <div className="py-8" />
  </SobreWrapper>
);

export default SobreContainer;
