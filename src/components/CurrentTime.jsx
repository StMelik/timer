import { useSelector } from 'react-redux';

const CurrentTime = () => {
  const currentTime = useSelector((state) => state.app.currentTime);

  return <div className='current-time'>{currentTime}</div>;
};

export default CurrentTime;
