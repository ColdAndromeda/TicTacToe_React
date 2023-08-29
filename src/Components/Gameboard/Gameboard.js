// link the css
import "./Gameboard.css";

const GameBoard = () => {
  return (
    <div className="Board">
      <table>
        <tr id="RowOne">
          <td id="One"></td>
          <td id="Two"></td>
          <td id="Three"></td>
        </tr>
        <tr id="RowTwo">
          <td id="Four"></td>
          <td id="Five"></td>
          <td id="Six"></td>
        </tr>
        <tr id="RowThree">
          <td id="Seven"></td>
          <td id="Eight"></td>
          <td id="Nine"></td>
        </tr>
      </table>
    </div>
  );
};

let PlayerAction = <Square PlayerStatus="X" />;

const Square = (turn) => {
  return (
    <div className="Square">
      <button id="Square">{turn.PlayerStatus}</button>
    </div>
  );
};

const PlayerStatus = (turn) => {
  return pass;
};

export default GameBoard;
