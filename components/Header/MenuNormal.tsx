import Link from "next/link";
import RedesContatoHeader from "./RedesContato";

interface IMenuNormalHeader {
  verificaMenu: (nav: string) => string;
}

const MenuNormalHeader: React.FC<IMenuNormalHeader> = ({ verificaMenu }) => (
  <nav className="hidden md:block">
    <div className="w-fit margin-center py-4 text-xs">
      <Link href="/">
        <a className={`border-nav-header ${verificaMenu("Início")} p-2`}>
          INÍCIO
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={`border-nav-header ${verificaMenu("Portfolio")} p-2 mx-2`}
        >
          PORTFOLIO
        </a>
      </Link>
      <Link href="/sobre">
        <a className={`border-nav-header ${verificaMenu("Sobre")} p-2`}>
          SOBRE
        </a>
      </Link>
    </div>
    <RedesContatoHeader />
  </nav>
);

export default MenuNormalHeader;
