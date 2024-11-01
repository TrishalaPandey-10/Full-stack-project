// script.js
document.addEventListener('DOMContentLoaded', function() {
    const classBlocks = document.querySelectorAll('.class-block');
  
    classBlocks.forEach(function(block) {
      block.addEventListener('click', function() {
        const classNumber = this.dataset.class;
        // Open the respective page for the clicked class
        openClassPage(classNumber);
      });
    });
  });
  
  function openClassPage(classNumber) {
    // Here, you can implement the logic to open the respective page for the given class number
    // For example, you can use window.open() or window.location.href to open a new page
    const pageUrl = `class${classNumber}.html`; // Assuming the page filenames follow this pattern
    window.open(pageUrl, '_blank'); // Open the page in a new tab/window
  }