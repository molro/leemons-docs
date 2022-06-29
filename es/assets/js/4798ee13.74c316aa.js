"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72],{5162:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),s=t(6010),r="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),s=t(7294),r=t(6010),l=t(2389),o=t(7392),i=t(7094),u=t(2466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,p=e.defaultValue,f=e.values,h=e.groupId,g=e.className,k=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(y,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.U)(),j=b.tabGroupChoices,w=b.setTabGroupChoices,T=(0,s.useState)(N),S=T[0],q=T[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=j[h];null!=O&&O!==S&&y.some((function(e){return e.value===O}))&&q(O)}var M=function(e){var n=e.currentTarget,t=x.indexOf(n),a=y[t].value;a!==S&&(E(n),q(a),null!=h&&w(h,String(a)))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,s=x.indexOf(e.currentTarget)+1;t=null!=(a=x[s])?a:x[0];break;case"ArrowLeft":var r,l=x.indexOf(e.currentTarget)-1;t=null!=(r=x[l])?r:x[x.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var n=e.value,t=e.label,l=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:M,onClick:M},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),l?(0,s.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function p(e){var n=(0,l.Z)();return s.createElement(m,(0,a.Z)({key:String(n)},e))}},5943:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var a=t(7462),s=t(3366),r=(t(7294),t(3905)),l=t(5488),o=t(5162),i=["components"],u={sidebar_position:4,sidebar_label:"leemons-utils"},c="Utils package",d={unversionedId:"develop/packages/leemons-utils",id:"develop/packages/leemons-utils",title:"Utils package",description:"leemons-utils is the package that contains all the functions to help you in development, it contains common functionality that can be useful to you at any time.",source:"@site/docs/develop/packages/leemons-utils.mdx",sourceDirName:"develop/packages",slug:"/develop/packages/leemons-utils",permalink:"/leemons-docs/es/develop/packages/leemons-utils",draft:!1,editUrl:"https://github.com/leemonade/leemons-docs/tree/main/docs/develop/packages/leemons-utils.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"leemons-utils"},sidebar:"tutorialSidebar",previous:{title:"leemons-connector-bookshelf",permalink:"/leemons-docs/es/develop/packages/leemons-connector-bookshelf"},next:{title:"Plugins",permalink:"/leemons-docs/es/category/plugins"}},m={},p=[{value:"env",id:"env",level:2},{value:"getModel",id:"getmodel",level:2},{value:"generateModelName",id:"generatemodelname",level:2},{value:"parseFilters",id:"parsefilters",level:2},{value:"buildQuery",id:"buildquery",level:2},{value:"readdirRecursiveSync",id:"readdirrecursivesync",level:2},{value:"getStackTrace",id:"getstacktrace",level:2}],f={toc:p};function h(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"utils-package"},"Utils package"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"leemons-utils")," is the package that contains all the functions to help you in development, it contains common functionality that can be useful to you at any time."),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"leemons-utils")," in your packages, you need to install it first:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add leemons-utils\n"))),(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install leemons-utils\n")))),(0,r.kt)("h2",{id:"env"},"env"),(0,r.kt)("p",null,"The env function returns the value of the requested environment variable if it exists, otherwise it returns the specified default value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { env } = require('leemons-utils');\n\n// If NODE_ENV is not defined, returns 'development',\n// otherwise, process.env.NODE_ENV is returned.\nenv('NODE_ENV', 'development');\n")),(0,r.kt)("h2",{id:"getmodel"},"getModel"),(0,r.kt)("p",null,"Returns the requested model if it exists, if it does not exist, returns null."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The returned models do not contain ORM information."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getModel } = require('leemons-utils');\n\ngetModel('leemons::users');\n")),(0,r.kt)("p",null,"If an array of models is provided, search for the model in that array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getModel } = require('leemons-utils');\n\nconst models = [\n model1: {...},\n model2: {...},\n ...\n];\n\ngetModel('model1', models);\n")),(0,r.kt)("h2",{id:"generatemodelname"},"generateModelName"),(0,r.kt)("p",null,"Generates a name for the model based on the origin and original name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { generateModelName } = require('leemons-utils');\n\nconst modelName = generateModelName('plugins.users', 'roles');\n\nconsole.log(modelName); // > plugins_users::roles\n")),(0,r.kt)("h2",{id:"parsefilters"},"parseFilters"),(0,r.kt)("p",null,"Transforms the ",(0,r.kt)("a",{parentName:"p",href:"leemons-database/#filters"},"filters")," into a JSON useful for the ",(0,r.kt)("a",{parentName:"p",href:"#buildquery"},"buildQuery")," function."),(0,r.kt)("p",null,"Filters and default filters are JSONs for ",(0,r.kt)("a",{parentName:"p",href:"leemons-database/#filters"},"filter")," query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { parseFilters } = require('leemons-utils');\n\nconst filters = {\n  $or: [{ name_$contains: 'John' }, { nname_$contains: 'Jane' }],\n};\n\nconst defaults = {\n  $limit: 5,\n};\n\nconst query = parseFilters({ filters, defaults, model });\n")),(0,r.kt)("h2",{id:"buildquery"},"buildQuery"),(0,r.kt)("p",null,"Calls the query builder of the model we are using."),(0,r.kt)("p",null,"buildQuery requires the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The model you want to query."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"leemons-database/#filters"},"filters")," you want to use in your ",(0,r.kt)("a",{parentName:"li",href:"leemons-database/#queries"},"query"),"."),(0,r.kt)("li",{parentName:"ul"},"Other parameters that your ",(0,r.kt)("a",{parentName:"li",href:"leemons-database/#connectors"},"connector")," requires.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { buildQuery } = require('leemons-utils');\n\n// The final filters to use in your queries\nconst filters = parseFilters({ ... }, { ... }, model);\n\nconst query = buildQuery(model, filters, ...rest);\n")),(0,r.kt)("h2",{id:"readdirrecursivesync"},"readdirRecursiveSync"),(0,r.kt)("p",null,"Reads a directory and all its subfolders, at the end it returns a JSON with the directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { readdirRecursiveSync } = require('leemons-utils');\nreaddirRecursiveSync('plugins');\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "plugins",\n  "type": "directory",\n  "path": "",\n  "content": [\n    {\n      "name": "user-admin",\n      "type": "directory",\n      "path": "user-admin",\n      "content": [\n        {\n          "name": "config",\n          "type": "directory",\n          "path": "user-admin/config",\n          "content": [\n            {\n              "name": "config.js",\n              "path": "user-admin/config/config.js",\n              "type": "file"\n            }\n          ]\n        },\n        {\n          "name": "controllers",\n          "type": "directory",\n          "path": "user-admin/controllers",\n          "content": [\n            {\n              "name": "posts.js",\n              "path": "user-admin/controllers/posts.js",\n              "type": "file"\n            },\n            {\n              "name": "routes.js",\n              "path": "user-admin/controllers/routes.js",\n              "type": "file"\n            },\n            {\n              "name": "users.js",\n              "path": "user-admin/controllers/users.js",\n              "type": "file"\n            }\n          ]\n        },\n        {\n          "name": "models",\n          "type": "directory",\n          "path": "user-admin/models",\n          "content": [\n            {\n              "name": "posts.js",\n              "path": "user-admin/models/posts.js",\n              "type": "file"\n            },\n            {\n              "name": "users.js",\n              "path": "user-admin/models/users.js",\n              "type": "file"\n            }\n          ]\n        },\n        {\n          "name": "next",\n          "type": "directory",\n          "path": "user-admin/next",\n          "content": [\n            {\n              "name": "pages",\n              "type": "directory",\n              "path": "user-admin/frontend/pages",\n              "content": [\n                {\n                  "name": "login.js",\n                  "path": "user-admin/frontend/pages/login.js",\n                  "type": "file"\n                },\n                {\n                  "name": "register.js",\n                  "path": "user-admin/frontend/pages/register.js",\n                  "type": "file"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("p",null,"You can also generate the integrity of a directory with the checksums algorithm as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { readdirRecursiveSync } = require('leemons-utils');\nreaddirRecursiveSync('plugins', { checksums: true });\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "plugins",\n  "type": "directory",\n  "path": "",\n  "content": [\n    {\n      "name": "user-admin",\n      "type": "directory",\n      "path": "user-admin",\n      "content": [\n        {\n          "name": "config",\n          "type": "directory",\n          "path": "user-admin/config",\n          "content": [\n            {\n              "name": "config.js",\n              "path": "user-admin/config/config.js",\n              "type": "file",\n              "checksum": "af2d854eb189e9f51836ae1a12c260b4"\n            }\n          ],\n          "checksum": "4760ab8606783caef4c3e58d936097dd"\n        },\n        {\n          "name": "controllers",\n          "type": "directory",\n          "path": "user-admin/controllers",\n          "content": [\n            {\n              "name": "posts.js",\n              "path": "user-admin/controllers/posts.js",\n              "type": "file",\n              "checksum": "d7d3c1fa7f1c9c0fec246ae96cc58381"\n            },\n            {\n              "name": "routes.js",\n              "path": "user-admin/controllers/routes.js",\n              "type": "file",\n              "checksum": "cb66af956dfcd169d4aaca4225ccf4be"\n            },\n            {\n              "name": "users.js",\n              "path": "user-admin/controllers/users.js",\n              "type": "file",\n              "checksum": "3d82dfff5f688648aa2a86433b87489d"\n            }\n          ],\n          "checksum": "e2149e209f845c0c97a26a2314390c38"\n        },\n        {\n          "name": "models",\n          "type": "directory",\n          "path": "user-admin/models",\n          "content": [\n            {\n              "name": "posts.js",\n              "path": "user-admin/models/posts.js",\n              "type": "file",\n              "checksum": "388d3df6e2d65280ba24f2172acb46f4"\n            },\n            {\n              "name": "users.js",\n              "path": "user-admin/models/users.js",\n              "type": "file",\n              "checksum": "b6878d605208324f2ad9e09a836b36e5"\n            }\n          ],\n          "checksum": "bc802a1b666fca93d2f0a896e3581b76"\n        },\n        {\n          "name": "next",\n          "type": "directory",\n          "path": "user-admin/next",\n          "content": [\n            {\n              "name": "pages",\n              "type": "directory",\n              "path": "user-admin/frontend/pages",\n              "content": [\n                {\n                  "name": "login.js",\n                  "path": "user-admin/frontend/pages/login.js",\n                  "type": "file",\n                  "checksum": "c67ce04cbef16144dc5414ca60f086fb"\n                },\n                {\n                  "name": "register.js",\n                  "path": "user-admin/frontend/pages/register.js",\n                  "type": "file",\n                  "checksum": "ebcd2ebd8792719b02cc75a90de6fd59"\n                }\n              ],\n              "checksum": "7b61e9b346c733147261fde09f987849"\n            }\n          ],\n          "checksum": "4183d53dcbcea6219f46f78583d69f3c"\n        }\n      ],\n      "checksum": "144424ced9d8f36104427384974bee52"\n    }\n  ],\n  "checksum": "f78ad87301ce507b255e8fb98c3ab7ca"\n}\n'))),(0,r.kt)("p",null,"If you want to ignore a file or folder, you need to call the function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { readdirRecursiveSync } = require('leemons-utils');\nreaddirRecursiveSync('plugins', { ignore: ['config', 'frontend', 'models', 'posts.js'] });\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "plugins",\n  "type": "directory",\n  "path": "",\n  "content": [\n    {\n      "name": "user-admin",\n      "type": "directory",\n      "path": "user-admin",\n      "content": [\n        {\n          "name": "controllers",\n          "type": "directory",\n          "path": "user-admin/controllers",\n          "content": [\n            {\n              "name": "routes.js",\n              "path": "user-admin/controllers/routes.js",\n              "type": "file"\n            },\n            {\n              "name": "users.js",\n              "path": "user-admin/controllers/users.js",\n              "type": "file"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("p",null,"Finally, you can get the output with all JSONs instead of Arrays."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { readdirRecursiveSync } = require('leemons-utils');\nreaddirRecursiveSync('plugins', { json: true });\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "plugins",\n  "type": "directory",\n  "path": "",\n  "content": {\n    "user-admin": {\n      "name": "user-admin",\n      "type": "directory",\n      "path": "user-admin",\n      "content": {\n        "config": {\n          "name": "config",\n          "type": "directory",\n          "path": "user-admin/config",\n          "content": {\n            "config.js": {\n              "name": "config.js",\n              "path": "user-admin/config/config.js",\n              "type": "file"\n            }\n          }\n        },\n        "controllers": {\n          "name": "controllers",\n          "type": "directory",\n          "path": "user-admin/controllers",\n          "content": {\n            "posts.js": {\n              "name": "posts.js",\n              "path": "user-admin/controllers/posts.js",\n              "type": "file"\n            },\n            "routes.js": {\n              "name": "routes.js",\n              "path": "user-admin/controllers/routes.js",\n              "type": "file"\n            },\n            "users.js": {\n              "name": "users.js",\n              "path": "user-admin/controllers/users.js",\n              "type": "file"\n            }\n          }\n        },\n        "models": {\n          "name": "models",\n          "type": "directory",\n          "path": "user-admin/models",\n          "content": {\n            "posts.js": {\n              "name": "posts.js",\n              "path": "user-admin/models/posts.js",\n              "type": "file"\n            },\n            "users.js": {\n              "name": "users.js",\n              "path": "user-admin/models/users.js",\n              "type": "file"\n            }\n          }\n        },\n        "next": {\n          "name": "next",\n          "type": "directory",\n          "path": "user-admin/next",\n          "content": {\n            "pages": {\n              "name": "pages",\n              "type": "directory",\n              "path": "user-admin/frontend/pages",\n              "content": {\n                "login.js": {\n                  "name": "login.js",\n                  "path": "user-admin/frontend/pages/login.js",\n                  "type": "file"\n                },\n                "register.js": {\n                  "name": "register.js",\n                  "path": "user-admin/frontend/pages/register.js",\n                  "type": "file"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)("h2",{id:"getstacktrace"},"getStackTrace"),(0,r.kt)("p",null,"If you need to access the call stack of the current function, with this function you can."),(0,r.kt)("p",null,"After its execution, it provides you with the last 10 calls, if you indicate the index of the desired call, it will return only the indicated call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { getStackTrace } = require(\'leemons-utils\');\n\nconsole.log(getStackTrace());\n// > [\n//     {\n//       "fileName": "/leemons/packages/leemons-utils/lib/getStackTrace.js",\n//       "lineNumber": 13,\n//       "columnNumber": 15,\n//       "functionName": "getStackTrace"\n//     },\n//     {\n//       "fileName": "/leemons/packages/leemons/lib/leemons.js",\n//       "lineNumber": 154,\n//       "columnNumber": 32,\n//       "functionName": "load"\n//     },\n//     ...\n//   ]\n')),(0,r.kt)("p",null,"Or just the call we need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { getStackTrace } = require(\'leemons-utils\');\n\nconsole.log(getStackTrace(3));\n\n// > {\n//     "fileName": "/leemons/packages/leemons/lib/leemons.js",\n//     "lineNumber": 182,\n//     "columnNumber": 5,\n//     "functionName": "start"\n//   }\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This method is used to expose information only to certain calls."))))}h.isMDXComponent=!0}}]);