import {inspectMessage} from './core.mjs';
import './share.mjs';
const $=id=>document.getElementById(id);
function update(){
  try {
    if (!$('destination').value.trim()||!$('link').value.trim()) throw new Error('Enter both destination and link values.');
    const r=inspectMessage($('message').value,Number($('destination').value),Number($('link').value),$('trace').checked);
    $('error').textContent=''; $('bits').textContent=r.bodyBits.toLocaleString();
    $('fields').replaceChildren(...r.fields.map((bits,i)=>{const el=document.createElement('div'),label=document.createElement('small');label.textContent=['Destination · 5','Link · 8','Trace · 1','Spare · 2'][i];el.append(label,document.createTextNode(bits));return el;}));
    $('capacity').style.width=`${Math.min(100,r.bodyBits/8080*100)}%`;
    $('status').textContent=r.valid?`${r.bytes} bytes. ${r.remainingBits.toLocaleString()} body bits remaining.`:`Too large: ${(-r.remainingBits).toLocaleString()} bits over the historical body limit.`;
    $('link-use').textContent=r.linkUse;
  } catch(e){$('error').textContent=e.message;$('status').textContent='Correct the input to inspect this message.';$('bits').textContent='—';$('fields').replaceChildren();$('capacity').style.width='0%';$('link-use').textContent='';}
}
for(const id of ['message','destination','link','trace'])$(id).addEventListener('input',update);
$('limit').addEventListener('click',()=>{$('message').value='A'.repeat(1010);update();});
$('reset').addEventListener('click',()=>{$('message').value='Hello, connected world.';$('destination').value='5';$('link').value='1';$('trace').checked=false;update();});
update();
