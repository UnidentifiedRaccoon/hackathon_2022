import {TAG_COLORS} from '../const';

const store = {
  tasks: [
    {
      id: 'task-1',
      title: 'Нарисовать иллюстрации',
      description: 'Какое-то описание какой-то задачи',
      column: 'column-1',
      tags: [
        TAG_COLORS.RED,
        TAG_COLORS.BLUE,
        TAG_COLORS.YELLOW,
        TAG_COLORS.GREEN,
      ],
      comments: [ {
        author: 'Иванов Иван',
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },{
        author: 'Петров Петр',
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },{
        author: 'Петров Петр',
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },{
        author: 'Петров Петр',
        id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },{
        author: 'Петров Петр',
        id: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },

      ],
    },
    {
      id: 'task-2',
      title: 'Сверстать лендинг по готовому шаблону',
      column: 'column-2',
      tags: [],
      comments: [],
    },
    {
      id: 'task-3',
      title: 'Внести правки в макет',
      description: 'Какое-то описание какой-то задачи',
      column: 'column-3',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
        TAG_COLORS.RED,
        TAG_COLORS.BLUE,
      ],
      comments: [ {
        author: 'Иванов Иван',
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },
      // ,{
      //   author: 'Петров Петр',
      //   id: 2,
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
      //       'malesuada sed orci ut, scelerisque aliquet libero.' +
      //       ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      // },
      ],
    },
    {
      id: 'task-4',
      title: 'Согласовать изменения с заказчиком',
      description: 'Какое-то описание какой-то задачи',
      column: 'column-2',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-5',
      title: 'Изменить цвет кнопки',
      column: 'column-3',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-6',
      title: 'Добавить dnd',
      column: 'column-2',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-7',
      title: 'Добавить компонент фильтрации',
      description: 'Какое-то описание',
      column: 'column-2',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-8',
      title: 'Сверстать страницу тикета',
      column: 'column-1',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-9',
      title: 'Запушить изменения в репозиторий',
      description: 'Какое-то описание какой-то задачи',
      column: 'column-2',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [],
    },
    {
      id: 'task-10',
      title: 'Отправить задачу на проверку',
      description: 'Какое-то описание какой-то задачи',
      column: 'column-2',
      tags: [
        TAG_COLORS.DARK_BLUE,
        TAG_COLORS.ORANGE,
        TAG_COLORS.GREEN,
        TAG_COLORS.YELLOW,
      ],
      comments: [ {
        author: 'Иванов Иван',
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },{
        author: 'Петров Петр',
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante nunc, ' +
            'malesuada sed orci ut, scelerisque aliquet libero.' +
            ' Sed quis dolor varius, scelerisque dui semper, vulputate turpis. ',
      },
      ],
    },
  ],
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Todo',
      taskIds: ['task-1','task-8'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [ 'task-2', 'task-4', 'task-6', 'task-7', 'task-9', 'task-10'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-3', 'task-5'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
  RequestMeta: {},
};

export default store;
