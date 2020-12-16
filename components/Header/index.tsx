import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import BurgerMenuHeader from "./BurgerMenu";
import MenuNormalHeader from "./MenuNormal";

const Assinatura = require("./imgs/assinatura.png");

type Props = {
  children?: ReactNode;
  title?: string;
};

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
`;

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [open]);

  return (
    <HeaderWrapper className="min-w-full">
      <div className="p-8 w-full">
        <Link href="/">
          <img className="w-96 margin-center cursor-pointer" src={Assinatura} />
        </Link>
      </div>
      <MenuNormalHeader verificaMenu={verificaMenu} />
      <div className="block md:hidden">
        <div ref={node}>
          <BurgerMenuHeader
            open={open}
            changeOpen={changeOpen}
            verificaMenu={verificaMenu}
          />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
