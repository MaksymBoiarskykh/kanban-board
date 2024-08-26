import React, { useCallback, useEffect, useState } from 'react';
import { useGenericQuery } from '../../api/generic';
import useRepoUrl from '../useRepoUrl';
import RepoTasksContext, { GitHubIssue } from './RepoTasksContext';

interface RepoTasksProviderProps {
  children: React.ReactNode;
}

export type SectionsType = 'open' | 'closed' | 'unassigned';

const RepoTasksProvider: React.FC<RepoTasksProviderProps> = ({ children }) => {
  const { issuesUrl } = useRepoUrl();

  const { data } = useGenericQuery<GitHubIssue[]>(issuesUrl, {
    state: 'all',
    assignee: '*',
    per_page: 50,
  });

  const [tasks, setTasks] = useState<Record<SectionsType, GitHubIssue[]>>({
    open: [],
    closed: [],
    unassigned: [],
  });

  useEffect(() => {
    if (data) {
      data.forEach((issue) => {
        if (!issue.assignee) {
          setTasks((prev) => ({
            ...prev,
            unassigned: [...prev.unassigned, issue],
          }));
        } else if (issue.state) {
          setTasks((prev) => ({
            ...prev,
            [issue.state]: [...prev.open, issue],
          }));
        }
      });
    }
  }, [data]);

  const changeStatus = useCallback(
    (id: number, oldStatus: SectionsType, newStatus: SectionsType) => {
      setTasks((prevData) => {
        const currentTask = prevData[oldStatus].find((task) => task.id === id);

        if (!currentTask || oldStatus === newStatus) {
          return prevData;
        }

        return {
          ...prevData,
          [newStatus]: [...prevData[newStatus], currentTask],
          [oldStatus]: prevData[oldStatus].filter((task) => task.id !== id),
        };
      });
    },
    [],
  );

  return (
    <RepoTasksContext.Provider value={{ tasks, changeStatus }}>
      {children}
    </RepoTasksContext.Provider>
  );
};

export default RepoTasksProvider;
