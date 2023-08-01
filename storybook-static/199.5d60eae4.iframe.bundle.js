"use strict";(self.webpackChunkoutsystems_stencil=self.webpackChunkoutsystems_stencil||[]).push([[199],{"./dist/esm/osui-rating.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{osui_rating:()=>OSUIRating});var CssClass,Events,Properties,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-78895e71.js");!function(CssClass){CssClass.Rating="osui-rating",CssClass.IsEdit="is-edit",CssClass.Filled="rating-item-filled",CssClass.Empty="rating-item-empty",CssClass.RatingInput="rating-input",CssClass.RatingItem="rating-item",CssClass.WCAGHideText="wcag-hide-text"}(CssClass||(CssClass={})),function(Events){Events.OnSelected="OnSelected"}(Events||(Events={})),function(Properties){Properties.IsEdit="IsEdit",Properties[Properties.MaxRatingScale=100]="MaxRatingScale",Properties[Properties.MinRatingScale=0]="MinRatingScale",Properties.RatingScale="RatingScale",Properties.RatingValue="RatingValue",Properties.Size="Size"}(Properties||(Properties={}));const OSUIRating=class{constructor(hostRef){(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.editable=!0,this.scale=5,this.value=0}async handleClick(){this._currentValue=await this.getValue()}connectedCallback(){this.selfElement.classList.add(CssClass.Rating),this.editable&&this.selfElement.classList.add(CssClass.IsEdit)}componentDidRender(){this._ratingItems=this.selfElement.shadowRoot.querySelectorAll("input"),this.setValue(this.value)}renderRatingItem(index){const _hideLabelClass=0===index?CssClass.WCAGHideText:"",_ratingInputId="rating-"+index;return(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"radio",class:`${CssClass.RatingInput} ${CssClass.WCAGHideText}`,id:_ratingInputId,name:"rating-input",value:index}),(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:`${CssClass.RatingItem} ${_hideLabelClass}`,htmlFor:_ratingInputId},(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:CssClass.WCAGHideText},"Rating ",index),0!==index?(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{class:CssClass.Filled,name:"star",color:"primary"}),(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{class:CssClass.Empty,name:"star-outline"})):void 0))}async getValue(){const _inputChecked=this.selfElement.shadowRoot.querySelector("input:checked");return _inputChecked&&(this._currentValue=parseInt(_inputChecked.value)),this._currentValue}async setValue(value){value<0||value>this.scale||value===this._currentValue||(this._ratingItems[value].checked=!0,this._currentValue=value)}render(){return[(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset",null,(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.h)("legend",{class:CssClass.WCAGHideText},"Rating"),Array.from(Array(this.scale+1).keys()).map((index=>this.renderRatingItem(index))))]}get selfElement(){return(0,_index_78895e71_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};OSUIRating.style=":host{--rating-size:16px;--layer-local-tier-1:1;display:inline-flex;flex-wrap:wrap;font-size:var(--rating-size);pointer-events:none}:host(.is-edit) .rating-item{cursor:pointer;pointer-events:auto}:host fieldset{border:none;display:contents;margin:0;padding:0}:host .rating-item{display:inline-block;height:var(--rating-size);padding-right:calc(var(--rating-size) + var(--space-s));position:relative;width:var(--rating-size)}.rating-item-filled,.rating-item-empty{left:0;line-height:1;position:absolute;top:0;transition:opacity linear 150ms}.rating-item-filled{opacity:1;z-index:var(--layer-local-tier-1)}.rating-item-empty{opacity:0;z-index:var(--layer-global-screen)}:host .rating-item[class*=rating-]:last-of-type{padding-right:0}:host input:checked+label .rating-item-empty,:host input:checked~label .rating-item-filled{opacity:0}:host(:hover) input+label .rating-item-filled{opacity:1}:host input:focus+label .rating-item-empty,:host input:hover~label .rating-item-filled{opacity:0}:host input:checked~label .rating-item-empty,:host input:checked+label .rating-item-filled,:host input:hover~label .rating-item-empty,:host input:focus~label .rating-item-empty,:host input:focus+label .rating-item-filled{opacity:1}:host input:hover~label .rating-item-filled{opacity:0}:host input:hover+label .rating-item-filled{opacity:1}.rating-item.wcag-hide-text{display:contents}.wcag-hide-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"}}]);