import {useForm} from 'react-hook-form';

import {useDispatch} from 'react-redux';

import {useNavigate} from 'react-router-dom';

import Modal from '../Modal';
import Input from '../../components/Ui/Input/Input';

import generalStyles from '../Modal.module.css';
import Button from '../../components/Ui/Button/Button';
import {addComment} from '../../store/currentTask';

const AddComment = ({mode, comment, backTo}) => {
  const {author, text} = comment;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nameFieldConfig = {placeholder: 'Имя', value: author, autoFocus: true};
  const descriptionFieldConfig = {placeholder: 'Комментарий', value: text, multiline: true};

  const onSubmit = (evt) => {
    dispatch(addComment(evt));
    navigate(backTo);
  };

  const isSubmitDisabled = Boolean(errors.author);
  const RequiredError =  <p className={generalStyles.modal__error}>
    {errors.author ? errors.author.message : errors.text ? errors.text.message : '' }
  </p> ;

  return (
    <Modal backTo={backTo}>
      <h2 className={generalStyles.modal__heading}>{mode === 'add' ? 'Добавить' : 'Редактировать'} комментарий</h2>
      <div className="border-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          {RequiredError}
          <Input
            register={register('author', { required: 'Необходимо указать имя' })}
            config={nameFieldConfig} className={generalStyles.modal__title}/>
          <Input
            register={register('text', { required: 'Необходимо заполнить комментарий' })}
            config={descriptionFieldConfig} className={generalStyles.modal__description}/>
          <Button disabled={isSubmitDisabled} type="submit" >Сохранить</Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddComment;