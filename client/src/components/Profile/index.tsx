import React, { useEffect } from "react";
// import { useSelector  } from "react-redux";
import "./index.css";
import CardList from "../CardList";
import { useNavigate } from "react-router";
import { useTypedSelector } from '../../hooks/useTypedSelector';


function Profile(_props: any) {
  // const user = useSelector((state) => state.checkSessionReducer.user);

  const navigate = useNavigate();
  const { token } = useTypedSelector(state => state.user)

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/auth')
  //   }
  // }, [token, navigate])


  return (
    <>
      <p className="big">Мои резюме</p>
      <p className="small">Обзор Ваших резюме</p>

      <CardList />
    </>
  );
}

export default Profile;
