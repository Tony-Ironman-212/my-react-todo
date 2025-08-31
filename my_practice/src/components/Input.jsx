function Input(props) {
  return (
    <input
      className='w-full h-9 py-2 px-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-sm outline-none mb-5 mt-1
              focus:border-[#66afe9] focus:shadow-[0_0_8px_rgba(102,175,233,.6)]
              transition-all duration-200'
      autoFocus
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}

export default Input;
