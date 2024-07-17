# Chess Engine Project

This project features a chess engine that employs the minimax algorithm with alpha-beta pruning for efficient move selection. The engine is integrated into an interactive website, allowing users to play against the computer and experience a challenging game of chess.

Features
Minimax Algorithm: The core of the engine is built upon the minimax algorithm, which helps the computer make optimal moves by considering possible future moves and their outcomes.

Alpha-Beta Pruning: To enhance the efficiency of the minimax algorithm, the engine implements alpha-beta pruning. This technique eliminates branches of the game tree that do not need to be evaluated, reducing the number of nodes explored.

## Features

- **Move Calculation**: 
  - Determines the legal moves for each piece type.
  - `availableMoves.js`: Evaluates all possible moves for each piece.
  - `individualPieces.js`: Defines the specific moves for each type of chess piece (pawn, rook, knight, bishop, queen, king).

- **Check and Checkmate Detection**:
  - Identifies when a player is in check or checkmate.
  - `check.js`: Checks for check and checkmate conditions.

- **AI Opponent**:
  - Uses the minimax algorithm with alpha-beta pruning to make optimal moves.
  - `chessAI.js`: Implements the AI logic, including move evaluation and decision-making.
  - **Minimax Algorithm**: This algorithm recursively evaluates possible moves, simulating all potential future game states to choose the best move.
  - **Alpha-Beta Pruning**: Enhances the minimax algorithm by eliminating branches in the game tree that do not need to be explored, making the decision-making process more efficient.

- **User Interaction**:
  - Allows users to interact with the game through a web interface.
  - `app.js`: Main script to initialize the game and handle user interactions.
  - `helpers.js`: Contains utility functions for move validation and game state management.

## Future Improvements

- Enhance the game with additional features such as castling and en passant.
- Improve the user interface for better usability.
- Add support for saving and loading games.
