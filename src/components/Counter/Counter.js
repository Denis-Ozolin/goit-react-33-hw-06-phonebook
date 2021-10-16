import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => onDecrement(step)}>уменьшить на {step}</button>
      <button onClick={() => onIncrement(step)}>увеличить на {step}</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
