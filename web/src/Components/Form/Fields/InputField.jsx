const InputField = ({
  input,
  label,
  disabled,
  type,
  placeholder,
  lang,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={input.name} className="form-label">
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        {...input}
        className="form-control"
        id={input.name}
        placeholder={placeholder ? placeholder : ""}
      />
      {touched && error && (
        <small id={`${input.name}Help`} className="form-text text-danger">
          {error[lang]}
        </small>
      )}
    </div>
  );
};

export default InputField;
