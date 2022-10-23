const store = {
  tasks: [
    {
      id: 'task-1',
      title: 'Нарисовать иллюстрации',
      description: 'Какое-то описание какой-то задачи',
      column: 'Todo',
      deadline: new Date(Date.now() + 100000),
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
      column: 'In progress',
      deadline: new Date(Date.now() + 100010),
      comments: [],
    },
    {
      id: 'task-3',
      deadline: new Date(Date.now() + 100020),
      title: 'Внести правки в макет',
      description: 'Какое-то описание какой-то задачи',
      column: 'Done',
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
    {
      id: 'task-4',
      deadline: new Date(Date.now() + 100030),

      title: 'Согласовать изменения с заказчиком',
      description: 'Какое-то описание какой-то задачи',
      column: 'In progress',
      comments: [],
    },
    {
      id: 'task-5',
      deadline: new Date(Date.now() + 100050),

      title: 'Изменить цвет кнопки',
      column: 'Done',
      comments: [],
    },
    {
      id: 'task-6',
      deadline: new Date(Date.now() + 100060),

      title: 'Добавить dnd',
      column: 'In progress',
      comments: [],
    },
    {
      id: 'task-7',
      deadline: new Date(Date.now() + 100070),

      title: 'Добавить компонент фильтрации',
      description: 'Какое-то описание',
      column: 'In progress',
      comments: [],
    },
    {
      id: 'task-8',
      deadline: new Date(Date.now() + 100080),

      title: 'Сверстать страницу тикета',
      column: 'Todo',
      comments: [],
    },
    {
      id: 'task-9',
      deadline: new Date(Date.now() + 100090),

      title: 'Запушить изменения в репозиторий',
      description: 'Какое-то описание какой-то задачи',
      column: 'In progress',
      comments: [],
    },
    {
      id: 'task-10',
      deadline: new Date(Date.now() + 100100),
      title: 'Отправить задачу на проверку',
      description: 'Какое-то описание какой-то задачи',
      column: 'In progress',
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
    'Todo':  {id: 'Todo', taskIds: []},
    'In progress':  {id: 'In progress', taskIds: []},
    'Done':  {id: 'Done', taskIds: []},
  },
  RequestMeta: {},
};

export default store;
