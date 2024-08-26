import { useContext } from 'react';
import RepoTasksContext from './RepoTasksContext';
import RepoTasksProvider from './RepoTasksProvider';

const useRepoTasks = () => useContext(RepoTasksContext);

useRepoTasks.Context = RepoTasksContext;
useRepoTasks.Provider = RepoTasksProvider;

export default useRepoTasks;
