function Footer(props) {
  const { taskItems } = props;
  return (
    <div className=' bg-[#F4FCE8] px-5 py-3 border-t border-gray-300'>
      <span className='text-gray-700 mx-3'>
        All tasks: {taskItems.length}, Not Done:{' '}
        {taskItems.filter((taskItem) => !taskItem.done).length}, Completed:{' '}
        {taskItems.filter((taskItem) => taskItem.done).length}
      </span>
    </div>
  );
}

export default Footer;
