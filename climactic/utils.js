const typeMap = {
      'image/jpeg': '.jpeg',
      'image/png': '.png',
      'image/svg+xml': '.svg',
    }

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

const userExists =() => {
    const users = JSON.parse(localStorage.getItem("USER_DATA")||"{}");
    return users && users.email;
}

const userEmailDisplayedAlready = () => {
    return localStorage.getItem("USER_EMAIL_DISPLAYED") !== null;
}

function checkBounds(d){
  if (d.x < 0) d.x = 0;
  if (d.x > width) d.x = width;
  if (d.y < 0) d.y = 0;
  if (d.y > width) d.y = height;
}

function updateSelection(d, nodes, dataLibrary,titleText, animate = false, filter = node => node.group === d.group && !node.root){
     if(!userExists()&& !userEmailDisplayedAlready()){
        const modalAIEmail = document.querySelector(SELECTORS.modalAIEmail);

        modalAIEmail.style += ";display:flex !important"
        modalAIEmail.style.opacity = 0
        modalAIEmail.style.transition = "opacity 2s"
        modalAIEmail.style.opacity = 1

        localStorage.setItem("USER_EMAIL_DISPLAYED", true);
        return 
     }

     // disable scrolling
    document.body.style.overflow = "hidden";

     // get the #ai-info-popup
    const popup = document.getElementById("ai-info-popup");
    // set the display to block
    popup.style += ";display:block !important";

    if(animate){
        // animate the opacity from 0 to 1
        popup.animate([{opacity: 0}, {opacity: 1}], {duration: 800, fill: "forwards"});
    }

    // update the title with the group. #ai-info-selected-section
    const title = document.getElementById("ai-info-selected-section");
    title.innerHTML = titleText;

    // close the popup when the close button is clicked. icon with class .ai-info_card-close-wrapper
    const close = document.querySelector(".ai-info_card-close-wrapper");

    close.addEventListener("click", (event) => {
        // animate the opacity from 1 to 0
        popup.animate([{opacity: 1}, {opacity: 0}], {duration: 400, fill: "forwards"});
        // set the display to none after the animation is done
        setTimeout(() => {
            popup.style.display = "none";
        }, 400);
        document.body.style.overflow = "auto";
    });   

    // get the items with the same group as d
    const relatedItems = nodes.filter(filter);


    const items = d3.selectAll('.ai-info_badge-content').data(relatedItems)
    
    items.join(enter=>{

    }, update=>{
        //select the wrapper
        update.select('.ai-info_badge-wrapper').attr('node-id',d=> d.id)
        update.attr('id',d=> d.id)

        // d3.select(update.node().parentNode).style('display', 'block')
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
            paragraph.html(d.data.Company);

            // company name
            const companyName = d3.select('.ai-info_card-company-name');
            companyName.html(`&nbsp;${d.data.Company}`);

            // update the link
            const link = d3.select('.ai-info_card-text-link');
            link.attr("href", d.data['Website']);
            link.attr("target", "_blank");
            link.html(d.data['Website']);

            // update technologia tags
            const technologiesTaglist = d3.select( d3.selectAll('.ai-info_tag-cap').node().parentNode)
            const technologies = d.data['AI Technology'].map(d=>({id:d, name: dataLibrary.technology[d]['Technology']}))
            technologiesTaglist.selectAll('div').data(technologies).join(enter=>{
                enter.append('div').html(d=>d.name).classed('ai-info_tag-cap', true)
            }, update=>{
                update.html(c=>c.name).on("click", (event, e)=>{
                    const matchingCompanies =  dataLibrary.technology[e.id]['AI x Climate Tech Companies'];
                    const filter = node=>matchingCompanies.includes(node.comanyId);
                    updateSelection(d, nodes, dataLibrary, e.name,false, filter)
                })
            }, exit=>{
                exit.remove()
            })


            // update usecases tags
            const usecasesTaglist = d3.select( d3.selectAll('.ai-info_tag-usecases').node().parentNode)
            const usecases = d.data['Use Case'].map(d=>({id:d, name: dataLibrary.usecase[d]['Use Case']}))
            usecasesTaglist.selectAll('div').data(usecases).join(enter=>{
                enter.append('div').html(d=>d.name).classed('ai-info_tag-usecases', true)
            }, update=>{
                update.html(c=>c.name).on("click", (event, e)=>{
                    const matchingCompanies =  dataLibrary.usecase[e.id]['AI x Climate Tech Companies'];
                    console.log('matchingCompanies', matchingCompanies)
                    const filter = node=>matchingCompanies.includes(node.comanyId);
                    updateSelection(d, nodes, dataLibrary, e.name,false, filter)
                })
            }, exit=>{
                exit.remove()
            })

            // sector tags
            const sectorTaglist = d3.select( d3.selectAll('.ai-info_tag-sec').node().parentNode);
            const sectors = d.data['Sector Tags'].map(d=>({id:d, name: dataLibrary.sector[d]['Sector']}))
            sectorTaglist.selectAll('div').data(sectors).join(enter=>{
                enter.append('div').html(d=>d.name).classed('ai-info_tag-sector', true) 
            }, update=>{
                update.html(d=>d.name).on("click", (event, e)=>{
                    const matchingCompanies =  dataLibrary.sector[e.id]['AI x Climate Tech Companies'];
                    const filter = node=>matchingCompanies.includes(node.comanyId);
                    updateSelection(d, nodes, dataLibrary, e.name,false, filter)
                })
            }, exit=>{
                exit.remove()
            })

            // regions
            const regionTaglist = d3.select( d3.selectAll('.ai-info_tag-reg').node().parentNode);
            const regions = d.data['Geography'].map(d=>({id:d, name: dataLibrary.geography[d]['Geography']}))
            regionTaglist.selectAll('div').data(regions).join(enter=>{
                enter.append('div').html(d=>d.name).classed('ai-info_tag-region', true)
            }
            , update=>{
                update.html(d=>d.name).on("click", (event, e)=>{
                    const matchingCompanies =  dataLibrary.geography[e.id]['AI x Climate Tech Companies'];
                    const filter = node=>matchingCompanies.includes(node.comanyId);
                    updateSelection(d, nodes, dataLibrary, e.name,false, filter)
                })
            }
            , exit=>{
                exit.remove()
            }
            )

              // update the card ai-info_card-paragraph inside the second ai-info_card-info-content
            const companyOverview = document.querySelector(SELECTORS.companyOverview)
            companyOverview.innerHTML = d.data['Company Overview'];  
            
            const followLink = document.querySelector('.ai-info_card-base-wrapper .ai-info_card-text-link-wrapper');
            const formContainer = document.querySelector('.ai-info-follow-form_component');
            formContainer.style.display = "none";

            followLink.addEventListener("click", (event) => {
                event.preventDefault();
                followCompany(d.data.Company);
                event.stopPropagation();
                }
            );
        })
        
       
    }, exit=>{
       exit.node().style.display = "none";
    })
    items.exit().each((d, i, nodes)=>{
        nodes[i].style.display = "none";
    })

    //   items.enter().append(()=>{
    //     console.log("appending")
    //     const firstItem = d3.select('.ai-info_badge-content');
    //     const clone = firstItem.node().cloneNode(true);
    //     clone.style.display = "block";
    //     const grid = document.querySelector('.ai-info_badge-grid')
    //     grid.append(clone)
    //     return clone;
    // })

    // select element with the node id and click it
    const selectedNode = document.querySelector(`[node-id="${d.id}"]`);
    selectedNode.click();
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
    sectorDropdown: `[${baseSelector}=sector-dropdown]`,
    usecaseDropdown: `[${baseSelector}=usecase-dropdown]`,
    technologyDropdown: `[${baseSelector}=technology-dropdown]`,
    geographyDropdown: `[${baseSelector}=geography-dropdown]`,
    companyOverview: `[${baseSelector}=company-overview]`,
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

        onItemSelected(selectedItems.map(item=>decodeURIComponent(item.querySelector('.ai-filters_dropdown-text').textContent)));
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
    const keys =  [{name:'Sector',keyName:"Sector", data: dataLibrary.sector}, 
        {name:'Technology',keyName:"AI Technology", data: dataLibrary.technology}, 
        {name:'Use Case',keyName:"Use Case", data: dataLibrary.usecase}, 
        {name:'Geography',keyName:"Geography" ,data: dataLibrary.geography}]
    
    for(const {name, keyName, data} of keys){
        const graph = {
                nodes: [],
            }

    Object.keys(data).forEach((key, index)=>{
        const group = data[key][name];
        const node = {
            root: true,
            id: group,
            image: null,
            group,
        }
        graph.nodes.push(node);

        // generate the child nodes based on "AI x Climate Tech Companies"
        let companies = data[key]['AI x Climate Tech Companies'];
   
        node.children = [];
        let count = 0;
        
        if(!companies)return;

        companies.forEach((companyId)=>{
            const companyData = dataLibrary.companies[companyId];
            if( companyData && companyData['Logo'] && companyData['Logo'].length){
                const logo = companyData['Logo'];
                const type = logo[0].type;
                const ext = typeMap[type]

                const childNode = {
                    root: false,    
                    id: `${group}-${companyId}`,
                    comanyId: companyId,
                    data: companyData,
                    radius: 2,
                    image: `https://cdn.jsdelivr.net/gh/blessochampion/image-deployer/images/${companyId + ext}` ,
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
    dataLibrary.dataGrouping[keyName] = graph;
    }
}