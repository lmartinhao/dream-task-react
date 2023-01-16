import { ClipboardText } from 'phosphor-react';
import styles from './NoTasks.module.css';

export function NoTasks() {
  return (
    <div className={styles.taskBox}>
      <ClipboardText size={100}/>
      <div className={styles.noTaskText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
