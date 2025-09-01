import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/small_components/Button.jsx';
import Input from '@/components/small_components/Input.jsx';

function FilteredList(props) {
  const {
    taskItems,
    mode,
    setMode,
    searchInput,
    setSearchInput,
    taskInput,
    setTaskInput,
    active,
  } = props;

  // lọc task theo trạng thái active (all or not done or completed)
  const filteredTasks = taskItems.filter((taskItem) => {
    if (active === 'all') return true;
    if (active === 'not_done') return !taskItem.done;
    if (active === 'completed') return taskItem.done;
  });

  // quyết định hiển thị danh sách task nào
  let displayTasks = [];
  if (mode === 'add') {
    displayTasks = filteredTasks;
  } else if (mode === 'search') {
    displayTasks = filteredTasks.filter((taskItem) => {
      return taskItem.task.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  // xử lý thêm task
  const handleAddTask = (e) => {
    if (e.key === 'Enter' && taskInput.trim() !== '') {
      setTaskItems([...taskItems, { task: taskInput, done: false }]);
      setTaskInput('');
    }
  };

  // xử lý khi click task để task done
  const handleTaskDone = (index) => {
    setTaskItems((prevTaskItems) =>
      prevTaskItems.map((prevTaskItem, i) => {
        return i === index
          ? { ...prevTaskItem, done: !prevTaskItem.done }
          : prevTaskItem;
      })
    );
  };

  // xử lý khi edit lại nội dung task
  const handleEditTask = (index) => {
    const newTask = prompt('Edit your task:', taskItems[index].task);
    if (newTask !== null && newTask.trim() !== '') {
      setTaskItems((prevTaskItems) => {
        return prevTaskItems.map((prevTaskItem, i) => {
          return i === index
            ? { ...prevTaskItem, task: newTask }
            : prevTaskItem;
        });
      });
    }
  };

  // xử lý khi xóa task
  const handleDeleteTask = (index) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${taskItems[index].task}" task?`
      )
    ) {
      setTaskItems((prevTaskItems) => {
        return prevTaskItems.filter((_, i) => i !== index);
      });
    }
  };

  return (
    <div>
      <Button
        ownStyle={{ marginLeft: 0 }}
        isActive={mode === 'add'}
        onClick={() => setMode('add')}
      >
        <FontAwesomeIcon icon={faPlus} /> Add
      </Button>
      <Button isActive={mode === 'search'} onClick={() => setMode('search')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
      </Button>
      <Input
        placeholder={
          mode === 'search'
            ? 'Search tasks...'
            : 'Add a new task then press "Enter"'
        }
        value={mode === 'search' ? searchInput : taskInput}
        onChange={
          mode === 'search'
            ? (e) => setSearchInput(e.target.value)
            : (e) => setTaskInput(e.target.value)
        }
        onKeyDown={mode === 'search' ? () => {} : handleAddTask}
      />
      <ul>
        {displayTasks.map((taskItem) => (
          <li
            key={taskItems.indexOf(taskItem)}
            style={{
              textDecoration: taskItem.done ? 'line-through' : 'none',
              color: taskItem.done ? '#aaa' : '#333',
            }}
            className='flex justify-between border-b border-gray-300 text-gray-600 items-center cursor-pointer last:border-0 select-none'
            title='Click to toggle done'
          >
            <div>
              <input
                className='cursor-pointer'
                type='checkbox'
                checked={taskItem.done}
                onChange={() => handleTaskDone(taskItems.indexOf(taskItem))}
              />
              <span
                className='ml-3 text-lg'
                onClick={() => handleTaskDone(taskItems.indexOf(taskItem))}
              >
                {taskItem.task}
              </span>
            </div>
            <div>
              <Button
                onClick={() => handleEditTask(taskItems.indexOf(taskItem))}
              >
                Edit
              </Button>
              <Button
                ownStyle={{ marginRight: 0, backgroundColor: '#fd4747' }}
                onClick={() => handleDeleteTask(taskItems.indexOf(taskItem))}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
