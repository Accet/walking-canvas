const board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const location = [1, 1];
const render = () => {
  const markup = board
    .map((row) =>
      row
        .map(
          (col) =>
            `<span class="field ${
              col === 0 ? "grass" : col === 1 ? "wall" : ""
            }">
    <span class="${
      col === 2
        ? "arrow up"
        : col === 3
        ? "arrow right"
        : col === 4
        ? "arrow down"
        : col === 5
        ? "arrow left"
        : ""
    }"></span>
  </span>`
        )
        .join("")
    )
    .join("<span class='clear'></span>");

  document.getElementById("app").innerHTML = markup;
};
render();

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    if (board[location[0]][location[1]] <= 4) {
      board[location[0]][location[1]] += 1;
    } else {
      board[location[0]][location[1]] = 2;
    }
  }
  if (event.keyCode === 37) {
    if (board[location[0]][location[1]] > 2) {
      board[location[0]][location[1]] -= 1;
    } else {
      board[location[0]][location[1]] = 5;
    }
  }
  if (event.keyCode === 38) {
    const direction = board[location[0]][location[1]];
    if (direction === 2) {
      const nextLocation = [...location];
      nextLocation[0] -= 1;
      console.log(board[nextLocation[0]][nextLocation[1]]);
      if (board[nextLocation[0]][nextLocation[1]] !== 1) {
        board[nextLocation[0]][nextLocation[1]] =
          board[location[0]][location[1]];
        board[location[0]][location[1]] = 0;
        location[0] = nextLocation[0];
      }
    }
    if (direction === 3) {
      const nextLocation = [...location];
      nextLocation[1] += 1;
      if (board[nextLocation[0]][nextLocation[1]] !== 1) {
        board[nextLocation[0]][nextLocation[1]] =
          board[location[0]][location[1]];
        board[location[0]][location[1]] = 0;
        location[1] = nextLocation[1];
      }
    }
    if (direction === 4) {
      const nextLocation = [...location];
      nextLocation[0] += 1;
      if (board[nextLocation[0]][nextLocation[1]] !== 1) {
        board[nextLocation[0]][nextLocation[1]] =
          board[location[0]][location[1]];
        board[location[0]][location[1]] = 0;
        location[0] = nextLocation[0];
      }
    }
    if (direction === 5) {
      const nextLocation = [...location];
      nextLocation[1] -= 1;
      if (board[nextLocation[0]][nextLocation[1]] !== 1) {
        board[nextLocation[0]][nextLocation[1]] =
          board[location[0]][location[1]];
        board[location[0]][location[1]] = 0;
        location[1] = nextLocation[1];
      }
    }
  }
  render();
});
