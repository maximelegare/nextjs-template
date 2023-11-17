import React from "react";
import type { FC } from "react";

import Logo from "../../../../public/assets/SVG/partago_white.svg";
import { Button } from "~/components/core/Button";
import { IconBurger } from "~/components/core/Icons";

interface Props {
  openSidebar: () => void;
}

export const Header: FC<Props> = ({ openSidebar }) => {
  return (
    <>
      <header className={`fixed flex h-16  w-full justify-center`}>
        <div className="w- flex h-16 w-full items-center justify-center bg-primary  text-white">
          <div className="mx-3 flex w-full justify-between">
            <div className="flex w-32 items-center">
              <Logo />
            </div>
            <Button
              handleClick={openSidebar}
              variant="icon-only"
              buttonSize="lg"
              icon={<IconBurger />}
            />
          </div>
        </div>
      </header>
    </>
  );
};
