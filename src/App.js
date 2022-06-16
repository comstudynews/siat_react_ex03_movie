import './App.css';
import Header from './Header';

function App() {
  const menuItems = ['홈','프로필','갤러리','쇼핑몰']
  return (
    <>
      <Header items={menuItems} name="홍길자" title="홍길자의 여행정보 사이트"></Header>
    </>
  );
}

export default App;