import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import useRepoTasks from './hooks/useRepoTasks';
import useRepoUrl from './hooks/useRepoUrl';

const queryClient = new QueryClient();

const AppContainer: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <useRepoUrl.Provider>
        <useRepoTasks.Provider>
          <App />
        </useRepoTasks.Provider>
      </useRepoUrl.Provider>
    </QueryClientProvider>
  );
};

export default AppContainer;
