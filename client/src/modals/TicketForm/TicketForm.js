import { useState, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useForm} from 'react-hook-form';

import {useDispatch} from 'react-redux';


import Modal from '../Modal';
import Input from '../../components/Ui/Input/Input';
import TagOverview from '../../components/Ui/TagSelect/TagOverview/TagOverview';
import Button from '../../components/Ui/Button/Button';

import generalStyles from '../Modal.module.css';

import Multiselect from '../../components/Ui/TagSelect/Multiselect/Multiselect';

import {addTask, updateTask} from '../../store/board';

import styles from './TicketForm.module.css';


const TicketForm = ({mode, config, backTo}) => {
  const { title, description,  tags} = config;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tagList, setTagList] = useState(tags);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const titleFieldConfig = {placeholder: 'Название', autoFocus: true};
  const descriptionFieldConfig = {placeholder: 'Описание', multiline: true};

  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  }, [title, description]);


  const onSubmit = (evt) => {
    evt.tags = tagList;
    console.log(evt);
    if (mode === 'edit') dispatch(updateTask({...config, ...evt}));
    else dispatch(addTask(evt));


    navigate(backTo);
  };
  const RequiredError = errors.title ? <p className={generalStyles.modal__error}>{errors.title.message}</p> : '';
  const isSubmitDisabled = Boolean(errors.title);

  return (
    <Modal backTo={backTo}>
      <h2 className={generalStyles.modal__heading}>{mode === 'edit' ? 'Редактировать' : 'Создать тикет'}</h2>
      <div className="border-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          {RequiredError}
          <Input config={titleFieldConfig}
            register={register('title', { required: 'Необходимо заполнить' })}
            className={generalStyles.modal__title}
          />
          <Input register={register('description' )}
            config={descriptionFieldConfig}
            className={generalStyles.modal__description}/>
          <TagOverview className={styles.modal__overview} tagList={tagList} setTagList={setTagList}/>
          <Multiselect
            register={register('tags' )}
            className={styles.modal__multiselect}
            tagList={tagList}
            setTagList={setTagList}/>
          <Button disabled={isSubmitDisabled} type="submit" >Сохранить</Button>
        </form>
      </div>
    </Modal>
  );
};

export default TicketForm;