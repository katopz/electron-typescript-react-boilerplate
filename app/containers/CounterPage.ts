import { IDispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

interface State {
  counter: number
}

function mapStateToProps(state:State) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch:IDispatch) {
  return bindActionCreators({
    increment: CounterActions.increment,
    decrement: CounterActions.decrement,
    incrementIfOdd: CounterActions.incrementIfOdd,
    incrementAsync: CounterActions.incrementAsync
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
