import PropTypes from 'prop-types';


export const Square = ({id,cell, cells, setCells, turn, setTurn, winningMessage}) => {

    

    const handleOnClick = (index) => {
        const newArray = [...cells];

        if ( newArray[index] === null) {
            newArray[index] = turn === 'circle' ? '○' : '×';
            setCells(newArray);
            setTurn( turn === 'circle' ? 'cross' : 'circle');
        }
 
    }

  return (
    <div className="grid-item" 
         id={id} 
         onClick={ !winningMessage ? () => handleOnClick(id) : null}
         style={{ color: cell === '○' ? '#EFE1D1' : '#A78295'}}
         >
        {cell}
    </div>
  )
}


Square.propTypes = {
    id: PropTypes.number.isRequired
}