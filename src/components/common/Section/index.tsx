import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  light?: boolean;
}

const Section = ({ className, children, light, ...rest }: SectionProps) => {
  return (
    <section className={classNames(className, 'py-6', light && 'bg-white')} {...rest}>
      <div className="inner max-w-5xl m-auto">{children}</div>
    </section>
  );
};

export default Section;
