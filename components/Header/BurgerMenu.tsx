import Link from "next/link";
import styled from "styled-components";
import RedesContatoHeader from "./RedesContato";
import FocusLock from "react-focus-lock";

interface IBurgerWrapper {
  open: boolean;
}

const BurgerWrapper = styled.button<IBurgerWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  right: 1rem;
  border: none;
  cursor: pointer;
  padding: 0;
  top: 0;
  right: 0;
  z-index: 3;

  span {
    width: 1.5rem;
    height: 0.05rem;
    background: #323232;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  :hover {
    > span {
      :first-child {
        transform: ${({ open }) => (open ? "" : "translateY(3px)")};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "" : "translateY(-3px)")};
      }
    }
  }
`;

interface IBurgerMenu {
  open: boolean;
  changeOpen: () => void;
}

const Burger: React.FC<IBurgerMenu> = ({ open, changeOpen, ...props }) => (
  <div className="fixed top-0 right-0 z-10 mt-2">
    <div className="bg-white p-3 m-4 rounded-full shadow">
      <BurgerWrapper
        aria-label="Toggle menu"
        aria-expanded={open}
        open={open}
        onClick={changeOpen}
        {...props}
      >
        <span />
        <span />
        <span />
      </BurgerWrapper>
    </div>
  </div>
);

export const MenuWrapper = styled.nav<IBurgerWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(255 255 255 / 89%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 2;

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 0;
    letter-spacing: 0.5rem;
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
    width: 100%;
  }
`;

interface IMenu extends IBurgerWrapper {
  verificaMenu: (nav: string) => string;
}

const Menu: React.FC<IMenu> = ({ open, verificaMenu, ...props }) => (
  <MenuWrapper
    open={open}
    className="text-center"
    aria-hidden={!open}
    id="main-menu"
    {...props}
  >
    <Link href="/">
      <a className={`border-nav-header ${verificaMenu("Início")} p-2`}>
        INÍCIO
      </a>
    </Link>
    <Link href="/portfolio">
      <a className={`border-nav-header ${verificaMenu("Portfolio")} p-2 my-2`}>
        PORTFOLIO
      </a>
    </Link>
    <Link href="/sobre">
      <a className={`border-nav-header ${verificaMenu("Sobre")} p-2`}>SOBRE</a>
    </Link>
    <div className="mt-56">
      <RedesContatoHeader className1="mx-6" className2="mr-6" />
    </div>
  </MenuWrapper>
);

interface IBurgerMenuHeader extends IBurgerWrapper {
  changeOpen: () => void;
  verificaMenu: (nav: string) => string;
}

const BurgerMenuHeader: React.FC<IBurgerMenuHeader> = ({
  open,
  changeOpen,
  verificaMenu,
}) => (
  <FocusLock disabled={!open}>
    <Burger open={open} changeOpen={changeOpen} aria-controls="main-menu" />
    <Menu open={open} verificaMenu={verificaMenu} />
  </FocusLock>
);

export default BurgerMenuHeader;
