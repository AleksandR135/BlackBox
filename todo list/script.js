
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: ['Recieve the task',
                         'Separate into components',
                         'Create the components'],
                  value: ''};
    
    this.addTask = this.addTask.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
  addTask() {
    if (this.state.value !== '') {
      const arr = this.state.list;
      arr.push(this.state.value);
      this.setState({list: arr});
    } else {
      alert('You have to write something');
    }
    
  }
  
  changeValue(val) {
    this.setState({value: val});
  }
  
  removeTask(i) {
    const arr = this.state.list;
    arr.splice(i, 1);
    this.setState({list: arr});
  }
  
  render() {    
    return (
      <div className="wrapper">
        <Form 
          onSubmit={this.addTask} 
          onChange={this.changeValue} 
          value={this.state.value} />
          <ul>
            {
              this.state.list.map( (el, i) => <Task remove={this.removeTask} index={i}>{el}</Task>)
            }
          </ul>
      </div>
    );
  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const val = e.target.value;
    this.props.onChange(val);
  }
  
  handleSubmit(e) {
    this.props.onSubmit();
    e.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a new task:
          <input
            className="text_field"
            type="text" 
            value={this.props.value} 
            onChange={this.handleChange} />
        </label>  
        <button 
          className="btn btn-submit" 
          type="submit">
          ADD
        </button>
      </form> 
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }
  
  removeTask() {
    this.props.remove(this.props.index);
  }
  
  render() {
    return (
      <li className="list_item">
        <input type="checkbox"/>
        {this.props.children}
        <button 
          className="btn btn-remove"
          onClick={this.removeTask}>
          X
        </button>
      </li>
    );
  }
}




ReactDOM.render(<Main />, document.getElementById('app'));
