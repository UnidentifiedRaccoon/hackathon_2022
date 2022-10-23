import {useForm} from 'react-hook-form';

import {useNavigate} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import Input from '../../components/Ui/Input/Input';
import UserEntranceForm from '../../components/UserEntranceForm/UserEntranceForm';

import {regUser} from '../../store/user';

import styles from './SignUpPage.module.css';
const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit} = useForm();
  const onSubmit = (evt) => {
    dispatch(regUser({evt, navigate}));
  };
  const firstnameFieldConfig = {placeholder: 'имя', autoFocus: true};
  const surnameFieldConfig = {placeholder: 'фамилия'};
  const emailFieldConfig = {placeholder: 'почта'};
  const passwordFieldConfig = {placeholder: 'пароль'};
  return (
    <main className={styles.signUp}>
      <UserEntranceForm title="Регистрация" submitBtnText="Зарегистрироваться"
        onSubmit={handleSubmit(onSubmit)}
        linkTo="/login"
        linkText="Уже есть аккаунт? Войти">
        <Input config={firstnameFieldConfig}
          register={register('firstname', { required: 'Необходимо заполнить' })}
          className={styles.input}
        />
        <Input config={surnameFieldConfig}
          register={register('surname', { required: 'Необходимо заполнить' })}
          className={styles.input}
        />
        <Input config={emailFieldConfig}
          register={register('email', { required: 'Необходимо заполнить' })}
          className={styles.input}
        />
        <Input config={passwordFieldConfig}
          register={register('password', { required: 'Необходимо заполнить' })}
          className={styles.input}
        />
      </UserEntranceForm>
    </main>
  );
};


export default SignUpPage;
