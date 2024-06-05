import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "./Section";

export const Projects = () => {
  const carouselItems = [
    {
      CarouselItemDesc: "Simon's Game",
      description: "I created the simon's game in python",
    },
    {
      CarouselItemDesc: "Pokedex",
      description: "Database management system with all pokemons",
    },
    {
      CarouselItemDesc: "Portfolio",
      description: "My porfolio to introduce myself",
    },

    {
      CarouselItemDesc: "Age Calculator",
      description: "I created an age calculator in html, css and js",
    },
  ];

  return (
    <Section className="flex flex-col justify-center py-20">
      <div>
        <h1 className="text-2xl font-extrabold">Projects</h1>
        <p className="text-lg">
          I create applications and tools to help developers and businesses.
        </p>
      </div>
      <div className="flex justify-center py-14">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                      <h2 className="text-2xl font-semibold">
                        {item.CarouselItemDesc}
                      </h2>
                      <p className="text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};
