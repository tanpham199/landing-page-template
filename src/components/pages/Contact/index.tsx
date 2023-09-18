import { Button, Checkbox, Form, Input, Typography, App } from 'antd';
import Head from '../Head';
import Section from '@/components/common/Section';
import { Col, Row } from '@/components/common/Grid';

const initialValues = {
  name: '',
  email: '',
  organization: '',
  message: '',
  subscribeToUpdates: true,
};

type FieldType = typeof initialValues;

const Item = Form.Item<FieldType>;
const { Title, Paragraph } = Typography;

const Contact = () => {
  const { modal } = App.useApp();

  const handleFinish = (values: FieldType) => {
    modal.success({
      title: 'Your message has been delivered',
      content: 'We will get back to you as soon as possible.',
      maskClosable: true,
    });
    console.info(values);
  };

  return (
    <>
      <Head pageTitle="Contact" metaDescription="Leave us a message" />
      <Section light>
        <Row gutter={[24, 24]}>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Title>Leave us a message</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia aperiam nemo id possimus
              ullam accusantium culpa sit eaque doloribus! Praesentium sapiente incidunt quae doloremque id consequatur
              provident ipsum perspiciatis!
            </Paragraph>
            <Title level={2}>Why should you choose us</Title>
            <Paragraph>
              <ol>
                <li>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ab quod animi esse odio explicabo
                    magni minus expedita labore quasi soluta doloremque sed natus, eos nam repudiandae provident in est.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatem id ullam, iusto
                    laudantium expedita animi quae, recusandae saepe voluptatibus aut, suscipit delectus? Commodi
                    deleniti ullam facere adipisci perferendis?
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos laborum commodi quia iste maiores
                    deserunt perferendis ipsum doloribus quidem. Aliquid ullam, alias reprehenderit magni id repellat
                    deserunt voluptatem quibusdam dolorum!
                  </Paragraph>
                </li>
              </ol>
            </Paragraph>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24}>
            <Form
              className="mt-4 p-4 shadow-xl rounded-xl"
              initialValues={initialValues}
              layout="vertical"
              onFinish={handleFinish}
              autoComplete="off"
            >
              <Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input />
              </Item>
              <Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
              </Item>
              <Item label="Organization" name="organization">
                <Input />
              </Item>
              <Item label="Message" name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                <Input.TextArea rows={10} />
              </Item>
              <Item name="subscribeToUpdates" valuePropName="checked">
                <Checkbox>Subscribe to receive the latest updates and news via email.</Checkbox>
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Item>
            </Form>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Contact;
