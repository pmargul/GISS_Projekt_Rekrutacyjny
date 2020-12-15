import DropdownList from "react-widgets/lib/DropdownList";

const DropdownListField = ({
  input,
  label,
  data,
  busy,
  filter,
  valueField,
  textField,
  disabled,
  lang,
  meta: { touched, error, warning },
}) => (
  <div className="mb-3 ">
    <label htmlFor={input.name} className="form-label">
      {label}
    </label>
    <DropdownList
      {...input}
      disabled={disabled}
      data={data}
      valueField={valueField}
      textField={textField}
      onChange={input.onChange}
      busy={busy}
      //messages={Strings.dropdownMessages(this.props.language)}
      filter={filter ? "contains" : null}
    />
    {touched && error && (
      <small id={`${input.name}Help`} className="form-text text-danger">
        {error[lang]}
      </small>
    )}
  </div>
);

export default DropdownListField;
