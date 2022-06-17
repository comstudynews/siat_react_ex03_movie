// 외부에 Menu.js 파일을 만들어서 소스를 이동 시키자
function Menu(props) {
    // const liArr = [];
    // props.items.forEach((item,i) => {
    //     liArr.push(<li>{item}</li>);
    // })
    ////////////////////////////////////////////////////////////////
    // function makeList() {
    //     return props.items.map((item,i) => {
    //         return <li key={i}>{item}</li>;
    //     });
    // }
    // let itemList = makeList();
    return (<ul>
        {props.items.map((item,i) => {
            return <li key={i}>{item}</li>;
        })}
    </ul>);
}

export default Menu;