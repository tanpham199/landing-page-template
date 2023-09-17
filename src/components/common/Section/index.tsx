import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {}

const Section = ({ children }: SectionProps) => {
  return <section className="max-w-5xl m-auto">{children}</section>;
};

export default Section;
