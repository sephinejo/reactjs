import React, { useState } from 'react';

export default function AppMontor() {
  const [person, setPerson] = useState({
    name: 'Josephine',
    title: 'Software engineer',
    mentor: {
      name: 'John',
      title: 'Senior full stack developer',
    },
  });
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor is a {person.mentor.title} {person.mentor.name}
      </p>
      <button
        onClick={() => {
          const name = prompt(`What is your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        Change Mentor's Name
      </button>
      <button
        onClick={() => {
          const title = prompt(`What is your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        Change Mentor's Title
      </button>
    </div>
  );
}
