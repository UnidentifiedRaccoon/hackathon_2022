import {useSelector} from 'react-redux';

const useAuth = () => {
  const {name, surname, token, id, email} = useSelector(state => state.user);
  return {
    isAuth: !!email,
    name, surname, token, id, email,
  };
};

export default useAuth;
