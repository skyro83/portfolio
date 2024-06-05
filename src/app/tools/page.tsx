import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { MyTools } from "@/components/Tools";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Tools() {
  return (
    <main>
      <Header />
      <Section>
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-extrabold text-2xl">Cardinale Dorian</h1>
        </div>
        <h2 className="italic text-2xl py-3">The tool I use everyday</h2>
      </Section>
      <MyTools />
    </main>
  );
}
