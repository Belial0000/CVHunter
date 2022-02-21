import { FC, useEffect, useState } from "react";
import ResumeCard from "../Card";
import { IUser } from "../types/types";
import * as actions from "../../store/actions/allForms";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useAction";
// import { useEffect } from "react";

// const postSelector = (state) => state.posts;
// interface ProfileListProps {
//   users: IUser[];
// }

const CardList: FC = () => {
  const [resumes, setResumes] = useState([])
  const { token, data } = useTypedSelector(state => state.user)
  const { addUserForm } = useAction()

  const getAllResumeUser = async (userId: number | undefined): Promise<any> => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users/${userId}`, { withCredentials: true })
      setResumes(data.resumes)
      console.log(resumes, 'RESUMES IN CARDLIST <><><><<><<><><><><>><><><<><')
      addUserForm({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        sex: data.sex,
        photo: data.photo,
        phoneNumber: data.phoneNumber,
        postAdr: data.postAdr,
        postIndex: data.postIndex,
        city: data.city,
        placeOfBirth: data.placeOfBirth,
        familyStatus: data.familyStatus,
        citizenship: data.citizenship,
        linkedIn: data.linkedIn,
        website: data.website,
      })

    } catch (a: any) {
      console.log(a);
    }
  }


  useEffect(() => {
    getAllResumeUser(data.userId)
  }, [data.userId])


  // const dispatch = useDispatch();
  // const selector = useSelector(postSelector);
  // console.log("selector", selector);
  // const state = useSelector((state) => state.session.isAuthorized);

  // useEffect(() => {
  //   console.log("гыуУааусе");
  //   dispatch(actions.initPost());
  // }, [dispatch]);

  // if (selector.error) {
  //   return <h2>Произошла ошибка, попробуйте снова :(</h2>;
  // }

  // if (selector.loading) {
  //   return <h1>ЗАГРУЗКА !!!</h1>;
  // }

  // if (selector.data.length === 0) {
  //   return <h2>постов нет, создайте новый :)</h2>;
  // }
  // console.log(
  //   selector.map((user) => (
  //     user.template.title
  //   ))
  // );


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {resumes.length ? resumes.map((el: any) => (
          <ResumeCard key={el.id} resume={el} setResumes={setResumes} />
        )) : ''}
      </div>
    </>
  );
};
export default CardList;
