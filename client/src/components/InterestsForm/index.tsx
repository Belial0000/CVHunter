import { Form, Input, Button, Space, Card } from 'antd';
import { Collapse } from 'antd';
import { useAction } from '../../hooks/useAction';
import { nanoid } from 'nanoid'

const { Panel } = Collapse;

const InterestsForm = (props: any) => {

  const [form] = Form.useForm();
  const { addInterestsForm, editInterestsForm } = useAction()
  let temp = '';

  const onFinish = (values: any) => {

    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editInterestsForm({ nanoid: values.nanoid, data: values });
    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addInterestsForm(values)
    }
  };

  return (
    <Space direction="vertical" >
      <Form
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
              <Panel id='collaps' header="Интересы" key="1">

                <Form.Item
                  name="hobby"
                  label="Хобби"
                  initialValue={props.hobby}
                >
                  <Input placeholder="Например, пеший туризм" />
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }}>
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteInterests({id: props.id, nanoid: props.nanoid ? props.nanoid: temp})}>
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

export default InterestsForm