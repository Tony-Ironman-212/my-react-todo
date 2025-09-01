function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.isActive ? '#0676cf' : '',
        ...props.ownStyle,
      }}
      className='py-1 px-2 border border-transparent rounded-sm bg-[#66afe9] text-white m-1'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
