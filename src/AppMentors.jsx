import React, { useState } from 'react';

export default function AppMontors() {
  const [person, setPerson] = useState(initialState);
  const handleUpdate = () => {
    const prev = prompt('Whose name do you want to change?');
    const current = prompt('What do you want to change your name to?');
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt("What is your mentor's name?");
    const title = prompt("What is your mentor's title?");
    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt("What is the mentor's name?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentors are:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change Mentor's Name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  );
}

const initialState = {
  name: 'Josephine',
  title: 'Software engineer',
  mentors: [
    {
      name: 'John',
      title: 'Senior full stack developer',
    },
    {
      name: 'James',
      title: 'Senior full stack developer',
    },
  ],
};
