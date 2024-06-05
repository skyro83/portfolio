"use client";

import { Section } from "./Section";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header>
      <Section className="flex justify-between items-baseline">
        <h1 className="font-extrabold">Cardinale Dorian</h1>
        <div className="flex">
          <Button variant="link" onClick={() => (window.location.href = "/")}>
            Home
          </Button>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/tools")}
          >
            Tools
          </Button>
        </div>
      </Section>
    </header>
  );
};
