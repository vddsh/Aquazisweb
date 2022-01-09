export function FormField({ children, label, name }) {
  return (
    <>
      <div htmlFor={name}>{label}</div>
      {children}
    </>
  );
}

// FormField.propTypes = {
//   children: PropTypes.node,
//   label: PropTypes.string,
//   name: PropTypes.string,
// };
