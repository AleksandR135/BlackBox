const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      if ( !action.text.trim()){
        return state;
      }
      return [
        ...state,
        {
          text: action.text,
          isChecked: false
        }
      ];
    case 'REMOVE_TASK':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case 'TOGGLE_CHECK':
      return state.map( (elem, i) => {
        if ( i !== action.index) {
          return elem;
        } else {
          console.log(!elem.isChecked);
         return Object.assign({}, elem, {isChecked: !elem.isChecked}); 
        }        
      });
    default: 
      return state;
  }
};

const {createStore} = Redux;
const store = createStore(reducer);

class Main extends React.Component {
    
  render() {    
    return (
      <div className="wrapper">
        <Form />
          <ul>
            {
              this.props.value.map( (el, i) => <Task remove={this.removeTask} key={i} index={i}>{el.text}</Task>)
            }
          </ul>
      </div>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.removeTask =  this.removeTask.bind(this);
    this.toggleCheck =  this.toggleCheck.bind(this);
  }
  
  removeTask() {
    store.dispatch({
      type: 'REMOVE_TASK',
      index: this.props.index
    });
  }
  
  toggleCheck() {
    store.dispatch({
      type: 'TOGGLE_CHECK',
      index: this.props.index
    });
  }
  
  render() {
    return (
      <li
        className="list_item">
        <input
          type="checkbox"
          onChange={this.toggleCheck}/>
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }
  
  addTask(e) {
    e.preventDefault();
    store.dispatch({
      type: 'ADD_TASK',
      text: this.input.value,
      isChecked: false
    });
    this.input.value = '';
  }
  
  render() {
    return (
      <form onSubmit={this.addTask}>
        <label>
          Add a new task:
          <input
            ref={node => this.input = node}
            className="text_field"
            type="text" 
             />
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

const render = () => {
  ReactDOM.render(<Main value={store.getState()} />, document.getElementById('app'));
};

store.subscribe(render);
render();