import{_ as e,o as t,c as i,V as a}from"./chunks/framework.7726510e.js";const u=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/events.md","lastUpdated":1692851241000}'),n={name:"guide/blockchain/events.md"},s=a('<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>Events are emitted when certain things happen within the blockchain, e.g. a new account is created or a block is committed. There are different types of events:</p><ul><li>pipeline events</li><li>data events</li><li>time events</li><li>trigger execution events</li></ul><h2 id="pipeline-events" tabindex="-1">Pipeline Events <a class="header-anchor" href="#pipeline-events" aria-label="Permalink to &quot;Pipeline Events&quot;">​</a></h2><p>Pipeline events are emitted when transactions are submitted, executed, or committed to a block. A pipeline event contains the following information: the kind of entity that caused an event (transaction or block), its hash and status. The status can be either <code>Validating</code> (validation in progress), <code>Rejected</code>, or <code>Committed</code>. If an entity was rejected, the reason for the rejection is provided.</p><h2 id="data-events" tabindex="-1">Data Events <a class="header-anchor" href="#data-events" aria-label="Permalink to &quot;Data Events&quot;">​</a></h2><p>Data events are emitted when there is a change related to one of the following entities: peers, domains, accounts, asset definitions, assets, triggers, roles, permission tokens, permission validators, or Iroha configuration. These types of events are used in <a href="./filters.html">entity filters</a>.</p><h2 id="time-events" tabindex="-1">Time Events <a class="header-anchor" href="#time-events" aria-label="Permalink to &quot;Time Events&quot;">​</a></h2><p>Time events are emitted when the world state view is ready to handle <a href="./triggers.html#time-triggers">time triggers</a>.</p><h2 id="trigger-execution-events" tabindex="-1">Trigger Execution Events <a class="header-anchor" href="#trigger-execution-events" aria-label="Permalink to &quot;Trigger Execution Events&quot;">​</a></h2><p>Trigger execution events are emitted when the <a href="./instructions.html#executetrigger"><code>ExecuteTrigger</code></a> instruction is executed</p>',11),r=[s];function o(c,d,l,h,v,p){return t(),i("div",null,r)}const g=e(n,[["render",o]]);export{u as __pageData,g as default};
