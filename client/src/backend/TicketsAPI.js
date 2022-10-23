import mockData  from '../mocks/board-data';

import LSRequest from './LSRequest';


const lsRequest = new LSRequest();
const TICKETS_KEY = 'MY_TICKETS';

class TicketsAPI {
  async addTask(task) {
    const board = await this.requestBoard();
    board.tasks.push(task);
    board.columns['column-1'].taskIds.push(task.id);
    await this.updateBoard(board);
  }

  async updateTask(task) {
    const board = await this.requestBoard();
    const index = board.tasks.findIndex(t => t.id === task.id);
    board.tasks[index] = task;
    await this.updateBoard(board);
  }

  async getTask(id) {
    const board = await this.requestBoard();
    return board.tasks.find(t => t.id === id);
  }

  async requestBoard() {
    let response = await lsRequest.getItem(TICKETS_KEY);
    if (!response?.tasks) {
      await lsRequest.setItem(TICKETS_KEY, mockData);
      response = await lsRequest.getItem(TICKETS_KEY);
    }
    return response;
  }

  async updateBoard(items) {
    return lsRequest.setItem(TICKETS_KEY, items);
  }

  async updateTaskPosition( source, destination, taskId) {
    const board = await this.requestBoard();
    board.tasks.find(task => task.id === taskId).column = destination.droppableId;
    await this.updateBoard(board);
  }

  async deleteTask(id, column) {
    const board = await this.requestBoard();
    board.columns[column].taskIds =
        board.columns[column].taskIds.filter(t => t.id !== id);
    board.tasks = board.tasks.filter(t => t.id !== id);
    await this.updateBoard(board);
  }

}

export default new TicketsAPI();
