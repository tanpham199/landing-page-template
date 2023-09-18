import Section from '@/components/common/Section';
import Head from '../Head';
import styles from './About.module.scss';
import { Typography } from 'antd';
import classNames from 'classnames';
import { Col, Row } from '@/components/common/Grid';
import Image from 'next/image';
import { getImage2BpSizes } from '@/utils';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <>
      <Head pageTitle="About" metaDescription="Details about my website" />
      <div className={classNames(styles.hero, 'center')}>
        <Title className="text-center">Softwares that change the world</Title>
      </div>
      <Section light>
        <Title level={2}>Heading 2</Title>
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
        <Title level={2}>Heading 2</Title>
        <Row>
          <Col xl={12} lg={12} md={12} sm={24} className="center">
            <div className="text-center md:text-right">
              <Title level={3}>Heading 3</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias rem quos provident repellat eum
                excepturi magni qui amet? Sed at enim illum? Vitae, corporis dolorem. Perferendis tempora tempore
                perspiciatis expedita.
              </Text>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24}>
            <div className="relative w-full h-72">
              <Image
                src="https://images.unsplash.com/photo-1603654983938-a3ac86145bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80"
                alt="example"
                fill
                sizes={getImage2BpSizes({ md: '100vw', xl: '50vw' })}
              />
            </div>
          </Col>
        </Row>
      </Section>
      <Section light>
        <Title level={2}>Heading 2</Title>
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
        <Title level={2}>Heading 2</Title>
        <Row>
          <Col xl={12} lg={12} md={12} sm={24}>
            <div className="relative w-full h-72">
              <Image
                src="https://images.unsplash.com/photo-1603654983938-a3ac86145bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80"
                alt="example"
                fill
                sizes={getImage2BpSizes({ md: '100vw', xl: '50vw' })}
              />
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} className="center">
            <div className="text-center md:text-left">
              <Title level={3}>Heading 3</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias rem quos provident repellat eum
                excepturi magni qui amet? Sed at enim illum? Vitae, corporis dolorem. Perferendis tempora tempore
                perspiciatis expedita.
              </Text>
            </div>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default About;
