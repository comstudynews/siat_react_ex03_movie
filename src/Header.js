import { Component } from "react";
import Menu from "./Menu";

// class로 콤포넌트 생성
class Header2 extends Component {
    state = {
        name : '리액트 클론코딩 영화 평점 앱 사이트'
    }
    render() {
      // 구조 분해 할당
        let {name} = this.state;
        return <h1>{this.props.title}</h1>
    }
}
// function으로 콤포넌트 생성 React16 이후에 많이 사용.
function Header({items, name, title}) {
    //const {items, name} = props;
    return <><h2>{name}의 홈페이지</h2>
        <Header2 title={title} />
        <Menu items={items}/>
        </>;
}

export default Header;