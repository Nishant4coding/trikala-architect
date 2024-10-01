import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Section= {
  className?: string;
  children: ReactNode;
}

function Section({ className, children }: Section) {
  return (
    <section className={cn("min-h-screen px-8 py-12", className)}>
      {children}
    </section>
  );
}

export default Section;
