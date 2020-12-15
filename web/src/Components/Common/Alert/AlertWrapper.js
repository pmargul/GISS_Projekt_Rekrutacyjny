import Alert from "./Alert";
import { useSelector, useDispatch } from "react-redux";
import { deleteAlert } from "../../../Redux/Actions";
import { useEffect } from "react";

function AlertWrapper() {
  const alertState = useSelector((state) => state.alert);
  const dispatch = useDispatch()

  useEffect(()=>{
    setTimeout(()=>{
        dispatch(deleteAlert(alertState.id))
    },window.alertDuration);
  },[dispatch,alertState])

  if(!alertState.isVisible) return null
  return (
    <div className="container">
      <div className="row mb justify-content-end">
        <div className="col-6">
          <Alert message={alertState.message} type={alertState.type} title={alertState.title} onClose={()=>dispatch(deleteAlert())}/>
        </div>
      </div>
    </div>
  );
}

export default AlertWrapper;
