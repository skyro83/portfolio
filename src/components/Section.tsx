import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto py-8", props.className)}>
      {props.children}
    </section>
  );
};
