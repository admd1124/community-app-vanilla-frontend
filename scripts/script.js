var mySidebar = document.querySelector(".sidebar");
var sidebar = new coreui.Sidebar(mySidebar);
const sidebarButton = document.querySelector(".sidebar-button");
sidebarButton.addEventListener("click", () => {
  sidebar.toggle();
});
