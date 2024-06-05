import { Section } from "./Section";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <Section className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-extrabold">Contact</h1>
      <p>Feel free to contact me on any of the following platforms :</p>
      <div className="flex py-14 justify-between space-x-5">
        <Button>
          <a href="mailto:cardinale.dorian83200@gmail.com">Email</a>
        </Button>
        <Button>
          <a href="https://github.com/skyro83">Github</a>
        </Button>
      </div>
    </Section>
  );
};
