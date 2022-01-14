import logo from './logo.svg';
import './App.css';

function App() {
  const name='리액트';
  const style={
    backgroundColor: 'black',
    color: 'pink',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  };
  return (
  <div style={style}>{name}
  <h1>hello react</h1>
  </div>
  )
}
export default App;