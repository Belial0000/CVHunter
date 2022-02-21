import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { CHECK_SESSION } from "../../store/types/isAuthorized";
import { Form, Input, Button } from "antd";
function Login() {
  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  const onSubmit = async (event: {
    preventDefault: () => void;
    target: { email: { value: any }; password: { value: any } };
  }) => {
    event.preventDefault();

    // const body = {
    //   email: event.target.email.value,
    //   password: event.target.password.value,
    // };

    // const responce = await fetch("http://localhost:4000/login", {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });

    // const data = await responce.json();

    // if (data.login) {
    //   dispatch({
    //     type: CHECK_SESSION,
    //     payload: { status: data.login, user: data.user },
    //   });
    //   navigate("/");
    // }
  };
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
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          type="email"
          minLength={8}
          placeholder="Введите почту"
          name="email"
          required={true}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          type="password"
          minLength={8}
          placeholder="Введите пароль"
          name="password"
          required={true}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Login;

// {
/* <Form className="container" onSubmit={onSubmit}> */
// }
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Почта</Form.Label>
//     <Form.Control
//       type="email"
//       placeholder="Введите почту"
//       name="email"
//       required
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Пароль</Form.Label>
//     <Form.Control
//       type="password"
//       minLength="8"
//       placeholder="Введите пароль"
//       name="password"
//       required
//     />
//   </Form.Group>
//   <div id="feedback" className="invalid-feedback"></div>
//   <br />
//   <Button variant="dark" type="submit">
//     Войти
//   </Button>
// </Form>
