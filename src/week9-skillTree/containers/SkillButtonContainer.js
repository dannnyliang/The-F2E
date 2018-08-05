import { connect } from 'react-redux';
import SkillButton from '../components/SkillButton';
import { clickSkill } from '../actions';

const mapStateToProps = state => ({
  complete: state.complete,
});

const mapDispatchToProps = dispatch => ({
  click: name => dispatch(clickSkill(name)),
});

const SkillButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillButton);

export default SkillButtonContainer;
