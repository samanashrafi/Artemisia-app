import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  icon,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <div className="from-input">
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
        <span className="break-line" />

        <input
          name={name}
          type={type}
          className={classnames("form-control ", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          icon={icon}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>

      {/* {info && <small className="form-text text-muted">{info}</small>} */}
      {error && <label className="invalid-feedback">{error}</label>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.object,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
