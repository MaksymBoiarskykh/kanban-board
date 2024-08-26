import useRepoTasks from '../../hooks/useRepoTasks';
import { SectionsType } from '../../hooks/useRepoTasks/RepoTasksProvider';
import TasksSection from '../TasksSection';
import styles from './TasksContainer.module.scss';

const TasksContainer = () => {
  const { tasks } = useRepoTasks();

  return (
    <div>
      {tasks && (
        <div className={styles['task-container']}>
          {Object.entries(tasks).map(([section, data]) => (
            <div className={styles['task-container-column']} key={section}>
              <TasksSection type={section as SectionsType} tasksData={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksContainer;
