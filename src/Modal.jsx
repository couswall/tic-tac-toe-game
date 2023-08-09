import PropTypes from 'prop-types';


export const Modal = ({message, onRestart }) => {
  return (
    <div className="modal">
        <div className="modal-content">
            <h4 id="winningMessage">{message}</h4>
            <button id="restart-btn" onClick={onRestart}>Play again</button>
        </div>
    </div>
  )
}


Modal.propTypes = {
    message: PropTypes.string,
    onRestart: PropTypes.func.isRequired
}
