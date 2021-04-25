import {connect} from 'react-redux';
import {openCard, checkCards} from '../redux/Actions';
import Main from '../components/main/Main';


const mapStateToProps = (state) => ({
  cards: state.gameState.cards,
});

const mapDispatchToProps = (dispatch) => ({
  onCardPressed: (id) => openCardAndCheckAfterDelay(dispatch, id)
});

function openCardAndCheckAfterDelay(dispatch, id) {
  dispatch(openCard(id));
  setTimeout(() => dispatch(checkCards()), 4000);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
