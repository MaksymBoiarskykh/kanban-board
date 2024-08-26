import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useRepoUrl from '../../hooks/useRepoUrl';
import styles from './RepoForm.module.scss';

type Input = {
  url: string;
};

const RepoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const { setUrl } = useRepoUrl();

  const onSubmit: SubmitHandler<Input> = useCallback(
    (data) => {
      setUrl(data.url);
      reset();
    },
    [reset, setUrl],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['repo-form']}>
      <input
        {...register('url', { required: true })}
        placeholder="enter repo url"
        className={styles['repo-form-field']}
      />
      <input type="submit" className={styles['repo-form-btn']} />
      {errors.url && (
        <div className={styles['repo-form-error']}>This field is required</div>
      )}
    </form>
  );
};

export default memo(RepoForm);
