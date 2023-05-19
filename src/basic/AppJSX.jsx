import './App.css';

function AppJSX() {
  const name = 'Josephine';
  const list = ['Milk', 'Strawberries', 'Bananas'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ height: '400px' }}
        src='https://plus.unsplash.com/premium_photo-1682539426477-a3947f3ca98b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
        alt=''
      />
    </>
  );
}

export default AppJSX;
