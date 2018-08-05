import { connect } from 'react-redux';
import TreeCate from '../components/TreeCate';
// import { clickSubcate } from '../actions';

const mapStateToProps = state => ({
  // focus: state.focus,
  complete: state.complete,
});

// const mapDispatchToProps = dispatch => ({
//   click: name => dispatch(clickSubcate(name)),
// });

const TreeCateContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(TreeCate);

export default TreeCateContainer;
