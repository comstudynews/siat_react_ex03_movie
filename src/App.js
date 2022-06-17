import { useState } from 'react';
import './App.css';
import Header from './Header';

function Content({items, action}) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  return (<>
    ID : <input type="text" id="userId" value={userId} onChange={e=>setUserId(e.currentTarget.value)} placeholder="id 입력"/><br/>
    NAME : <input type="text" id="userName" value={userName} onChange={e=>setUserName(e.currentTarget.value)} placeholder="name 입력"/><br/>
    <input type="button" id="sendBtn" value="저장" onClick={(event)=> {
      event.preventDefault();
      action("append", userId, userName);
    }} /><br/>
    <ul>
      {items.map( (item, i) => {
        console.log(item);
        return <li key={item.no}>{item.no} - {item.id} - {item.name}
              <button  onClick={(event)=> {
                event.preventDefault();
                action("remove", item.no);
              }}>Delete Row</button>
            </li>; 
      })}
    </ul>
  </>);
}

function App() {
  const menuItems = ['홈','프로필','갤러리','쇼핑몰']
  const [no, setNo] = useState(5);
  const [saramList, setSaramList] = useState([
    {no:1, id:'HONG', name:'홍길동'},
    {no:2, id:'KIM', name:'김길동'},
    {no:3, id:'LEE', name:'이길동'},
    {no:4, id:'PARK', name:'박길동'},
  ]);

  function saramListAction(cmd, arg1, arg2) {
    switch(cmd) {
    case 'append' :
      console.log("추가 ...")
      let userId = arg1;
      let userName = arg2;
      let obj = {no:no, id:userId, name:userName};
      setSaramList([...saramList, obj]);
      setNo(no+1);
      break;
    case 'remove' :
      let _no = arg1;
      console.log('제거 기능 ... ' + _no);
      let idx = saramList.findIndex((saram)=>{
        return _no == saram.no;
      });
      const newList = [...saramList];
      let delSaram = newList.splice(idx,1);
      console.log(newList);
      setSaramList(newList);
      break;
    }
  }

  return (
    <>
      <Header items={menuItems} name="홍길자" title="홍길자의 여행정보 사이트"></Header>
      <Content items={saramList} action={saramListAction} />
    </>
  );
}

export default App;