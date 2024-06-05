import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section>
      <div className="flex items-center">
        <Avatar className="mr-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-extrabold text-2xl">Cardinale Dorian</h1>
      </div>
      <h2 className="font-semibold italic text-2xl py-3">
        Developer and Creator
      </h2>
      <p>
        Im a passionate and dedicated developer with experience in various
        programming languages and frameworks.
      </p>
    </Section>
  );
};
