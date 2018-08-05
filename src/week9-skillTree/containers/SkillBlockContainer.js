import { connect } from 'react-redux';
import SkillBlock from '../components/SkillBlock/';
import { clickSubcate } from '../actions';

const mapStateToProps = state => ({
  focus: state.focus,
  complete: state.complete,
});

const mapDispatchToProps = dispatch => ({
  click: name => dispatch(clickSubcate(name)),
});

const SkillBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillBlock);

export default SkillBlockContainer;
