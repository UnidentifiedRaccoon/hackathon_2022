import {useForm} from 'react-hook-form';

import Input from '../../components/Ui/Input/Input';
import UserEntranceForm from '../../components/UserEntranceForm/UserEntranceForm';

import styles from './SignUpPage.module.css';
const SignUpPage = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (evt) => {
    // eslint-disable-next-line no-console
    console.log(evt);
  };
  const firstnameFieldConfig = {placeholder: 'имя', autoFocus: true};
  const surnameFieldConfig = {placeholder: 'фамилия'};
  const emailFieldConfig = {placeholder: 'почта'};
  const passwordFieldConfig = {placeholder: 'пароль'};
  return (
    <main className={styles.signUp}>
      <div className="center">
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
      </div>
    </main>
  );
};


export default SignUpPage;
