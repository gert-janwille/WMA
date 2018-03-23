
export const log = (msg, color = `grey`, bold = 0, options = []) => {
  console.log(`%c${msg}`, `color:${color};${bold ? `font-weight:bold;` : null}${options}`);
};
