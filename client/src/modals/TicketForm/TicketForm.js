import { useState, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useForm} from 'react-hook-form';

import {useDispatch} from 'react-redux';


import Modal from '../Modal';
import Input from '../../components/Ui/Input/Input';
import Button from '../../components/Ui/Button/Button';

import generalStyles from '../Modal.module.css';

import {addTask, updateTask} from '../../store/board';
import CheckList from '../../components/CheckList/CheckList';
import Suggest from '../../components/Suggest/Suggest';


const TicketForm = ({mode, config, backTo}) => {
  const { title, description,  points} = config;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pointsList, setPointsList] = useState(Object.fromEntries(points));
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const titleFieldConfig = {placeholder: 'Название', autoFocus: true};
  const descriptionFieldConfig = {placeholder: 'Описание', multiline: true};
  const curatorFieldConfig = {placeholder: 'Куратор', disabled: true};
  const timeFieldConfig = {placeholder: 'DD.MM.YY HH.MM', type: 'datetime-local'};

  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  }, [title, description, setValue]);


  const onSubmit = (evt) => {
    evt.points = Object.entries(pointsList).filter(([_, point]) => point.label);
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
        <form className={generalStyles.modal__form} onSubmit={handleSubmit(onSubmit)}>
          {RequiredError}
          <Input config={titleFieldConfig}
            register={register('title', { required: 'Необходимо заполнить' })}/>
          <Input register={register('description' )}
            config={descriptionFieldConfig}/>
          <div className={generalStyles.modal__form_row}>
            <Input register={register('curator' )}
              config={curatorFieldConfig}
              className={generalStyles.modal__half}/>
            <Suggest register={register} setValue={setValue}/>
          </div>
          <Input register={register('time' )}
            config={timeFieldConfig}/>
          <div className={generalStyles.check_list}>
            <CheckList points={pointsList} setPoints={setPointsList}/>
          </div>
          <Button disabled={isSubmitDisabled} type="submit" >Сохранить</Button>
        </form>
      </div>
    </Modal>
  );
};

export default TicketForm;
