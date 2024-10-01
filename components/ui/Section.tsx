import React, { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
}

const Section: FC<SectionProps> = ({
  children,
  height,
  marginTop,
  marginBottom,
}) => {
  const sectionClass = () => {
    const classes = ["w-full", "p-5"];

    if (marginTop) {
      classes.push(`mt-${marginTop}`);
    }

    if (marginBottom) {
      classes.push(`mb-${marginBottom}`);
    }

    if (height) {
      classes.push(`h-${height}`);
    }

    return classes.join(" ");
  };

  return <section className={sectionClass()}>{children}</section>;
};

export default Section;
