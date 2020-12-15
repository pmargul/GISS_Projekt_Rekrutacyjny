import DateTimePicker from 'react-widgets/lib/DateTimePicker'
const DateTimePickerField = ({
  input: { onChange, value, name },
  min,
  max,
  label,
  disabled,
  showTime,
  lang,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <DateTimePicker
        onChange={onChange}
        disabled={disabled}
        format="YYYY-MM-DD"
        value={!value ? null : new Date(value)}
        date
        time={showTime}
        views={["month", "year"]}
      />
      {touched && error && (
        <small id={`${name}Help`} className="form-text text-danger">
          {error[lang]}
        </small>
      )}
    </div>
  );
};

export default DateTimePickerField;
