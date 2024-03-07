import numpy as np
import random
from time import sleep
 
def display_board():
    '''Creates an empty board'''
    return(np.array([[0, 0, 0],
                     [0, 0, 0],
                     [0, 0, 0]]))
 

def find_empties(board):
    '''Finds empty spaces on the board'''
    spaces = []
 
    for i in range(len(board)):
        for j in range(len(board)):
 
            if board[i][j] == 0:
                spaces.append((i, j))
    return spaces
 
def random_place(board, player):
    '''Selects a random place'''
    selection = find_empties(board)
    current_pos = random.choice(selection)
    board[current_pos] = player
    return board

def row_win(board, player):
    '''Checks for a horizontal row win'''
    for x in range(len(board)):
        win = True
 
        for y in range(len(board)):
            if board[x, y] != player:
                win = False
                continue
 
        if win == True:
            return win
    return win
 
 
def col_win(board, player):
    '''Checks for a vertical column win'''
    for x in range(len(board)):
        win = True
 
        for y in range(len(board)):
            if board[y][x] != player:
                win = False
                continue
 
        if win == True:
            return win 
    return win 
 
def diag_win(board, player):
    '''Checls for a diagonal win'''
    win = True
    y = 0
    for x in range(len(board)):
        if board[x, x] != player:
            win = False
    if win:
        return win
    win = True
    if win:
        for x in range(len(board)):
            y = len(board) - 1 - x
            if board[x, y] != player:
                win = False
    return win
 

def check_win(board):
    '''Checks if it is a win or a tie'''
    winner = 0
 
    for player in [1, 2]:
        if (row_win(board, player) or
                col_win(board, player) or
                diag_win(board, player)):
 
            winner = player
 
    if np.all(board != 0) and winner == 0:
        winner = -1
    return winner
 
def play():
    board, winner, counter = display_board(), 0, 1
    print(board)
    sleep(2)
 
    while winner == 0:
        for player in [1, 2]:
            board = random_place(board, player)
            print(f"Board after {str(counter)} move(s)")
            print(board)
            sleep(2)
            counter += 1
            winner = check_win(board)
            if winner != 0:
                break
    return winner 
 

print(f"Winner is: {'player one' if str(play()) == 1 else 'player two'}")