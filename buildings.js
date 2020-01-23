const buildings = [
  {
    name: "Burj Khalifa",
    height: "828"
  },
  {
    name: "Shanghai Tower",
    height: "623"
  },
  {
    name: "Abraj Al-Bait Clock Tower",
    height: "601"
  },
  {
    name: "Ping An Finance Centre",
    height: "599"
  },
  {
    name: "Lotte World Tower",
    height: "544.5"
  },
  {
    name: "One World Trade Center",
    height: "541.3"
  },
  {
    name: "Guangzhou CTF Finance Center",
    height: "530"
  }
];

const main = function() {
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", 800)
    .attr("height", 500);

  const numberScale = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([500, 0]);

  svg
    .selectAll("rect")
    .data(buildings)
    .enter()
    .append("rect")
    .attr("width", 50)
    .attr("height", b => numberScale(0) - numberScale(b.height))
    .attr("x", (b, i) => i * 100 + 50)
    .attr("y", b => numberScale(b.height))
    .attr("fill", b => {
      const arr = [b.height % 255, Math.random() * 255, Math.random() * 255];
      _.shuffle(arr);
      return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    });

  svg
    .selectAll("text")
    .data(buildings)
    .enter()
    .append("text")
    .text(b => b.name)
    .attr("x", (_, i) => i * 100 + 75)
    .attr("y", 500)
    .attr("transform", (b, i) => `rotate(270 ${i * 100 + 75} ${500})`);

  svg
    .selectAll("#building-height")
    .data(buildings)
    .enter()
    .append("text")
    .text(b => b.height)
    .attr("x", (_, i) => i * 100 + 50)
    .attr("y", b => 490 - b.height / 2);
};

window.onload = main;
