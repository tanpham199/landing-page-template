const toWidth = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);

type Size = string | number;

interface GetImage2BpSizesParams {
  xl: Size;
  md: Size;
}

export const getImage2BpSizes = ({ md, xl }: GetImage2BpSizesParams) =>
  `(max-width: 768px) ${toWidth(md)}, ${toWidth(xl)}`;

interface GetImage4BpSizesParams {
  xl: Size;
  lg: Size;
  md: Size;
  sm: Size;
}

export const getImage4BpSizes = ({ sm, md, lg, xl }: GetImage4BpSizesParams) =>
  `(max-width: 576px) ${toWidth(sm)}, (max-width: 768px) ${toWidth(md)}, (max-width: 1200px) ${toWidth(lg)}, ${toWidth(
    xl
  )}`;
