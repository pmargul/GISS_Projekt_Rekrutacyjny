import Table from "../Table/Table";
import { TaskTableColumns } from "../../Settings/TaskConfig";
import SearchBar from "../Table/SearchBar";
import { useState } from "react";
import TaskOptionButtons from "./TaskOptionButtons";
import Pagination from "../Table/Pagination/Pagination";
import SystemSpinner from "../Common/SystemSpinner";
import { useSelector } from "react-redux";

function TaskTableWrapper(props) {
  const lang = useSelector(state => state.system.language)

  const [inputValue, onValueChange] = useState("");

  const tableData = props.data;
  const filteredData = tableData.filter((task) => {
    if (inputValue.trim().length === 0) return true;
    for (let i in task) {
      if(task[i]!=null) 
        if (task[i].toString().toLowerCase().includes(inputValue.toLowerCase())) {
          return true;
        }
    }
    return false;
  });

  const currentPageData = filteredData.filter((el, index) => {
    const selectedPageMinIndex = (props.selectedPage - 1) * 5;
    const selectedPageMaxIndex = props.selectedPage * 5;
    if ((index >= selectedPageMinIndex) & (index < selectedPageMaxIndex))
      return true;
    return false;
  });

  return (
    <div className="container">
      {props.fetchProcessing ? (
        <SystemSpinner />
      ) : (
        <>
          <div className="row mb justify-content-end">
            <Pagination
              length={filteredData.length}
              selectedPage={props.selectedPage}
              selectPage={props.selectPage}
            />
            <SearchBar
              inputValue={inputValue}
              onValueChange={(e) => {
                props.selectRow(null);
                props.selectPage(1);
                onValueChange(e);
              }}
            />
          </div>
          <Table
            data={currentPageData}
            selectedRow={props.selectedRow}
            selectRow={props.selectRow}
            columns={TaskTableColumns(lang)}
            currentPage={props.selectedPage}
          />
          <TaskOptionButtons
            inputValue={inputValue}
            task={props.selectedTask}
            hideOptions={tableData.length === 0}
            onEditAction={props.onEditAction}
            onCreateAction={props.onCreateAction}
            onRealizationAction={props.onRealizationAction}
            onDeleteAction={props.onDeleteAction}
            onRefreshAction={props.onRefresh}
          />
        </>
      )}
    </div>
  );
}

export default TaskTableWrapper;
