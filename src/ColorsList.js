const ColorsList = (props) => {
  return (
    <ul>
      {props.colors.map((color) => (
        <li>{color}</li>
      ))}
    </ul>
  );
};

export default ColorsList;
