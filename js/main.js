


document.querySelector(".select-control").addEventListener("change", updateBarChart);

function updateBarChart(){
  let column = document.querySelector(".select-control").value;
  let spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title": "Coffee House Chains",
    "width":450,
    "height":300,
    "data": {"url":"data/coffee-house-chains.csv"},
    "mark": "bar",
    "encoding": {
      "x": {"field": "company", "type": "nominal", "sort": "-y"},
      "y": {"field": column, "type": "quantitative", "sort": "-x"}
    }
  };
  vegaEmbed('#chart-area', spec);
}

updateBarChart();