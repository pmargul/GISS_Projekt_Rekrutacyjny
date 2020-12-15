import { useContext } from "react";
import TaskForm from "../Form/TaskForm";
import { getTaskJSON, TaskPriorities } from "../../Settings/TaskConfig";
import { postApi, putApi } from "../../Services/Api";
import { TaskContext } from "./TaskWrapper";
import { addAlert } from "../../Redux/Actions";
import { useSelector } from "react-redux";
import Translations from "../../Settings/Translations";

function TaskFormWrapper(props) {
  const lang = useSelector(state => state.system.language)

  const uri = useContext(TaskContext);
  const initialValues = props.initialValues;
  const priority =
    initialValues.priority != null
      ? TaskPriorities(lang).find((el) => el.id === initialValues.priority)
      : null;

  return (
    <>
      {props.createMode ? (
        <TaskForm
          initialValues={{ ...initialValues }}
          onSubmit={(data) => {
            const json = getTaskJSON(data);
            postApi(uri,json).then((res) => {
              const message = res.success? Translations.taskPostOk[lang] : Translations.commonErrorMessage[lang]
              const title = res.success? Translations.success[lang] : Translations.error[lang]
              
              props.dispatch(addAlert(message, res.type,title));
              if (res.success) {
                props.onClose();
                props.onRefresh();
              }
            });
          }}
          onClose={props.onClose}
        />
      ) : (
        <TaskForm
          initialValues={{ ...initialValues, priority: priority }}
          onSubmit={(data) => {
            const json = getTaskJSON(data, true);
            putApi(uri,json).then((res) => {
              const message = res.success? Translations.taskPutOk[lang] : Translations.commonErrorMessage[lang]
              const title = res.success? Translations.success[lang] : Translations.error[lang]  
              props.dispatch(addAlert(message, res.type,title));
              if (res.success) {
                props.onClose();
                props.onRefresh();
              }
            });
          }}
          onClose={props.onClose}
          editMode={true}
        />
      )}
    </>
  );
}

export default TaskFormWrapper;
