import AppSection from "@vfs/app/AppSection.js";
import systemSidebar from '@vfs/app/system/SystemSidebar.js';


const props={
  name: "main",
  sidebarMenus: [systemSidebar]
}
export default AppSection(props);