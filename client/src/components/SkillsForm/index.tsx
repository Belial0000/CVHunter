import {
  Form,
  Input,
  Button,
  Space,
  Card,
  Row,
  Col,
  Select
} from 'antd';
import { Collapse } from 'antd';
import { useAction } from '../../hooks/useAction';
import { nanoid } from 'nanoid'

const { Option } = Select;
const { Panel } = Collapse;

const SkillsForm: React.FC = (props: any) => {

  const [form] = Form.useForm();
  const { addSkillsForm, editSkillsForm } = useAction()
  let temp = '';

  const onFinish = (values: any) => {

    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editSkillsForm({ nanoid: values.nanoid, data: values });
    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addSkillsForm(values)
    }
  };

  return (
    <Space direction="vertical" >
      <Form
        id='skill'
        layout="vertical"
        onFinish={onFinish}
        form={form}
      >
        <Card
          id='card'
        >
          <br />

          <Form.Item >
            <Collapse collapsible="header" >
              <Panel id='collaps' header="Навыки" key="1">

                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="skill"
                        label="Навык"
                        initialValue={props.skill}
                      >
                        <Input placeholder="Например, Microsoft Word" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="level"
                        label="Уровень"
                        initialValue={props.level}
                      >
                        <Select placeholder="Выбрать уровень">
                          <Option value="1">Начинающий</Option>
                          <Option value="2">Умелый</Option>
                          <Option value="3">Средний</Option>
                          <Option value="4">Опытный</Option>
                          <Option value="5">Эксперт</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }}>
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteSkills({id: props.id, nanoid: props.nanoid ? props.nanoid: temp})}>
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

export default SkillsForm