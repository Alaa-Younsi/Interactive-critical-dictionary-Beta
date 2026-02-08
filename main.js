/* OPEN SLIDE PANELS */
function openPanel(n){
  closePanels();
  document.getElementById("panel" + n).classList.add("active");
}

function closePanels(){
  document.querySelectorAll(".slide-panel").forEach(p => p.classList.remove("active"));
}

/* CLOSE WHEN CLICKING OUTSIDE */
document.addEventListener("click", function(e){
  if(!e.target.closest(".slide-panel") && !e.target.closest(".buttons button")){
    closePanels();
  }
});

/* HEADER SCROLL EFFECT */
const header = document.getElementById("header");
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleSubPanel() {
    const p = document.getElementById("subPanel");
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

// Close sub panel when clicking outside
document.addEventListener("click", function (event) {
    const sub = document.getElementById("subPanel");
    const triggerBtn = document.getElementById("subTriggerBtn");

    // If sub-panel doesn't exist or isn't open → do nothing
    if (!sub || sub.style.display !== "block") return;

    // If the click is NOT inside the panel AND NOT on the button → close it
    if (!sub.contains(event.target) && event.target !== triggerBtn) {
        sub.style.display = "none";
    }
});


function openContent(id) {
    // Hide all content panels
    document.querySelectorAll('.content-panel').forEach(panel => {
        panel.style.display = 'none';
    });

    // Show the selected one
    document.getElementById(id).style.display = 'block';
}


// Close content panels when clicking outside (no wrapper required)
document.addEventListener("click", function(e) {
  // get all content panels
  const panels = Array.from(document.querySelectorAll('.content-panel'));
  if (panels.length === 0) return;

  // check if any panel is visible (use computed style for robustness)
  const anyOpen = panels.some(p => window.getComputedStyle(p).display !== 'none');
  if (!anyOpen) return; // nothing open, nothing to do

  // If click was inside any content panel -> don't close
  if (e.target.closest('.content-panel')) return;

  // If click was on a button that opens content -> don't close
  // This matches elements with inline onclick="openContent('id')" or similar.
  if (e.target.closest('[onclick^="openContent("]')) return;

  // Otherwise hide all content panels
  panels.forEach(p => {
    p.style.display = 'none';
    // if you use CSS classes instead, you can remove the active class instead:
    // p.classList.remove('active');
  });
});