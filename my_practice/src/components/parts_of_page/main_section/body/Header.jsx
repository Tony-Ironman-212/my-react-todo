import Button from '@/components/small_components/Button.jsx';

function Header(props) {
  const { active, setActive } = props;
  // tạo buttons để map ra list button
  const buttons = [
    { label: 'All Task', value: 'all' },
    { label: 'Not Done', value: 'not_done' },
    { label: 'Completed', value: 'completed' },
  ];
  return (
    <div className='text-center mb-3'>
      <h1 className='text-5xl font-bold text-gray-700 mb-3'>Things To Do</h1>
      <div>
        {buttons.map((button) => (
          <Button
            key={button.value}
            isActive={active === button.value}
            onClick={() => setActive(button.value)}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;
