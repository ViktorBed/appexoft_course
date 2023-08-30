import React, { useEffect, useRef } from "react";

function FoucusInput() {
  const inputRef = useRef(null);

  const reff = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <h1 onClick={reff}>Use Use Use</h1>
      <input ref={inputRef} type="text" placeholder="1243" />
    </div>
  );
}

export default FoucusInput;
