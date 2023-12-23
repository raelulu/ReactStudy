import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? "same" : age > prevAge ? "order" : "younger";
  return (
    <div>
      <p>{`age ${age} is ${text} then age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Mathe.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
