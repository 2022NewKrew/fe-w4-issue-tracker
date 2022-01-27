export const dispatchPopStateEvent = () => {
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
};

export const regSeparateBasedSlash = /(?=\/)/g;
