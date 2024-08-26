import React, { useMemo, useState } from 'react';
import RepoUrlContext from './RepoUrlContext';

interface RepoUrlProviderProps {
  children: React.ReactNode;
}

export type SectionsType = 'open' | 'closed' | 'unassigned';

const RepoUrlProvider: React.FC<RepoUrlProviderProps> = ({ children }) => {
  const [url, setUrl] = useState('');

  const issuesUrl = useMemo(() => {
    const apiUrl = url.replace('github.com', 'api.github.com/repos');
    return apiUrl ? `${apiUrl}/issues` : apiUrl;
  }, [url]);

  return (
    <RepoUrlContext.Provider value={{ url, issuesUrl, setUrl }}>
      {children}
    </RepoUrlContext.Provider>
  );
};

export default RepoUrlProvider;
