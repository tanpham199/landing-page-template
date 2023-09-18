import Section from '@/components/common/Section';
import Head from '../Head';
import styles from './About.module.scss';
import { Card, Typography, Image as AntImage } from 'antd';
import classNames from 'classnames';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const About = () => {
  return (
    <>
      <Head pageTitle="About" metaDescription="Details about my website" />
      <div className={classNames(styles.hero, 'center')}>
        <Title>Softwares that change the world</Title>
      </div>
      <Section light>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti obcaecati ex sint natus cupiditate animi
          quas quae repudiandae quia neque exercitationem accusamus, a saepe dolores laborum ducimus possimus, delectus
          adipisci.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem sint non quasi voluptatem. Repudiandae
          exercitationem provident sapiente deleniti temporibus, perferendis aspernatur pariatur? Laboriosam accusamus
          eligendi impedit, quia excepturi labore?
        </Paragraph>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint praesentium quaerat libero totam
          eius! Blanditiis sed accusamus eveniet, dolor maxime dolore voluptatum, nisi soluta dolorem quibusdam hic
          obcaecati ducimus?
        </Paragraph>
      </Section>
      <Section>
        <Card
          hoverable
          cover={
            <AntImage
              src="https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
              alt="example"
              width="100%"
              height={500}
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" className="text-center" />
        </Card>
      </Section>
      <Section light>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti obcaecati ex sint natus cupiditate animi
          quas quae repudiandae quia neque exercitationem accusamus, a saepe dolores laborum ducimus possimus, delectus
          adipisci.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem sint non quasi voluptatem. Repudiandae
          exercitationem provident sapiente deleniti temporibus, perferendis aspernatur pariatur? Laboriosam accusamus
          eligendi impedit, quia excepturi labore?
        </Paragraph>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint praesentium quaerat libero totam
          eius! Blanditiis sed accusamus eveniet, dolor maxime dolore voluptatum, nisi soluta dolorem quibusdam hic
          obcaecati ducimus?
        </Paragraph>
      </Section>
    </>
  );
};

export default About;
