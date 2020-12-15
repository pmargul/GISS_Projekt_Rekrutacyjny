const TextAreaField = ({
  input,
  label,
  rows,
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
      <textarea
        className="form-control"
        {...input}
        rows={rows}
        disabled={disabled}
        type={type}
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

export default TextAreaField;
