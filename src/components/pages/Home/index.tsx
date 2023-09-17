import Section from '@/components/common/Section';
import Head from '../Head';
import { Card } from 'antd';
import { Col, Row } from '@/components/common/Grid';

const Home = () => {
  return (
    <>
      <Head pageTitle="Home" />
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti, autem, vitae reiciendis non
        repellendus excepturi incidunt ab nulla tempora, perferendis debitis. Ducimus temporibus soluta obcaecati
        voluptas aut debitis id.
      </Section>
      <Section light>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore iure animi corporis explicabo cumque! Qui
        inventore sapiente facilis totam, eligendi eius reprehenderit itaque iste deserunt fuga similique explicabo
        excepturi labore.
      </Section>
      <Section>
        <Row>
          {[1, 2, 3, 4].map((key) => (
            <Col key={key}>
              <Card>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam optio, iusto porro veritatis nulla ipsa
                molestiae labore a autem eaque facilis, praesentium suscipit veniam laborum aliquid culpa harum
                architecto quas.
              </Card>
            </Col>
          ))}
        </Row>
      </Section>
    </>
  );
};

export default Home;
