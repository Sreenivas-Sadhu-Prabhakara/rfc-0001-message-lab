document.querySelector('#share').addEventListener('click', async () => {
  const text = "Message Lab \u2014 Understand why a message needs an address and a size limit. Try this free interactive RFC 1 lab: https://sreenivas-sadhu-prabhakara.github.io/rfc-0001-message-lab/";
  try { await navigator.clipboard.writeText(text); document.querySelector('#share-status').textContent='Copied. Ready to share wherever you choose.'; }
  catch { document.querySelector('#share-status').textContent=text; }
});
