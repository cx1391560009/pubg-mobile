webpackJsonp([15],{100:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(3),e(43);var a=function(){function t(t,n){this.storage=t,this.SETTINGS_KEY="_settings",this._defaults=n}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(n){return n?(t.settings=n,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(n){t.settings=n})})},t.prototype._mergeDefaults=function(t){for(var n in t)n in this.settings||(this.settings[n]=t[n]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var n in t)this.settings[n]=t[n];return this.save()},t.prototype.setValue=function(t,n){return this.settings[t]=n,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(n){return n[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()},146:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(3),e(79);var a=function(){function t(t){this.api=t}return t.prototype.query=function(t){var n=this.api.get("matches/listing",t);return console.log("api call"),n.subscribe(function(t){console.log(t)},function(t){console.error("ERROR",t)}),n},t.prototype.add=function(t){},t.prototype.delete=function(t){},t}()},147:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(3);var a=e(202),o=(e.n(a),e(43),e(79),e(80),function(){function t(t,n,e){this.api=t,this.storage=n,this.menu=e}return t.prototype.login=function(t){var n=this,e=this.api.post("login",t).share();return e.subscribe(function(t){if(t.success)return n._loggedIn(t)},function(t){console.error("ERROR",t)}),e},t.prototype.signup=function(t){var n=this,e=this.api.post("signup",t).share();return e.subscribe(function(t){t.success&&n.storage.set("_email",t.email)},function(t){console.error("ERROR",t)}),e},t.prototype.verifypayment=function(t){var n=this.api.post("matches/verifypayment",t).share();return n.subscribe(function(t){console.log(t)},function(t){console.error("ERROR",t)}),n},t.prototype.participate=function(t){var n=this.api.post("matches/entry",t).share();return n.subscribe(function(t){},function(t){console.error("ERROR",t)}),n},t.prototype.forgotPassword=function(t){var n=this.api.post("changepasswordemail",t).share();return n.subscribe(function(t){},function(t){console.error("ERROR",t)}),n},t.prototype.logout=function(){var t=this;return this._token=null,this.menu.logout(),this.storage.remove("_token").then(function(){t.api.setAPIHeaders()})},t.prototype._loggedIn=function(t){var n=this;return console.log(t),this.menu.login(),this._token=t.token,this.storage.set("_token",t.token).then(function(){n.api.setAPIHeaders()})},t}())},177:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=177},201:function(t,n,e){function a(t){var n=o[t];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/card-detail/card-detail.module.ngfactory":[291,11],"../pages/cards/cards.module.ngfactory":[292,10],"../pages/content/content.module.ngfactory":[293,9],"../pages/forgot-password/forgot-password.module.ngfactory":[294,4],"../pages/item-create/item-create.module.ngfactory":[295,3],"../pages/item-detail/item-detail.module.ngfactory":[296,8],"../pages/list-master/list-master.module.ngfactory":[297,7],"../pages/login/login.module.ngfactory":[298,2],"../pages/menu/menu.module.ngfactory":[299,14],"../pages/search/search.module.ngfactory":[300,6],"../pages/settings/settings.module.ngfactory":[301,1],"../pages/signup/signup.module.ngfactory":[302,0],"../pages/tabs/tabs.module.ngfactory":[303,13],"../pages/tutorial/tutorial.module.ngfactory":[304,5],"../pages/welcome/welcome.module.ngfactory":[305,12]};a.keys=function(){return Object.keys(o)},a.id=201,t.exports=a},230:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return l}),e.d(n,"d",function(){return r}),e.d(n,"e",function(){return i});var a="TutorialPage",o="CardsPage",l="ListMasterPage",r="SearchPage",i="SettingsPage"},233:function(t,n,e){"use strict";function a(t){return new h.a(t,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function o(t){return i._21(0,[(t()(),i.Z(0,0,null,null,7,"button",[["class","transparent list-item item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,n,e){var a=!0,o=t.component;if("click"===n){a=!1!==i._11(t,6).close()&&a}if("click"===n){a=!1!==o.openPage(t.context.$implicit)&&a}return a},S.b,S.a)),i.Y(1,1097728,null,3,N.a,[E.a,F.a,i.j,i.z,[2,R.a]],null,null),i._17(335544320,6,{contentLabel:0}),i._17(603979776,7,{_buttons:1}),i._17(603979776,8,{_icons:1}),i.Y(5,16384,null,0,Y.a,[],null,null),i.Y(6,16384,null,0,z.a,[I.a],{menuClose:[0,"menuClose"]},null),(t()(),i._19(7,2,["\n          ","\n        "]))],function(t,n){t(n,6,0,"")},function(t,n){t(n,7,0,n.context.$implicit.title)})}function l(t){return i._21(0,[i._17(402653184,1,{nav:0}),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(2,0,null,null,48,"ion-split-pane",[["when","sm"]],null,null,null,null,null)),i.Y(3,4341760,null,1,O.b,[i.u,L.a,F.a,i.j,i.z],{when:[0,"when"]},null),i._17(603979776,2,{_setchildren:1}),i._15(2048,[[2,4]],O.a,null,[O.b]),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(7,0,null,null,38,"ion-menu",[["role","navigation"]],null,null,null,A.b,A.a)),i.Y(8,245760,null,2,B.a,[I.a,i.j,F.a,L.a,i.z,Z.a,D.l,K.a,q.a],{content:[0,"content"]},null),i._17(335544320,3,{menuContent:0}),i._17(335544320,4,{menuNav:0}),i._15(2048,[[2,4]],O.a,null,[B.a]),(t()(),i._19(-1,0,["\n    "])),(t()(),i.Z(13,0,null,0,20,"ion-header",[],null,null,null,null,null)),i.Y(14,16384,null,0,G.a,[F.a,i.j,i.z,[2,W.a]],null,null),(t()(),i._19(-1,null,["\n      "])),(t()(),i.Z(16,0,null,null,16,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,X.b,X.a)),i.Y(17,49152,null,0,x.a,[F.a,i.j,i.z],null,null),(t()(),i._19(-1,3,["\n        "])),(t()(),i.Z(19,0,null,0,8,"button",[["ion-button",""],["left",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(t,n,e){var a=!0;if("click"===n){a=!1!==i._11(t,21).toggle()&&a}return a},U.b,U.a)),i.Y(20,1097728,[[5,4]],0,V.a,[[8,""],F.a,i.j,i.z],null,null),i.Y(21,1064960,null,0,J.a,[I.a,[2,W.a],[2,V.a],[2,$.a]],{menuToggle:[0,"menuToggle"]},null),i.Y(22,16384,null,1,Q.a,[F.a,i.j,i.z,[2,x.a],[2,$.a]],null,null),i._17(603979776,5,{_buttons:1}),(t()(),i._19(-1,0,["\n          "])),(t()(),i.Z(25,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(26,147456,null,0,tt.a,[F.a,i.j,i.z],{name:[0,"name"]},null),(t()(),i._19(-1,0,["\n        "])),(t()(),i._19(-1,3,["\n        "])),(t()(),i.Z(29,0,null,3,2,"ion-title",[],null,null,null,nt.b,nt.a)),i.Y(30,49152,null,0,et.a,[F.a,i.j,i.z,[2,x.a],[2,$.a]],null,null),(t()(),i._19(-1,0,["Pages"])),(t()(),i._19(-1,3,["\n      "])),(t()(),i._19(-1,null,["\n    "])),(t()(),i._19(-1,0,["\n\n    "])),(t()(),i.Z(35,0,null,0,9,"ion-content",[["class","menu-container"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,at.b,at.a)),i.Y(36,4374528,[[3,4]],0,ot.a,[F.a,L.a,K.a,i.j,i.z,q.a,Z.a,i.u,[2,W.a],[2,lt.a]],null,null),(t()(),i._19(-1,1,["\n      "])),(t()(),i.Z(38,0,null,1,5,"ion-list",[["no-lines",""]],null,null,null,null,null)),i.Y(39,16384,null,0,rt.a,[F.a,i.j,i.z,L.a,D.l,K.a],null,null),(t()(),i._19(-1,null,["\n        "])),(t()(),i.U(16777216,null,null,1,null,o)),i.Y(42,802816,null,0,it.h,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(t()(),i._19(-1,null,["\n      "])),(t()(),i._19(-1,1,["\n    "])),(t()(),i._19(-1,0,["\n\n  "])),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(47,0,null,null,2,"ion-nav",[["main",""],["swipeBackEnabled","false"]],null,null,null,st.b,st.a)),i.Y(48,4374528,[[1,4],["content",4]],0,ut.a,[[2,W.a],[2,lt.a],q.a,F.a,L.a,i.j,i.u,i.z,i.i,D.l,ct.a,[2,gt.a],K.a,i.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),i._15(2048,[[2,4]],O.a,null,[ut.a]),(t()(),i._19(-1,null,["\n  "])),(t()(),i._19(-1,null,["\n  "]))],function(t,n){var e=n.component;t(n,3,0,"sm");t(n,8,0,i._11(n,48));t(n,21,0,"");t(n,26,0,"menu");t(n,42,0,e.menu.pages);t(n,48,0,"false",e.menu.rootPage)},function(t,n){t(n,16,0,i._11(n,17)._sbPadding);t(n,19,0,i._11(n,21).isHidden);t(n,25,0,i._11(n,26)._hidden);t(n,35,0,i._11(n,36).statusbarPadding,i._11(n,36)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=e(36),i=e(0),s=(e(3),e(113)),u=e(149),c=e(66),g=e(67),p=e(43),d=e(86),f=e(284),h=(e(141),e(89)),_=function(){function t(t,n,e,a,o,l,r){var i=this;this.menu=t,this.translate=n,this.config=o,this.statusBar=l,this.splashScreen=r,e.ready().then(function(){i.statusBar.styleDefault(),i.splashScreen.hide()}),this.initTranslate()}return t.prototype.initTranslate=function(){var t=this;this.translate.setDefaultLang("en");var n=this.translate.getBrowserLang();if(n)if("zh"===n){var e=this.translate.getBrowserCultureLang();e.match(/-CN|CHS|Hans/i)?this.translate.use("zh-cmn-Hans"):e.match(/-TW|CHT|Hant/i)&&this.translate.use("zh-cmn-Hant")}else this.translate.use(this.translate.getBrowserLang());else this.translate.use("en");this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(n){t.config.set("ios","backButtonText",n.BACK_BUTTON_TEXT)})},t.prototype.openPage=function(t){var n=this;this.nav.setRoot(t.component).then(function(t){t||n.nav.setRoot("WelcomePage")})},t}(),m=function(t){return new f.a(t,"./assets/i18n/",".json")},y=function(){return function(){}}(),b=e(51),P=e(219),w=e(220),v=e(221),C=e(222),k=e(223),T=e(224),M=e(225),j=e(226),H=e(227),S=e(145),N=e(16),E=e(14),F=e(1),R=e(42),Y=e(61),z=e(99),I=e(23),O=e(29),L=e(4),A=e(231),B=e(62),Z=e(25),D=e(6),K=e(10),q=e(9),G=e(88),W=e(5),X=e(290),x=e(35),U=e(39),V=e(20),J=e(92),$=e(34),Q=e(90),tt=e(40),nt=e(229),et=e(60),at=e(228),ot=e(22),lt=e(21),rt=e(46),it=e(12),st=e(232),ut=e(48),ct=e(28),gt=e(15),pt=e(80),dt=e(27),ft=e(100),ht=i.X({encapsulation:2,styles:[],data:{}}),_t=i.V("ng-component",_,function(t){return i._21(0,[(t()(),i.Z(0,0,null,null,1,"ng-component",[],null,null,null,l,ht)),i.Y(1,49152,null,0,_,[pt.a,dt.a,L.a,ft.a,F.a,g.a,c.a],null,null)],null,null)},{},{},[]),mt=e(128),yt=e(18),bt=e(56),Pt=e(57),wt=e(59),vt=e(58),Ct=e(87),kt=e(121),Tt=e(93),Mt=e(127),jt=e(30),Ht=e(91),St=e(142),Nt=e(53),Et=e(41),Ft=e(97),Rt=e(73),Yt=e(133),zt=e(130),It=e(96),Ot=e(150),Lt=e(79),At=e(146),Bt=e(147),Zt=e(218),Dt=e(129),Kt=e(126),qt=e(131),Gt=i.W(y,[b.b],function(t){return i._7([i._8(512,i.i,i.S,[[8,[P.a,w.a,v.a,C.a,k.a,T.a,M.a,j.a,H.a,_t]],[3,i.i],i.s]),i._8(5120,i.r,i._16,[[3,i.r]]),i._8(4608,it.k,it.j,[i.r,[2,it.s]]),i._8(5120,i.b,i._1,[]),i._8(5120,i.p,i._9,[]),i._8(5120,i.q,i._12,[]),i._8(4608,r.c,r.q,[it.c]),i._8(6144,i.D,null,[r.c]),i._8(4608,r.f,mt.a,[]),i._8(5120,r.d,function(t,n,e,a,o){return[new r.k(t,n),new r.o(e),new r.n(a,o)]},[it.c,i.u,it.c,it.c,r.f]),i._8(4608,r.e,r.e,[r.d,i.u]),i._8(135680,r.m,r.m,[it.c]),i._8(4608,r.l,r.l,[r.e,r.m]),i._8(6144,i.B,null,[r.l]),i._8(6144,r.p,null,[r.m]),i._8(4608,i.G,i.G,[i.u]),i._8(4608,r.h,r.h,[it.c]),i._8(4608,r.i,r.i,[it.c]),i._8(4608,s.j,s.p,[it.c,i.w,s.n]),i._8(4608,s.q,s.q,[s.j,s.o]),i._8(5120,s.a,function(t){return[t]},[s.q]),i._8(4608,s.m,s.m,[]),i._8(6144,s.k,null,[s.m]),i._8(4608,s.i,s.i,[s.k]),i._8(6144,s.b,null,[s.i]),i._8(4608,s.f,s.l,[s.b,i.o]),i._8(4608,s.c,s.c,[s.f]),i._8(4608,yt.r,yt.r,[]),i._8(4608,yt.d,yt.d,[]),i._8(5120,bt.b,m,[s.c]),i._8(4608,Pt.a,Pt.b,[]),i._8(4608,wt.b,wt.a,[]),i._8(4608,vt.b,vt.a,[]),i._8(4608,Ct.a,Ct.a,[]),i._8(4608,dt.a,dt.a,[Ct.a,bt.b,Pt.a,wt.b,vt.b,dt.b,dt.c]),i._8(4608,kt.a,kt.a,[q.a,F.a]),i._8(4608,Tt.a,Tt.a,[q.a,F.a]),i._8(4608,Mt.a,Mt.a,[]),i._8(4608,E.a,E.a,[]),i._8(4608,jt.a,jt.a,[L.a]),i._8(4608,Z.a,Z.a,[F.a,L.a,i.u,K.a]),i._8(4608,Ht.a,Ht.a,[q.a,F.a]),i._8(5120,it.f,St.c,[it.q,[2,it.a],F.a]),i._8(4608,it.e,it.e,[it.f]),i._8(5120,Nt.b,Nt.d,[q.a,Nt.a]),i._8(5120,gt.a,gt.b,[q.a,Nt.b,it.e,Et.b,i.i]),i._8(4608,Ft.a,Ft.a,[q.a,F.a,gt.a]),i._8(4608,Rt.a,Rt.a,[q.a,F.a]),i._8(4608,Yt.a,Yt.a,[q.a,F.a,gt.a]),i._8(4608,zt.a,zt.a,[F.a,L.a,K.a,q.a,D.l]),i._8(4608,It.a,It.a,[q.a,F.a]),i._8(4608,ct.a,ct.a,[L.a,F.a]),i._8(5120,Ot.a,Ot.c,[Ot.b]),i._8(4608,Lt.a,Lt.a,[s.c,Ot.a]),i._8(4608,At.a,At.a,[Lt.a]),i._8(4608,pt.a,pt.a,[Ot.a]),i._8(4608,Bt.a,Bt.a,[Lt.a,Ot.a,pt.a]),i._8(4608,u.a,u.a,[]),i._8(4608,c.a,c.a,[]),i._8(4608,g.a,g.a,[]),i._8(5120,ft.a,a,[Ot.a]),i._8(512,it.b,it.b,[]),i._8(512,i.k,Zt.a,[]),i._8(256,F.b,{},[]),i._8(1024,Dt.a,Dt.b,[]),i._8(1024,L.a,L.b,[r.b,Dt.a,i.u]),i._8(1024,F.a,F.c,[F.b,L.a]),i._8(512,K.a,K.a,[L.a]),i._8(512,I.a,I.a,[]),i._8(512,q.a,q.a,[F.a,L.a,[2,I.a]]),i._8(512,D.l,D.l,[q.a]),i._8(256,Nt.a,{links:[{loadChildren:"../pages/card-detail/card-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"CardDetailPage",segment:"card-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/forgot-password/forgot-password.module.ngfactory#ForgotPasswordPageModuleNgFactory",name:"ForgotPasswordPage",segment:"forgot-password",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-create/item-create.module.ngfactory#ItemCreatePageModuleNgFactory",name:"ItemCreatePage",segment:"item-create",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-detail/item-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"ItemDetailPage",segment:"item-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-master/list-master.module.ngfactory#ListMasterPageModuleNgFactory",name:"ListMasterPage",segment:"list-master",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),i._8(512,i.h,i.h,[]),i._8(512,Kt.a,Kt.a,[i.h]),i._8(1024,Et.b,Et.c,[Kt.a,i.o]),i._8(1024,i.c,function(t,n,e,a,o,l,i,s,u,c,g,p,d){return[r.s(t),qt.a(n),Mt.b(e,a),zt.b(o,l,i,s,u),Et.d(c,g,p,d)]},[[2,i.t],F.a,L.a,K.a,F.a,L.a,K.a,q.a,D.l,F.a,Nt.a,Et.b,i.u]),i._8(512,i.d,i.d,[[2,i.c]]),i._8(131584,i.f,i.f,[i.u,i.T,i.o,i.k,i.i,i.d]),i._8(512,i.e,i.e,[i.f]),i._8(512,r.a,r.a,[[3,r.a]]),i._8(512,s.e,s.e,[]),i._8(512,s.d,s.d,[]),i._8(512,d.a,d.a,[]),i._8(512,yt.p,yt.p,[]),i._8(512,yt.g,yt.g,[]),i._8(512,yt.n,yt.n,[]),i._8(512,St.a,St.a,[]),i._8(512,p.a,p.a,[]),i._8(512,y,y,[]),i._8(256,s.n,"XSRF-TOKEN",[]),i._8(256,s.o,"X-XSRF-TOKEN",[]),i._8(256,dt.c,void 0,[]),i._8(256,dt.b,void 0,[]),i._8(256,b.a,_,[]),i._8(256,it.a,"/",[]),i._8(256,Ot.b,null,[])])});Object(i.M)(),Object(r.j)().bootstrapModuleFactory(Gt)},79:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(3);var a=e(113),o=(e(43),function(){function t(t,n){this.http=t,this.storage=n,this.url="http://localhost:5000",this.setAPIHeaders()}return t.prototype.setAPIHeaders=function(){var t=this;this.storage.get("_token").then(function(n){t.token=n||"",console.log(t.token)})},t.prototype.get=function(t,n,e){if(e||(e={params:new a.h}),n){e.params=new a.h;for(var o in n)e.params=e.params.set(o,n[o])}console.log(">>>>>>>>>>>>>>",this.token);var l={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return e.headers=l.headers,this.http.get(this.url+"/"+t,e)},t.prototype.post=function(t,n){var e={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.post(this.url+"/"+t,n,e)},t.prototype.put=function(t,n){var e={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.put(this.url+"/"+t,n,e)},t.prototype.delete=function(t){var n={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.delete(this.url+"/"+t,n)},t.prototype.patch=function(t,n){var e={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.patch(this.url+"/"+t,n,e)},t}())},80:function(t,n,e){"use strict";e.d(n,"a",function(){return l});e(3);var a=e(202),o=(e.n(a),e(43),e(230)),l=function(){function t(t){var n=this;this.storage=t,this.pages=[],this.storage.get("_token").then(function(t){t?(n.pages[0]={title:"Matches",component:"CardsPage"},n.pages[1]={title:"Logout",component:"WelcomePage"},n.pages[2]={title:"Master",component:"ListMasterPage"},n.rootPage="CardsPage"):n.rootPage=o.a})}return t.prototype.logout=function(){this.pages=[],this.pages[0]={title:"Login",component:"LoginPage"},this.pages[1]={title:"Signup",component:"SignupPage"}},t.prototype.login=function(){this.pages[0]={title:"Matches",component:"CardsPage"},this.pages[1]={title:"Logout",component:"WelcomePage"},this.pages[2]={title:"Master",component:"ListMasterPage"}},t}()},89:function(t,n,e){"use strict";e(79),e(146);var a=e(100);e.d(n,"a",function(){return a.a});e(147),e(80)}},[233]);