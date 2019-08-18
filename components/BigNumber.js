export default props => {
  return (
    <>
      <span className="bigNumber">{props.children}</span>
      <style jsx>
        {`
          .bigNumber {
            font-size: 1.5em;
            font-weight: bold;
            padding-left: 2.5rem;
            padding-right: 2rem;
          }
        `}
      </style>
    </>
  );
};
