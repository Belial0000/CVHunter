import React from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';
import { setCookie } from 'nookies';
import { useAction } from '../../hooks/useAction';
import { useNavigate } from "react-router";



type LoginDto = {
    email: string;
    password: string;
}

export default function Auth() {

    const { initToken, initUser } = useAction()
    const navigate = useNavigate()

    const onSubmit = async (dto: LoginDto): Promise<void> => {
        console.log(dto)
        try {
            const { data } = await axios.post('http://localhost:5000/auth/login', dto, { withCredentials: true });
            console.log(data, "------------------------------------------------------------------")

            setCookie(null, 'authToken', data.jwt.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            console.log();

            initToken({ token: data.jwt.token })
            initUser({ email: data.email, id: data.id })
            navigate('/profile')
        } catch (e: any) {
            alert(e.message)
            console.warn(e.message)
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onSubmit}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label={<label style={{ color: "white" }}>email</label>}
                name="email"
                // style={{ color: "white" }}
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                    {
                        pattern: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"),
                        message: '',
                    },
                ]}
            >
                <Input
                    minLength={5}
                    placeholder="Введите почту"
                />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: "white" }}>password</label>}
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
            >
                <Input.Password
                    type="password"
                    minLength={5}
                    placeholder="Введите пароль"
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" style={{ background: "#DB0000", borderColor: "#DB0000" }}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
}
