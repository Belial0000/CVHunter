import { Form, Input, Button, Card, Space } from 'antd';
import { Collapse } from 'antd';
import { useAction } from '../../hooks/useAction';
import { nanoid } from 'nanoid'

const { Panel } = Collapse;

const ProfileForm = (props: any) => {

  const [form] = Form.useForm();
  const { addProfilesForm, editProfilesForm } = useAction()
  let temp = '';

  const onFinish = (values: any) => {

    if (props.nanoid || temp) {
      values.nanoid = props.nanoid ? props.nanoid : temp;
      editProfilesForm({ nanoid: values.nanoid, data: values });
      
    } else {
      values.nanoid = props.nanoid ? props.nanoid : nanoid();
      temp = values.nanoid;
      addProfilesForm(values)
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
              <Panel id='collaps' header="Профиль" key="1">
                <Form.Item
                  name="description"
                  label="Описание"
                  initialValue={props.description}
                >
                  <Input style={{ width: 600, height: 100 }} />
                </Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: '0 8px' }}>
                  Сохранить
                </Button>
                <Button htmlType="button" onClick={() => props.deleteProfiles({id: props.id, nanoid: props.nanoid ? props.nanoid: temp})}>
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

export default ProfileForm
