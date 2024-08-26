import { createContext } from 'react';

export interface GitHubIssue {
  id: number;
  title: string;
  state: string;
  locked: boolean;
  assignee: object | null;
  assignees: object[];
  comments: number;
  body: string;
}

export interface RepoTasksContextValue {
  tasks: {
    open: GitHubIssue[];
    closed: GitHubIssue[];
    unassigned: GitHubIssue[];
  };
  changeStatus: (id: number, oldStatus: any, newStatus: any) => void;
}

const RepoTasksContext = createContext<RepoTasksContextValue>({
  tasks: {
    open: [],
    closed: [],
    unassigned: [],
  },
  changeStatus: () => {},
});

export default RepoTasksContext;
