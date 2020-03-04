"use strict";

const tree = [

    {
      name: "Desktop (Public)",       
      url: "https://www.google.com",  
      type: "folder",                 
      tabs: [
          {
              name: "Programs",    
              type: "file",    
              url: "https://www.google.com"  
          },
          {
              name: "Photos",  
              type: "file",     
              url: "https://www.google.com"  
          },
          {
              name: "Other",  
              type: "file",    
              url: "https://www.google.com"  
          }                          
      ]
    }, 

    {
        name: "Program Files (32-bit)",       
        url: "https://www.google.com",
        type: "folder", 
        tabs: [
            {                                                 
                name: "ProductName",  
                type: "file",     
                url: "https://www.google.com" 
            },
            {
                name: "Common Files",  
                type: "file",     
                url: "https://www.google.com" 
            },
            {
                name: "Microsoft Office", 
                type: "file",      
                url: "https://www.google.com"
            }
        ]
    },

    {
        name: "ProgramData",       
        url: "https://www.google.com",
        type: "folder", 
        tabs: [
            {
                name: "Publisher",     
                type: "file",                     
                url: "https://www.google.com"
            },
            {
                name: "InstallMate",  
                type: "file",     
                url: "https://www.google.com" 
            }
        ]
    },
];

function addList(sourceLevel) {
	sourceLevel = sourceLevel >= 0 ? tree[sourceLevel].tabs : tree;
	const elem = event.target;
  let currentUl = elem.parentNode.querySelector(':scope > ul');
  let list = currentUl.querySelectorAll('li');
  
  if (list.length === 0) {
  	for (let i=0; i<sourceLevel.length; i++) {
			let isTabs = sourceLevel[i].tabs && sourceLevel[i].tabs.length || 0;
      if (isTabs > 0) {
      	currentUl.insertAdjacentHTML("beforeend", 
        `<li class="firstLevel">
          <button class="addTabs" onclick="addList(${i})">+</button>
          ${sourceLevel[i].name}
          <ul></ul>
        </li>`);
      } else {
        currentUl.insertAdjacentHTML("beforeend", 
        `<li class="firstLevel">
          <a href="${sourceLevel[i].url}">${sourceLevel[i].name}</a>
          <ul></ul>
        </li>`);
      }
    }
    
    if (elem.innerHTML === '+') {
    	elem.innerHTML = '-';
    }    
  } else {
  		currentUl.innerHTML = '';
      if (elem.innerHTML === '-') {
        elem.innerHTML = '+';
      }
  }
}