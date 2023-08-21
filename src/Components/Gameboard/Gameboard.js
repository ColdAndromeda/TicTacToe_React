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

export default GameBoard;
