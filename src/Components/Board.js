import React from "react";
import CrossLine from "./CrossLine";

const Tile = ({ cls, value, handleClick ,playerTurn}) => {
    let hoverClass=null;
    if(value==null && playerTurn!=null){
        hoverClass=`${playerTurn}-hover`;
    }
    return (
        <div onClick={handleClick} className={`tile ${cls} ${hoverClass}`}>
            {value}
        </div>
    );
};

const Board = ({ tiles, onTileClick,playerTurn,strikeClass }) => {
    return (
        <div className="board">
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(0)} value={tiles[0]} cls="right-border bottom-border left-border top-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(1)} value={tiles[1]} cls="right-border bottom-border top-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(2)} value={tiles[2]} cls="bottom-border right-border top-border" />

            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(3)} value={tiles[3]} cls="right-border bottom-border left-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(4)} value={tiles[4]} cls="right-border bottom-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(5)} value={tiles[5]} cls="bottom-border right-border" />

            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(6)} value={tiles[6]} cls="right-border left-border bottom-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(7)} value={tiles[7]} cls="right-border bottom-border" />
            <Tile playerTurn={playerTurn} handleClick={() => onTileClick(8)} value={tiles[8]} cls="bottom-border right-border" />
            
            <CrossLine strikeClass={strikeClass} />
        </div>
    );
};

export default Board;











/*
i can use this too

const Board = ({ tiles, onTileClick }) => {
    return (
        <div className="board">
            {tiles.map((value, index) => (
                <Tile
                    key={index}
                    handleClick={() => onTileClick(index)}
                    value={value}
                    cls={
                        `${index % 3 === 0 ? 'left-border ' : ''}` +
                        `${index % 3 === 2 ? 'right-border ' : ''}` +
                        `${index < 6 ? 'bottom-border ' : ''}` +
                        `${index < 3 ? 'top-border ' : ''}`
                    }
                />
            ))}
            <CrossLine />
        </div>
    );
};

*/