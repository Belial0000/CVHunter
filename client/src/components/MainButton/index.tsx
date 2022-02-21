import { Button } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface MainButtonGen {
  content: string,
  href: string
}

export const MainButton: FC<MainButtonGen> = ({ content, href }) => {

  const navigate = useNavigate()

  return (
    <Button type="primary" danger style={{
      backgroundColor: '#DB0000',
      width: "200px",
      height: "50px",
      marginTop: "20px",
      borderColor: "#DB0000",
      boxShadow: "4px 7px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
    }} onClick={() => navigate}>
      <span style={{ fontSize: "20px", fontWeight: "300" }}>{content}</span></Button>
  )
}