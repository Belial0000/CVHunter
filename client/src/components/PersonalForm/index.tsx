import { Form, Input, Select, Col, Row, Space, Card, DatePicker, Button } from 'antd';
import { Collapse } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import './index.css'
import axios from 'axios';
import { useState } from 'react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;
//@ts-ignore
const PersonalForm = ({ next }) => {

  const [form] = Form.useForm();
  const { addUserForm } = useAction()
  const { userForm } = useTypedSelector(state => state.forms)
  const [photoName, setPhotoName] = useState()

  const dateFormat = 'DD.MM.YYYY';

  const onFinish = (values: any) => {

    addUserForm({ ...values, photo: photoName ? photoName : userForm.photo });
    next();
  };


  //@ts-ignore
  const sendFile = (e) => {

    const file = e.target.files[0];
    const data = new FormData();
    data.append("photo", file);
    data.append("photo", file.name);

    //@ts-ignore
    axios({
      method: 'post',
      url: 'http://localhost:5000/users/upload',
      data: data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(
        res => {
          console.log(res.data)
          console.log(res.data.filename)
          setPhotoName(res.data.filename)
          return res.data.filename
        }
      )
  };

  return (
    <div className='a'>
      <Space direction="vertical" >
        <Form
          labelCol={{ span: 23 }}
          wrapperCol={{ span: 23 }}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          form={form}
          layout="vertical"
          id="form"
        >
          <div id='card'>
            <Card title="Личные данные">

              <Form.Item
                label="Фото"
              >

                <div className="example-3">
                  <label id="custom-file-upload" className="filupp">
                    <span className="filupp-file-name js-value">Загрузить файл</span>
                    <Input
                      type="file"
                      name="photo"
                      onChange={sendFile}
                      multiple
                      id="custom-file-upload"
                    />
                  </label>
                </div>
              </Form.Item>

              <Form.Item  >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      label="Имя"
                      rules={[{ required: true, message: 'Пожалуйста, введите имя!', whitespace: true }]}
                      initialValue={userForm.firstName}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      label="Фамилия"
                      rules={[{ required: true, message: 'Пожалуйста, введите фамилию!', whitespace: true }]}
                      initialValue={userForm.lastName || ''}
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
                      name="email"
                      label="Email"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                      initialValue={userForm.email || ''}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="phoneNumber"
                      label="Номер телефона"
                      initialValue={userForm.phoneNumber || ''}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item
                name="postAdr"
                label="Адрес"
                initialValue={userForm.postAdr || ''}
              >
                <Input />
              </Form.Item>

              <Form.Item  >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="postIndex"
                      label="Почтовый индекс"
                      initialValue={userForm.postIndex || ''}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>

                    <Form.Item
                      name="city"
                      label="Город"
                      initialValue={userForm.city || ''}
                    >
                      <Input placeholder="Например, Москва" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item >
                <Collapse collapsible="header" >
                  <Panel id='collaps' header="Дополнительная информация" key="1">

                    <Form.Item  >
                      <Row gutter={8}>
                        <Col span={6}>
                          <Form.Item
                            name="birthDate"
                            label="Дата рождения"
                          >
                            <DatePicker defaultPickerValue={userForm.birthDate || ''} format={dateFormat} renderExtraFooter={() => 'extra footer'} />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item
                            name="placeOfBirth"
                            label="Место рождения"
                            initialValue={userForm.placeOfBirth || ''}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col span={9}>
                          <Form.Item
                            name="sex"
                            label="Пол"
                            initialValue={userForm.sex || ''}
                          >
                            <Select placeholder="Выбери пол">
                              <Option value="Мужской">Мужской</Option>
                              <Option value="Женский">Женский</Option>
                              <Option value="Другое">Другое</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>

                    <Form.Item  >
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            name="citizenship"
                            label="Гражданство"
                            initialValue={userForm.citizenship || ''}
                          >
                            <Input
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            name="familyStatus"
                            label="Семейное положение"
                            initialValue={userForm.familyStatus || ''}
                          >
                            <Select>
                              <Option value="замужем / женат">замужем / женат</Option>
                              <Option value="свободен">свободен</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>

                    <Form.Item  >
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            name="linkedIn"
                            label="LinkedIn"
                            initialValue={userForm.linkedIn || ''}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            name="website"
                            label="Веб-сайт"
                            initialValue={userForm.website || ''}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Panel>
                </Collapse>
              </Form.Item>
              <Button type="primary" htmlType="submit" >
                Следующий шаг
              </Button>
            </Card>
          </div>
        </Form >
      </Space>

    </div>
  )
}

export default PersonalForm