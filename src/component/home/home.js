import React ,{Component} from 'react';
import './home.css';

class Home extends Component{
    render(){
        return (
            <div>
                <h1>
                    home
                </h1>
                <article>
                    <p> 吐槽 </p>
                    <p> react这个库本身如果作为视图渲染和控制器还行，但是功能比ng新版弱好多，导致了需要
                        很多第三方库的使用，调试和版本控制头疼！ </p>
                </article>
            </div>
        )
    }
}

export default Home;