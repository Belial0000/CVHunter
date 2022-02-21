import {
  Form,
  Input,
  Button,
  Space,
  Card,
  Row,
  Col,
  DatePicker
} from 'antd';
import { Collapse } from 'antd';
import { useAction } from '../../hooks/useAction';
import { nanoid } from 'nanoid'

const { Panel } = Collapse;

const JobForm: React.FC = (props: any) => {
  // const newDateBegin = props.dateBegin.format('MM/DD/YYYY')
  // const newDateFinish = props.dateFinish.format('MM/DD/YYYY')
  const [form] = Form.useForm();
  const { addExperiencesForm, editExperiencesForm } = useAction()
  let temp = '';

  function onChange(date: any, dateString: any) {
    // console.log(date, dateString);
  }

  const onFinish = (values: any) => {
    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editExperiencesForm({ nanoid: values.nanoid, data: values });
    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addExperiencesForm({ ...values })
    }
  };

  return (
    <Space direction="vertical" >
      <Form
        id='job'
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
              <Panel id='collaps' header="Опыт работы" key="1">

                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="position"
                        label="Должность"
                        initialValue={props.position}
                      >
                        <Input placeholder="Например, менеджер по продажам" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="city"
                        label="Город"
                        initialValue={props.city}
                      >
                        <Input placeholder="Например, Лондон" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  name="employer"
                  label="Работодатель"
                  initialValue={props.employer}
                >
                  <Input placeholder="Например, PwC" />
                </Form.Item>

                <Form.Item  >
                  <Row gutter={8}>
                    <Col span={6}>
                      <Form.Item
                        name="dateBegin"
                        label="Дата начала"
                        style={{ width: 100 }}
                      >
                        <DatePicker defaultPickerValue={props.dateBegin || ''} format='DD.MM.YYYY' onChange={onChange} style={{ width: 150 }} />
                      </Form.Item>
                    </Col>

                    <Col span={9}>
                      <Form.Item
                        name="dateFinish"
                        label="Дата окончания"
                        style={{ width: 120 }}
                      >
                        <DatePicker defaultPickerValue={props.dateFinish || ''} format='DD.MM.YYYY' onChange={onChange} style={{ width: 200 }} />
                      </Form.Item>
                    </Col>

                    <Col span={9}>
                      <Form.Item
                        name="description"
                        label="Описание"
                        initialValue={props.description}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }}>
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteJobs({ id: props.id, nanoid: props.nanoid ? props.nanoid : temp })}>
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

export default JobForm

