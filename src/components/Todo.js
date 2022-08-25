function Todo(props) {
  const { data, deleteTodo, handleChange } = props;

  const handleCheckbox = () => {
    if (data.done)
      return null;
    handleChange(data.id);
  };

  return (
    <div>
      <input type="checkbox" checked={data.done} onChange={() => handleCheckbox()} />
      <span style={data.done ? { textDecoration: "line-through" } : null}>{data.text}</span>
      <button className="btn-2" onClick={() => deleteTodo(data)}> X</button>
    </div>
  );
};

export default Todo;
