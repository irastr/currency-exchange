import React, { Component } from "react";

class Currency extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=8fdd999d285d4c04b1fae87400fe4d74"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: [data]
        });
      });
  }

  render() {
    return (
      <div className="table-wrap">
        <table>
          <tr>
            <th>Base</th>
            <th>Target</th>
            <th>Rate</th>
          </tr>

          {this.state.data.map(item => {
            let rates = item.rates;
            let result = [];
            for (let key in rates) {
              result.push([key, rates[key]]);
            }

            return result.map(data => {
              return (
                <tr>
                  <td>{item.base}</td>
                  <td>{data[0]}</td>
                  <td>{data[1]}</td>
                </tr>
              );
            });
          })}
        </table>
      </div>
    );
  }
}

export default Currency;
