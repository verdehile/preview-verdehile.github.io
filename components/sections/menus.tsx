"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const Menus = () => {
  return (
    <div className="flex flex-col justify-center space-x-2 pt-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
        View our Menu
      </h2>
      <div className="flex space-x-2 justify-center">
        <a href="/rashidya-menu-zi.pdf" target="_blank">
          <Button className="hover:bg-accent rounded-xl cursor-pointer hover:-translate-y-0.5 hover:duration-100 hover:ease-in">
            Rashidya Menu <ArrowRightIcon />
          </Button>
        </a>
        <a href="/bur-dubai-menu-zi.pdf" target="_blank">
          <Button className="hover:bg-accent rounded-xl cursor-pointer hover:-translate-y-0.5 hover:duration-100 hover:ease-in">
            <p>Bur Dubai Menu</p>
            <ArrowRightIcon />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Menus;
