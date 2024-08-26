import { useContext } from 'react';
import RepoTasksContext from './RepoUrlContext';
import RepoTasksProvider from './RepoUrlProvider';

const useRepoUrl = () => useContext(RepoTasksContext);

useRepoUrl.Context = RepoTasksContext;
useRepoUrl.Provider = RepoTasksProvider;

export default useRepoUrl;
