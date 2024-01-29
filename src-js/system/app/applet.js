import App from '@vfs/app/App.svelte';
import modelProps from './model.props.js'
import custom from './app.custom.js'
import config from './app.props.js'

const container = document.querySelector(".system-applet-container");

const specifiedView = container.getAttribute("data-view");
const viewPropsAttr = container.getAttribute("data-view-props");
const actualView = specifiedView?specifiedView:"system-main";

console.log("view: "+actualView);

const apiOptions={ baseURL: "/system/api" };

const app = new App({
	target: document.querySelector(".system-applet-container"),
	props: {
		name: 'system-app',
		basePath: '/system/app',
    verboseConsole: true,
    view: actualView,
    viewProps: viewPropsAttr?JSON.parse(viewPropsAttr):{},
    ...modelProps,
    ...config,
    apiOptions,
    custom,
	}
});

export default app;