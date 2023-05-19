import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('Button is clicked!');
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <Avatar
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
        name='Mina'
        title='Front-end Developer'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
        name='Raura'
        title='Illustrator'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
        name='James'
        title='Full Stack Developer'
      />
    </>
  );
}

export default AppProfile;
