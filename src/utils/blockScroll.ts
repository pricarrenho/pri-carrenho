export const enableBodyScroll = () => {
  document.querySelector("body")?.classList.remove("blocked");
};

export const disableBodyScroll = () => {
  document.querySelector("body")?.classList.add("blocked");
};
