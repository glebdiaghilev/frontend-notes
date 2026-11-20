import useState from 'react'
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [
        { id: 'task-1', title: 'buy a milk', isDone: false },
        { id: 'task-2', title: 'drink a milk', isDone: true },
    ]

    const [value, setValue] = useState(initialValue)

    const deleteAllTasks = () => {
      console.log('deleting all tasks!')
    }

    const deleteTask = (taskId) => {
      console.log(`delete a task with id: ${taskId}`)
    }

    const toggleTaskComplete = (taskId, isDone) => {
      console.log(`task ${taskId} ${isDone ? 'completed' : 'uncompleted'}`)
    }

    const filterTasks = (query) => {
      console.log(`search: ${query}`)
    }

    const addTask = () => {
      console.log('task added!')
    }

    return (
        <div className="todo">
          <h1 className="todo__title">To Do List</h1>
          <AddTaskForm 
            addTask={addTask}
          />
          <SearchTaskForm 
            onSearchInput={filterTasks}
          />
          <TodoInfo 
            total={tasks.length}
            done={tasks.filter(({ isDone }) => isDone).length}
            onDeleteAllButtonClick={deleteAllTasks}
          />
          <TodoList 
            tasks={tasks}
            onDeleteTaskButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
          />
        </div>
    )
}

export default Todo