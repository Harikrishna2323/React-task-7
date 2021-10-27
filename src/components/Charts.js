import React from "react";
import Topbar from "./Topbar";
import { Line, Pie, Bar, Chart } from "react-chartjs-2";

const Charts = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <Topbar />

        <h1 className="h3 mb-2 text-gray-800">Charts</h1>
        <p className="mb-4">
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          customization options, please visit the{" "}
          <a target="_blank" href="https://www.chartjs.org/docs/latest/">
            official Chart.js documentation
          </a>
          .
        </p>

        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Area Chart
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <Line
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      datasets: [
                        {
                          label: "Earnings",
                          lineTension: 0.3,
                          backgroundColor: "rgba(78, 115, 223, 0.05)",
                          borderColor: "rgba(78, 115, 223, 1)",
                          pointRadius: 3,
                          pointBackgroundColor: "rgba(78, 115, 223, 1)",
                          pointBorderColor: "rgba(78, 115, 223, 1)",
                          pointHoverRadius: 3,
                          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                          pointHitRadius: 10,
                          pointBorderWidth: 2,
                          data: [
                            0, 10000, 5000, 15000, 10000, 20000, 15000, 25000,
                            20000, 30000, 25000, 40000,
                          ],
                        },
                      ],
                    }}
                  />
                </div>
                <hr />
                <p style={{ paddingTop: "70px" }}>
                  Styling for the area chart can be found in the
                  <code>/js/demo/chart-area-demo.js</code> file.
                </p>
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
              </div>

              <div className="card-body">
                <div className="chart-bar">
                  <Bar
                    style={{ height: "380px" }}
                    data={{
                      labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                      ],
                      datasets: [
                        {
                          label: "Revenue",
                          backgroundColor: "#4e73df",
                          hoverBackgroundColor: "#2e59d9",
                          borderColor: "#4e73df",
                          data: [4215, 5312, 6251, 7841, 9821, 14984],
                        },
                      ],
                    }}
                  />
                </div>
                <hr />
                <p style={{ paddingTop: "70px" }}>
                  Styling for the bar chart can be found in the
                  <code>/js/demo/chart-bar-demo.js</code> file.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Donut Chart
                </h6>
              </div>

              <div className="card-body">
                <div className="chart-pie pt-4">
                  <Pie
                    style={{ height: "300px", width: "300px" }}
                    data={{
                      labels: ["Direct", "Referral", "Social"],
                      datasets: [
                        {
                          data: [55, 30, 15],
                          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                          hoverBackgroundColor: [
                            "#2e59d9",
                            "#17a673",
                            "#2c9faf",
                          ],
                          hoverBorderColor: "rgba(234, 236, 244, 1)",
                        },
                      ],
                    }}
                  />
                </div>

                <p style={{ paddingTop: "120px" }}>
                  Styling for the donut chart can be found in the
                  <code>/js/demo/chart-pie-demo.js</code> file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Charts;
