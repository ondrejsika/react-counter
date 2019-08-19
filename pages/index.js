import Counter from "../components/Counter";
import React from "react";
import { get } from "../utils/api";

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    let protocol = "https";
    if (req.headers.host.indexOf("localhost") > -1) protocol = "http";
    if (req.headers.host.indexOf("127.0.0.1") > -1) protocol = "http";
    let origin = `${protocol}://${req.headers.host}`;

    let count = await get(origin);
    return {
      origin: origin,
      initialCount: count
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h1>Counter</h1>
          <Counter
            origin={this.props.origin}
            initialCount={this.props.initialCount}
          />
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
  }
}
