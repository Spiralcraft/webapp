import Splash from '@vfs/app/frame/Splash.svelte';
import MainSection from "@vfs/app/MainSection.js";
import AdminModule from '@vfs/app/admin/AdminModule.js';
import AdminSection from '@vfs/app/admin/AdminSection.js';
import DashModule from '@vfs/app/DashModule.js';
import baseProps from '@vfs/spiralcraft/appshell/noui-a/model.props.js';
import SidebarMenu from "@vfs/app/models/SidebarMenu.js";
import SidebarMenuItem from "@vfs/app/models/SidebarMenuItem.js";
import FeatherIconSet from "@vfs/app/icons/FeatherIconSet.js";

import { setup } from 'svelte-match-media';

setup({
  xs: 'screen and (max-width: 575px)',
  sm: 'screen and (min-width: 576px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 992px)',
  xl: 'screen and (min-width: 1200px)',
  xxl: 'screen and (min-width: 1400px)',
});

export default 
{
  ...baseProps,
  PreInitDisplay: Splash,
  defaultModules: [...baseProps.defaultModules, DashModule, AdminModule],
  defaultSections:     
    { main: MainSection
    , admin: AdminSection
    },
  globalSidebar: SidebarMenu
      ({ items: 
           [ SidebarMenuItem({ icon:"home", text:"Home", path:"/"})
           ] 
      }),
  icons: FeatherIconSet,
};