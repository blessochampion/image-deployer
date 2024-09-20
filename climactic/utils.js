function listenForBodyClick(){
    // listen for a click on the body
    document.body.addEventListener("click", (event) => {
        // get the #ai-info-popup
        const popup = document.getElementById("ai-info-popup");
    
        // animate the opacity from 1 to 0
        popup.animate([{opacity: 1}, {opacity: 0}], {duration: 800, fill: "forwards"});
        // set the display to none after the animation is done
        setTimeout(() => {
            popup.style.display = "none";
        }, 800);
    });
}


function checkBounds(d){
  if (d.x < 0) d.x = 0;
  if (d.x > width) d.x = width;
  if (d.y < 0) d.y = 0;
  if (d.y > width) d.y = height;
}

function updateSelection(d, nodes){
    // get the #ai-info-popup
    const popup = document.getElementById("ai-info-popup");
    // set the display to block
    popup.style += ";display:block !important";
    // animate the opacity from 0 to 1
    popup.animate([{opacity: 0}, {opacity: 1}], {duration: 800, fill: "forwards"});

    // update the title with the group. #ai-info-selected-section
    const title = document.getElementById("ai-info-selected-section");
    title.innerHTML = d.group;

    // close the popup when the close button is clicked. icon with class .ai-info_card-close-wrapper
    const close = document.querySelector(".ai-info_card-close-wrapper");
    close.addEventListener("click", (event) => {
        // animate the opacity from 1 to 0
        popup.animate([{opacity: 1}, {opacity: 0}], {duration: 400, fill: "forwards"});
        // set the display to none after the animation is done
        setTimeout(() => {
            popup.style.display = "none";
        }, 400);
    });   

    // get the items with the same group as d
    const relatedItems = nodes.filter(node => node.group === d.group && !node.root);

    const items = d3.selectAll('.ai-info_badge-content');
    const firstItem = d3.select('.ai-info_badge-content').node();

    items.data(relatedItems).join(enter=>{
         enter.each(function(d, i) {
            // if (firstItem) {
            //     // Clone the first item
            //     const clonedItem = firstItem.cloneNode(true);
                
            //     // Append the cloned item to the current "enter" selection
            //     d3.select(this).node().appendChild(clonedItem);
                
            //     // Update the cloned item with new data (image src in this case)
            //     d3.select(this).select('.ai-info_badge-logo')
            //         .attr("src", d.image);
            // }
            d3.select('.ai-info_badge-grid')
            .append('div')
            .attr('id', firstItem.getAttribute('id'))
            .datum(d)
            .html(firstItem.innerHTML)
            .classed('ai-info_badge-content', true)
            .style("display", "block")
            .on("click", (event, d) => {
            // stop the propagation of the event
            // update the logo
            const logoWrapper = d3.select('.ai-info_card-logo-wrapper').select('img');
            logoWrapper.attr("src", d.image);

            // update the card ai-info_card-paragraph
            const paragraph = d3.select('.ai-info_card-paragraph');
            console.log(d)
            paragraph.html(d.data.Company);

            // update the card ai-info_card-paragraph inside the second ai-info_card-info-content
            const aiParagraphs = d3.selectAll('.ai-info_card-info-content').select('.ai-info_card-paragraph');
            // pick the second paragraph
            const secondParagraph = aiParagraphs.filter((d, i)=>i===1);
            secondParagraph.html(d.data['Company Overview']);
            
        })
            
        });
    }, update=>{
        const image = update.select('.ai-info_badge-logo');
        image.attr("src", d=> d.image);
        const text = update.select('.ai-info_badge-text-content').select('div');
        text.html(d=> d.data.Company)
        update.style("display", "block");
        update.on("click", (event, d) => {
            // stop the propagation of the event
            // update the logo
            const logoWrapper = d3.select('.ai-info_card-logo-wrapper').select('img');
            logoWrapper.attr("src", d.image);

            // update the card ai-info_card-paragraph
            const paragraph = d3.select('.ai-info_card-paragraph');
            console.log(d)
            paragraph.html(d.data.Company);

            // update the card ai-info_card-paragraph inside the second ai-info_card-info-content
            const aiParagraphs = d3.selectAll('.ai-info_card-info-content').select('.ai-info_card-paragraph');
            // pick the second paragraph
            const secondParagraph = aiParagraphs.filter((d, i)=>i===1);
            secondParagraph.html(d.data['Company Overview']);
            
        })
    }, exit=>{
        exit.style("display", "none");
    });
}


const baseSelector = 'data'
const SELECTORS = {
    emailForm : `[${baseSelector}=email-form]`,
    name: `[${baseSelector}=name]`,
    email: `[${baseSelector}=email]`,
    signupInput: `[${baseSelector}=signup-input]`,
    successMessage: `[${baseSelector}=success-message]`,
    modalAIEmail: `[${baseSelector}=modal-ai-email]`,
    zoomPipWindow: `[${baseSelector}=zoom-pip-window]`,
    capabilityDropdown: `[${baseSelector}=capability-dropdown]`,
    sectorDropdown: `[${baseSelector}=sector-dropdown]`,
    regionDropdown: `[${baseSelector}=region-dropdown]`,
}

const dropDownEffect = (container = document, onItemSelected)=>{
    const dropdownItems = container.querySelectorAll('.ai-filter_dropdown-item');
    
    function getSelectedItems(){
        const selectedItems = []
        dropdownItems.forEach(item=>{
            const radioBorder = item.querySelector('.ai-filters_dropdown-radio-border');
            if(radioBorder.style.opacity === "1"){
                selectedItems.push(item);
            }
        });
        
        if(selectedItems.length === dropdownItems.length){
            onItemSelected([]);
            return;
        }

        onItemSelected(selectedItems.map(item=>item.querySelector('.ai-filters_dropdown-text').textContent));
    }

  // Add click event listener to each item
  dropdownItems.forEach(item => {
        // stop click propagation of .ai-filters_tooltip child element
    const tooltip = item.querySelector('.ai-filters_tooltip');
    if(tooltip){
        tooltip.addEventListener('click', function(e) {
        e.stopPropagation();
        });
    }

    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
      // Get the radio border element inside the clicked item
      const radioBorder = this.querySelector('.ai-filters_dropdown-radio-border');
      
      // Toggle the opacity
      if (radioBorder.style.opacity === "0") {
        radioBorder.style.opacity = 1;  // Change the opacity value as needed
        radioBorder.style.display = "flex";
        getSelectedItems();
      } else {
        radioBorder.style.opacity = 0;
        radioBorder.style.display = "none";
        getSelectedItems();
      }
    });
  });
}


const extractNodes = (dataLibrary)=>{
    /**
     * {
            "id": "Modelling Decision Making",
            "image": "Modelling Decision Making",
            "group": "Modelling Decision Making",
            "radius": 2,
            "root": true
        },

        
     */
    const graph = {
        nodes: [],
    }
    console.log(dataLibrary.companies)
    let data =  dataLibrary.technology;
    Object.keys(data).forEach((key, index)=>{
        const group = data[key]['Technology'];
        const node = {
            root: true,
            id: group,
            image: null,
            group,
        }
        graph.nodes.push(node);

        // generate the child nodes based on "AI x Climate Tech Companies"
        let companies = data[key]['AI x Climate Tech Companies'];
        // pick only the first 12 companies
        // companies = companies.slice(0, 12);
        let count = 0;
        node.children = [];
        companies.forEach((companyId)=>{
            const companyData = dataLibrary.companies[companyId];
            if(count < 100 && companyData && companyData['Logo'] && companyData['Logo'].length){
                const image = companyData['Logo'][0]['url'];
                const childNode = {
                    root: false,    
                    id: `${group}-${companyId}`,
                    data: companyData,
                    radius: 2,
                    image,
                    group,
                }
                graph.nodes.push(childNode);
                count += 1;
                node.children.push(companyId)
            }else{
               // console.log("Company not found", companyId)
            }
            
        })
    })

    return graph
}

const convertRegion = (regions)=>{
    const finalRegions = []
   for (const region of regions) {
        if(region === "Americas"){
            finalRegions.push(...['North America' ])
            continue;
        }
        finalRegions.push(region);
    }
    return finalRegions;
}