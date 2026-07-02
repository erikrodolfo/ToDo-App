import { useState } from "react";
import styles from "./TaskForm.module.css";

export function TaskForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pendente",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit(formData);

    setFormData({
      title: "",
      description: "",
      status: "pendente",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="pendente">Pendente</option>
        <option value="em_progresso">
          Em progresso
        </option>
        <option value="concluido">
          Concluído
        </option>
      </select>

      <button type="submit">
        Criar tarefa
      </button>
    </form>
  );
}