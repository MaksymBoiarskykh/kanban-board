import { FC } from 'react';
import useRepoTasks from '../../hooks/useRepoTasks';
import { GitHubIssue } from '../../hooks/useRepoTasks/RepoTasksContext';
import { SectionsType } from '../../hooks/useRepoTasks/RepoTasksProvider';
import styles from './TasksSection.module.scss';

interface TasksSectionProps {
  type: SectionsType;
  tasksData: GitHubIssue[];
}

const TasksSection: FC<TasksSectionProps> = ({ type, tasksData }) => {
  const { changeStatus } = useRepoTasks();

  const handleDragStart = (event: any) => {
    event.dataTransfer.setData('task', event.target.id);
    event.dataTransfer.setData('source', event.target.parentElement.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('task');
    const source = event.dataTransfer?.getData('source');
    let dropzone = event.target.id;

    if (source !== dropzone) {
      if (Number.isNaN(+dropzone)) {
        changeStatus(+id, source, dropzone);
      } else {
        changeStatus(+id, source, event.target.parentElement.id);
      }
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div
      className={styles['tasks-section']}
      id={type}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className={styles['tasks-section-title']}>{type}</div>
      {tasksData.map((task) => {
        return (
          <div
            draggable
            key={task.id}
            onDragStart={handleDragStart}
            id={`${task.id}`}
            className={styles['tasks-section-task']}
          >
            {task.title}
          </div>
        );
      })}
    </div>
  );
};

export default TasksSection;
