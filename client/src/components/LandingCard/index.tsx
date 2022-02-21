import { FC } from "react";
import styled from "styled-components";

interface LandingCardProps {
  title: string,
  content: string,
  iconLink: string
}

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`

const Card = styled.div`
  width: 15%;
  margin: 10px;
  min-width: 200px;
  font-weight: 500;
  color: black;
  background-color: #EFEFEF;
  padding: 1.5em 2em;
  border-radius: 7px;
  box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.25);
`

export const LandingCard: FC<LandingCardProps> = ({ title, content, iconLink }) => {
  return (
    <Card>
      <CardHeader>
        <span style={{ fontSize: "24px" }}>{title}</span>
        <img src={iconLink} alt="icon" width="28px" height="28px" />
      </CardHeader>
      <div>
        {content}
      </div>
    </Card>
  )
}