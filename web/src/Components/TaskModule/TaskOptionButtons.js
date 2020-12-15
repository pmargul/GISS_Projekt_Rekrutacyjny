import Modal from "../Common/Modal";
import Translations from "../../Settings/Translations";
import { useSelector } from "react-redux";

function TaskOptionButtons(props) {
  const lang = useSelector(state => state.system.language)

  const disabledOptions = props.task == null;
  const taskObject = props.task ? props.task : {};
  return (
    <div className="row">
      <div className="col-12 col-lg-6 d-flex align-items-center">
        <button className="btn btn-dark right-margin-on" onClick={props.onRefreshAction}>
          <img src="/system/img/refresh.jpg" alt="" />
        </button>
        <button className="btn btn-primary" onClick={props.onCreateAction}>
          {Translations.addTask[lang]}
        </button>
      </div>
      {props.hideOptions ? null : (
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap">
          <button
            className="btn btn-dark right-margin-on"
            data-bs-toggle="modal"
            data-bs-target="#taskDeleteModal"
            disabled={disabledOptions}
          >
            {Translations.delete[lang]}
          </button>
          <button
            className="btn btn-primary right-margin-on"
            disabled={disabledOptions}
            onClick={props.onEditAction}
          >
            {Translations.edit[lang]}
          </button>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#taskDoneModal"
            disabled={disabledOptions}
          >
            {taskObject.realized? Translations.notCompletedMark[lang] : Translations.completedMark[lang]}
          </button>
        </div>
      )}
      <Modal
        id="taskDoneModal"
        type="primary"
        successLabel={Translations.markTask[lang]}
        cancelLabel={Translations.cancel[lang]}
        onSuccess={props.onRealizationAction}
        cancelButtonType={"dark"}
        successButtonType={"primary"}
        title={Translations.task[lang] +": " + taskObject.name}
        body={taskObject.realized? Translations.markNotCompleteConfim[lang] : Translations.markCompleteConfim[lang]}
      />
      <Modal
        id="taskDeleteModal"
        type="danger"
        successLabel={Translations.deleteTask[lang]}
        cancelLabel={Translations.cancel[lang]}
        onSuccess={props.onDeleteAction}
        cancelButtonType={"dark"}
        successButtonType={"danger"}
        title={Translations.task[lang] +": " + taskObject.name}
        body={Translations.deleteConfirm[lang]}
      />
    </div>
  );
}

export default TaskOptionButtons;
