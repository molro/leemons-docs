"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[274],{5162:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),l=t(6010),r="tabItem_Ymn6";function s(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),l=t(7294),r=t(6010),s=t(2389),i=t(7392),o=t(7094),u=t(2466),d="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,s=e.lazy,m=e.block,c=e.defaultValue,k=e.values,h=e.groupId,f=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(N,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==v&&!N.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.U)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,q=(0,l.useState)(v),j=q[0],T=q[1],_=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var $=w[h];null!=$&&$!==j&&N.some((function(e){return e.value===$}))&&T($)}var M=function(e){var n=e.currentTarget,t=_.indexOf(n),a=N[t].value;a!==j&&(x(n),T(a),null!=h&&C(h,String(a)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=_.indexOf(e.currentTarget)+1;t=null!=(a=_[l])?a:_[0];break;case"ArrowLeft":var r,s=_.indexOf(e.currentTarget)-1;t=null!=(r=_[s])?r:_[_.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},N.map((function(e){var n=e.value,t=e.label,s=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return _.push(e)},onKeyDown:S,onFocus:M,onClick:M},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),s?(0,l.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function c(e){var n=(0,s.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},7115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),s=t(5488),i=t(5162),o=["components"],u={sidebar_position:2,sidebar_label:"leemons-database"},d="Database package",p={unversionedId:"develop/packages/leemons-database",id:"develop/packages/leemons-database",title:"Database package",description:"leemons-database is a package for standardizing database-related stuff.",source:"@site/docs/develop/packages/leemons-database.mdx",sourceDirName:"develop/packages",slug:"/develop/packages/leemons-database",permalink:"/leemons-docs/es/develop/packages/leemons-database",draft:!1,editUrl:"https://github.com/leemonade/leemons-docs/tree/main/docs/develop/packages/leemons-database.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"leemons-database"},sidebar:"tutorialSidebar",previous:{title:"leemons",permalink:"/leemons-docs/es/develop/packages/leemons"},next:{title:"leemons-connector-bookshelf",permalink:"/leemons-docs/es/develop/packages/leemons-connector-bookshelf"}},m={},c=[{value:"Connectors",id:"connectors",level:2},{value:"Database Manager",id:"database-manager",level:2},{value:"Connector Registry",id:"connector-registry",level:2},{value:"Query Builder",id:"query-builder",level:2},{value:"Queries",id:"queries",level:3},{value:"Filters",id:"filters",level:3},{value:"Visualization",id:"visualization",level:4},{value:"Logic",id:"logic",level:4},{value:"Comparison",id:"comparison",level:4}],k={toc:c};function h(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-package"},"Database package"),(0,r.kt)("p",null,"leemons-database is a package for standardizing database-related stuff."),(0,r.kt)("p",null,"It manages all connections, queries, models and connects with each connector."),(0,r.kt)("h2",{id:"connectors"},"Connectors"),(0,r.kt)("p",null,"Connectors are those packages that transform general information into ORM-specific instructions."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NAME CONVENTION")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every connector must be named as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"leemons-connector-CONNECTOR_NAME")))),(0,r.kt)("p",null,"No connector comes installed by default, so you need to install your favorite one:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add leemons-connector-CONNECTOR_NAME\n"))),(0,r.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install leemons-connector-CONNECTOR_NAME\n")))),(0,r.kt)("h2",{id:"database-manager"},"Database Manager"),(0,r.kt)("p",null,"The Database Manager is the entry point for this package. It contains a ",(0,r.kt)("a",{parentName:"p",href:"#connector-registry"},"Connector Registry")," which initializes every connection."),(0,r.kt)("p",null,"The Database Manager is also responsible for building queries and manage the different connectors."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can access the Database Manager through ",(0,r.kt)("inlineCode",{parentName:"p"},"leemons.db")))),(0,r.kt)("h2",{id:"connector-registry"},"Connector Registry"),(0,r.kt)("p",null,"The connector registry is a function helper for managing all the connectors. It provides the following methods:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"load"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"load")),(0,r.kt)("p",null,"Registers the different connectors that database connections uses in ",(0,r.kt)("inlineCode",{parentName:"p"},"connectorRegistry.connectors"),"."),(0,r.kt)("p",null,"The registry imports each connector for using them when required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.load();\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"REMEMBER")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should have installed the connectors")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"init"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"init")),(0,r.kt)("p",null,"The registry calls every connector's initialization method and saves the resulting models in ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseManager.models"),"."),(0,r.kt)("p",null,"You can access these models through ",(0,r.kt)("inlineCode",{parentName:"p"},"leemons.db.models"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.init();\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"getAll"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getAll")),(0,r.kt)("p",null,"Gets all the connectors objects (without the names)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.getAll();\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"get"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get")),(0,r.kt)("p",null,"Gets the specified connector object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.get('connector name');\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"getFromConnection"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getFromConnection")),(0,r.kt)("p",null,"Gets the connector used in the given connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.getFromConnection('connection name');\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"default"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"default")),(0,r.kt)("p",null,"Gets the connector used in the default connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.default;\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"set"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set")),(0,r.kt)("p",null,"Sets the given value on ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseManager.connector[provided key]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"connectorRegistry.connectors.set('connector name', newValue);\n"))),(0,r.kt)("h2",{id:"query-builder"},"Query Builder"),(0,r.kt)("p",null,"When you try to query something from the database, it is sometimes difficult to find the desired model. With the query builder is very easy; you only need to remember the model name."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"INFO")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The builder search for the models in ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseManager.models"),"."))),(0,r.kt)("p",null,"When you call the query builder, it gets your model and connector for generating an object with the queries. Once it's generated, it caches it for the following calls."),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("p",null,"The queries are the primary way of interacting with the database. These are standardized instructions that are interpreted by the connectors. If you need to run a custom query, you need to check how it is done with your selected connector."),(0,r.kt)("p",null,"The provided queries may change depending on the connector, see your connector's docs, but should be as follows:"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"*","Many queries")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ","*","many queries run in transactions, so if an entry fails, the whole query rolls back (returns to the previous state)"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"create"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create")),(0,r.kt)("p",null,"If you want to create any new entry, call this query with an object describing the new values."),(0,r.kt)("p",null,"Once the user is created, the resulting object is resolved. If an error occurred, the promise rejects the database error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').create({\n  name: 'Jane',\n  email: 'JaneDoe@leemons.io',\n});\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"createMany"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createMany")),(0,r.kt)("p",null,"You can also create many entries in one call. The queries run inside a transaction."),(0,r.kt)("p",null,"If all the creations are done correctly, an array with all the users is resolved; if not, the promise rejects the database's accumulated errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').createMany([\n  { name: 'Jane', email: 'JaneDoe@leemons.io' },\n  { name: 'John', email: 'JohnDoe@leemons.io' },\n]);\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"update"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update")),(0,r.kt)("p",null,"For updating an item, you need to provide a ",(0,r.kt)("a",{parentName:"p",href:"#filters"},"filter")," for matching the entry, then describe the new item values."),(0,r.kt)("p",null,"When the entry is updated, an object with the new values is resolved. If no entry matches the query or an error occurred, the promise rejects the database error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').update({ id: 1 }, { name: 'Janie' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"updateMany"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")),(0,r.kt)("p",null,"For updating multiple items, you need to provide an array with each update information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#filters"},"filters")," so we can update the matching entry."),(0,r.kt)("li",{parentName:"ul"},"The new item values.")),(0,r.kt)("p",null,"The update runs inside a transaction. When all the entries are updated, an array with the new values is resolved. If an error occurs, the promise rejects the database error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').updateMany([\n  {\n    query: { id: 1 },\n    item: { name: 'Jane' },\n  },\n  {\n    query: { id: 2 },\n    item: { name: 'John' },\n  },\n]);\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"set"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set")),(0,r.kt)("p",null,"The set query lets you update the value of an entry if it exists; if not, it creates it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// If a user with the email 'JaneDoe@leemons.io' exists, it sets its name to 'Jane Doe'.\n// If the user does not exist, it creates a new one with the given email and name.\nleemons.query('users').set(\n  { email: 'JaneDoe@leemons.io' },\n  { name: 'Jane Doe' }\n);\n\n</details>\n<details>\n<summary>delete</summary>\n\n  `delete`\n\n  Deleting an entry is as easy as providing the necessary [filters](#filters) for matching an entry.\n\n  Once the entry is deleted, an empty object resolves. If an error occurs, the promise rejects the database error.\n\n```js\nleemons.query('users').delete({ id: 1 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"deleteMany"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")),(0,r.kt)("p",null,"You can also delete many items matching some ",(0,r.kt)("a",{parentName:"p",href:"#filters"},"filters"),". This query is separated from ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," to avoid unwanted data loss."),(0,r.kt)("p",null,"The query runs inside a transaction. When all the items are deleted, an array with empty objects is resolved. If any error occurs, the promise rejects the database error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').deleteMany({ name: 'Jane' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"find"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"find")),(0,r.kt)("p",null,"When you need to get data from the database, you only have to run a find query; all we need is the ",(0,r.kt)("a",{parentName:"p",href:"#filters"},"filters")," you want."),(0,r.kt)("p",null,"When some results are found, an array with them is resolved. If there are no matching results, an empty array is returned."),(0,r.kt)("p",null,"If an error occurs, the promise rejects the error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name: 'Jane' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"findOne"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findOne")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne")," query is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"find"),", but the ",(0,r.kt)("inlineCode",{parentName:"p"},"$limit")," ",(0,r.kt)("a",{parentName:"p",href:"#filters"},"filter")," is added to the query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').findOne({ name: 'Jane' });\n"))),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"The filters are the fundamental way of selecting entries from the database. For supporting different database languages, we have abstracted some filters."),(0,r.kt)("p",null,"The filters are divided into three groups: visualization, logic, comparison."),(0,r.kt)("h4",{id:"visualization"},"Visualization"),(0,r.kt)("p",null,"With the visualization filters, you can modify how the data is represented."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"sort"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sort")),(0,r.kt)("p",null,"You can sort the outputted data in ascendant or descendant order based on different fields."),(0,r.kt)("p",null,"The sorting is done in the database engine; this means that the resulting order may depend on the used connector or database engine."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$sort")," filter is a comma-separated string with different fields and order directions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ $sort: 'name:ASC, email:DESC' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"offset"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"offset")),(0,r.kt)("p",null,"Sometimes you need to skip some results from the database; this is done with the offset."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$offset")," filter is a numeric value, and it can also be called ",(0,r.kt)("inlineCode",{parentName:"p"},"$start"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ $offset: 10 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"limit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit")),(0,r.kt)("p",null,"The limit is an instruction for getting a fixed number of results."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$limit")," filter is a numeric value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ $limit: 42 });\n"))),(0,r.kt)("h4",{id:"logic"},"Logic"),(0,r.kt)("p",null,"You can use the logic filters to apply logic operators to your queries."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"where"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"where")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$where")," filter to apply the ",(0,r.kt)("a",{parentName:"p",href:"#comparison"},"comparison filters"),"; this is useful for grouping the filters easily."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({\n  $where: { id: 1 },\n});\n")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$where")," filter to apply ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Selects all the users in second grade who are delegates\nleemons.query('users').find({\n  $where: [{ course: '2' }, { role: 'delegate' }],\n});\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"or"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"or")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$or")," filter for matching entries with different values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Selects all the users who are delegates in second grade or teachers\nleemons.query('users').find({\n  $or: [{ course: '2', role: 'delegate' }, { role: 'teacher' }],\n});\n"))),(0,r.kt)("h4",{id:"comparison"},"Comparison"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"equals"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"equals")),(0,r.kt)("p",null,"Search for entries in the database whose field equals the desired value."),(0,r.kt)("p",null,"Only specify the field and the value (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{ id: 1 }"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ id: 1, name: 'Jane' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"not equals"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"not equals")),(0,r.kt)("p",null,"You can also search for entries whose fields are different from the desired value."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$ne"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$ne: 'Jane' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"in"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"in")),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"$or"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"_$in")," to specify which values you are looking for."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$in"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$in: ['Jane', 'John'] });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"not in"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nin")),(0,r.kt)("p",null,"You can also find those entries without the values you are not looking for."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$nin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$nin: ['Jane', 'John'] });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"contains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contains")),(0,r.kt)("p",null,"Search for entries containing a text without case sensitivity."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$contains"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$contains: 'a' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"not contains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ncontains")),(0,r.kt)("p",null,"You can also search for those entries not containing the case insensitive text."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$ncontains"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$ncontains: 'a' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"strict contains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"containss")),(0,r.kt)("p",null,"Search entries containing the case sensitive text."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$containss"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$containss: 'S' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"strict not contains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ncontainss")),(0,r.kt)("p",null,"You can also search for those entries not containing the exact text."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$ncontains"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ name_$ncontainss: 'S' });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"lower than"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lower than")),(0,r.kt)("p",null,"Search for entries whose values are lower than the desired value."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$lt"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users_grades').find({ grade_$lt: 5 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"lower than or equal"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lower than or equal")),(0,r.kt)("p",null,"Search for entries whose values are lower or equal to the desired value."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$lte"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users_grades').find({ grade_$lte: 4 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"greater than"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"greater than")),(0,r.kt)("p",null,"Search for entries whose values are greater than the desired value."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$gt"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users_grades').find({ grade_$gt: 4 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"greater than or equal"),(0,r.kt)("p",null,"Search for entries whose values are greater or equal to the desired value."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$gte"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users_grades').find({ grade_$lte: 5 });\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"is NULL"),(0,r.kt)("p",null,"Search for entries whose values are null (true) or not (false)."),(0,r.kt)("p",null,"Specify the column name ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"_$null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"leemons.query('users').find({ email_$null: true, phone_$null: false });\n"))))}h.isMDXComponent=!0}}]);