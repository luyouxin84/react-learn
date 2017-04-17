import React ,{Component} from 'react';
import './about.css';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function mapStateToProps(state){
    // state对应的为根的store
    console.log(state)
    //虫store中拿取数据，test成为about的输入props
    return {
        test:state.test
    }
};
const act = ()=>{
    console.log('action test');
    return {
        type:'about',
        data:'about s data'
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({act:act},dispatch);
};


class About extends Component{
    componentWillMount(){
        console.log(this.props.test);
        console.log(this.props)
    }    
    render(){
        return (
            <div>
                <h1>
                    About
                </h1>
                <button onClick={()=> this.props.act()}>
                    sf
                </button>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About);