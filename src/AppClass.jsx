import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('Component is mounted!');
  }

  componentWillUnmount() {
    console.log('Component will be unmounted!');
  }

  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '⛄︎'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
