import  { forwardRef } from "react";
import { useId } from "react";
import  { PropTypes } from 'prop-types';


export const Input = forwardRef(
  ({ placeholder, value, onChange, label }, ref) => {
    const id = useId();

    return (
      <div className="form-check"> {/* Corrected class name */}
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          ref={ref}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required
        />
      </div>
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Input.displayName = "InputComponent";
