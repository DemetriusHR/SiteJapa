import React, { ReactNode } from "react";

type IRedes = {
  children?: ReactNode;
  className1?: string;
  className2?: string;
};

const RedesContatoHeader: React.FC<IRedes> = ({ className1, className2 }) => (
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

export default RedesContatoHeader;
