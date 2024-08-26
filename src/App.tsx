import RepoForm from './components/RepoForm';
import TasksContainer from './components/TasksContainer';
import UrlBlock from './components/UrlBlock/UrlBlock';

const App = () => {
  return (
    <div className="app">
      <RepoForm />
      <UrlBlock />
      <TasksContainer />
    </div>
  );
};

export default App;
