const main = function() {
  const ground = d3
    .select("svg")
    .append("g")
    .attr("transform", "translate(100,100)")
    .attr("width", 800)
    .attr("height", 500);
  const data = [4, 13, 18];
  const colors = ["red", "green", "blue"];
  const pie = d3.pie();
  const arc = d3
    .arc()
    .innerRadius(60)
    .outerRadius(100);
  ground
    .selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", (d, i) => colors[i])
    .attr("d", arc);
};

window.onload = main;
