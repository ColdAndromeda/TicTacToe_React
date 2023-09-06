import "./Gameboard.css";
import Square from "./Square.js";

const GameBoard = () => {
  return (
    <div className="Board">
      <table>
        <tr id="RowOne">
          <td id="One">
            <Square />
          </td>
          <td id="Two">
            <Square />
          </td>
          <td id="Three">
            <Square />
          </td>
        </tr>
        <tr id="RowTwo">
          <td id="Four">
            <Square />
          </td>
          <td id="Five">
            <Square />
          </td>
          <td id="Six">
            <Square />
          </td>
        </tr>
        <tr id="RowThree">
          <td id="Seven">
            <Square />
          </td>
          <td id="Eight">
            <Square />
          </td>
          <td id="Nine">
            <Square />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default GameBoard;
