import { Row as AntRow, RowProps } from 'antd';

const Row = ({ gutter = [16, 16], ...rest }: RowProps) => {
  return <AntRow gutter={gutter} {...rest} />;
};

export default Row;
