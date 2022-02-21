import { FC } from "react"
import { Outlet } from "react-router"
import './index.css'


export const Background: FC = () => {
  return (
    <>
      <div className="background">
        {/*<div className="darkside">*/}
        {/*</div>*/}
        {/* <div className="lightside">
        </div> */}
      </div>
      <Outlet />
    </>
  )
}