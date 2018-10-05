"use strict";let e=!1,t={login:null,short_login:null,hashed_password:null},n=[],a=[],o=0,d=0,s=[],r=[],l=0,c=[],u=!1,p=!1,m=[];const h=e=>document.getElementById(e),f=e=>document.createElement(e);function g(e,t){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}function v(e){let t=e.trim();return t.endsWith("@epitech.eu")||/^\D+_\D$/.test(t)||"ramassage-tek"==t||(t+="@epitech.eu"),t}function L(e){let t=e;return t.endsWith("@epitech.eu")&&(t=t.slice(0,-11)),t}function w(e){e.preventDefault(),e.stopPropagation()}function E(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function y(e,t){for(E(e);t.childNodes.length;)e.appendChild(t.childNodes[0])}function C(e,t){E(e),e.appendChild(t)}function k(e,t){E(e),e.appendChild(document.createTextNode(t))}function N(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b(e,t){let n=e+" - BLIH Web";history.pushState(null,n,t),document.title=n}function T(){localStorage.getItem("savedLogin");localStorage.removeItem("savedLogin");let e=h("login-user");e.value="",e.focus(),h("login-pass").value="",h("login-form").removeChild(h("forget-me"))}function S(e){localStorage.setItem("savedLogin",e)}function x(){const e=localStorage.getItem("savedLogin");let t=h("login-user"),n=h("login-pass");if(e){t.value=e,n.focus();let a=f("a");a.id="forget-me",a.addEventListener("click",e=>{e.preventDefault(),T()}),a.innerHTML="Forget my login",h("login-form").insertBefore(a,h("login-submit"))}else t.focus()}function H(e,t){k(h("modal-title"),t),u.open("#modal-"+e)}function I(e){u.close("#modal-"+e)}function D(){u.current&&u.close("#"+u.current.id)}function A(e){let t=e.target.value,a=h("act-repo-confirmdelete");t==n[u.current.dataset.repoId].name?a.disabled=!1:a.disabled=!0}function M(){e||document.documentElement.classList.remove("act-disabled")}function _(t){t?(_.count++,e=!0,document.documentElement.classList.add("loading"),document.documentElement.classList.add("act-disabled")):(_.count--,_.count<=0&&(_.count=0,e=!1,document.documentElement.classList.remove("loading"),setTimeout(M,400)))}function R(){d=Math.floor(Date.now()/1e3)}function B(){xe(d,60)&&(localStorage.setItem("autologout",!0),Be())}function O(e,t){var n=h("user-info");n.className=e,n.innerHTML=t||""}function P(e){!1===e?O("hidden",null):O("bg-red",e)}function j(e){!1===e?O("hidden",null):O("bg-green",e)}function F(e){n=[];for(let t in e)(e[t].name||e[t].uuid)&&n.push({name:e[t].name,uuid:e[t].uuid,recent:a.includes(e[t].name)})}function U(){let e=document.createDocumentFragment();for(var t=0;t<n.length;t++){let a=n[t],o=f("li");o.dataset.id=t,""===a.name?o.classList.add("no-name"):"BITE"==a.name.toUpperCase()&&o.classList.add("bite"),a.recent&&o.classList.add("recent");let d=f("a");d.tabIndex=0;let s,r=f("span");s=""===a.name?document.createTextNode(" "):document.createTextNode(a.name),r.appendChild(s),d.appendChild(r),o.appendChild(d);let l=f("button"),i=f("i");i.className="i-cross",l.appendChild(i),o.appendChild(l),e.appendChild(o)}return e}function X(){let e=U(),t=h("repolist");E(t),t.appendChild(e),0==n.length?t.classList.add("empty"):t.classList.remove("empty"),o=Math.floor(Date.now()/1e3),k(h("repo-total-count"),"Total: "+n.length+" repositor"+(1==n.length?"y":"ies"))}function Y(e){F(e),X()}function W(){_(!0),k(h("repo-total-count"),"Loading..."),ee("repo/list").then(e=>{Y(e.data),_(!1)})}function q(e){s=[];for(let t in e)(e[t].name||e[t].content)&&s.push({name:e[t].name,content:e[t].content,recent:r.includes(e[t].name)})}function J(){let e=document.createDocumentFragment();for(var t=0;t<s.length;t++){let n=s[t],a=f("li");a.dataset.id=t,n.recent&&a.classList.add("recent");let o,d=f("a"),r=f("span");o=""===n.name?document.createTextNode(" "):document.createTextNode(n.name),r.appendChild(o),d.appendChild(r),a.appendChild(d);let l=f("button"),i=f("i");i.className="i-cross",l.appendChild(i),a.appendChild(l),e.appendChild(a)}return e}function K(e){q(e),G()}function G(){let e=J(),t=h("sshlist");E(t),t.appendChild(e),0==s.length?t.classList.add("empty"):t.classList.remove("empty"),l=Math.floor(Date.now()/1e3),k(h("ssh-total-count"),"Total: "+s.length+" SSH key"+(1==s.length?"":"s"))}function V(){_(!0),k(h("ssh-total-count"),"Loading..."),ee("ssh/list").then(e=>{K(e.data),_(!1)})}function $(e){null!==e&&"object"==typeof e?e.error?"sshkey already exists"==e.error?P("An SSH key with this name already exists."):e.error.endsWith("doesn't exists")?P(e.error.replace("doesn't exists","does not exist.")):"No spaces allowed"==e.error?P("Spaces are not allowed."):"No slash allowed"==e.error?P("Slashes are not allowed."):P(e.error):e.message?P(e.message):P(e):P(e)}function z(e){m.push(e)}function Q(e){m=m.filter(t=>t!==e)}function Z(){let e=m.length;if(e>0){for(let t=0;t<e;t++)m[t].abort();m.length=0,_.count=1,_(!1)}}function ee(e,n,a){let o={user:t.login},d=new jsSHA("SHA-512","TEXT");d.setHMACKey(t.hashed_password,"TEXT"),d.update(t.login),void 0!==a&&(o.data=a,d.update(JSON.stringify(a,null,4))),o.signature=d.getHMAC("HEX");let s="signed_data="+JSON.stringify(o);return void 0!==n&&(s+="&resource="+n),R(),new Promise((t,n)=>{let a=new XMLHttpRequest;a.onload=(()=>{Q(a),t({ok:200==a.status,code:a.status,data:a.response})}),a.onerror=(()=>{Z(),P("A network error occured")}),a.ontimeout=(()=>{Z(),P("A network timeout occured. Please check your connection and try again")}),a.open("POST","/api/"+e,!0),a.responseType="json",a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),a.send(s),z(a)})}function te(e){let t=f("li"),n=f("input");n.className="acl-user-input",n.value=L(e.user),n.placeholder=L(e.user)?L(e.user):"User";let a=f("span"),o=f("span");o.className="acl-perms";let d=f("label"),s=f("input"),r=f("span");s.type="checkbox",s.value="r",r.appendChild(document.createTextNode("r")),d.appendChild(s),d.appendChild(r);let l=f("label"),i=f("input"),c=f("span");i.type="checkbox",i.value="w",c.appendChild(document.createTextNode("w")),l.appendChild(i),l.appendChild(c);let u=f("label"),p=f("input"),m=f("span");p.type="checkbox",p.value="a",m.appendChild(document.createTextNode("a")),u.appendChild(p),u.appendChild(m),e.r&&(s.checked=!0),e.w&&(i.checked=!0),e.a&&(p.checked=!0),o.appendChild(d),o.appendChild(l),o.appendChild(u);let h=f("button");return h.className="btn acl-rem bg-red",h.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();let t=e.target.parentElement.parentElement,n=t.parentElement;n.removeChild(t),0==n.childNodes.length&&n.classList.add("empty"),oe()}),h.appendChild(document.createTextNode("-")),t.appendChild(n),a.appendChild(o),a.appendChild(h),t.appendChild(a),t}function ne(){let e=document.createDocumentFragment(),t=f("ul");t.className="acl-list";let n=f("p"),a=f("i");a.className="i-users",n.appendChild(a);let o=f("span");o.appendChild(document.createTextNode("ACL")),n.appendChild(o),e.appendChild(n);let d=f("button");d.className="btn acl-add bg-green",d.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();let t=e.target.parentElement.parentElement.childNodes[1],n=te({user:"",r:!0,w:!1,a:!1});t.appendChild(n),t.classList.remove("empty"),n.childNodes[0].focus(),oe()}),d.title="Add an ACL",d.appendChild(document.createTextNode("+")),n.appendChild(d);const s=c.length;for(let e=0;e<s;e++)if(c[e].r||!c[e].w||!c[e].a){let n=te(c[e]);t.appendChild(n)}return 0==s?t.classList.add("empty"):t.classList.remove("empty"),e.appendChild(t),e}function ae(e){c=[];for(let t in e)c.push({user:L(t),r:e[t].indexOf("r")>-1,w:e[t].indexOf("w")>-1,a:e[t].indexOf("a")>-1})}function oe(){if("modal-repo-create"==u.current.id)return;let e=h("repo-view-acl-container"),t=h("act-repo-saveacl"),n=e.getElementsByTagName("li");if(n.length!=c.length)return e.dataset.draft=!0,void(t.disabled=!1);for(let a=0;a<n.length;a++){let o=n[a].childNodes[1].childNodes[0];if(L(n[a].childNodes[0].value)!=c[a].user||o.childNodes[0].childNodes[0].checked!=c[a].r||o.childNodes[1].childNodes[0].checked!=c[a].w||o.childNodes[2].childNodes[0].checked!=c[a].a)return e.dataset.draft=!0,void(t.disabled=!1)}e.dataset.draft=!1,t.disabled=!0}function de(e){let t=e.childNodes[1].getElementsByTagName("li"),n=[];for(let e of t){let t=e.childNodes[0].value,a=e.childNodes[1].childNodes[0],o=a.childNodes[0].childNodes[0].checked,d=a.childNodes[1].childNodes[0].checked,s=a.childNodes[2].childNodes[0].checked;L(t).length>0&&(o||d||s)&&n.push({user:L(t),r:o,w:d,a:s})}return n}function se(e){let t=e.childNodes[1].getElementsByTagName("li"),n=[];for(let e of t){let t=e.childNodes[0].value,a=e.childNodes[1].childNodes[0],o=a.childNodes[0].childNodes[0].checked,d=a.childNodes[1].childNodes[0].checked,s=a.childNodes[2].childNodes[0].checked;L(t).length>0&&(o||d||s)&&n.push({user:L(t),r:o,w:d,a:s})}for(let e of c)0==n.filter(t=>L(t.user)==L(e.user)).length&&n.push({user:L(e.user),r:!1,w:!1,a:!1});for(let e=0;e<n.length;e++){let t=n[e];c.filter(e=>L(e.user)==L(t.user)&&e.r==t.r&&e.w==t.w&&e.a==t.a).length>0&&n.splice(e,1)}return n}function re(e){let t=[];for(let n of e)n.user.length>0&&(n.r||n.w||n.a)&&t.push({user:L(n.user),r:n.r,w:n.w,a:n.a});return t}function le(e,t){_(!0);let n=[];for(let a of t){let t=[];a.r&&t.push("r"),a.w&&t.push("w"),a.a&&t.push("a");let o={acl:t.join(""),user:v(a.user)};n.push(ee("repo/setacl",e,o).then(e=>{if(!e.ok)throw e.data}).catch(e=>{throw e}))}return Promise.all(n).then(e=>{_(!1)}).catch(e=>{throw _(!1),e})}function ie(){let e=document.createDocumentFragment(),t=f("p"),n=f("i"),a=f("span"),o=document.createTextNode("ACL"),d=document.createTextNode("Loading ACL...");return n.className="i-users",t.appendChild(n),a.appendChild(o),t.appendChild(a),e.appendChild(t),e.appendChild(d),e}function ce(e){let t=h("modal-repo-view");k(h("repo-view-creation_date"),"Loading...");let a=ie(),o=h("repo-view-acl-container");o.classList.add("acl-loading"),C(o,a),t.dataset.repoId=e,H("repo-view",n[e].name),k(h("repo-view-uuid"),n[e].uuid)}function ue(e){h("modal-empty-repo-view").dataset.repoId=e,H("empty-repo-view","(no name)"),k(h("empty-repo-view-uuid"),n[e].uuid)}function pe(e){let t=document.createDocumentFragment(),n=moment.unix(e),a=n.format("MMMM D YYYY HH:mm")+" ",o=n.fromNow();"in a few seconds"==o&&(o="a few seconds ago"),t.appendChild(document.createTextNode(a));let d=f("span");return d.appendChild(document.createTextNode(o)),t.appendChild(d),t}function me(e){let t=n[e];if(!t.name)return ue(e),void b("(no name)","/repositories/_");ce(e),b(t.name,"/repositories/"+encodeURIComponent(t.name)),g(a,t.name);let o=h("repo-view-acl-container");o.dataset.draft=!1,t.creation_time?C(h("repo-view-creation_date"),pe(t.creation_time)):(_(!0),ee("repo/getinfo",t.name).then(a=>{if(!a.ok)return 404==a.code?(Z(),H("repo-deleted",t.name),W()):$(a.data),void _(!1);a.data.uuid!=n[e].uuid&&(n[i].uuid=a.data.uuid),n[e].creation_time=a.data.creation_time,C(h("repo-view-creation_date"),pe(a.data.creation_time)),_(!1)})),_(!0),ee("repo/getacl",t.name).then(e=>{if(!e.ok&&"No ACLs"!=e.data.error)return 404==e.code?(Z(),H("repo-deleted",t.name),W()):$(e.data),void _(!1);404==e.code?ae(null):ae(e.data),o.classList.remove("acl-loading"),C(o,ne()),oe(),_(!1);let n=h("modal-close");n.focus(),n.blur()})}function he(){let e=h("repo-create-name").value;h("repo-view-acl-container").childNodes[1];h("act-repo-create").blur(),P(!1),e?e.length>84?P("The name cannot exceed 84 characters."):(_(!0),ee("repo/create",null,{name:e,type:"git"}).then(t=>{if(!t.ok)return $(t.data),void _(!1);a.push(e),c.length=0,_(!1);let n=se(h("repo-create-acl-container"));le(e,n).then(t=>{n.length>0?j("The repository <b>"+N(e)+"</b> has been created with the specified ACL."):j("The repository <b>"+N(e)+"</b> has been created without ACL."),I("repo-create"),W()}).catch(e=>{$(e),I("repo-create"),W()})})):P("The name cannot be empty.")}function fe(){_(!0);let e=u.current.dataset.repoId,t=n[e];ee("repo/delete",t.name?t.name:t.uuid).then(a=>{if(!a.ok)return $(a.data),void _(!1);n.splice(e,1),j("The repository <b>"+N(t.name)+"</b> has been deleted."),I("repo-delete"),X(),_(!1)})}function ge(e){h("modal-repo-delete").dataset.repoId=e;let t=n[e];H("repo-delete",t.name),b("Delete "+t.name,"/repositories/"+encodeURIComponent(t.name)+"/delete"),k(h("repo-delete-name"),t.name);let a=h("repo-delete-confirmname");a.value="",a.focus(),h("act-repo-confirmdelete").disabled=!0}function ve(e){h("modal-empty-repo-delete").dataset.repoId=e;n[e];H("empty-repo-delete","(no name)"),b("Delete empty repository","/repositories/_/delete"),k(h("empty-repo-delete-uuid"),n[e].uuid)}function Le(){_(!0);let e=u.current.dataset.sshId,t=s[e];ee("ssh/delete",t.name).then(n=>{if(!n.ok)return $(n.data),void _(!1);s.splice(e,1),j("The SSH key <b>"+N(t.name)+"</b> has been deleted."),I("ssh-delete"),G(),_(!1)})}function we(e){h("modal-ssh-delete").dataset.sshId=e;let t=s[e];H("ssh-delete",t.name),b("Delete "+t.name,"/sshkeys/"+encodeURIComponent(t.name)+"/delete"),k(h("ssh-delete-name"),t.name)}function Ee(e){let t=h("ssh-upload-input");t.value="",H("ssh-upload","Upload an SSH key"),t.focus(),b("Upload an SSH key","/sshkey-upload")}function ye(){h("act-ssh-upload").blur();let e=h("ssh-upload-input").value;e.length<50&&console.log("TOO SHORT KEY! probably not a key"),_(!0),ee("ssh/upload",!1,{sshkey:encodeURIComponent(e).replace(/\%2F/g,"/")}).then(t=>{if(!t.ok)return $(t.data),void _(!1);_(!1);let n=e.split(" "),a=n[n.length-1];r.push(a),j("The SSH key was successfully uploaded."),I("ssh-upload"),V()})}function Ce(){H("repo-create","Create a repository"),h("repo-create-name").value="",h("repo-create-name").focus(),ae({"ramassage-tek":"r"}),C(h("repo-create-acl-container"),ne()),b("Create a repository","/repository-create")}function ke(e){E(h("ssh-view-content")),h("modal-ssh-view").dataset.sshId=e;let t=s[e];H("ssh-view",t.name),b(t.name,"/sshkeys/"+encodeURIComponent(t.name)),k(h("ssh-view-content"),t.content)}function Ne(){return new Promise((e,t)=>{let n=new XMLHttpRequest;n.onload=(()=>{e({ok:200==n.status,code:n.status,data:n.responseText})}),n.onerror=(()=>{Z(),t({code:0,data:n.responseText})}),n.open("GET","/dom.html",!0),n.send()})}function be(){_(!0);let e=f("script");e.onload=(()=>{u=new VanillaModal.default({loadClass:"modal-ok",onBeforeOpen:()=>{R(),document.activeElement.blur(),P(!1)},onBeforeClose:()=>{p||(R(),"modal-repo-view"!=u.current.id&&"modal-empty-repo-view"!=u.current.id&&"modal-repo-delete"!=u.current.id&&"modal-repo-deleted"!=u.current.id&&"modal-empty-repo-delete"!=u.current.id&&"modal-repo-create"!=u.current.id||(Z(),b("Repositories","/repositories")),"modal-ssh-view"!=u.current.id&&"modal-ssh-delete"!=u.current.id&&"modal-ssh-upload"!=u.current.id||b("SSH keys","/sshkeys"))}}),_(!1)}),e.async=!0,e.src=SCRIPT_MODAL_PATH,document.head.appendChild(e),_(!0);let t=f("script");t.onerror=(()=>{P("An error ocurred. Please reload the page.")}),t.onload=(()=>{_(!1)}),t.async=!0,t.src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",document.head.appendChild(t)}function Te(e){if("span"==e.target.tagName.toLowerCase()){let t=e.target.parentElement.parentElement;t.classList.remove("recent"),ke(t.dataset.id)}else if("a"==e.target.tagName.toLowerCase()){let t=e.target.parentElement;t.classList.remove("recent"),ke(t.dataset.id)}else if("button"==e.target.tagName.toLowerCase()){we(e.target.parentElement.dataset.id)}else if("i"==e.target.tagName.toLowerCase()){we(e.target.parentElement.parentElement.dataset.id)}}function Se(e){if("span"==e.target.tagName.toLowerCase()){let t=e.target.parentElement.parentElement;t.classList.remove("recent"),me(t.dataset.id)}else if("a"==e.target.tagName.toLowerCase()){let t=e.target.parentElement;t.classList.remove("recent"),me(t.dataset.id)}else if("button"==e.target.tagName.toLowerCase()){let t=e.target.parentElement;""==n[t.dataset.id].name?ve(t.dataset.id):ge(t.dataset.id)}else if("i"==e.target.tagName.toLowerCase()){let t=e.target.parentElement.parentElement;""==n[t.dataset.id].name?ve(t.dataset.id):ge(t.dataset.id)}}function xe(e,t){return e<Math.floor(Date.now()/1e3)-60*t}function He(e){e.target.blur(),P(!1);let t=h("main");if("repositories"==e.target.dataset.nav){if(t.classList.contains("repositories"))return void W();t.classList.remove("sshkeys"),t.classList.add("repositories"),b("Repositories","/repositories"),(0==n.length||xe(o,10))&&W()}else{if(t.classList.contains("sshkeys"))return void V();t.classList.remove("repositories"),t.classList.add("sshkeys"),b("SSH keys","/sshkeys"),(0==s.length||xe(l,10))&&V()}}function Ie(e){p=!0;const t=u.current.dataset.repoId;I("repo-view"),p=!1,setTimeout(()=>{ge(t)},220)}function De(e){p=!0;const t=u.current.dataset.repoId;I("empty-repo-view"),p=!1,setTimeout(()=>{ve(t)},200)}function Ae(e){p=!0;const t=u.current.dataset.sshId;I("ssh-view"),p=!1,setTimeout(()=>{we(t)},220)}function Me(){let e=h("act-ssh-upload");h("ssh-upload-input").value.length<50?e.disabled=!0:e.disabled=!1}function _e(){document.body.classList.add("logged-in");let e=h("header"),a=f("button");a.title="Logout",a.innerHTML='<i class="i-logout"></i>',a.addEventListener("click",e=>{Z(),P(!1),_(!0),window.location.href="/"});let o=f("span");o.id="logged-in-user",k(o,t.short_login),e.appendChild(a),e.appendChild(o),h("brand").addEventListener("click",e=>{e.preventDefault(),e.currentTarget.blur()}),h("refresh-repolist").addEventListener("click",e=>{document.activeElement.blur(),W()}),h("refresh-sshlist").addEventListener("click",e=>{document.activeElement.blur(),V()}),h("act-repo-saveacl").addEventListener("click",e=>{h("act-repo-saveacl").blur();let t=h("repo-view-acl-container");"true"==t.dataset.draft&&le(n[u.current.dataset.repoId].name,se(t)).then(e=>{c=de(t),C(t,ne()),j("The specified ACL have been applied."),t.dataset.draft=!1,h("act-repo-saveacl").disabled=!0}).catch(e=>{$(e)})}),h("act-repo-cancelediting").addEventListener("click",e=>{C(h("repo-view-acl-container"),ne()),oe()}),h("act-repo-delete").addEventListener("click",Ie),h("act-empty-repo-delete").addEventListener("click",De),h("act-repo-confirmdelete").addEventListener("click",fe),h("act-empty-repo-confirmdelete").addEventListener("click",fe),h("act-repo-create").addEventListener("click",he),h("act-ssh-delete").addEventListener("click",Ae),h("act-ssh-confirmdelete").addEventListener("click",Le),h("repo-delete-confirmname").addEventListener("input",A),h("modal-close").addEventListener("keydown",e=>{13==e.keyCode&&D()}),h("modal-close").addEventListener("click",e=>{e.target.blur()});let d=h("ssh-upload-input");d.addEventListener("input",Me),["dragenter","dragover","dragleave","drop"].forEach(e=>{d.addEventListener(e,w)}),["dragenter","dragover"].forEach(e=>{d.addEventListener(e,e=>{d.classList.add("dropping")})}),["dragleave","drop"].forEach(e=>{d.addEventListener(e,e=>{d.classList.remove("dropping")})}),d.addEventListener("drop",e=>{let t=e.dataTransfer.files[0];if(!t)return void console.log("NO FILE DETECTED");_(!0);let n=new FileReader;n.onload=(e=>e=>{d.value=e.target.result.trim(),Me(),_(!1)})(),n.readAsText(t)}),h("act-ssh-upload").addEventListener("click",ye),h("repo-view-acl-container").addEventListener("input",oe);let s=document.getElementsByClassName("btn repo-create");for(let e of s)e.addEventListener("click",e=>{Ce()});let r=document.getElementsByClassName("btn ssh-upload");for(let e of r)e.addEventListener("click",e=>{Ee()});let l=document.getElementsByTagName("nav")[0];for(let e of l.childNodes)e.addEventListener("click",e=>{e.preventDefault(),He(e)});let i=h("main"),p=h("new-main");y(i,p),document.body.removeChild(p),i.classList.add("repositories"),h("repolist").addEventListener("click",Se),h("repolist").addEventListener("keydown",e=>{13==e.keyCode&&Se(e)}),h("sshlist").addEventListener("click",Te),h("sshlist").addEventListener("keydown",e=>{13==e.keyCode&&Te(e)}),window.addEventListener("popstate",D),window.addEventListener("popstate",e=>{let t=h("main");"/repositories"==window.location.pathname&&t.classList.contains("sshkeys")?(t.classList.remove("sshkeys"),t.classList.add("repositories"),b("Repositories","/repositories"),e.stopPropagation()):"/sshkeys"==window.location.pathname&&t.classList.contains("repositories")&&(t.classList.remove("repositories"),t.classList.add("sshkeys"),b("SSH keys","/sshkeys"),e.stopPropagation())})}function Re(){_(!0),P(!1),h("login-submit").blur();let e=h("login-user").value,n=h("login-pass").value;if(e.length<5||n.length<3)return void setTimeout(()=>{P("Invalid username/password"),_(!1)},500);let a=new jsSHA("SHA-512","TEXT");a.update(n),n=null,t.login=v(e),t.hashed_password=a.getHash("HEX"),ee("repo/list").then(n=>{if(!n.ok&&404!=n.code)return 401==n.code?P("Invalid username/password"):$(n.data),t.login=!1,t.hashed_password=!1,void _(!1);t.short_login=L(e),S(e),Ne().then(e=>{if(!e.ok)return P("An error occured."),void _(!1);document.getElementsByTagName("footer")[0].insertAdjacentHTML("beforebegin",e.data),be(),_e(),b("Repositories","/repositories"),document.body.scrollTop=0,document.documentElement.scrollTop=0,Y(n.data),setInterval(B,6e4),_(!1)})})}function Be(){Z(),_(!0),P(!1),window.location.href="/"}function Oe(){if(_.count=0,h("login-form").addEventListener("submit",t=>{t.preventDefault(),e||Re()}),window.addEventListener("keydown",e=>{13==e.keyCode&&("repo-delete-confirmname"==e.target.id?h("act-repo-confirmdelete").click():"repo-create-name"==e.target.id?h("act-repo-create").click():"acl-user-input"==e.target.className&&"modal-repo-create"==u.current.id?h("act-repo-create").click():"acl-user-input"==e.target.className&&"modal-repo-view"==u.current.id&&h("act-repo-saveacl").click())}),window.addEventListener("online",()=>{let e=document.getElementsByTagName("HEADER")[0];e.classList.add("online"),e.classList.remove("offline"),document.documentElement.classList.remove("act-disabled")}),window.addEventListener("offline",()=>{let e=document.getElementsByTagName("HEADER")[0];e.classList.add("offline"),e.classList.remove("online"),document.documentElement.classList.add("act-disabled")}),!navigator.onLine){let e=document.getElementsByTagName("HEADER")[0];e.classList.add("offline"),e.classList.remove("online"),document.documentElement.classList.add("act-disabled")}h("user-info").addEventListener("click",e=>{O("hidden",!1),e.target.blur()}),localStorage.getItem("autologout")&&(P("You have been automatically logged out."),localStorage.removeItem("autologout")),"function"!=typeof HTMLCollection.prototype[Symbol.iterator]&&(HTMLCollection.prototype[Symbol.iterator]=function(){let e=0;return{next:()=>({done:e>=this.length,value:this.item(e++)})}})}(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?x():document.addEventListener("DOMContentLoaded",x),window.addEventListener("load",()=>{document.documentElement.classList.remove("first-loading")}),(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?Oe():document.addEventListener("DOMContentLoaded",Oe);
