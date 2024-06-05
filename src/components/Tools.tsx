import { Section } from "./Section";

export const MyTools = () => {
  return (
    <Section>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h1 className="font-extrabold text-2xl">Code</h1>
          <ul className="py-5 font-semibold list-disc list-inside">
            <li>Visual Studio Code</li>
            <li>Github Copilot</li>
            <li>Github</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h1 className="font-extrabold text-2xl">My language</h1>
          <ul className="py-5 font-semibold list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Lua</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h1 className="font-extrabold text-2xl">Design</h1>
          <ul className="py-5 font-semibold list-disc list-inside">
            <li>Figma</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
