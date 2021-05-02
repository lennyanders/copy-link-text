let linkText;
addEventListener('contextmenu', (event) => {
  linkText = event.target?.textContent?.trim();
});

chrome.runtime.onMessage.addListener(() => {
  const textarea = document.createElement('textarea');
  textarea.value = linkText;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
});
