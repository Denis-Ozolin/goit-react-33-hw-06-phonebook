import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <>
      <h1>{value}</h1>
      <button onClick={onDecrement}>уменьшить</button>
      <button onClick={onIncrement}>увеличить</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
