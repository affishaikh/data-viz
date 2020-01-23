const radii = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
const colors = ["green", "blue"];

const main = function() {
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  svg
    .selectAll("circle")
    .data(radii)
    .enter()
    .append("circle")
    .attr("r", n => n)
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("fill", n => `rgb(${n}, ${n}, ${n})`);
};

window.onload = main;
