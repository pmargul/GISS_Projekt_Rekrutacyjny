import React, { useState, useEffect } from "react";
import TaskTableWrapper from "./TaskTableWrapper";
import TaskFormWrapper from "./TaskFormWrapper";
import { getApi, putApi, deleteApi } from "../../Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { addAlert } from "../../Redux/Actions";
import Translations from "../../Settings/Translations";

const tasksConfig = {
  apiEndpoint: window.apiBaseURL + "/tasks",
};

export const TaskContext = React.createContext(tasksConfig);

function TaskWrapper(props) {
  const dispatch = useDispatch()

  const lang = useSelector(state => state.system.language)

  const [fetchProcessing, setFetchProcessingState] = useState(true);

  const [selectedPage, selectPage] = useState(1);

  const [selectedRow, selectRow] = useState(null);
  const [tableData, setTableData] = useState([]);

  const [selectedTask, selectTask] = useState(
    tableData.find((task) => task.id === selectedRow)
  );

  const [editMode,switchEditMode] = useState(false)
  const [createMode,switchCreateMode] = useState(false)
 
  const refreshTaskData = (props) =>{
    setFetchProcessingState(true);
    getApi(tasksConfig.apiEndpoint).then((res) => {
      setTableData(res.tasks);
      
      selectRow(null)
      setFetchProcessingState(false);

    }).catch(er=>{
        props.riseError(true)
    });
  }

  useEffect(() => {
    refreshTaskData(props)
  },[props]);

  useEffect(() => {
    selectTask(tableData.find((task) => task._id === selectedRow));
  }, [tableData, selectedRow]);
  
  return (
    <div className="container py-4">
      <div className="col align-self-center">
        {editMode | createMode ? (
          <TaskContext.Provider value={tasksConfig.apiEndpoint}>
            <TaskFormWrapper
              initialValues={createMode? {} : selectedTask ? selectedTask : {}}
              createMode={createMode}
              editMode={editMode}
              onRefresh={()=>refreshTaskData(props)}
              onClose={()=>{
                switchCreateMode(false)
                switchEditMode(false)
              }}
              dispatch={dispatch}
            />
          </TaskContext.Provider>
        ) : (
          <TaskTableWrapper
            data={tableData}
            selectRow={selectRow}
            selectedRow={selectedRow}
            selectPage={selectPage}
            selectedPage={selectedPage}
            selectedTask={selectedTask}
            fetchProcessing={fetchProcessing}
            onRefresh={()=>refreshTaskData(props)}
            onEditAction={()=>switchEditMode(true)}
            onCreateAction={()=>switchCreateMode(true)}
            onRealizationAction={async()=>{
              putApi(tasksConfig.apiEndpoint+"/switch-realized",selectedTask).then((res)=>{
                const message = res.success? Translations.operationCompleted[lang] : Translations.commonErrorMessage[lang]
                const title = res.success? Translations.success[lang] : Translations.error[lang]            
                dispatch(addAlert(message,res.type,title))
                refreshTaskData()
              })
            }}
            onDeleteAction={async()=>{
              deleteApi(tasksConfig.apiEndpoint,selectedTask).then((res)=>{
                const message = res.success? Translations.taskDeleteOk[lang] : Translations.commonErrorMessage[lang]
                const title = res.success? Translations.success[lang] : Translations.error[lang]            
                dispatch(addAlert(message,res.type,title))
                refreshTaskData()
              })
            }}
          />
        )}
      </div>
    </div>
  );
}

export default TaskWrapper;
