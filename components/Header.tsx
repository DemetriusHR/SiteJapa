import React, { ReactNode, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Assinatura = require("../imgs/assinatura.png");

type Props = {
  children?: ReactNode;
  title?: string;
};

type IRedes = {
  children?: ReactNode;
  className1?: string;
  className2?: string;
};

const Redes: React.FC<IRedes> = ({ className1, className2 }) => (
  <div className="w-fit margin-center text-xs">
    <a
      href="https://www.facebook.com/ojoaowitor"
      target="_blank"
      className="social-networks"
    >
      <span className="ico  facebook tiny">
        <div className="ico-bg" />
        <div className="icon " />
      </span>
    </a>
    <a
      href="https://www.instagram.com/ojapa11/"
      target="_blank"
      className={`social-networks ${className1}`}
    >
      <span className="ico  instagram tiny mx-2">
        <div className="ico-bg" />
        <div className="icon " />
      </span>
    </a>
    <a
      href="https://www.behance.net/JoaoWitor"
      target="_blank"
      className={`social-networks ${className2}`}
    >
      <span className="ico  behance tiny mx-2">
        <div className="ico-bg" />
        <div className="icon " />
      </span>
    </a>
    <a
      href="https://www.linkedin.com/in/jo%C3%A3owitor/"
      target="_blank"
      className="social-networks"
    >
      <span className="ico  linkedin tiny">
        <div className="ico-bg" />
        <div className="icon " />
      </span>
    </a>
  </div>
);

const HeaderWrapper = styled.header`
  color: #323232;
  transition: all 0.8s linear;

  .border-nav-header {
    border-width: 1px;
    border-color: transparent;
    border-style: solid;

    &.active {
      border-color: #323232;
    }

    :hover {
      border-color: #323232;
    }
  }

  .icon {
    border-radius: 50%;

    :hover {
      background-color: #bebebe;
    }
  }

  .header-max-width {
    display: none;

    @media (min-width: 900px) {
      display: initial;
    }
  }

  .header-min-width {
    display: none;

    @media (max-width: 899px) {
      display: initial;
    }
  }
`;

interface IBurgerWrapper {
  open: boolean;
  verificaMenu: (nav: string) => string;
}

const BurgerWrapper = styled.button<IBurgerWrapper>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 30px;

  span {
    width: 2rem;
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
`;

interface IBurgerMenu {
  open: boolean;
  changeOpen: () => void;
}

const Burger: React.FC<IBurgerMenu> = ({ open, changeOpen, ...props }) => (
  <BurgerWrapper
    aria-label="Toggle menu"
    className="mt-2"
    aria-expanded={open}
    open={open}
    onClick={changeOpen}
    {...props}
  >
    <span />
    <span />
    <span />
  </BurgerWrapper>
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
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

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

const Menu: React.FC<IBurgerWrapper> = ({ open, verificaMenu, ...props }) => (
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
      <Redes className1="mx-6" className2="mr-6" />
    </div>
  </MenuWrapper>
);

const Header = ({ title = "This is the default title" }: Props) => {
  const node = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const changeOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  useOnClickOutside(node, () => setOpen(false));

  const verificaMenu = useCallback(
    (nav: string) => {
      return nav === title ? "active" : "";
    },
    [title]
  );

  return (
    <HeaderWrapper>
      <div className="p-8 w-full">
        <Link href="/">
          <img className="w-64 margin-center cursor-pointer" src={Assinatura} />
        </Link>
      </div>
      <nav className="header-max-width">
        <div className="w-fit margin-center py-4 text-xs">
          <Link href="/">
            <a className={`border-nav-header ${verificaMenu("Início")} p-2`}>
              INÍCIO
            </a>
          </Link>
          <Link href="/portfolio">
            <a className={`border-nav-header ${verificaMenu("Portfolio")} p-2`}>
              PORTFOLIO
            </a>
          </Link>
          <Link href="/sobre">
            <a className={`border-nav-header ${verificaMenu("Sobre")} p-2`}>
              SOBRE
            </a>
          </Link>
        </div>
        <Redes />
      </nav>
      <div className="header-min-width" ref={node}>
        <FocusLock disabled={!open}>
          <Burger
            open={open}
            changeOpen={changeOpen}
            aria-controls="main-menu"
          />
          <Menu open={open} verificaMenu={verificaMenu} />
        </FocusLock>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
