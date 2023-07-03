import { ReactNode } from "react";

import "./index.css";

interface BaseCardProps {
  classname?: string;
  children: ReactNode;
}

export const BaseCard = ({
  classname,
  children,
}: BaseCardProps) => {
  return (
    <div
      className={`card-container ${classname}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
