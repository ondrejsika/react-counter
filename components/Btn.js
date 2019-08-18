export default props => {
  return (
    <>
      <span onClick={props.onClick} className="btn">
        {props.children}
      </span>
      <style jsx>
        {`
          .btn {
            border: 2px solid blue;
            border-radius: 0.5em;
            padding: 0.5rem;
            background-color: azure;
          }
        `}
      </style>
    </>
  );
};
