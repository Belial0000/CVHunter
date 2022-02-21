import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import Action from "../store/actions"

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(Action, dispatch)
}
