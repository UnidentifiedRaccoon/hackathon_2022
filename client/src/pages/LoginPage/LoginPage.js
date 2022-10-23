import {useForm} from 'react-hook-form';

import Input from '../../components/Ui/Input/Input';
import UserEntranceForm from '../../components/UserEntranceForm/UserEntranceForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  // setValue, formState: { errors }
  const { register, handleSubmit  } = useForm();
  const onSubmit = (evt) => {
    // eslint-disable-next-line no-console
    console.log(evt);
  };
  const loginFieldConfig = {placeholder: 'логин', autoFocus: true};
  const passwordFieldConfig = {placeholder: 'пароль'};
  return (
    <main className={styles.login}>
      <div className="center">
        <UserEntranceForm title="Вход" submitBtnText="Войти"
          onSubmit={handleSubmit(onSubmit)}
          linkTo="/sign-up"
          linkText="Еще не с нами? Зарегистрируйтесь">
          <Input config={loginFieldConfig}
            register={register('login', { required: 'Необходимо заполнить' })}
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

