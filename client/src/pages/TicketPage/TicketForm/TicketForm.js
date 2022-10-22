import {useState, useEffect} from 'react';

import {Route, Routes, useNavigate, useParams} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {useForm} from 'react-hook-form';

import Button from '../../../components/Ui/Button/Button';
import Input from '../../../components/Ui/Input/Input';
import Tag from '../../../components/Ui/Tag/Tag';

import Comment from '../../../components/Comment/Comment';


import TagOverview from '../../../components/Ui/TagSelect/TagOverview/TagOverview';

import DeleteTicket from '../../../modals/DeleteTicket/DeleteTicket';

import AddComment from '../../../modals/AddComment/AddComment';

import LinkButton from '../../../components/Ui/LinkButton/LinkButton';

import Multiselect from '../../../components/Ui/TagSelect/Multiselect/Multiselect';

import {deleteComment, fetchTask, taskSelector} from '../../../store/currentTask';

import {deleteTask, updateTask} from '../../../store/board';

import FormHeader from './FormHeader/FormHeader';

import styles from './TicketForm.module.css';


const TicketForm = () => {
  const {id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState('view'); // edit
  const task = useSelector(taskSelector);
  const { title, description, tags, column, comments} = task;
  const [tagList, setTagList] = useState([]);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();


  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  useEffect(() => { setTagList(tags);}, [tags]);
  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  }, [title, description, setValue]);

  const nameFieldConfig = {
    placeholder: 'Название',
    autoFocus: true,
    disabled: mode!=='edit',
  };

  const descriptionFieldConfig = {
    placeholder: 'Описание',
    disabled: mode!=='edit',
    multiline: true,
  };

  const onClickEdit = (evt) => {
    evt.preventDefault();
    setMode('edit');
  };

  const onSubmit = (evt) => {
    evt.tags = tagList;
    dispatch(updateTask({...task, ...evt}));
    setMode('view');
  };

  const onClickDelete = () => {
    dispatch(deleteTask({id, column: task.column}));
    navigate('/');
  };

  const onClickCommentDelete = (id) => {
    dispatch(deleteComment(id));
  };

  const RequiredError = errors.title ? <p className={styles.form__error}>{errors.title.message}</p> : '';
  const isSubmitDisabled = Boolean(errors.title);

  const Select = mode === 'edit' ? <>
    <TagOverview className={styles.form__overview} tagList={tagList} setTagList={setTagList}/>
    <Multiselect className={styles.form__multiselect} tagList={tagList} setTagList={setTagList}/>
  </> : Boolean(tagList) &&
      <div className={styles.form__tags}>
        {tagList.map(tag =>
          <Tag key={`tag-${tag}`} color={tag}
            className={styles.form__tags}/>)}
      </div>;

  const Comments =  Boolean(comments) && comments.map(comment =>
    <Comment
      onClickDelete={onClickCommentDelete}
      key={`comment-${comment.id}`} comment={comment}
      className={styles.form__tags}/>);

  const AddCommentBtn = mode === 'edit' &&
      <LinkButton mode="add" className={styles.form__add} to="comment">
        Добавить комментарий
      </LinkButton>;


  const SaveBtn = mode === 'edit' &&
      <Button  disabled={isSubmitDisabled}
        size="small"
        type="submit"
        className={styles.form__submit}>
        Сохранить
      </Button>;

  return (<>
    <article className={styles.form}>
      <FormHeader column={column} mode={mode} onClickEdit={onClickEdit} />
      <div className="border-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          {RequiredError}
          <Input register={register('title', { required: 'Необходимо заполнить' })}
            config={nameFieldConfig}
            className={styles.form__name}/>
          <Input register={register('description', )}
            config={descriptionFieldConfig}
            className={styles.form__description}/>
          {Select}
          <div className={styles.form__comments}>
            {Comments}
          </div>
          {AddCommentBtn}
          {SaveBtn}
        </form>
      </div>
    </article>
    <Routes>
      <Route path="comment" element={<AddComment mode="add" backTo={`/full/${id}`} comment={{}}/>}/>
      <Route path="delete" element={<DeleteTicket backTo={`/full/${id}`} onClickDelete={onClickDelete}/>}/>
    </Routes>
  </>

  );
};

export default TicketForm;
