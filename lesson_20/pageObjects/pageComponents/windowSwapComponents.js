const BaseComponents = require('./baseComponents.js')


class WindowSwapComponents extends BaseComponents {
    constructor() {
        super();
        
    }

    async switchToLastWindow() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
    }
}
const windowSwapComponents = new WindowSwapComponents();

module.exports = { windowSwapComponents }