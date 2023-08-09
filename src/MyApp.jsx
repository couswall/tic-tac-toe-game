import { useEffect, useState } from "react"
import { Square } from "./Square";
import { array } from "prop-types";
import { Modal } from "./Modal";


export const MyApp = () => {
    
    const [cells, setCells] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("circle");
    const [ winningMessage, setWinningMessage ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);


    useEffect(()=> {
        checkWinner();
        if (checkForDraw()) {
            setWinningMessage("It's a draw");
            setShowModal(true);
        }
    }, [cells]);

    const checkWinner = () => {

        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],  // rows
            [0,3,6], [1,4,7], [2,5,8], // columns
            [0,4,8], [2,4,6]           // diagonals
        ];

        winningCombos.forEach( array => {
            
            let circleWins = array.every( cellNumber => cells[cellNumber] === '○');
            if ( circleWins ) {
                setWinningMessage("Circle wins!");
                setShowModal(true);
                return;
            }
        });

        winningCombos.forEach( array => {
            
            let crossWins = array.every( cellNumber => cells[cellNumber] === '×');
            if ( crossWins ) {
                setWinningMessage("Cross wins!");
                setShowModal(true);
                return;
            }
        });


    }

    const checkForDraw = () => {
        return cells.every( cell => cell !== null && !winningMessage);
    }

    const onRestart = () => {

        setCells(Array(9).fill(null));
        setTurn("circle");
        setWinningMessage(null);
        setShowModal(false);

    }

  return (
    <div className="container">
        <div className="title">
            <h1 id="main-title">tic tac toe</h1>
            <p>Player <span id="turn-span">{turn}&apos;</span>s turn</p>
        </div>
        <div className="game-board">
            {
                cells.map((cell,index) => {
                    return <Square 
                        key={index} 
                        id={index} 
                        cell={cell}
                        cells = {cells}
                        setCells = {setCells}
                        turn = {turn}
                        setTurn = {setTurn}
                        winningMessage = { winningMessage }
                        />
                })
            }
        </div>
        
        { showModal && <Modal message = {winningMessage} onRestart = {onRestart}/>}
            </div>
  )
}



sdlkdlskdlkdssdskkldsk