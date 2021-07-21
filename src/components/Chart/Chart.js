import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => {
    // We want an array of numbers and not an array of objects. For 12 months, we will have an array of 12 numbers.
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value}
                                                         maxValue={totalMaximum}
                                                         label={dataPoint.label}
                                                         key={dataPoint.label} />)}
        </div>
    );
};

export default Chart;
