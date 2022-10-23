import {useForm} from 'react-hook-form';

import {useDispatch} from 'react-redux';

import Input from '../../components/Ui/Input/Input';
import UserEntranceForm from '../../components/UserEntranceForm/UserEntranceForm';

import {loginUser} from '../../store/user';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  // setValue, formState: { errors }
  const { register, handleSubmit  } = useForm();
  const onSubmit = (evt) => {
    dispatch(loginUser(evt));
  };
  const loginFieldConfig = {placeholder: 'логин', autoFocus: true, type: 'email'};
  const passwordFieldConfig = {placeholder: 'пароль', type: 'password'};
  return (
    <main className={styles.login}>
      <div className="center">
        <UserEntranceForm title="Вход" submitBtnText="Войти"
          onSubmit={handleSubmit(onSubmit)}
          linkTo="/sign-up"
          linkText="Еще не с нами? Зарегистрируйтесь">
          <Input config={loginFieldConfig}
            register={register('email', { required: 'Необходимо заполнить' })}
            className={styles.input}
          />
          <Input config={passwordFieldConfig}
            register={register('password', { required: 'Необходимо заполнить' })}
            className={styles.input}
          />
        </UserEntranceForm>
      </div>
    </main>
  );
};


export default LoginPage;

