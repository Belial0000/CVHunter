import {
  Form,
  Input,
  Button,
  Space,
  Card,
  Row,
  Col,
} from 'antd';

import { Collapse } from 'antd';
import { nanoid } from 'nanoid'
import { useAction } from '../../hooks/useAction';

const { Panel } = Collapse;

const RecommendationsForm: React.FC = (props: any) => {
  const [form] = Form.useForm();
  const { addRecForm, editRecForm } = useAction()  
  let temp = '';

  const onFinish = (values: any) => {

    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editRecForm({ nanoid: values.nanoid, data: values });
    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addRecForm(values)
    }
  };

  

  return (
    <Space direction="vertical" >
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        id='rec'
      >
        <Card
          id='card'
        >
          <br />

          <Form.Item >
            <Collapse collapsible="header" >
              <Panel id='collaps' header="Рекомендации" key="1">

                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="namecompany"
                        label="Название компании"
                        initialValue={props.namecompany}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="contactperson"
                        label="Контактное лицо"
                        initialValue={props.contactperson}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="number"
                        label="Номер телефона"
                        initialValue={props.number}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        initialValue={props.email}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }}>
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteRec({id: props.id, nanoid: props.nanoid ? props.nanoid: temp})}>
                  Удалить
                </Button>
              </Panel>
            </Collapse>
          </Form.Item>
        </Card>
      </Form>
    </Space >
  )
}

export default RecommendationsForm