import {connect} from "react-redux";
import Checkbox from '../components/Checkbox'

const mapStateToProps = state =>({
  todos: state.todos,
  checked: state.checked
});
const mapDispatchToProps = (dispatch) =>({
  handleInputChange: () => {
    dispatch({
      type: "CHECKBOX",
      payload: ''
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Checkbox);