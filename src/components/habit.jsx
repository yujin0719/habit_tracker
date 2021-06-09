import React, { PureComponent } from 'react';

// Habit은 자체적으로 state 즉, 데이터가 없고, 외부에서 전달되는 props를 보여주기만 하는 컴포넌트이다. 
// 따라서 외부에서 전달된 콜백함수를 단순히 호출만 해준다. 
class Habit extends PureComponent {
    componentDidMount(){
        // component가 ui상에 등록되었을 때 호출
        // console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount(){
        // componenet를 ui상에서 없어질 때 호출
        // console.log(`habit: ${this.props.habit.name} will unmounted`);
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        const {name, count} = this.props.habit;
        return (
        <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className='habit-button habit-increase' onClick ={this.handleIncrement}>
            <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick ={this.handleDecrement}>
            <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick ={this.handleDelete}>
            <i className='fas fa-trash'></i>
        </button>
        </li>
        )
    }
}

export default Habit;