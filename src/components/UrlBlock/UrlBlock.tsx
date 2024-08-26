import { memo, useMemo } from 'react';
import useRepoUrl from '../../hooks/useRepoUrl';
import styles from './UrlBlock.module.scss';

const UrlBlock = () => {
  const { url } = useRepoUrl();

  const text = useMemo(
    () =>
      (url ?? '').replace(
        /https?:\/\/[^/]+\.com\/([^/]+)\/([^/]+)/,
        '$1 -> $2',
      ),
    [url],
  );

  return (
    <>
      {url && (
        <div className={styles['url-block']}>
          follow -
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        </div>
      )}
    </>
  );
};

export default memo(UrlBlock);
