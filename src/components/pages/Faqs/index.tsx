import Section from '@/components/common/Section';
import Head from '../Head';
import styles from './Faqs.module.scss';
import { Collapse, CollapseProps, Typography } from 'antd';
import classNames from 'classnames';

const { Title, Paragraph } = Typography;

const text = (
  <>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae architecto facilis perspiciatis ullam
      quae, explicabo dolorem enim aliquam saepe temporibus, voluptate cumque? Fugit adipisci culpa mollitia,
      praesentium eius natus!
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, molestiae ea! Eos amet eum quisquam reiciendis
      velit dignissimos obcaecati asperiores? Labore incidunt quae reprehenderit asperiores architecto officia ullam,
      recusandae earum.
    </Paragraph>
  </>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is question 1',
    children: text,
  },
  {
    key: '2',
    label: 'This is question 2',
    children: text,
  },
  {
    key: '3',
    label: 'This is question 3',
    children: text,
  },
];

const Faqs = () => {
  return (
    <>
      <Head pageTitle="FAQs" metaDescription="Frequently asked questions" />
      <div className={classNames(styles.hero, 'center')}>
        <Title className="text-center">Frequently asked questions</Title>
      </div>
      <Section light>
        <Title level={2}>Heading 2</Title>
        <Collapse items={items} defaultActiveKey={['1']} accordion />
      </Section>
      <Section>
        <Title level={2}>Heading 2</Title>
        <Collapse items={items} defaultActiveKey={['1']} accordion />
      </Section>
      <Section light>
        <Title level={2}>Heading 2</Title>
        <Collapse items={items} defaultActiveKey={['1']} accordion />
      </Section>
    </>
  );
};

export default Faqs;
