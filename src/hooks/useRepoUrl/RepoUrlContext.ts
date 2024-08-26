import { createContext } from 'react';

export interface RepoUrlContextValue {
  url: string;
  issuesUrl: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const RepoUrlContext = createContext<RepoUrlContextValue>({
  url: '',
  issuesUrl: '',
  setUrl: () => {},
});

export default RepoUrlContext;
