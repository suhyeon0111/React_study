import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'suhyeon';
  return (
    <div>
      {name === 'suhyeon' ? (
        <h1>suhyeon입니다.</h1>
      ): (
        <h2>suhyeon이 아닙니다.</h2>
      )}
  </div>
  );
}

export default App;
