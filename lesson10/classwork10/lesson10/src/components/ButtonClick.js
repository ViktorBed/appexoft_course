import React, { useRef, useState } from "react";

function ButtonClick() {
  const [count, setCount] = useState(0);
  const clickRef = useRef(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    clickRef.current += 1;
  };
  return (
    <div>
      <h1>Лічильник натискань кнопки</h1>
      <p> Загальна кількість кліків:{count}</p>
      <p> Загальна кількість кнопки(за допомогою useRef):{clickRef.current}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ButtonClick;
