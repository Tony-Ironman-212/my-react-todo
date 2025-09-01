import { useState } from 'react';

// import cá nhân
import Footer from './footer/Footer.jsx';
import Header from './body/Header.jsx';
import FilteredList from './body/FilteredList.jsx';

function MainSection() {
  // khởi tạo state
  const [taskInput, setTaskInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [taskItems, setTaskItems] = useState([
    { task: 'Ex: Learn React', done: false },
    { task: 'Ex: Study Nodejs', done: false },
  ]);
  const [active, setActive] = useState('all'); // all, not_done, completed
  const [mode, setMode] = useState('add'); // add, search

  return (
    <div className=' mx-auto mt-8 mb-4 max-w-[600px] border'>
      <div className='bg-white px-5 pt-5'>
        {/* header */}
        <Header active={active} setActive={setActive} />

        {/* filteredList */}
        <FilteredList
          taskItems={taskItems}
          setTaskItems={setTaskItems}
          mode={mode}
          setMode={setMode}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          active={active}
        />
      </div>

      {/* footer */}
      <Footer taskItems={taskItems}></Footer>
    </div>
  );
}

export default MainSection;
