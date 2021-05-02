chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  contexts: ['link'],
  title: 'Copy link text',
  onclick: (_info, tab) => chrome.tabs.sendMessage(tab.id, null),
});
