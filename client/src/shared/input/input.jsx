import "./input.css";
const Input = ({
  id,
  lableText,
  placeholder,
  onChangeFunction,
  value,
  name,
  type,
  autocomplete,
}) => {
  return (
    <>
      <label className="input-component-lable" htmlFor={id}>
        {lableText}
      </label>
      <input
        className="input-component"
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        autoComplete={autocomplete}
        name={name ? name : ""}
        value={value}
        onChange={onChangeFunction}
      />
    </>
  );
};

export default Input;
