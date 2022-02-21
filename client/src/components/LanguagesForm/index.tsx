import { Form, Input, Button, Card, Space, Row, Col, Select } from 'antd';
import { Collapse } from 'antd';
import { useAction } from '../../hooks/useAction';
import { nanoid } from 'nanoid'

const { Option } = Select;
const { Panel } = Collapse;

const LanguageForm = (props: any) => {

  const [form] = Form.useForm();
  const { addLanguagesForm, editLanguagesForm } = useAction()
  let temp = '';

  const onFinish = (values: any) => {

    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editLanguagesForm({ nanoid: values.nanoid, data: values });

    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addLanguagesForm(values)
    }
  };



  return (
    <Space direction="vertical" >
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
      >
        <Card id='card' >
          <br />
          <Form.Item >
            <Collapse collapsible="header" >
              <Panel id='collaps' header="Языки" key="1">
                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="language"
                        label="Язык"
                        initialValue={props.languages}
                      >
                        <Input placeholder="Например, Английский" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="level"
                        label="Уровень"
                        initialValue={props.level}
                      >
                        <Select placeholder="Выбрать уровень">
                          <Option value="Начальный">Начальный</Option>
                          <Option value="Ниже среднего">Ниже среднего</Option>
                          <Option value="Средний">Средний</Option>
                          <Option value="Выше среднего">Выше среднего</Option>
                          <Option value="Продвинутый">Продвинутый</Option>
                          <Option value="Профессиональный">Профессиональный</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }} id="btn" >
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteLanguages({ id: props.id, nanoid: props.nanoid ? props.nanoid : temp })}>
                  Удалить
                </Button>

              </Panel>
            </Collapse>
          </Form.Item>
        </Card>
      </Form>
    </Space>
  )

}

export default LanguageForm