import React, { useMemo, useReducer, useCallback, memo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMontorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt('Whose name do you want to change?');
    const current = prompt('What do you want to change your name to?');
    dispatch({ type: 'updated', prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt("What is your mentor's name?");
    const title = prompt("What is your mentor's title?");
    dispatch({ type: 'added', name, title });
  }, []);
  const handleDelete = useCallback(() => {
    const name = prompt("What is the mentor's name?");
    dispatch({ type: 'deleted', name });
  }, []);
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
      <Button onClick={handleUpdate} text='Change Mentor\s Name' />
      <Button onClick={handleAdd} text='Add Mentor' />
      <Button onClick={handleDelete} text='Delete Mentor' />
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

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering!');
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('⛄︎');
  }
  return 10;
}
