import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
//import { Home } from "./Page/Home/Home.tsx";
//import { List } from "./Page/List/List.tsx";

const Home = () => {
    React.useEffect(() => {
        console.log("lkakal");
        getData();
    });

    const getData = () => {
        request.post('/user', {
            name: 'xz'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>首页kk</h1>
            <Link to="/list">跳转列表页test</Link>
        </div>
    )
}

const list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
];

const List = () => (
    <ul>
        { list.map((item, i) => <li key={ i }>{ item }</li>) }
    </ul>
)

export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
    </Switch>
)
