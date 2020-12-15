import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "./Fields/InputField";
import DateTimePickerField from "./Fields/DateTimePickerField";
import { required, maxLength100 } from "../../Services/Validations";
import TextAreaField from "./Fields/TextAreaField";
import DropdownListField from "./Fields/DropdownlistField";
import { TaskPriorities } from "../../Settings/TaskConfig";
import { useSelector } from "react-redux";
import Translations from "../../Settings/Translations";

function TaskForm(props) {
  const lang = useSelector(state=>state.system.language)
  return (
    <div className="jumbotron">
      <div className="container">
        <form onSubmit={(data)=>props.handleSubmit(props.onSubmit)(data)}>
          <div className="row mb-4">
            <h3>{Translations.taskCompleted[lang]}</h3>
          </div>
          {props.editMode ? (
            <>
              <Field
                label={Translations.number[lang]}
                name={"number"}
                component={InputField}
                disabled
              />
              <Field
                label={Translations.creationDate[lang]}
                name={"creationDate"}
                showTime={false}
                disabled
                component={DateTimePickerField}
              />
            </>
          ) : null}
          <Field
            label={Translations.name[lang]}
            name={"name"}
            component={InputField}
            validate={required}
            lang={lang}
          />
          <Field
            label={Translations.term[lang]}
            name={"term"}
            showTime={false}
            component={DateTimePickerField}
          />
          <Field
            label={Translations.description[lang]}
            name={"description"}
            component={TextAreaField}
            rows={3}
            validate={maxLength100}
            lang={lang}
          />
          <Field
            label={Translations.priority[lang]}
            name={"priority"}
            component={DropdownListField}
            data={TaskPriorities(lang)}
            valueField="id"
            textField="label"
            validate={required}
            lang={lang}
          />
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <button
              className="btn btn-dark"
              onClick={props.onClose}
              type="button"
            >
              {Translations.backToList[lang]}
            </button>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap">
            <button
              className="btn btn-primary"
              type="submit"
            >
              {Translations.save[lang]}
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: "TaskForm", 
})(TaskForm);
