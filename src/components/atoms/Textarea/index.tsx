import React, { useState } from "react";
import "./Textarea.scss";

export interface TextareaProps {
  label?: string;
  value?: string;
  placeholder?: string;
  errorMsg?: string;
  className?: string;
  name: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholderLabel?: boolean;
  height?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value = "",
  placeholder,
  errorMsg,
  className,
  name,
  id,
  onChange,
  placeholderLabel = false,
  height,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const getPlaceholderBehavior = (): string => {
    let returnClass = "";

    if (placeholderLabel && !label && (focused || value)) {
      returnClass = "placeholder-top";
    } else if (value && (label || !placeholderLabel)) {
      returnClass = "placeholder-hidden";
    }
    return returnClass;
  };

  return (
    <div className={`textarea__container ${className || ""}`}>
      {label && !placeholderLabel && (
        <label className="textarea__label">{label}</label>
      )}
      <div className={`textarea__box ${label ? "withLabel" : ""}`}>
        {placeholder && (
          <span className={`textarea__placeholder ${getPlaceholderBehavior()}`}>
            {placeholder}
          </span>
        )}
        <textarea
          name={name}
          id={id || name}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={errorMsg ? "withError" : ""}
          style={height ? { height: `${height}px` } : {}}
          value={value}
          defaultValue=""
        />
      </div>
      {errorMsg && <span className="textarea__error">{errorMsg}</span>}
    </div>
  );
};
