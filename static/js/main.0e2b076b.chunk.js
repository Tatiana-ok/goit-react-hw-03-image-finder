(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2M-cv",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1ChYc"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__10Xsg",Modal:"Modal_Modal__1xnQu"}},13:function(e,t,a){e.exports={containerButton:"Button_containerButton__2VIp5",Button:"Button_Button__2RlmO"}},20:function(e,t,a){},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(8),o=a.n(c),l=(a(20),a(3)),i=a(4),s=a(6),h=a(5),u=(a(21),a(7)),m=a.n(u),d=a(0),b=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.onChange=function(t){e.setState({search:t.currentTarget.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.onSubmit,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(d.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.search,onChange:this.onChange})]})})}}]),a}(r.Component),j=a(14),g=a(9),p=a.n(g),f=(a(23),a(15)),y=a.n(f),O=a(11),v=a.n(O);function S(e){var t=e.largeImageURL,a=void 0===t?"":t,r=e.dataSource,n=void 0===r?"":r,c=e.handleImgClick;return Object(d.jsx)("li",{className:v.a.ImageGalleryItem,onClick:function(){return c(a)},children:Object(d.jsx)("img",{src:n,alt:"",className:v.a.ImageGalleryItemImage})})}var I={fetchPixabayAPI:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19404590-ebb1cf59ef1b71a0170f01254","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(e)))}))}},_=a(12),x=a.n(_),k=document.querySelector("#modal-root"),C=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.clickOnBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:x.a.Overlay,onClick:this.clickOnBackdrop,children:Object(d.jsx)("div",{className:x.a.Modal,children:Object(d.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),k)}}]),a}(r.Component),w=a(13),B=a.n(w);var N=function(e){var t=e.onHandleClick;return Object(d.jsx)("div",{className:B.a.containerButton,children:Object(d.jsx)("button",{className:B.a.Button,type:"button",onClick:t,children:"Load more"})})},F=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:[],modal:!1,modalImg:"",page:1,error:null,loader:!1},e.handleImgClick=function(t){e.setState({modalImg:t,modal:!0})},e.toggleModal=function(){e.setState({modal:!1})},e.onHandleClick=function(){e.setState({page:e.state.page+1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.value,n=this.props.value,c=t.page,o=this.state.page;r!==n&&(this.setState({loader:!0}),I.fetchPixabayAPI(n,o).then((function(e){0===e.hits.length&&a.setState({error:"No images"}),a.setState({search:e.hits})})).catch((function(e){return a.setState({error:e})})).finally((function(){a.setState({loader:!1})}))),c!==o&&(this.setState({loader:!0}),I.fetchPixabayAPI(n,o).then((function(e){return a.setState((function(t){return{search:[].concat(Object(j.a)(t.search),Object(j.a)(e.hits))}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){a.setState({loader:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.modal,r=t.error,n=t.loader,c=t.search;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:p.a.ImageGallery,children:this.state.search.map((function(t){var a=t.id,r=t.largeImageURL,n=t.webformatURL;return Object(d.jsx)("div",{children:Object(d.jsx)(S,{largeImageURL:r,dataSource:n,handleImgClick:e.handleImgClick})},a)}))}),c.length>0&&Object(d.jsx)(N,{onHandleClick:this.onHandleClick}),a&&Object(d.jsx)(C,{largeImageURL:this.state.modalImg,onClose:this.toggleModal}),n&&Object(d.jsx)("div",{className:p.a.Loader,children:Object(d.jsx)(y.a,{type:"ThreeDots",color:"#FF1493",height:80,width:80,timeout:3e3})}),r&&Object(d.jsx)("div",{className:p.a.Error,children:Object(d.jsx)("h2",{children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a/An error occurred, please try again"})})]})}}]),a}(r.Component),L=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleSubmit=function(t){e.setState({search:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{onSubmit:this.handleSubmit}),Object(d.jsx)(F,{value:this.state.search})]})}}]),a}(r.Component);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2h1A6",SearchForm:"Searchbar_SearchForm__1yuJ3",SearchFormButton:"Searchbar_SearchFormButton__2J7Nv",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1kuJP",SearchFormInput:"Searchbar_SearchFormInput__Oh9-Z"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__11o0W",Loader:"ImageGallery_Loader__2fyiP",Error:"ImageGallery_Error__3LEY3"}}},[[44,1,2]]]);
//# sourceMappingURL=main.0e2b076b.chunk.js.map