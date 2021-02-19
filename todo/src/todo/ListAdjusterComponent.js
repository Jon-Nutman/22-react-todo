import { store } from "./Provider"
import { useContext } from "react"

export default function ListAdjusterComponent(props) {
  const globalState = useContext(store)
  const { dispatch } = globalState
  function completed() {
    dispatch({ type: "COMPLETED" })
  }
  function all() {
    dispatch({ type: "ALL" })
  }
  function active(){
    dispatch({ type: "ACTIVE" })
  }

  return (
    <div className="bottom-bar">
      <p>{props.count} Items Left</p>
      <div>
        <button className="bottom-buttons" onClick={() => all()} >All</button>
        <button className="bottom-buttons" onClick={() => active()} >Activate</button>
        <button className="bottom-buttons" onClick={() => completed()}>
          Completed
        </button>
      </div>
    </div>
  )
}
