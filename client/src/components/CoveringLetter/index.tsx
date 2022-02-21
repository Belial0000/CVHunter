import { Form, Input, Button, Card, Space } from "antd";

const CoveringLetter = () => {
  return (
    <>
      <p>Обращение в службу поддержки</p>
      <p>Опишите проблему</p>
      <Space direction="vertical">
        <Card id="card">
          <br />
          <Form.Item name="title" label="Заголовок">
            <Input style={{ width: 600, height: 50 }} />
          </Form.Item>
          <Form.Item>
            <Form.Item name="description" label="Описание">
              <Input style={{ width: 600, height: 100 }} />
            </Form.Item>
            <Button htmlType="submit" type="primary">
              Отправить
            </Button>
          </Form.Item>
        </Card>
      </Space>
    </>
  );
};

export default CoveringLetter;
