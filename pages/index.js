import Btn from "../components/Btn";

export default () => {
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <Btn>Count!</Btn>
      </div>

      <style jsx>{`
        .container {
          display: inline-block;
          border: 1px black solid;
          margin: 1em;
          padding: 1em;
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: Arial;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};
