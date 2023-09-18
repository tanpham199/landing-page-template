import Section from '@/components/common/Section';
import Head from '../Head';
import { Card, Typography, Carousel } from 'antd';
import { Col, Row } from '@/components/common/Grid';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';
import styles from './Home.module.scss';
import { getImage2BpSizes, getImage4BpSizes } from '@/utils';

const { Title, Text } = Typography;
const { Meta } = Card;

const DUMMY_VERTICAL_IMAGES = [
  'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80',
  'https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  'https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  'https://images.unsplash.com/photo-1601409591375-88775c49c1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
];

const DUMMY_HORIZONTAL_IMAGES = [
  'https://images.unsplash.com/photo-1526315691150-b5b70287b533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3274&q=80',
  'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  'https://images.unsplash.com/photo-1505912755138-d45d8f4eb95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  'https://images.unsplash.com/photo-1534610481906-d7550c608547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
];

const Home = () => {
  return (
    <>
      <Head pageTitle="Home" />
      <div className={styles.hero}>
        <Image src={heroImg} alt="Hero" priority fill />
        <div className={styles.heading}>
          <Title>My Amazing Template</Title>
          <Text className={styles.sub}>A2A SOFTWARE</Text>
        </div>
      </div>
      <Section light>
        <Title level={2}>Heading 2</Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti, autem, vitae reiciendis non
        repellendus excepturi incidunt ab nulla tempora, perferendis debitis. Ducimus temporibus soluta obcaecati
        voluptas aut debitis id.
      </Section>
      <Section>
        <Title level={2}>Heading 2</Title>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore iure animi corporis explicabo cumque! Qui
        inventore sapiente facilis totam, eligendi eius reprehenderit itaque iste deserunt fuga similique explicabo
        excepturi labore.
      </Section>
      <Section full noSpace>
        <Carousel autoplay>
          {DUMMY_HORIZONTAL_IMAGES.map((src) => (
            <div key={src} className="relative w-full h-128">
              <Image src={src} alt="example" fill sizes="100vw" />
            </div>
          ))}
        </Carousel>
      </Section>
      <Section light>
        <Title level={2}>Heading 2</Title>
        <Row>
          {DUMMY_VERTICAL_IMAGES.map((src) => (
            <Col key={src}>
              <Card
                cover={
                  <div className="relative w-full h-72">
                    <Image
                      src={src}
                      alt="example"
                      fill
                      sizes={getImage4BpSizes({ sm: '100vw', md: '50vw', lg: '33vw', xl: '25vw' })}
                      quality={90}
                    />
                  </div>
                }
                hoverable
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>
          ))}
        </Row>
      </Section>
      <Section>
        <Card
          hoverable
          cover={
            <div className="relative w-full h-128">
              <Image
                src="https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
                alt="example"
                fill
                sizes="100vw"
              />
            </div>
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" className="text-center" />
        </Card>
      </Section>
      <Section light>
        <Title level={2}>Heading 2</Title>
        <Row>
          {[1, 2, 3, 4].map((key) => (
            <Col key={key}>
              <Card title="My Title" extra={<Link href="/">More</Link>} hoverable>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam optio, iusto porro veritatis nulla ipsa
                molestiae labore a autem eaque facilis, praesentium suscipit veniam laborum aliquid culpa harum
                architecto quas.
              </Card>
            </Col>
          ))}
        </Row>
      </Section>
      <Section>
        <Title level={2}>Heading 2</Title>
        <Row>
          {[1, 2, 3, 4].map((key) => (
            <Col key={key} xl={12} lg={12} md={12} sm={24}>
              <Card title="My Title" extra={<Link href="/">More</Link>} hoverable>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam optio, iusto porro veritatis nulla ipsa
                molestiae labore a autem eaque facilis, praesentium suscipit veniam laborum aliquid culpa harum
                architecto quas.
              </Card>
            </Col>
          ))}
        </Row>
      </Section>
      <Section light>
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

export default Home;
