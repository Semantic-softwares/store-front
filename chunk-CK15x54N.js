import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as Lg,A as GF,Bt as Wt,C as Dr,Cn as ge,Cr as zg,D as Fg,Dn as iw,Dt as Tt,En as hr,Fn as kh,Ft as VI,Gn as nh,H as J,Hn as me$1,Ht as XD,I as He,It as Vg,J as Kc,K as Jp,Lt as WF,Mn as jm,N as Gp,Nt as Uu,O as Fm,Ot as Tu,P as Gv,Q as Kp,Qn as qc,R as Hi$1,Rn as ku,Rt as WI,Sr as zc,St as Qu,T as Dy,Tn as hg,Ut as Xg,V as In,Vn as lw,W as Jg,Wn as nT,Wt as Xp,X as Kg,Y as Ke,Yt as Za$1,Z as Kl,Zn as qF,_n as dw,a as $l,ar as ss,bt as Qc,c as BF,cn as bi$1,d as Bl,dr as ue$1,dt as Oh,er as rT,fn as cD,ft as Pe$1,gn as da$1,gr as wu,gt as Pw,h as C$1,hr as w,ir as sh,it as Mv,jn as jl,jt as Ug,kn as jF,kt as U$1,l as BI,lt as O,mn as cw,mr as vD,mt as Pn,nr as rr,on as be,ot as Ng,pn as cs,pt as Pm,q as Jw,rn as _w,rr as rw,s as An$1,sr as sw,st as Nh,tt as Lu,u as Bg,ur as uD,v as Cg,vn as ee$1,vr as xr,w as Dt$1,wn as gr,wr as zp,y as Ch,yn as eh,yr as yo$1,z as Hm,zt as Wg}from"./chunk-CYcRF35F.js";import{a as Dt$2,d as di$1,f as ds,g as nc,h as gc,l as Ve$1,m as fr,p as fn$1,u as Yn,v as tc}from"./main-6WURQUZI.js";var tn;try{tn=typeof Intl<`u`&&Intl.v8BreakIterator}catch(a){tn=!1}var C=(()=>{class a{_platformId=w(Pm);isBrowser=this._platformId?ds(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||tn)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var en;function ra(){if(en==null){let a=typeof document<`u`?document.head:null;en=!!(a&&(a.createShadowRoot||a.attachShadow))}return en}function nn(a){if(ra()){let n=a.getRootNode?a.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Jt(){let a=typeof document<`u`&&document?document.activeElement:null;for(;a&&a.shadowRoot;){let n=a.shadowRoot.activeElement;if(n===a)break;a=n}return a}function V$1(a){if(a.composedPath)try{return a.composedPath()[0]}catch(n){}return a.target}function an(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function N(a){return a==null?``:typeof a==`string`?a:`${a}px`}function Pt(a){return Array.isArray(a)?a:[a]}function te(a,n=0){return sa(a)?Number(a):arguments.length===2?n:0}function sa(a){return!isNaN(parseFloat(a))&&!isNaN(Number(a))}function Q$1(a){return a instanceof Dr?a.nativeElement:a}var Ct;function la(){if(Ct==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Ct=!1,Ct;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Ct=!0;else{let a=Element.prototype.scrollTo;a?Ct=!/\{\s*\[native code\]\s*\}/.test(a.toString()):Ct=!1}}return Ct}var Ei=20;var rn=(()=>{class a{_ngZone=w(J);_platform=w(C);_renderer=w(gr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$1;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Ei){return this._platform.isBrowser?new C$1(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(Bg(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Cg()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Pn(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let i=Q$1(e),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Di=20;var ee=(()=>{class a{_platform=w(C);_listeners;_viewportSize=null;_change=new ee$1;_document=w(rr);constructor(){let t=w(J),e=w(gr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,i),e.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0}}change(t=Di){return t>0?this._change.pipe(Bg(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var ca=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({})}return a})();var sn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({imports:[Yn,ca,Yn,ca]})}return a})();var da=new Map;var q=class a{_appId=w(Uu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!==`ng`&&(n+=this._appId);let e=da.get(n);return e===void 0?e=0:e++,da.set(n,e),`${n}${t?a._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})};var ne=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var at=class extends ne{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,e,i,o,r){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=i,this.bindings=o||null,this.directives=r||null}};var st=class extends ne{templateRef;viewContainerRef;context;injector;constructor(n,t,e,i){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var ln=class extends ne{element;constructor(n){super(),this.element=n instanceof Dr?n.nativeElement:n}};var lt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof at)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof st)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof ln)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ne=class extends lt{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,i=e.get(In,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,i=n.injector||this._defaultInjector||me$1.NULL,o=i.get(ge,e.injector);t=qF(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(i=>this.outletElement.appendChild(i)),e.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(e);i!==-1&&t.remove(i)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ct=(()=>{class a extends lt{_moduleRef=w(In,{optional:!0});_document=w(rr);_viewContainerRef=w(Hi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Pe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(i,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(i){return(t||(t=Dy(a)))(i||a)}})();static ɵdir=WI({type:a,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Gp]})}return a})();var dt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({})}return a})();function Me(a,...n){return n.length?n.some(t=>a[t]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var ma=la();function Bt(a){return new Ae(a.get(ee),a.get(rr))}var Ae=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=N(-this._previousScrollPosition.left),n.style.top=N(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,i=t.style,o=e.scrollBehavior||``,r=i.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),ma&&(e.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ma&&(e.scrollBehavior=o,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function va(a,n){return new Re(a.get(rn),a.get(J),a.get(ee),n)}var Re=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,i){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Pn(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ae=class{enable(){}disable(){}attach(){}};function dn(a,n){return n.some(t=>{let e=a.bottom<t.top,i=a.top>t.bottom,o=a.right<t.left,r=a.left>t.right;return e||i||o||r})}function ua(a,n){return n.some(t=>{let e=a.top<t.top,i=a.bottom>t.bottom,o=a.left<t.left,r=a.right>t.right;return e||i||o||r})}function _a(a,n){return new Ie(a.get(rn),a.get(ee),a.get(J),n)}var Ie=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,i){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();dn(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ya=(()=>{class a{_injector=w(me$1);noop=()=>new ae;close=t=>va(this._injector,t);block=()=>Bt(this._injector);reposition=t=>_a(this._injector,t);static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var mt=class{positionStrategy;scrollStrategy=new ae;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Te=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var xa=(()=>{class a{_attachedOverlays=[];_document=w(rr);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Sa=(()=>{class a extends xa{_ngZone=w(J);_renderer=w(gr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let o=e[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var wa=(()=>{class a extends xa{_platform=w(C);_ngZone=w(J);_renderer=w(gr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,i),o.listen(e,`click`,this._clickListener,i),o.listen(e,`auxclick`,this._clickListener,i),o.listen(e,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=V$1(t)};_clickListener=t=>{let e=V$1(t),i=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let s=o[r],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(pa(s.overlayElement,e)||pa(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();function pa(a,n){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=n;for(;e;){if(e===a)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var ka=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=VI({type:a,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return a})();var Be=(()=>{class a{_platform=w(C);_containerElement;_document=w(rr);_styleLoader=w(di$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||an()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),an()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(ka)}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var mn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,i){this._renderer=t,this._ngZone=e,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function un(a){return a&&a.nodeType===1}var cn=da$1([]);var Ft=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$1;_attachments=new ee$1;_detachments=new ee$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$1;_outsidePointerEvents=new ee$1;_afterNextRenderRef;constructor(n,t,e,i,o,r,s,c,u,d=!1,h,E){this._portalOutlet=n,this._host=t,this._pane=e,this._config=i,this._ngZone=o,this._keyboardDispatcher=r,this._document=s,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=h,this._renderer=E,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),rT(()=>{cn.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Mv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),rT(()=>{cn.update(t=>t.filter(e=>e!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,rT(()=>{cn.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=r(r({},this._config),n),this._updateElementSize()}setDirection(n){this._config=s(r({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=N(this._config.width),n.height=N(this._config.height),n.minWidth=N(this._config.minWidth),n.minHeight=N(this._config.minHeight),n.maxWidth=N(this._config.maxWidth),n.maxHeight=N(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;un(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new mn(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let i=Pt(t||[]).filter(o=>!!o);i.length&&(e?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Mv(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var ha=`cdk-overlay-connected-position-bounding-box`;var Oi=/([A-Za-z%]+)$/;function Ca(a,n){return new Pe(n,a.get(ee),a.get(rr),a.get(C),a.get(Be))}var Pe=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$1;_resizeSubscription=U$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,i,o){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(ha),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,o=[],r;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,i,s),u=this._getOverlayPoint(c,t,s),d=this._getOverlayFit(u,t,e,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,u,e)){o.push({position:s,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:u,originPoint:c,position:s,overlayRect:t})}if(o.length){let s=null,c=-1;for(let u of o){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,s=u)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Et(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ha),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Dr?this._origin.nativeElement:un(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let i;if(e.originX==`center`)i=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=e.originX==`start`?r:s}t.left<0&&(i-=t.left);let o;return e.originY==`center`?o=n.top+n.height/2:o=e.originY==`top`?n.top:n.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(n,t,e){let i;e.overlayX==`center`?i=-t.width/2:e.overlayX===`start`?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,t,e,i){let o=fa(t),{x:r,y:s}=n,c=this._getOffset(i,`x`),u=this._getOffset(i,`y`);c&&(r+=c),u&&(s+=u);let d=0-r,h=r+o.width-e.width,E=0-s,M=s+o.height-e.height,O=this._subtractOverflows(o.width,d,h),S=this._subtractOverflows(o.height,E,M),Y=O*S;return{visibleArea:Y,isCompletelyWithinViewport:o.width*o.height===Y,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:O==o.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,o=e.right-t.x,r=ba(this._overlayRef.getConfig().minHeight),s=ba(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||r!=null&&r<=i,u=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&u}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=fa(t),o=this._viewportRect,r=Math.max(n.x+i.width-o.width,0),s=Math.max(n.y+i.height-o.height,0),c=Math.max(o.top-e.top-n.y,0),u=Math.max(o.left-e.left-n.x,0),d=0,h=0;return i.width<=o.width?d=u||-r:d=n.x<this._getViewportMarginStart()?o.left-e.left-n.x:0,i.height<=o.height?h=c||-s:h=n.y<this._getViewportMarginTop()?o.top-e.top-n.y:0,this._previousPushAmount={x:d,y:h},{x:n.x+d,y:n.y+h}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ni(this._lastScrollVisibility,e)){let i=new Te(n,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=n.overlayY;n.overlayX===`center`?e=`center`:this._isRtl()?e=n.overlayX===`start`?`right`:`left`:e=n.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,i=this._isRtl(),o,r,s;if(t.overlayY===`top`)r=n.y,o=e.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-s+this._getViewportMarginTop();else{let M=Math.min(e.bottom-n.y+e.top,n.y),O=this._lastBoundingBoxSize.height;o=M*2,r=n.y-M,o>O&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-O/2)}let c=t.overlayX===`start`&&!i||t.overlayX===`end`&&i,u=t.overlayX===`end`&&!i||t.overlayX===`start`&&i,d,h,E;if(u)E=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)h=n.x,d=e.right-n.x-this._getViewportMarginEnd();else{let M=Math.min(e.right-n.x+e.left,n.x),O=this._lastBoundingBoxSize.width;d=M*2,h=n.x-M,d>O&&!this._isInitialRender&&!this._growAfterOpen&&(h=n.x-O/2)}return{top:r,left:h,bottom:s,right:E,width:d,height:o}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=N(e.width),i.height=N(e.height),i.top=N(e.top)||`auto`,i.bottom=N(e.bottom)||`auto`,i.left=N(e.left)||`auto`,i.right=N(e.right)||`auto`,t.overlayX===`center`?i.alignItems=`center`:i.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(i.maxHeight=N(o)),r&&(i.maxWidth=N(r))}this._lastBoundingBoxSize=e,Et(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Et(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Et(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,t){let e={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Et(e,this._getExactOverlayY(t,n,d)),Et(e,this._getExactOverlayX(t,n,d))}else e.position=`static`;let s=``,c=this._getOffset(t,`x`),u=this._getOffset(t,`y`);c&&(s+=`translateX(${c}px) `),u&&(s+=`translateY(${u}px)`),e.transform=s.trim(),r.maxHeight&&(i?e.maxHeight=N(r.maxHeight):o&&(e.maxHeight=``)),r.maxWidth&&(i?e.maxWidth=N(r.maxWidth):o&&(e.maxWidth=``)),Et(this._pane.style,e)}_getExactOverlayY(n,t,e){let i={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),n.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else i.top=N(o.y);return i}_getExactOverlayX(n,t,e){let i={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let r;if(this._isRtl()?r=n.overlayX===`end`?`left`:`right`:r=n.overlayX===`end`?`right`:`left`,r===`right`)i.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else i.left=N(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ua(n,e),isOriginOutsideView:dn(n,e),isOverlayClipped:ua(t,e),isOverlayOutsideView:dn(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,i)=>e-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Pt(n).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof Dr)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();n&&(t.style.display=`block`);let e=t.getBoundingClientRect();return n&&(t.style.display=``),e}};function Et(a,n){for(let t in n)Object.hasOwn(n,t)&&(a[t]=n[t]);return a}function ba(a){if(typeof a!=`number`&&a!=null){let[n,t]=a.split(Oi);return!t||t===`px`?parseFloat(n):null}return a||null}function fa(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Ni(a,n){return a===n?!0:a.isOriginClipped===n.isOriginClipped&&a.isOriginOutsideView===n.isOriginOutsideView&&a.isOverlayClipped===n.isOverlayClipped&&a.isOverlayOutsideView===n.isOverlayOutsideView}var ga=`cdk-global-overlay-wrapper`;function ut(a){return new Fe}var Fe=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(ga),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:i,height:o,maxWidth:r,maxHeight:s}=this._overlayRef.getConfig(),c=(i===`100%`||i===`100vw`)&&(!r||r===`100%`||r===`100vw`),u=(o===`100%`||o===`100vh`)&&(!s||s===`100%`||s===`100vh`),d=this._xPosition,h=this._xOffset,E=this._overlayRef.getConfig().direction===`rtl`,M=``,O=``,S=``;c?S=`flex-start`:d===`center`?(S=`center`,E?O=h:M=h):E?d===`left`||d===`end`?(S=`flex-end`,M=h):(d===`right`||d===`start`)&&(S=`flex-start`,O=h):d===`left`||d===`start`?(S=`flex-start`,M=h):(d===`right`||d===`end`)&&(S=`flex-end`,O=h),n.position=this._cssPosition,n.marginLeft=c?`0`:M,n.marginTop=u?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?`0`:O,t.justifyContent=S,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ga),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ea=(()=>{class a{_injector=w(me$1);global(){return ut()}flexibleConnectedTo(t){return Ca(this._injector,t)}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Da=new O(`OVERLAY_DEFAULT_CONFIG`);function Lt(a,n){a.get(di$1).load(ka);let t=a.get(Be),e=a.get(rr),i=a.get(q),o=a.get(xr),r=a.get(gc),s=a.get(Za$1,null,{optional:!0})||a.get(gr).createRenderer(null,null),c=new mt(n),u=a.get(Da,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=n?.usePopover??u;let d=e.createElement(`div`),h=e.createElement(`div`);d.id=i.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),h.appendChild(d),c.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let E=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return un(E)?E.after(h):E?.type===`parent`?E.element.appendChild(h):t.getContainerElement().appendChild(h),new Ft(new Ne(d,o,a),h,d,c,a.get(J),a.get(Sa),e,a.get(fn$1),a.get(wa),n?.disableAnimations??a.get(Fm,null,{optional:!0})===`NoopAnimations`,a.get(ge),s)}var Oa=(()=>{class a{scrollStrategies=w(ya);_positionBuilder=w(Ea);_injector=w(me$1);create(t){return Lt(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var zt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({providers:[Oa],imports:[Yn,dt,sn,sn]})}return a})();function ie(a){return a.buttons===0||a.detail===0}function oe(a){let n=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var re;function Na(){if(re==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>re=!0}))}finally{re=re||!1}return re}function Vt(a){return Na()?a:!!a.capture}var Ma=new O(`cdk-input-modality-detector-options`);var Aa={ignoreKeys:[18,17,224,91,16]};var Ra=650;var pn={passive:!0,capture:!0};var Ia=(()=>{class a{_platform=w(C);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new An$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=V$1(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Ra||(this._modality.next(ie(t)?`keyboard`:`mouse`),this._mostRecentTarget=V$1(t))};_onTouchstart=t=>{if(oe(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=V$1(t)};constructor(){let t=w(J),e=w(rr),i=w(Ma,{optional:!0});if(this._options=r(r({},Aa),i),this.modalityDetected=this._modality.pipe(Kg(1)),this.modalityChanged=this.modalityDetected.pipe(Wg()),this._platform.isBrowser){let o=w(gr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,`keydown`,this._onKeydown,pn),o.listen(e,`mousedown`,this._onMousedown,pn),o.listen(e,`touchstart`,this._onTouchstart,pn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var se=(function(a){return a[a.IMMEDIATE=0]=`IMMEDIATE`,a[a.EVENTUAL=1]=`EVENTUAL`,a})(se||{});var Ta=new O(`cdk-focus-monitor-default-options`);var Le=Vt({passive:!0,capture:!0});var le=(()=>{class a{_ngZone=w(J);_platform=w(C);_inputModalityDetector=w(Ia);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=w(rr);_stopInputModalityDetector=new ee$1;constructor(){let t=w(Ta,{optional:!0});this._detectionMode=t?.detectionMode||se.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=V$1(t);for(let i=e;i;i=i.parentElement)t.type===`focus`?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,e=!1){let i=Q$1(t);if(!this._platform.isBrowser||i.nodeType!==1)return Cg();let o=nn(i)||this._document,r=this._elementInfo.get(i);if(r)return e&&(r.checkChildren=!0),r.subject;let s={checkChildren:e,subject:new ee$1,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let e=Q$1(t),i=this._elementInfo.get(e);i&&(i.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(i))}focusVia(t,e,i){let o=Q$1(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,e,c)):(this._setOrigin(e),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===se.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===se.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Ra:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,e){let i=this._elementInfo.get(e),o=V$1(t);!i||!i.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),i)}_onBlur(t,e){let i=this._elementInfo.get(e);!i||i.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(i,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,i=this._rootNodeFocusListenerCount.get(e)||0;i||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Le),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Le)}),this._rootNodeFocusListenerCount.set(e,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Xg(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let i=this._rootNodeFocusListenerCount.get(e);i>1?this._rootNodeFocusListenerCount.set(e,i-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Le),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Le),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,i){this._setClasses(t,e),this._emitOrigin(i,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&e.push([o,i])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Pa=new Set;var Dt;var ze=(()=>{class a{_platform=w(C);_nonce=w(jm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ai}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Mi(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();function Mi(a,n){if(!Pa.has(a))try{Dt||(Dt=document.createElement(`style`),n&&Dt.setAttribute(`nonce`,n),Dt.setAttribute(`type`,`text/css`),document.head.appendChild(Dt)),Dt.sheet&&(Dt.sheet.insertRule(`@media ${a.replace(/[{}]/g,``)} {body{ }}`,0),Pa.add(a))}catch(t){console.error(t)}}function Ai(a){return{matches:a===`all`||a===``,media:a,addListener:()=>{},removeListener:()=>{}}}var ce=(()=>{class a{_mediaMatcher=w(ze);_zone=w(J);_queries=new Map;_destroySubject=new ee$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Fa(Pt(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=Fa(Pt(t)).map(r=>this._registerQuery(r).observable),o=Lg(i);return o=yo$1(o.pipe(cs(1)),o.pipe(Kg(1),Ug(0))),o.pipe(Tt(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:c,query:u})=>{s.matches=s.matches||c,s.breakpoints[u]=c}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new C$1(r=>{let s=c=>this._zone.run(()=>r.next(c));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(Jg(e),Tt(({matches:r})=>({query:t,matches:r})),Xg(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();function Fa(a){return a.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Ri=(()=>{class a{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Ba=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({providers:[Ri]})}return a})();var fn=(()=>{class a{_platform=w(C);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Ti(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Ii(Ui(t));if(e&&(La(e)===-1||!this.isVisible(e)))return!1;let i=t.nodeName.toLowerCase(),o=La(t);return t.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Vi(t)?!1:i===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return ji(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();function Ii(a){try{return a.frameElement}catch(n){return null}}function Ti(a){return!!(a.offsetWidth||a.offsetHeight||typeof a.getClientRects==`function`&&a.getClientRects().length)}function Pi(a){let n=a.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Fi(a){return Li(a)&&a.type==`hidden`}function Bi(a){return zi(a)&&a.hasAttribute(`href`)}function Li(a){return a.nodeName.toLowerCase()==`input`}function zi(a){return a.nodeName.toLowerCase()==`a`}function ja(a){if(!a.hasAttribute(`tabindex`)||a.tabIndex===void 0)return!1;let n=a.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function La(a){if(!ja(a))return null;let n=parseInt(a.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function Vi(a){let n=a.nodeName.toLowerCase(),t=n===`input`&&a.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function ji(a){return Fi(a)?!1:Pi(a)||Bi(a)||a.hasAttribute(`contenteditable`)||ja(a)}function Ui(a){return a.ownerDocument&&a.ownerDocument.defaultView||window}var bn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,i,o=!1,r){this._element=n,this._checker=t,this._ngZone=e,this._document=i,this._injector=r,o||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Mv(n,{injector:this._injector})}};var gn=(()=>{class a{_checker=w(fn);_ngZone=w(J);_document=w(rr);_injector=w(me$1);constructor(){w(di$1).load(tc)}create(t,e=!1){return new bn(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Ua=new O(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Wa=new O(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Wi=0;var vn=(()=>{class a{_ngZone=w(J);_defaultOptions=w(Wa,{optional:!0});_liveElement;_document=w(rr);_sanitizer=w(Dt$2);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=w(Ua,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let i=this._defaultOptions,o,r;return e.length===1&&typeof e[0]==`number`?r=e[0]:[o,r]=e,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),r==null&&i&&(r=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:nc(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),i=this._document.createElement(`div`);for(let o=0;o<e.length;o++)e[o].remove();return i.classList.add(t),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${Wi++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<e.length;i++){let o=e[i],r=o.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&o.setAttribute(`aria-owns`,r+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var pt=(function(a){return a[a.NONE=0]=`NONE`,a[a.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,a[a.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,a})(pt||{});var za=`cdk-high-contrast-black-on-white`;var Va=`cdk-high-contrast-white-on-black`;var hn=`cdk-high-contrast-active`;var Ha=(()=>{class a{_platform=w(C);_hasCheckedHighContrastMode=!1;_document=w(rr);_breakpointSubscription;constructor(){this._breakpointSubscription=w(ce).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return pt.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,i=e&&e.getComputedStyle?e.getComputedStyle(t):null,o=(i&&i.backgroundColor||``).replace(/ /g,``);switch(t.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return pt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return pt.BLACK_ON_WHITE}return pt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(hn,za,Va),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===pt.BLACK_ON_WHITE?t.add(hn,za):e===pt.WHITE_ON_BLACK&&t.add(hn,Va)}}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var _n=(()=>{class a{constructor(){w(Ha)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({imports:[Ba]})}return a})();var ht=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var xn=(()=>{class a extends lt{_elementRef=w(Dr);_focusTrapFactory=w(gn);_config;_interactivityChecker=w(fn);_ngZone=w(J);_focusMonitor=w(le);_renderer=w(Za$1);_changeDetectorRef=w(BF);_injector=w(me$1);_platform=w(C);_document=w(rr);_portalOutlet;_focusTrapped=new ee$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=w(ht,{optional:!0})||new ht,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),r(),t.removeAttribute(`tabindex`)},o=this._renderer.listen(t,`blur`,i),r=this._renderer.listen(t,`mousedown`,i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||Mv(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let i=Jt(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Jt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Jt()))}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){function t(e,i){}return VI({type:a,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,o){if(i&1&&Nh(ct,7),i&2){let r;cw(r=lw())&&(o._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,o){i&2&&Kp(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[Gp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&zp(0,t,0,0,`ng-template`,0)},dependencies:[ct],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Ot=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new ee$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Me(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n=``,t=``){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}};var Hi=new O(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let a=w(me$1);return()=>Bt(a)}});var Yi=new O(`DialogData`);var Xi=new O(`DefaultDialogConfig`);function Ki(a){let n=da$1(a),t=new Pe$1;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Sn=(()=>{class a{_injector=w(me$1);_defaultOptions=w(Xi,{optional:!0});_parentDialog=w(a,{optional:!0,skipSelf:!0});_overlayContainer=w(Be);_idGenerator=w(q);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ee$1;_afterOpenedAtThisLevel=new ee$1;_ariaHiddenElements=new Map;_scrollStrategy=w(Hi);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Fg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Jg(void 0)));open(t,e){let i=this._defaultOptions||new ht;e=r(r({},i),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),r$1=Lt(this._injector,o),s=new Ot(r$1,e),c=this._attachContainer(r$1,s,e);if(s.containerInstance=c,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(cs(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(t,s,c,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){yn(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){yn(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),yn(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new mt({positionStrategy:t.positionStrategy||ut().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,r=[{provide:ht,useValue:i},{provide:Ot,useValue:e},{provide:Ft,useValue:t}],s;i.container?typeof i.container==`function`?s=i.container:(s=i.container.type,r.push(...i.container.providers(i))):s=xn;let c=new at(s,i.viewContainerRef,me$1.create({parent:o||this._injector,providers:r}));return t.attach(c).instance}_attachDialogContent(t,e,i,o){if(t instanceof hr){let r$2=this._createInjector(o,e,i,void 0),s={$implicit:o.data,dialogRef:e};o.templateContext&&(s=r(r({},s),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),i.attachTemplatePortal(new st(t,null,s,r$2))}else{let r=this._createInjector(o,e,i,this._injector),s=i.attachComponentPortal(new at(t,o.viewContainerRef,r,null,o.bindings));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,i,o){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:Yi,useValue:t.data},{provide:Ot,useValue:e}];return t.providers&&(typeof t.providers==`function`?s.push(...t.providers(e,t,i)):s.push(...t.providers)),t.direction&&(!r||!r.get(gc,null,{optional:!0}))&&s.push({provide:gc,useValue:Ki(t.direction)}),me$1.create({parent:r||o,providers:s})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute(`aria-hidden`,o):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();function yn(a,n){let t=a.length;for(;t--;)n(a[t])}var Xa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({providers:[Sn],imports:[zt,dt,_n,dt]})}return a})();var Ka={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Gi=new O(`MATERIAL_ANIMATIONS`);var Ga=null;function Zi(){return w(Gi,{optional:!0})?.animationsDisabled||w(Fm,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ga??=w(ze).matchMedia(`(prefers-reduced-motion)`).matches,Ga?`reduced-motion`:`enabled`)}function W(){return Zi()!==`enabled`}var je=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var wn=`mdc-dialog--open`;var Za=`mdc-dialog--opening`;var $a=`mdc-dialog--closing`;var $i=150;var qi=75;var Qi=(()=>{class a extends xn{_animationStateChanged=new Pe$1;_animationsEnabled=!W();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Qa(this._config.enterAnimationDuration)??$i:0;_exitAnimationDuration=this._animationsEnabled?Qa(this._config.exitAnimationDuration)??qi:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(qa,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Za,wn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(wn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(wn),this._animationsEnabled?(this._hostElement.style.setProperty(qa,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($a)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Za,$a)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(i){return(t||(t=Dy(a)))(i||a)}})();static ɵcmp=(function(){function t(e,i){}return VI({type:a,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,o){i&2&&(sh(`id`,o._config.id),Kp(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),kh(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[Gp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(bi$1(0,`div`,0)(1,`div`,1),zp(2,t,0,0,`ng-template`,2),qc()())},dependencies:[ct],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var qa=`--mat-dialog-transition-duration`;function Qa(a){return a==null?null:typeof a==`number`?a:a.endsWith(`ms`)?te(a.substring(0,a.length-2)):a.endsWith(`s`)?te(a.substring(0,a.length-1))*1e3:a===`0`?0:null}var Ve=(function(a){return a[a.OPEN=0]=`OPEN`,a[a.CLOSING=1]=`CLOSING`,a[a.CLOSED=2]=`CLOSED`,a})(Ve||{});var kn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ss(1);_beforeClosed=new ss(1);_result;_closeFallbackTimeout;_state=Ve.OPEN;_closeInteractionType;constructor(n,t,e){this._ref=n,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(Pn(i=>i.state===`opened`),cs(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Pn(i=>i.state===`closed`),cs(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Vg(this.backdropClick(),this.keydownEvents().pipe(Pn(i=>i.keyCode===27&&!this.disableClose&&!Me(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Ji(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Pn(e=>e.state===`closing`),cs(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=Ve.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n=``,t=``){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Ve.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ji(a,n,t){return a._closeInteractionType=n,a.close(t)}var to=new O(`MatMdcDialogData`);var eo=new O(`mat-mdc-dialog-default-options`);var no=new O(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=w(me$1);return()=>Bt(a)}});var ao=(()=>{class a{_defaultOptions=w(eo,{optional:!0});_scrollStrategy=w(no);_parentDialog=w(a,{optional:!0,skipSelf:!0});_idGenerator=w(q);_injector=w(me$1);_dialog=w(Sn);_animationsDisabled=W();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ee$1;_afterOpenedAtThisLevel=new ee$1;dialogConfigClass=je;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Fg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Jg(void 0)));constructor(){this._dialogRefConstructor=kn,this._dialogContainerType=Qi,this._dialogDataToken=to}open(t,e){let i;e=r(r({},this._defaultOptions||new je),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,s(r({},e),{positionStrategy:ut(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:ht,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,s,c)=>(i=new this._dialogRefConstructor(r,e,c),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i},{provide:Ot,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var Gl=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=BI({type:a});static ɵinj=Kl({providers:[ao],imports:[Xa,zt,dt,Yn]})}return a})();var H=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(H||{});var Cn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=H.HIDDEN;constructor(n,t,e,i=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var Ja=Vt({passive:!0,capture:!0});var En=class{_events=new Map;addHandler(n,t,e,i){let o=this._events.get(t);if(o){let r=o.get(e);r?r.add(i):o.set(e,new Set([i]))}else this._events.set(t,new Map([[e,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ja)})}removeHandler(n,t,e){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(e),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ja)))}_delegateEventHandler=n=>{let t=V$1(n);t&&this._events.get(n.type)?.forEach((e,i)=>{(i===t||i.contains(t))&&e.forEach(o=>o.handleEvent(n))})}};var de={enterDuration:225,exitDuration:150};var io=800;var ti=Vt({passive:!0,capture:!0});var ei=[`mousedown`,`touchstart`];var ni=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var oo=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=VI({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var me=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new En;constructor(n,t,e,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=Q$1(e)),o&&o.get(di$1).load(oo)}fadeInRipple(n,t,e={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=r(r({},de),e.animation);e.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let r$3=e.radius||ro(n,t,i),s=n-i.left,c=t-i.top,u=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${s-r$3}px`,d.style.top=`${c-r$3}px`,d.style.height=`${r$3*2}px`,d.style.width=`${r$3*2}px`,e.color!=null&&(d.style.backgroundColor=e.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let h=window.getComputedStyle(d),E=h.transitionProperty,M=h.transitionDuration,O=E===`none`||M===`0s`||M===`0s, 0s`||i.width===0&&i.height===0,S=new Cn(this,d,e,O);d.style.transform=`scale3d(1, 1, 1)`,S.state=H.FADING_IN,e.persistent||(this._mostRecentTransientRipple=S);let Y=null;return!O&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let be=()=>{Y&&(Y.fallbackTimer=null),clearTimeout(fe),this._finishRippleTransition(S)},Ut=()=>this._destroyRipple(S),fe=setTimeout(Ut,u+100);d.addEventListener(`transitionend`,be),d.addEventListener(`transitioncancel`,Ut),Y={onTransitionEnd:be,onTransitionCancel:Ut,fallbackTimer:fe}}),this._activeRipples.set(S,Y),(O||!u)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===H.FADING_OUT||n.state===H.HIDDEN)return;let t=n.element,e=r(r({},de),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,n.state=H.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=Q$1(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ei.forEach(e=>{a._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ni.forEach(t=>{this._triggerElement.addEventListener(t,this,ti)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===H.FADING_IN?this._startFadeOutTransition(n):n.state===H.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=H.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=H.HIDDEN,t!==null&&(n.element.removeEventListener(`transitionend`,t.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ie(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+io;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!oe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===H.VISIBLE||n.config.terminateOnPointerUp&&n.state===H.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ei.forEach(t=>a._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(ni.forEach(t=>n.removeEventListener(t,this,ti)),this._pointerUpEventsRegistered=!1))}};function ro(a,n,t){let e=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+i*i)}var Dn=new O(`mat-ripple-global-options`);var mc=(()=>{class a{_elementRef=w(Dr);_animationsDisabled=W();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=w(J),e=w(C),i=w(Dn,{optional:!0}),o=w(me$1);this._globalOptions=i||{},this._rippleRenderer=new me(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r(r(r({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,i){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,r(r({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,r(r({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||a)};static ɵdir=WI({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,i){e&2&&kh(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var so={capture:!0};var lo=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var On=`mat-ripple-loader-uninitialized`;var Nn=`mat-ripple-loader-class-name`;var ai=`mat-ripple-loader-centered`;var Ue=`mat-ripple-loader-disabled`;var ii=(()=>{class a{_document=w(rr);_animationsDisabled=W();_globalRippleOptions=w(Dn,{optional:!0});_platform=w(C);_ngZone=w(J);_injector=w(me$1);_eventCleanups;_hosts=new Map;constructor(){let t=w(gr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lo.map(e=>t.listen(this._document,e,this._onInteraction,so)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(On,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(Nn))&&t.setAttribute(Nn,e.className||``),e.centered&&t.setAttribute(ai,``),e.disabled&&t.setAttribute(Ue,``)}setDisabled(t,e){let i=this._hosts.get(t);i?(i.target.rippleDisabled=e,!e&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ue,``):t.removeAttribute(Ue)}_onInteraction=t=>{let e=V$1(t);if(e instanceof HTMLElement){let i=e.closest(`[${On}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(Nn)),t.append(e);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??de.enterDuration,r=this._animationsDisabled?0:i?.animation?.exitDuration??de.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Ue),rippleConfig:{centered:t.hasAttribute(ai),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},c=new me(s,this._ngZone,e,this._platform,this._injector),u=!s.rippleDisabled;u&&c.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:c,hasSetUpEvents:u}),t.removeAttribute(On)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var oi=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=VI({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var co=new O(`MAT_BUTTON_CONFIG`);function ri(a){return a==null?void 0:GF(a)}var si=(()=>{class a{_elementRef=w(Dr);_ngZone=w(J);_animationsDisabled=W();_config=w(co,{optional:!0});_focusMonitor=w(le);_cleanupClick;_renderer=w(Za$1);_rippleLoader=w(ii);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=jF(!1,{transform:WF});constructor(){w(di$1).load(oi);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||a)};static ɵdir=WI({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,i){e&2&&(Kp(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),_w(i.color?`mat-`+i.color:``),kh(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,WF],disabled:[2,`disabled`,`disabled`,WF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,WF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,WF],tabIndex:[2,`tabIndex`,`tabIndex`,ri],_tabindex:[2,`tabindex`,`_tabindex`,ri],showProgress:[1,`showProgress`]}})}return a})();var li=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var ci=(()=>{class a extends si{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=mo(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,i=this._appearance?li.get(this._appearance):null,o=li.get(t);i&&e.remove(...i),e.add(...o),this._appearance=t}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,r){o&1&&(zc(0,`div`,2),sw(1,3),Qc())}return VI({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Gp],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(iw(t),eh(0,`span`,0),sw(1),zc(2,`span`,1),sw(3,1),Qc(),sw(4,2),cD(5,i,2,0,`div`,2),eh(6,`span`,3)(7,`span`,4)),r&2&&(kh(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),Gv(5),uD(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return a})();function mo(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var uo=Math.pow(2,31)-1;var ue=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee$1;_afterOpened=new ee$1;_onAction=new ee$1;_durationTimeoutId;_dismissedByAction=!1;constructor(n,t){this._overlayRef=t,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,uo))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var di=new O(`MatSnackBarData`);var jt=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var po=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=WI({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var ho=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=WI({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var bo=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=WI({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var fo=(()=>{class a{snackBarRef=w(ue);data=w(di);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){function t(e,i){if(e&1){let o=vD();bi$1(0,`div`,1)(1,`button`,2),Ch(`click`,function(){wu(o);let s=rw();return Tu(s.action())}),Pw(2),qc()()}if(e&2){let o=rw();Gv(2),Kc(` `,o.data.action,` `)}}return VI({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(i,o){i&1&&(bi$1(0,`div`,0),Pw(1),qc(),cD(2,t,3,1,`div`,1)),i&2&&(Gv(),Kc(` `,o.data.message,`
`),Gv(),uD(o.hasAction?2:-1))},dependencies:[ci,po,ho,bo],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Mn=`_mat-snack-bar-enter`;var An=`_mat-snack-bar-exit`;var go=(()=>{class a extends lt{_ngZone=w(J);_elementRef=w(Dr);_changeDetectorRef=w(BF);_platform=w(C);_animationsDisabled=W();snackBarConfig=w(jt);_document=w(rr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=w(me$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee$1;_onExit=new ee$1;_onEnter=new ee$1;_animationState=`void`;_live;_label;_role;_liveElementId=w(q).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===An?this._completeExit():t===Mn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Mv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Mn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Mn)},200)))}exit(){return this._destroyed?Cg(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Mv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(An)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(An),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let i=this._label.nativeElement,o=`mdc-snackbar__label`;i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<e.length;i++){let o=e[i],r=o.getAttribute(`aria-owns`);this._trackedModals.add(o),r?r.indexOf(t)===-1&&o.setAttribute(`aria-owns`,r+` `+t):o.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute(`aria-owns`);if(e){let i=e.replace(this._liveElementId,``).trim();i.length>0?t.setAttribute(`aria-owns`,i):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector(`[aria-hidden]`),i=t.querySelector(`[aria-live]`);if(e&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(o=document.activeElement),e.removeAttribute(`aria-hidden`),i.appendChild(e),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`label`];function e(i,o){}return VI({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,r){if(o&1&&Nh(ct,7)(t,7),o&2){let s;cw(s=lw())&&(r._portalOutlet=s.first),cw(s=lw())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,r){o&1&&Ch(`animationend`,function(c){return r.onAnimationEnd(c.animationName)})(`animationcancel`,function(c){return r.onAnimationEnd(c.animationName)}),o&2&&kh(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Gp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,r){o&1&&(bi$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),zp(4,e,0,0,`ng-template`,4),qc(),Xp(5,`div`),qc()()),o&2&&(Gv(5),Kp(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[ct],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var vo=new O(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new jt});var mi=(()=>{class a{_live=w(vn);_injector=w(me$1);_breakpointObserver=w(ce);_parentSnackBar=w(a,{optional:!0,skipSelf:!0});_defaultConfig=w(vo);_animationsDisabled=W();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=fo;snackBarContainerComponent=go;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e=``,i){let o=r(r({},this._defaultConfig),i);return o.data={message:t,action:e},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector,o=me$1.create({parent:i||this._injector,providers:[{provide:jt,useValue:e}]}),r=new at(this.snackBarContainerComponent,e.viewContainerRef,o),s=t.attach(r);return s.instance.snackBarConfig=e,s.instance}_attach(t,e){let i=r(r(r({},new jt),this._defaultConfig),e),o=this._createOverlay(i),r$4=this._attachSnackBarContainer(o,i),s=new ue(r$4,o);if(t instanceof hr){let c=new st(t,null,{$implicit:i.data,snackBarRef:s});s.instance=r$4.attachTemplatePortal(c)}else{let u=new at(t,void 0,this._createInjector(i,s));s.instance=r$4.attachComponentPortal(u).instance}return this._breakpointObserver.observe(Ka.HandsetPortrait).pipe(Xg(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&r$4._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(s,i),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new mt;e.direction=t.direction;let i=ut(this._injector),o=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!o||t.horizontalPosition===`end`&&o,s=!r&&t.horizontalPosition!==`center`;return r?i.left(`0`):s?i.right(`0`):i.centerHorizontally(),t.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),e.positionStrategy=i,e.disableAnimations=this._animationsDisabled,Lt(this._injector,e)}_createInjector(t,e){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return me$1.create({parent:i||this._injector,providers:[{provide:ue,useValue:e},{provide:di,useValue:t.data}]})}static ɵfac=function(e){return new(e||a)};static ɵprov=Wt({token:a,factory:a.ɵfac})}return a})();var ui=Symbol(``);function pi(a){return new Proxy(a,{has(n,t){return!!this.get(n,t,void 0)},get(n,t){let e=rT(n);return!yo(e)||!(t in e)?(Qu(n[t])&&n[t][ui]&&delete n[t],n[t]):(Qu(n[t])||(Object.defineProperty(n,t,{value:nT(()=>n()[t]),configurable:!0}),n[t][ui]=!0),pi(n[t]))}})}var _o=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function yo(a){if(a===null||typeof a!=`object`||xo(a))return!1;let n=Object.getPrototypeOf(a);if(n===Object.prototype)return!0;for(;n&&n!==Object.prototype;){if(_o.includes(n.constructor))return!1;n=Object.getPrototypeOf(n)}return n===Object.prototype}function xo(a){return typeof a?.[Symbol.iterator]==`function`}var So=new WeakMap;var j$1=Symbol(``);function y(a,...n){let t=rT(()=>hi(a)),e=n.reduce((r$5,s)=>r(r({},r$5),typeof s==`function`?s(r$5):s),t),i=a[j$1],o=Reflect.ownKeys(a[j$1]);for(let r of Reflect.ownKeys(e))if(o.includes(r)){let s=r;t[s]!==e[s]&&i[s].set(e[s])}ko(a)}function hi(a){let n=a[j$1];return Reflect.ownKeys(a[j$1]).reduce((t,e)=>{let i=n[e]();return s(r({},t),{[e]:i})},{})}function wo(a){return So.get(a[j$1])||[]}function ko(a){let n=wo(a);for(let t of n)Co(a,t)}function Co(a,n){rT(()=>{n(hi(a))})}function bi(...a){let n=[...a],t=typeof n[0]==`function`?{}:n.shift(),e=n;return(()=>{class o{constructor(){let s=e.reduce((S,Y)=>Y(S),Eo()),{stateSignals:c,props:u,methods:d,hooks:h}=s,E=r(r(r({},c),u),d);this[j$1]=s[j$1];for(let S of Reflect.ownKeys(E))this[S]=E[S];let{onInit:M,onDestroy:O}=h;M&&M(),O&&w(He).onDestroy(O)}static ɵfac=function(c){return new(c||o)};static ɵprov=ue$1({token:o,factory:o.ɵfac,providedIn:t.providedIn||null})}return o})()}function Eo(){return{[j$1]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function Do(a){return n=>{let t=a(r(r(r({[j$1]:n[j$1]},n.stateSignals),n.props),n.methods));return s(r({},n),{props:r(r({},n.props),t)})}}function fi(a){return Do(n=>{let t=a(n);return Reflect.ownKeys(t).reduce((i,o)=>{let r$6=t[o];return s(r({},i),{[o]:Qu(r$6)?r$6:nT(r$6)})},{})})}function gi(a){return n=>{let t=a(r(r(r({[j$1]:n[j$1]},n.stateSignals),n.props),n.methods));return s(r({},n),{methods:r(r({},n.methods),t)})}}function vi(a){return n=>{let t=typeof a==`function`?a():a,e=Reflect.ownKeys(t),i=n[j$1],o={};for(let r of e)i[r]=da$1(t[r]),o[r]=pi(i[r]);return s(r({},n),{stateSignals:r(r({},n.stateSignals),o)})}}function pe$1(a,n){let t=n?.injector??w(me$1),e=new ee$1,i=a(e).subscribe();t.get(He).onDestroy(()=>i.unsubscribe());let o=(r,s)=>{if(Oo(r))return e.next(r),{destroy:Ke};let c=No(),u=s?.injector??c??t;if(typeof r==`function`){let h=Hm(()=>{let E=r();rT(()=>e.next(E))},{injector:u});return i.add({unsubscribe:()=>h.destroy()}),h}let d=r.subscribe(h=>e.next(h));return i.add(d),u!==t&&u.get(He).onDestroy(()=>d.unsubscribe()),{destroy:()=>d.unsubscribe()}};return o.destroy=i.unsubscribe.bind(i),o}function Oo(a){return typeof a!=`function`&&!Ng(a)}function No(){try{return w(me$1)}catch(a){return}}function he(a){return n=>n.pipe($l({next:a.next,complete:a.complete}),jl(t=>(a.error(t),Dt$1)),a.finalize?zg(a.finalize):t=>t)}var _i={production:!0,apiUrl:`https://shopbot-server-7d7f5c27c0b7.herokuapp.com`,firebaseConfig:{apiKey:`AIzaSyALKWXDUQHGAf2nwjQ1eDN-zOApIlRiM4k`,authDomain:`foodie-6d808.firebaseapp.com`,projectId:`foodie-6d808`,storageBucket:`foodie-6d808.firebasestorage.app`,messagingSenderId:`883466824651`,appId:`1:883466824651:web:373261f8a1907bfe84a44e`},vapidKey:`BGR6An1ArcSr33uyiWUSoMszE0SJC0b1FyEYzINtKAVAQ9mEar5r8Z0vkR4fSfy4Mb4qbke35IGyrBK7kNJ-ct0`,googleMapsApiKey:`AIzaSyDj2Iq9H0urXYeg-ZNuD4i19jmjZv6rk74`};var We=class a{constructor(n){this.http=n}http;baseUrl=`${_i.apiUrl}/self-order`;resolveBySlug(n){return this.http.get(`${this.baseUrl}/stores/slug/${n}`)}resolveByQrToken(n){return this.http.get(`${this.baseUrl}/resolve/${n}`)}getMenu(n){return this.http.get(`${this.baseUrl}/stores/${n}/menu`)}submitOrder(n,t,e){return this.http.post(`${this.baseUrl}/tables/${n}/items`,{items:t,customerName:e||void 0})}getOrderStatus(n){return this.http.get(`${this.baseUrl}/tables/${n}/status`)}placeOrder(n,t){return this.http.post(`${this.baseUrl}/stores/${n}/orders`,t)}getDeliveryQuote(n,t){return this.http.post(`${this.baseUrl}/stores/${n}/delivery-quote`,t)}getOrderStatusById(n){return this.http.get(`${this.baseUrl}/orders/${n}/status`)}registerPushTokenForOrder(n,t){return this.http.post(`${this.baseUrl}/orders/${n}/push-token`,{token:t})}registerPushTokenForTable(n,t){return this.http.post(`${this.baseUrl}/tables/${n}/push-token`,{token:t})}static ɵfac=function(t){return new(t||a)(be(Ve$1))};static ɵprov=ue$1({token:a,factory:a.ɵfac,providedIn:`root`})};var Mo={storeInfo:null,table:null,qrToken:null,activeOrderId:null,menu:[],cart:[],isLoading:!1,loadError:null,submitting:!1,submitError:null,lastOrderResult:null,lastOrderShipping:null,customerName:null,hasPromptedForName:!1,orderStatus:null,lastSeenOrderUpdatedAt:null,expectingOwnOrderUpdate:!1};function Ao(a){let n=a.options.reduce((t,e)=>t+e.price*e.quantity,0);return a.price+n}var yi=0;function xi(){return yi+=1,`line-${Date.now()}-${yi}`}var Od=bi({providedIn:`root`},vi(Mo),fi(({storeInfo:a,table:n,cart:t,orderStatus:e,lastSeenOrderUpdatedAt:i})=>({canOrder:nT(()=>!!n()),orderingLocked:nT(()=>!!a()?.orderingLocked),templateSlug:nT(()=>a()?.selfOrderSettings?.templateSlug||`classic`),themeSettings:nT(()=>a()?.selfOrderSettings?.settingsValues||{}),cartCount:nT(()=>t().reduce((o,r)=>o+r.quantity,0)),cartEstimatedTotal:nT(()=>t().reduce((o,r)=>o+Ao(r)*r.quantity,0)),hasUnseenOrderUpdate:nT(()=>{let o=e();return!!o?.hasActiveOrder&&!!o.updatedAt&&o.updatedAt!==i()})})),gi((a,n=w(We),t=w(mi))=>{function e(){t.open(`This store is currently closed and not accepting orders.`,`Close`,{duration:4e3})}function i(p){n.getMenu(p).subscribe({next:b=>y(a,{menu:b,isLoading:!1}),error:b=>y(a,{isLoading:!1,loadError:b?.error?.message||`Could not load the menu.`})})}function o(p){y(a,b=>({orderStatus:p,lastSeenOrderUpdatedAt:b.expectingOwnOrderUpdate?p.updatedAt??null:b.lastSeenOrderUpdatedAt,expectingOwnOrderUpdate:!1}))}function r$7(p){n.getOrderStatus(p).subscribe({next:b=>o(b),error:()=>{}})}function s$1(p){n.getOrderStatusById(p).subscribe({next:b=>o(b),error:()=>{}})}function c(p){o(p)}function u(){y(a,{lastSeenOrderUpdatedAt:a.orderStatus()?.updatedAt??null})}let d=pe$1(hg($l(()=>y(a,{isLoading:!0,loadError:null,table:null,qrToken:null})),Bl(p=>n.resolveBySlug(p).pipe(he({next:b=>{y(a,{storeInfo:b}),i(b._id)},error:b=>y(a,{isLoading:!1,loadError:b?.error?.message||`This store could not be found.`})}))))),h=pe$1(hg($l(p=>y(a,{isLoading:!0,loadError:null,qrToken:p})),Bl(p=>n.resolveByQrToken(p).pipe(he({next:({store:b,table:w})=>{y(a,{storeInfo:b,table:w}),i(b._id),r$7(p)},error:b=>y(a,{isLoading:!1,loadError:b?.error?.message||`This QR code is no longer valid.`})})))));function E(p,b=1){if(a.orderingLocked()){e();return}y(a,w=>{let v=w.cart.find(L=>L.productId===p._id&&L.options.length===0);return v?{cart:w.cart.map(L=>L.lineId===v.lineId?s(r({},L),{quantity:L.quantity+b}):L)}:{cart:[...w.cart,{lineId:xi(),productId:p._id,name:p.name,price:p.price,photo:p.photos?.[0],quantity:b,notes:``,options:[]}]}})}function M(p,b,w,v){if(a.orderingLocked()){e();return}y(a,L=>({cart:[...L.cart,{lineId:xi(),productId:p._id,name:p.name,price:p.price,photo:p.photos?.[0],quantity:b,notes:v,options:w}]}))}function O(p,b){if(b<=0){S(p);return}y(a,w=>({cart:w.cart.map(v=>v.lineId===p?s(r({},v),{quantity:b}):v)}))}function S(p){y(a,b=>({cart:b.cart.filter(w=>w.lineId!==p)}))}function Y(p,b){y(a,w=>({cart:w.cart.map(v=>v.lineId===p?s(r({},v),{notes:b}):v)}))}function be(){y(a,{cart:[]})}function Ut(){y(a,{lastOrderResult:null,lastOrderShipping:null})}function fe(p){y(a,{customerName:p,hasPromptedForName:!0})}return{resolveBySlug:d,resolveByQrToken:h,addToCart:E,addDetailedToCart:M,updateQuantity:O,removeFromCart:S,updateNotes:Y,clearCart:be,submitOrder:pe$1(hg($l(()=>y(a,{submitting:!0,submitError:null})),Bl(()=>{let p=a.qrToken(),b=a.cart();return!p||b.length===0?(y(a,{submitting:!1}),[]):a.orderingLocked()?(e(),y(a,{submitting:!1,submitError:`This store is currently closed and not accepting orders.`}),[]):n.submitOrder(p,b.map(w=>({productId:w.productId,quantity:w.quantity,notes:w.notes||void 0,options:w.options.map(v=>({groupId:v.groupId,optionItemId:v.optionItemId,quantity:v.quantity}))})),a.customerName()||void 0).pipe(he({next:w=>{y(a,{submitting:!1,lastOrderResult:w,cart:[],expectingOwnOrderUpdate:!0}),p&&r$7(p)},error:w=>y(a,{submitting:!1,submitError:w?.error?.message||`Could not place your order — please try again.`})}))}))),placeOrder:pe$1(hg($l(()=>y(a,{submitting:!0,submitError:null})),Bl(p=>{let b=a.storeInfo(),w=a.cart();return!b||w.length===0?(y(a,{submitting:!1}),[]):a.orderingLocked()?(e(),y(a,{submitting:!1,submitError:`This store is currently closed and not accepting orders.`}),[]):n.placeOrder(b._id,s(r({},p),{items:w.map(v=>({productId:v.productId,quantity:v.quantity,notes:v.notes||void 0,options:v.options.map(L=>({groupId:L.groupId,optionItemId:L.optionItemId,quantity:L.quantity}))}))})).pipe(he({next:v=>{let L=w.reduce((ki,Ci)=>ki+Ci.quantity,0);y(a,{submitting:!1,lastOrderResult:{orderReference:v.orderReference,itemCount:L,total:v.total,subTotal:v.subTotal,shippingFee:v.shippingFee,deliveryType:v.deliveryType},lastOrderShipping:p.location??null,activeOrderId:v.orderId,cart:[],expectingOwnOrderUpdate:!0}),s$1(v.orderId)},error:v=>y(a,{submitting:!1,submitError:v?.error?.message||`Could not place your order — please try again.`})}))}))),dismissOrderResult:Ut,setCustomerName:fe,loadOrderStatus:r$7,loadOrderStatusById:s$1,setOrderStatus:c,markOrderSeen:u}}));var Q=new O(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:V})});var V=100;var X=10;var G=(()=>{class n{_elementRef=w(Dr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=w(Q),a=Zi(),s=this._elementRef.nativeElement;this._noopAnimations=a===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=s.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&a===`reduced-motion`&&s.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=V;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-X)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(a){return new(a||n)};static ɵcmp=(function(){let e=[`determinateSpinner`];function a(s,c){if(s&1&&(ku(),bi$1(0,`svg`,11),Xp(1,`circle`,12),qc()),s&2){let r=rw();Kp(`viewBox`,r._viewBox()),Gv(),Oh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeCircumference()/2,`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp(`r`,r._circleRadius())}}return VI({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(c,r){if(c&1&&Nh(e,5),c&2){let l;cw(l=lw())&&(r._determinateCircle=l.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(c,r){c&2&&(Kp(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),_w(`mat-`+r.color),Oh(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),kh(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,GF],diameter:[2,`diameter`,`diameter`,GF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,GF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(c,r){if(c&1&&(zp(0,a,2,8,`ng-template`,null,0,Jw),bi$1(2,`div`,2,1),ku(),bi$1(4,`svg`,3),Xp(5,`circle`,4),qc()(),Lu(),bi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),nh(9,8),qc(),bi$1(10,`div`,9),nh(11,8),qc(),bi$1(12,`div`,10),nh(13,8),qc()()()),c&2){let l=dw(1);Gv(4),Kp(`viewBox`,r._viewBox()),Gv(),Oh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp(`r`,r._circleRadius()),Gv(4),Jp(`ngTemplateOutlet`,l),Gv(2),Jp(`ngTemplateOutlet`,l),Gv(2),Jp(`ngTemplateOutlet`,l)}},dependencies:[fr],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var $=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=BI({type:n});static ɵinj=Kl({imports:[Yn]})}return n})();var j=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=VI({type:n,selectors:[[`app-storefront-loading`]],decls:4,vars:0,consts:()=>{let t;return t=$localize`:@@storefront.loading:Loading menu…`,[t,[1,`flex`,`h-screen`,`w-full`,`flex-col`,`items-center`,`justify-center`,`gap-4`],[`diameter`,`36`],[1,`text-sm`,2,`color`,`var(--sf-muted, #6b7280)`]]},template:function(e,a){e&1&&(bi$1(0,`div`,1),Xp(1,`mat-spinner`,2),bi$1(2,`p`,3),XD(3,0),qc()())},dependencies:[$,G],encapsulation:2})};var U=[`--sf-accent`,`--sf-text`,`--sf-font-family`];function pe(){let n=w(Od);Hm(()=>{let t=n.themeSettings(),e=document.documentElement.style;t.accentColor?e.setProperty(`--sf-accent`,t.accentColor):e.removeProperty(`--sf-accent`),t.primaryColor?e.setProperty(`--sf-text`,t.primaryColor):e.removeProperty(`--sf-text`),t.fontFamily?e.setProperty(`--sf-font-family`,t.fontFamily):e.removeProperty(`--sf-font-family`)}),w(He).onDestroy(()=>{let t=document.documentElement.style;for(let e of U)t.removeProperty(e)})}export{q as C,xn as E,oi as S,ut as T,ct as _,Ao as a,mc as b,Ka as c,Sn as d,W as f,ce as g,ao as h,pe as i,Me as l,_i as m,G as n,Bt as o,We as p,j as r,Gl as s,$ as t,Od as u,kn as v,to as w,mi as x,le as y};