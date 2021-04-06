// d3.select("p").text("Hello World").style('color','red');
// d3.selectAll("li:nth-child(odd)")
// .style("color", "green")
// .text("Hello My Dear World!")
// .html("My family");
//
// var numArray = [10,20,30,40,50,60,70,80,90, 100, 125];
// var name = 'Yaseen';
//
//
// d3.selectAll('.items li')
// .data(numArray)
// .text(function(d){
//   return 'Hello world am No.' + d;
// })
// .style('font-size', function(d){
//   return d+'px';
// })
//
// var li = d3.select('body').selectAll('.items li')
// .data(numArray)
// .text(function(d){
//   return 'Hello there';
// })
//
// li.enter().append('li')
// .text(function(d){
//   return 'this is the item number ' + d;
// })
//
// li.exit().remove();

// passing name
// d3.select('#name').text(name);


//
// var styles = [
//   {
//     'background':'red',
//     'color':'white',
//     'width':'45'
//   },
//   {
//     'background':'yellow',
//     'color':'black',
//     'width':'35'
//   },
//   {
//     'background':'green',
//     'color':'white',
//     'width':'30'
//   },
//   {
//     'background':'black',
//     'color':'white',
//     'width':'25'
//   },
//   {
//     'background':'orange',
//     'color':'white',
//     'width':'20'
//   },
// ];
//
// d3.selectAll('.items li')
// .data(styles)
// .style({
//   'font-size':'18px',
//   'padding':'6px',
//   'margin':'4px',
//   'list-style':'none',
//   'background':function(d){
//     return d.background;
//   },
//   'color':function(d){
//     return d.color;
//   },
//   'width':function(d){
//     return d.width+'%';
//   },
// })


// d3.select('body').append('svg')
//     .attr('width','400')
//     .attr('height','400')
//     .style('background','grey')
//
//     .append('rect')
//       .attr('width',300)
//       .attr('height',300)
//       .attr('x','50')
//       .attr('y','50')
//       .style('fill', 'red')
//       .style('stroke','black')
//       .style('stroke-width',1)
//
//       d3.select('svg')
//         .append('circle')
//         .attr('cx',200)
//         .attr('cy',200)
//         .attr('r',50)
//         .style('fill','blue')
//
