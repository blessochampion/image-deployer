const container = d3.select("#container");
let {width, height} = container.node().getBoundingClientRect();
height = Math.min( height, 800);
const margin = {top: 20, right: 20, bottom: 30, left: 40};
const defaultMargin = 1;
const maxRadius = 180;
const minRadius = 80;
let currenZoom = 1;

container.select('img').remove();
const tooltip = d3.create('div').attr('id','tooltip').classed('tooltip', true)
document.body.appendChild(tooltip.node());


// zoom overview button
let zoomPipWindow = d3.select(SELECTORS.zoomPipWindow);
let dimension = zoomPipWindow.node().getBoundingClientRect();
if(!dimension.width || !dimension.height){
  // this is a mobile view
  zoomPipWindow = d3.select('.ai-body_pip-window-mob');
  dimension = zoomPipWindow.node().getBoundingClientRect();
}
const {width: pipWidth, height: pipHeight} = dimension
const {width: pipParentWidth, height: pipParentHeight} = zoomPipWindow.node().parentNode.getBoundingClientRect()

let dataLibrary = {
  sector : {},
  usecase : {},
  technology :{},
  geography: {},
  companies: {},
  dataGrouping:{}
}


/**
 * DROPDOWN SECTION
 */
// dropdown change event
const dropDownEvent  = new Event('dropdownChange');

const dropDowns = {
  sector: [],
  technology: [],
  geography: [],
  usecase : [],
  filterType: 'Sector'
}

const resetButton = d3.select('#reset-button');
resetButton.on('click', ()=>{
  dropDowns.sector = [];
  dropDowns.technology = [];
  dropDowns.geography = [];
  dropDowns.usecase = [];
  window.dispatchEvent(dropDownEvent);
})


// sector dropdown
const sectorDropdown = document.querySelector(SELECTORS.sectorDropdown);
dropDownEffect(sectorDropdown, (selected)=>{
  dropDowns.sector = selected;
  // dispatch the event
  window.dispatchEvent(dropDownEvent);
} )

// usecase dropdown
const usecaseDropdown = document.querySelector(SELECTORS.usecaseDropdown);
dropDownEffect(usecaseDropdown, (selected)=>{
  dropDowns.usecase = selected;
  // dispatch the event
  window.dispatchEvent(dropDownEvent);
} )

//AI Technology dropdown
const aiTechnology = document.querySelector(SELECTORS.technologyDropdown);
dropDownEffect(aiTechnology, (selected)=>{
  dropDowns.technology = selected;
  // dispatch the event
  window.dispatchEvent(dropDownEvent);
} )

// region dropdown
const geographyDropdown = document.querySelector(SELECTORS.geographyDropdown);
dropDownEffect(geographyDropdown, (selected)=>{
  dropDowns.geography = selected;
  // dispatch the event
  window.dispatchEvent(dropDownEvent);
} )


// Create the SVG container.
 const svg = d3.select("#container")
.append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

    svg.on('click', () => {
  // trigger click event on window
  d3.select('.ai-filters_dropdown-list.w-dropdown-list.w--open').classed('w--open', false)
})
const g = svg.append("g")


const updateRadius = (data) => {

    data.forEach(d => {
        if(d.root) {
            d.radius = maxRadius;
            return;
        }
        d.radius = minRadius + 40
    })
}

const generateLinks = (data) => {
    const links = []
    // group the data by group
    const groupData = d3.group(data, d => d.group);
    // iterate over the group data
    groupData.forEach((value, key) => {
        // iterate over the value
        value.forEach((node) => {
            if(node.root){
                node.total = node.children.length;
                return;
            };
            links.push({source: key, target: node.id})
        })
    })

    return links;
}


function handleZoom(e) {

    // Get the current zoom level and position
    const scale = e.transform.k;

    // Calculate new size of the pip-window based on zoom level
    const newPipWidth = Math.min(pipWidth / scale, pipParentWidth-8);
    const newPipHeight = Math.min(pipHeight / scale, pipParentHeight-8);

    // Update size of the overview rectangle (pip-window)
     zoomPipWindow
          .style('width', `${newPipWidth}px`)
          .style('height', `${newPipHeight}px`);
    g.attr('transform', e.transform);

    currenZoom = scale;

}

let zoom = d3.zoom()
  .on('zoom', handleZoom)
    .scaleExtent([0, 5])
    

const drawMap = (data) => {
    g.selectAll('*').remove();
    const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

    //get all the root nodes
    const rootNodes = nodes.filter(d => d.root);

   // Create a simulation with several forces.
  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide().strength(.5).radius( (d) => d.radius*1.15  ).iterations(1))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

 // Add a line for each link, and a circle for each node.
  const link = g.append("g")
      .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#CD735F")
        .attr("stroke-width", 3);


      const node = g.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll("image")
    .data(nodes.filter(d => !d.root))
    .join("g")
    .style("cursor", "pointer")

    node.on("mouseover", function(event) {
            tooltip.transition().duration(200).style("opacity", 1);  // Show the tooltip
        })
        .on("mousemove", function(event, d) {
          // Update the position of the tooltip based on mouse position
          tooltip.html(d.data.Company)
              .style("left", (event.pageX + 10) + "px")  // Adjust offset from the cursor
              .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            tooltip.transition().duration(200).style("opacity", 0);  // Hide the tooltip
        });

    node.on("click", (event, d) => {
       tooltip.transition().duration(200).style("opacity", 0);  // Hide the tooltip
        // stop the propagation of the event
        updateSelection(d, nodes, dataLibrary,d.group,true);
    })

    const div = node.append('foreignObject')
     .attr("x", d=> -d.radius/2)
      .attr("y", d=> -d.radius/2)
    .attr("width", d => d.radius)
    .attr("height", d => d.radius)
    .style('border-radius', '100vh')
    .append("xhtml:div")

    div.append("img")
     
      .attr("width", d=> d.radius)
      .attr("height", d=> d.radius)
      .attr("src", d=> d.image)
      .style("box-shadow", "0 1px 5px 0 rgba(0, 0, 0, 0.1)")
   

    // draw rectangle for root node
    const root = g.append("g")
    .selectAll("rect")
    .data(nodes.filter(d => d.root))
    .join("g")
    root.append("rect")
    .attr("width",(d)=> {
        d.width = 265
        return d.width
    })
    .attr("height", (d)=>{
        d.height = 80
        return d.height
    })
    .attr("fill", "#CD735F")
    .attr('rx', d => d.height/1.75)
    .attr('ry', d => d.height/1.75)

    // add html div as foreign object

   const innerDiv =  root.append("foreignObject")
    .attr("width", d => d.width)
    .attr("height", d => d.height)
    .append("xhtml:div")
    .style("width", d => d.width + "px")
    .style("height", d => d.height + "px")
    .style("display", "flex")
    .style("justify-content", "left")
    .style("paddling-left", "10px")
    // .style("border", "1px solid black")
    .style("align-items", "center")
    innerDiv.append('div').html(d => d.group)
    .style("padding", "8px 4px 8px 12px")
    .style("background-color", "transparent")
    .style("flex-grow", 1)
    .style("color", "white")
    .style("text-align", "center")
    .style("border-right", "1px solid white")
        .style("font-size", "16px")
        .style("font-weight", "bold")
    .classed("root-node", true)
    innerDiv.append('div').html(d => d.total)
    .style("margin-left", "auto")
    .style("text-align", "center")
    .style("width", "75px")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .style("color", "white")


      // Add a drag behavior.
    node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // add drag behavior to root node
    root.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    simulation.on('end', () => {
      // trigger the dropdown change event
      window.dispatchEvent(dropDownEvent);
    });

    node.attr("transform", d => `translate(${d.x},${d.y})`);
    root.attr("transform", d => `translate(${d.x - d.width/2},${d.y - d.height/2})`);

  });

    // Reheat the simulation when drag starts, and fix the subject position.
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.035).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  // Update the subject (dragged node) position during drag.
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }


  //Call the zoom function
  svg.call(zoom)
    //   .translateExtent([[0, 0], [width/4, height/4]]);

    // .on("mousedown.zoom", null)
    //     .on("touchstart.zoom", null)
    //     .on("touchmove.zoom", null)
    //     .on("touchend.zoom", null);

    svg.call(zoom.transform, d3.zoomIdentity.scale(0.5))

    // listen for dropdown change event
    window.addEventListener('dropdownChange', (event) => {
        const {sector, technology,  geography, usecase} = dropDowns;
        node.classed('fade-node', true).classed('unfade-node', false)
        link.classed('fade-link', true).classed('unfade-link', false).style('stroke', 'grey')
        .style('stroke-width', 1)

        function filterNodes(node){
          if(node.root) return true;
            const geo = node.data.Geography.map(g => dataLibrary.geography[g].Geography||"");
            // check if the node matches the Geography filter
            let matchGeography = true;
            if(geography.length > 0){
                matchGeography = geography.some(r => geo.includes(r))
            }

            // check if the node matches the sector filter
            let matchSector = true;
            if(sector.length > 0){
              const {sector:sectorDB} = dataLibrary
                matchSector = sector.some(s => {
                  return node.data['Sector Tags'].map(s => sectorDB[s]).map(s => s.Sector).includes(s)
                })
            }

            // check if the node matches the technology filter
            let matchTechnology = true;
            if(technology.length > 0){
              const {technology:technologyDB} = dataLibrary
                matchTechnology = technology.some(t => {
                  return node.data['AI Technology'].map(s => technologyDB[s]).map(t => t['Technology']).includes(t)
                })
            }

            // check if the node matches the usecase filter
            let matchUsecase = true;
            if(usecase.length > 0){
              const {usecase:usecaseDB} = dataLibrary
                matchUsecase = usecase.some(u => {
                  return node.data['Use Case'].map(s => usecaseDB[s]).map(u => u['Use Case']).includes(u)
                })
            }

            // console.log(dataLibrary.usecase)

            return matchTechnology && matchSector && matchGeography && matchUsecase
        }
        const filteredNodes = node.filter(filterNodes);
        const filteredLinks = link.filter(link => {
          return filterNodes(link.target)
        })


        filteredNodes.classed('unfade-node', true).classed('fade-node', false)
        filteredLinks.classed('unfade-link', true).classed('fade-link', false).style('stroke', '#CD735F')
        .style('stroke-width', 3)
    })



   setTimeout(() => {
     // set listners for .ai-toggle_radio-field click event
      const radioButtons = document.querySelectorAll('.ai-toggle_radio-field');
      radioButtons.forEach(radio => {
        radio.addEventListener('click', (event) => { 
          event.stopPropagation()
          const filterType = radio.querySelector('span').innerText;
          if(dropDowns['filterType'] === filterType)return;

          dropDowns['filterType'] = filterType;
            startSimulation()
        })
      })
   }, 350);


}

const startSimulation =()=>{
  console.log( dataLibrary.dataGrouping)
  const data = dataLibrary.dataGrouping[dropDowns.filterType];
    updateRadius(data.nodes);
    data.links = generateLinks(data.nodes);
    drawMap(data);
}


const main = async () => {    
    // // retrieve the sector data
    // const sectorData = await fetchAirtableData(SECTOR_TABLE);
    // const sectorDB = {}
    // for(const {id, fields} of sectorData){
    //     sectorDB[id] = fields;
    // }
    // dataLibrary.sector = sectorDB;

    // // retrieve the usecase data
    // const usecaseData = await fetchAirtableData(USECASE_TABLE);
    // const usecaseDB = {}
    // for(const {id,fields} of usecaseData){
    //     usecaseDB[id] = fields;
    // }
    // dataLibrary.usecase = usecaseDB;


    // // retrieve the technology data
    // const technologyData = await fetchAirtableData(TECHNOLOGY_TABLE);
    // const technologyDB = {}
    // for(const {id, fields} of technologyData){
    //     technologyDB[id] = fields;
    // }
    // dataLibrary.technology = technologyDB;

    // // retrieve geography data
    // const geographyData = await fetchAirtableData(GEOGRAPHY_TABLE);
    // const geographyDB = {}
    // for(const {id, fields} of geographyData){
    //     geographyDB[id] = fields;
    // }
    // dataLibrary.geography = geographyDB;

    // // retrieve company data
    // const companyData = await fetchAirtableData(COMPANY_TABLE);

    // const companyDB = {}
    // for(const {id, fields} of companyData){
    //     companyDB[id] = fields
    // }
    // dataLibrary.companies = companyDB;
    
    dataLibrary = dataSource
    extractNodes(dataLibrary);  
    console.log( dataLibrary.dataGrouping)

    startSimulation()
     setTimeout(() => {
    document.querySelector('#radio-sec').click()
  }, 350);
}

main();