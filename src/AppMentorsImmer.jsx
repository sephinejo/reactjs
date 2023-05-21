import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt('Whose name do you want to change?');
    const current = prompt('What do you want to change your name to?');
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt("What is your mentor's name?");
    const title = prompt("What is your mentor's title?");
    updatePerson((person) => {
      person.mentors.push({
        name,
        title,
      });
    });
  };
  const handleDelete = () => {
    const name = prompt("What is the mentor's name?");
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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

const initialPerson = {
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
