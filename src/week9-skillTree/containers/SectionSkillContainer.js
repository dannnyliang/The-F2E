import { connect } from 'react-redux';
import SectionSkill from '../components/SectionSkill';

const mapStateToProps = state => ({
  focus: state.focus,
});

const SectionSkillContainer = connect(
  mapStateToProps
)(SectionSkill);

export default SectionSkillContainer;
