!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["React-Selectable-Fast"]=t(require("react")):e["React-Selectable-Fast"]=t(e.React)}(self,(e=>(()=>{var t={388:()=>{},442:t=>{"use strict";t.exports=e}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{DeselectAll:()=>Q,SelectAll:()=>H,SelectableGroup:()=>E,TSelectableItemProps:()=>ee.TSelectableItemProps,createSelectable:()=>B});var e=n(442),t=n.n(e);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scrollTop:0,scrollLeft:0},o=t.scrollTop,n=t.scrollLeft;return Array.from(e.getClientRects()).map((function(t){return{top:t.top+o,left:t.left+n,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight,width:t.width,height:t.height}}))}var l=["pageX","pageY","clientX","clientY"];function c(e,t){l.forEach((function(o){void 0===e[o]&&(e[o]=e[t][0][o])}))}function i(e){if(e.type.includes("mouse"))return e;try{"touchstart"===e.type?c(e,"targetTouches"):"touchmove"===e.type&&c(e,"changedTouches")}catch(e){console.error(e.message)}return e}function s(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}var a=function(e,t,o){var n=o.tolerance,r=void 0===n?0:n,l=o.useOffsetSize,c=void 0!==l&&l,i=c?e.offsetHeight:e.height,s=c?t.offsetHeight:t.height,a=c?e.offsetWidth:e.width,u=c?t.offsetWidth:t.width;return!(e.top+i-r<t.top||e.top+r>t.top+s||e.left+a-r<t.left||e.left+r>t.left+u)};function u(e){return Array.isArray(e)?e:[e]}function f(e,t){for(var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=u(e),l=u(t),c=0;c<r.length;c++)for(var i=0;i<l.length;i++)return a(r[c],l[i],{tolerance:o,useOffsetSize:1===n})}var p=function(){},d=t().createContext({selectable:{register:function(e){},unregister:function(e){},selectAll:p,clearSelection:p,getScrolledContainer:function(){return null}}});function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var m={y:0,x:0,width:0,height:0};function y(o){var n,r,l=o.fixedPosition,c=o.getSetState,i=o.className,s=(n=(0,e.useState)(m),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(o.push(c.value),!t||o.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return o}}(n,r)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?h(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=s[0],u=s[1];(0,e.useEffect)((function(){c(u)}),[]);var f={left:a.x,top:a.y,width:a.width,height:a.height,zIndex:9e3,position:l?"fixed":"absolute",cursor:"default",willChange:"transform",transform:"translateZ(0)"};return t().createElement("div",{className:i,style:f})}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){L(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function g(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=O(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function O(e,t){if(e){if("string"==typeof e)return C(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function k(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function L(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}y.defaultProps={className:"selectable-selectbox"};var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var n,r,l,c=(l=a,function(){var e,t=I(l);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()){var o=I(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?j(e):t}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return L(j(e=c.call.apply(c,[this].concat(n))),"state",{selectionMode:!1}),L(j(e),"mouseDownStarted",!1),L(j(e),"mouseMoveStarted",!1),L(j(e),"mouseMoved",!1),L(j(e),"mouseUpStarted",!1),L(j(e),"selectionStarted",!1),L(j(e),"deselectionStarted",!1),L(j(e),"clickedItem",void 0),L(j(e),"mouseDownData",{selectboxY:0,selectboxX:0,target:null}),L(j(e),"registry",new Set),L(j(e),"selectedItems",new Set),L(j(e),"selectingItems",new Set),L(j(e),"ignoreCheckCache",new Map),L(j(e),"ignoreList",e.props.ignoreList.concat([".selectable-select-all",".selectable-deselect-all"])),L(j(e),"ignoreListNodes",[]),L(j(e),"setSelectboxState",null),L(j(e),"selectableGroup",null),L(j(e),"scrollContainer",null),L(j(e),"maxScrollTop",0),L(j(e),"maxScrollLeft",0),L(j(e),"scrollBounds",null),L(j(e),"containerScroll",{scrollTop:0,scrollLeft:0}),L(j(e),"documentScroll",{scrollTop:0,scrollLeft:0}),L(j(e),"saveContainerScroll",(function(){var t=e.scrollContainer,o=t.scrollTop,n=t.scrollLeft;e.containerScroll={scrollTop:o,scrollLeft:n}})),L(j(e),"saveDocumentScroll",(function(){var t={documentScrollTop:Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),documentScrollLeft:Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft)},o=t.documentScrollLeft,n=t.documentScrollTop;e.documentScroll={scrollTop:n,scrollLeft:o}})),L(j(e),"updateRegistry",(function(){var t,o=w(e.registry.values());try{for(o.s();!(t=o.n()).done;)t.value.updateBounds(e.containerDocumentScroll)}catch(e){o.e(e)}finally{o.f()}})),L(j(e),"registerSelectable",(function(t){e.registry.add(t),t.state.isSelected&&e.selectedItems.add(t)})),L(j(e),"unregisterSelectable",(function(t){e.registry.delete(t);var o=e.selectedItems.has(t)||e.selectingItems.has(t);e.selectedItems.delete(t),e.selectingItems.delete(t),o&&e.props.onSelectedItemUnmount(t,g(e.selectedItems))})),L(j(e),"updateContainerScroll",(function(t){var o=e.containerScroll,n=o.scrollTop,r=o.scrollLeft;e.checkScrollTop(t.clientY,n),e.checkScrollBottom(t.clientY,n),e.checkScrollLeft(t.clientX,r),e.checkScrollRight(t.clientX,r)})),L(j(e),"getScrollStep",(function(t){var o=e.props,n=o.minimumSpeedFactor,r=o.scrollSpeed;return Math.max(t,n)*r})),L(j(e),"checkScrollTop",(function(t,o){var n=e.scrollBounds.top-t;(n>0||t<0)&&(e.scrollContainer.scrollTop=o-e.getScrollStep(n))})),L(j(e),"checkScrollBottom",(function(t,o){var n=t-e.scrollBounds.bottom;if(n>0||t>window.innerHeight){var r=o+e.getScrollStep(n);e.scrollContainer.scrollTop=Math.min(r,e.maxScrollTop)}})),L(j(e),"checkScrollLeft",(function(t,o){var n=e.scrollBounds.left-t;if(n>0||t<0){var r=o-e.getScrollStep(n);e.scrollContainer.scrollLeft=r}})),L(j(e),"checkScrollRight",(function(t,o){var n=t-e.scrollBounds.right;if(n>0||t>window.innerWidth){var r=o+e.getScrollStep(n);e.scrollContainer.scrollLeft=Math.min(r,e.maxScrollLeft)}})),L(j(e),"updateSelectBox",(function(t){var o=i(t);if(e.updateContainerScroll(o),!e.mouseMoveStarted){e.mouseMoveStarted=!0,e.mouseMoved=!0;var n=j(e).mouseDownData,r=o.clientX,l=o.clientY-e.scrollBounds.top+e.containerScroll.scrollTop,c=Math.min(l,n.selectboxY),s=r-e.scrollBounds.left+e.containerScroll.scrollLeft,a={x:Math.min(s,n.selectboxX),y:c,width:Math.abs(s-n.selectboxX),height:Math.abs(l-n.selectboxY)};e.setSelectboxState(a);var u={top:a.y+e.scrollBounds.top+e.documentScroll.scrollTop,left:a.x+e.scrollBounds.left+e.documentScroll.scrollLeft,width:a.width,height:a.height,offsetWidth:a.width||1,offsetHeight:a.height||1};e.selectItems(u),e.props.duringSelection(g(e.selectingItems)),e.mouseMoveStarted=!1}})),L(j(e),"selectItems",(function(t){var o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.props,l=r.tolerance,c=r.enableDeselect,i=r.mixedDeselect,s=w(e.registry.values());try{for(s.s();!(o=s.n()).done;){var a=o.value;e.processItem({item:a,selectboxBounds:t,tolerance:l,mixedDeselect:i,enableDeselect:c,isFromClick:n&&n.isFromClick})}}catch(e){s.e(e)}finally{s.f()}})),L(j(e),"clearSelection",(function(){var t,o=w(e.selectedItems.values());try{for(o.s();!(t=o.n()).done;){var n=t.value;n.setState({isSelected:!1}),e.selectedItems.delete(n)}}catch(e){o.e(e)}finally{o.f()}e.setState({selectionMode:!1}),e.props.onSelectionFinish(g(e.selectedItems)),e.props.onSelectionClear()})),L(j(e),"selectAll",(function(){e.removeIgnoredItemsFromRegistry();var t,o=w(e.registry.values());try{for(o.s();!(t=o.n()).done;){var n=t.value;n.state.isSelected||(n.setState({isSelected:!0}),e.selectedItems.add(n))}}catch(e){o.e(e)}finally{o.f()}e.setState({selectionMode:!0}),e.props.onSelectionFinish(g(e.selectedItems))})),L(j(e),"mouseDown",(function(t){var n,r,l=!t.type.includes("touch")&&!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(e.metaKey&&!o.allowMetaClick||e.ctrlKey&&!o.allowCtrlClick||e.altKey&&!o.allowAltClick||e.shiftKey&&!o.allowShiftClick)&&("buttons"in e?e.buttons===t:"which"in e?e.which===t:e.button===t-1)}(t,1,{allowAltClick:e.props.allowAltClick,allowCtrlClick:e.props.allowCtrlClick,allowMetaClick:e.props.allowMetaClick,allowShiftClick:e.props.allowShiftClick});if(!(e.mouseDownStarted||e.props.disabled||l))if(e.removeIgnoredItemsFromRegistry(),e.isInIgnoreList(t.target))e.mouseDownStarted=!1;else{e.props.resetOnStart&&e.clearSelection(),e.mouseDownStarted=!0,e.mouseUpStarted=!1;var c=i(t);if(!e.props.globalMouse&&!s(c.target,e.selectableGroup)){var a=(n=o(e.selectableGroup,e.documentScroll),r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(o.push(c.value),!t||o.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return o}}(n,r)||O(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];if(!f({top:a.top,left:a.left,width:0,height:0,offsetHeight:a.offsetHeight,offsetWidth:a.offsetWidth},{top:c.pageY,left:c.pageX,width:0,height:0,offsetWidth:0,offsetHeight:0}))return}e.updateRootBounds(),e.updateRegistry(),e.mouseDownData={target:c.target,selectboxY:c.clientY-e.scrollBounds.top+e.containerScroll.scrollTop,selectboxX:c.clientX-e.scrollBounds.left+e.containerScroll.scrollLeft},c.preventDefault(),document.addEventListener("mousemove",e.updateSelectBox),document.addEventListener("touchmove",e.updateSelectBox),document.addEventListener("mouseup",e.mouseUp),document.addEventListener("touchend",e.mouseUp)}})),L(j(e),"mouseUp",(function(t){if(!e.mouseUpStarted&&(e.mouseUpStarted=!0,e.mouseDownStarted=!1,e.removeTempEventListeners(),e.mouseDownData)){var o=i(t),n=o.pageX,r=o.pageY;if(!e.mouseMoved&&s(o.target,e.selectableGroup))e.handleClick(o,r,n);else{var l,c=w(e.selectingItems.values());try{for(c.s();!(l=c.n()).done;)l.value.setState({isSelected:!0,isSelecting:!1})}catch(e){c.e(e)}finally{c.f()}e.selectedItems=new Set([].concat(g(e.selectedItems),g(e.selectingItems))),e.selectingItems.clear(),1===o.which&&e.mouseDownData.target===o.target&&e.preventEvent(o.target,"click"),e.setSelectboxState({x:0,y:0,width:0,height:0}),e.props.onSelectionFinish(g(e.selectedItems))}e.toggleSelectionMode(),e.cleanUp(),e.mouseMoved=!1}})),L(j(e),"keyListener",(function(t){27===t.keyCode&&e.clearSelection()})),L(j(e),"getGroupRef",(function(t){e.selectableGroup=t})),L(j(e),"getSelectboxSetState",(function(t){e.setSelectboxState=t})),L(j(e),"defaultContainerStyle",{position:"relative"}),L(j(e),"contextValue",{selectable:{register:e.registerSelectable,unregister:e.unregisterSelectable,selectAll:e.selectAll,clearSelection:e.clearSelection,getScrolledContainer:function(){return e.scrollContainer}}}),e}return n=a,(r=[{key:"componentDidMount",value:function(){this.props.scrollContainer?this.scrollContainer=document.querySelector(this.props.scrollContainer):this.scrollContainer=this.selectableGroup,this.scrollContainer.addEventListener("scroll",this.saveContainerScroll),document.addEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.addEventListener("mousedown",this.mouseDown),this.selectableGroup.addEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.addEventListener("keydown",this.keyListener),document.addEventListener("keyup",this.keyListener)),this.removeIgnoredItemsFromRegistry()}},{key:"componentWillUnmount",value:function(){this.scrollContainer.removeEventListener("scroll",this.saveContainerScroll),document.removeEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.removeEventListener("mousedown",this.mouseDown),this.selectableGroup.removeEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.removeEventListener("keydown",this.keyListener),document.removeEventListener("keyup",this.keyListener)),this.removeTempEventListeners(),this.selectedItems.clear(),this.selectingItems.clear()}},{key:"removeTempEventListeners",value:function(){document.removeEventListener("mousemove",this.updateSelectBox),document.removeEventListener("touchmove",this.updateSelectBox),document.removeEventListener("mouseup",this.mouseUp),document.removeEventListener("touchend",this.mouseUp)}},{key:"updateRootBounds",value:function(){this.scrollBounds=this.scrollContainer.getBoundingClientRect(),this.maxScrollTop=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight,this.maxScrollLeft=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth}},{key:"toggleSelectionMode",value:function(){var e=this.selectedItems,t=this.state.selectionMode;e.size&&!t&&this.setState({selectionMode:!0}),!e.size&&t&&this.setState({selectionMode:!1})}},{key:"processItem",value:function(e){var t=e.item,o=e.tolerance,n=e.selectboxBounds,r=e.enableDeselect,l=e.mixedDeselect,c=e.isFromClick,i=this.props.delta,s=f(n,t.bounds,o,i),a=t.state,u=a.isSelecting,p=a.isSelected;if(c&&s)return p?this.selectedItems.delete(t):this.selectedItems.add(t),t.setState({isSelected:!p}),this.clickedItem=t,t;if(!c&&s){if(p&&r&&(!this.selectionStarted||l))return t.setState({isSelected:!1}),t.deselected=!0,this.deselectionStarted=!0,this.selectedItems.delete(t);var d=l?!t.deselected:!this.deselectionStarted;if(!u&&!p&&d)return t.setState({isSelecting:!0}),this.selectionStarted=!0,this.selectingItems.add(t),{updateSelecting:!0}}return!c&&!s&&u&&this.selectingItems.has(t)?(t.setState({isSelecting:!1}),this.selectingItems.delete(t),{updateSelecting:!0}):null}},{key:"isInIgnoreList",value:function(e){if(e){if(void 0!==this.ignoreCheckCache.get(e))return this.ignoreCheckCache.get(e);var t=this.ignoreListNodes.some((function(t){return e===t||t.contains(e)}));return this.ignoreCheckCache.set(e,t),t}}},{key:"removeIgnoredItemsFromRegistry",value:function(){var e=this;this.ignoreListNodes=Array.from(document.querySelectorAll(this.ignoreList.join(", "))),this.registry=new Set(g(this.registry).filter((function(t){return!e.isInIgnoreList(t.node)}))),this.selectedItems=new Set(g(this.selectedItems).filter((function(t){return!e.isInIgnoreList(t.node)})))}},{key:"preventEvent",value:function(e,t){e.addEventListener(t,(function o(n){e.removeEventListener(t,o,!0),n.preventDefault(),n.stopPropagation()}),!0)}},{key:"cleanUp",value:function(){if(this.deselectionStarted=!1,this.selectionStarted=!1,this.props.mixedDeselect){var e,t=w(this.registry.values());try{for(t.s();!(e=t.n()).done;)e.value.deselected=!1}catch(e){t.e(e)}finally{t.f()}}}},{key:"handleClick",value:function(e,t,o){if(this.props.selectOnClick){var n=this.props,r=n.clickClassName,l=n.allowClickWithoutSelected,c=n.onSelectionFinish,i=e.target.classList||[],s=Array.from(i).includes(r);(l||this.selectedItems.size||s||e.ctrlKey)&&(this.selectItems({top:t,left:o,width:0,height:0,offsetWidth:0,offsetHeight:0},{isFromClick:!0}),c(g(this.selectedItems),this.clickedItem),1===e.which&&this.preventEvent(e.target,"click"),2!==e.which&&3!==e.which||this.preventEvent(e.target,"contextmenu"))}}},{key:"render",value:function(){var e=this.state.selectionMode,o=this.props,n=o.component,r=void 0===n?"div":n,l=o.className,c=o.style,i=o.selectionModeClass,s=o.fixedPosition,a=o.selectboxClassName,u=o.children;return t().createElement(d.Provider,{value:this.contextValue},t().createElement(r,{ref:this.getGroupRef,style:S({},this.defaultContainerStyle,{},c),className:"".concat(l," ").concat(e?i:"")},u,t().createElement(y,{getSetState:this.getSelectboxSetState,className:a,fixedPosition:s})))}},{key:"containerDocumentScroll",get:function(){return{scrollTop:this.containerScroll.scrollTop+this.documentScroll.scrollTop,scrollLeft:this.containerScroll.scrollLeft+this.documentScroll.scrollLeft}}}])&&k(n.prototype,r),a}(e.Component);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},R.apply(this,arguments)}function D(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}L(E,"defaultProps",{clickClassName:"",tolerance:0,globalMouse:!1,ignoreList:[],scrollSpeed:.25,minimumSpeedFactor:60,duringSelection:p,onSelectionFinish:p,onSelectionClear:p,onSelectedItemUnmount:p,allowClickWithoutSelected:!0,selectionModeClass:"in-selection-mode",resetOnStart:!1,disabled:!1,deselectOnEsc:!0,fixedPosition:!1,delta:1,allowAltClick:!1,allowCtrlClick:!1,allowMetaClick:!1,allowShiftClick:!1,selectOnClick:!0});var B=function(n){var r;return r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(s,e);var r,l,c,i=(c=s,function(){var e,t=A(c);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()){var o=A(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?M(e):t}(this,e)});function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(M(e=i.call.apply(i,[this].concat(n))),"state",{isSelected:e.props.isSelected,isSelecting:!1}),_(M(e),"node",null),_(M(e),"bounds",null),_(M(e),"updateBounds",(function(t){e.bounds=o(e.node,t)})),_(M(e),"getSelectableRef",(function(t){e.node=t})),e}return r=s,(l=[{key:"componentDidMount",value:function(){this.updateBounds(),this.context.selectable.register(this)}},{key:"componentWillUnmount",value:function(){this.context.selectable.unregister(this)}},{key:"render",value:function(){return t().createElement(n,R({},this.props,this.state,{selectableRef:this.getSelectableRef}))}}])&&D(r.prototype,l),s}(e.Component),_(r,"contextType",d),_(r,"defaultProps",{isSelected:!1}),r};function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},F.apply(this,arguments)}function U(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function Y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(c,e);var o,n,r,l=(r=c,function(){var e,t=X(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()){var o=X(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?G(e):t}(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return Y(G(e=l.call.apply(l,[this].concat(o))),"root",null),Y(G(e),"getRootRef",(function(t){e.root=t})),e}return o=c,(n=[{key:"componentDidMount",value:function(){this.root.addEventListener("mousedown",(function(e){return e.stopPropagation()}))}},{key:"render",value:function(){var e=this.props,o=e.component,n=void 0===o?"div":o,r=e.children,l=e.className,c=void 0===l?"":l,i=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["component","children","className"]),s=n;return t().createElement(s,F({ref:this.getRootRef,className:"selectable-select-all ".concat(c),onClick:this.context.selectable.selectAll},i),r)}}])&&U(o.prototype,n),c}(e.Component);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},K.apply(this,arguments)}function q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function J(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Y(H,"contextType",d);var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(c,e);var o,n,r,l=(r=c,function(){var e,t=Z(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()){var o=Z(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?$(e):t}(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return J($(e=l.call.apply(l,[this].concat(o))),"root",null),J($(e),"getRootRef",(function(t){e.root=t})),e}return o=c,(n=[{key:"componentDidMount",value:function(){this.root.addEventListener("mousedown",(function(e){return e.stopPropagation()}))}},{key:"render",value:function(){var e=this.props,o=e.component,n=void 0===o?"div":o,r=e.children,l=e.className,c=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["component","children","className"]),i=n;return t().createElement(i,K({ref:this.getRootRef,className:"selectable-select-all ".concat(l),onClick:this.context.selectable.clearSelection},c),r)}}])&&q(o.prototype,n),c}(e.Component);J(Q,"contextType",d);var ee=n(388)})(),r})()));
//# sourceMappingURL=react-selectable-fast.js.map