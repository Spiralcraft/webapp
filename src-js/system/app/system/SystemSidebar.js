import SidebarMenu from "@vfs/app/models/SidebarMenu.js";
import SidebarMenuItem  from "@vfs/app/models/SidebarMenuItem.js";

const sidebar=SidebarMenu(
  { items: 
     [ 
       SidebarMenuItem({ text:"Shell", path:"/shell"}),
     ] 
  }
);

export default sidebar;