
import { connect } from 'react-redux'

const mapStateToProps = ( state ) => {
  return state;
};

const mapActionsToProps = function ( dispatch ){
  return {
    increment: function(){ dispatch({ type:'increment' }) },
    decrement: function(){ dispatch({ type:'decrement' }) }
  };
};

const adapter = connect(
  mapStateToProps,
  mapActionsToProps
);
// alternativ zum adapter: redux hooks

export { mapStateToProps, mapActionsToProps, adapter };

const reducer = ( state={ value: 1 }, action ) => {
  switch ( action.type ){
    case 'increment': state = { ...state, value: state.value + 1}; break;
    case 'decrement': state = { ...state, value: state.value - 1}; break;
    default:
      console.log("ACHTUNG!",action.type,'kenne ich nicht!')
  }
  return state;
}

export default reducer;
