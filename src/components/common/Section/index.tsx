import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  light?: boolean;
  full?: boolean;
  noSpace?: boolean;
}

const Section = ({ className, children, light, full, noSpace, ...rest }: SectionProps) => {
  return (
    <section className={classNames(className, !noSpace && 'py-6', light && 'bg-white')} {...rest}>
      <div className={classNames('inner', !full && 'max-w-5xl m-auto px-4')}>{children}</div>
    </section>
  );
};

export default Section;
