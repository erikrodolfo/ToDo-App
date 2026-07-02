import { useState } from "react";
import styles from "./TaskItem.module.css";

export function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSave() {
    await onUpdate(task._id, formData);

    setIsEditing(false);
  }

  async function handleComplete() {
    await onUpdate(task._id, {
      title: task.title,
      description: task.description,
      status: "concluido",
    });
  }

  if (isEditing) {
    return (
      <div className={styles.card}>
        <input name="title" value={formData.title} onChange={handleChange} />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pendente">Pendente</option>

          <option value="em_progresso">Em Progresso</option>

          <option value="concluido">Concluído</option>
        </select>

        <div className={styles.actions}>
          <button onClick={handleSave}>Salvar</button>

          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <span className={`${styles.status} ${styles[task.status]}`}>
        {task.status}
      </span>

      <div className={styles.actions}>
        <button onClick={() => setIsEditing(true)}>Editar</button>

        {task.status !== "concluido" && (
          <button onClick={handleComplete}>Concluir</button>
        )}

        <button onClick={() => onDelete(task._id)}>Excluir</button>
      </div>
    </div>
  );
}
