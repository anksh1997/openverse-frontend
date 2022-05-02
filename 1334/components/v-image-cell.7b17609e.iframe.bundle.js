(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.8bfa6bb.png"},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js");var VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),errorImage=__webpack_require__("./src/assets/image_not_available_placeholder.png"),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_js_={name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:["image"],data:function data(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function imageAspect(){return this.imgWidth/this.imgHeight},containerAspect:function containerAspect(){return this.imageAspect>maxAspect?maxAspect:this.imageAspect<.75?.75:this.imageAspect},iPadding:function iPadding(){return this.imageAspect<.75?1/.75*100:this.imageAspect>maxAspect?56.25:1/this.imageAspect*100},imageWidth:function imageWidth(){return this.imageAspect<maxAspect?100:this.imageAspect/maxAspect*100},imageTop:function imageTop(){return this.imageAspect>.75?0:(.75-this.imageAspect)/(.75*this.imageAspect*.75)*-50},imageLeft:function imageLeft(){return this.imageAspect<maxAspect?0:(this.imageAspect-maxAspect)/maxAspect*-50}},methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return this.imageAspect,toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onGotoDetailPage:function onGotoDetailPage(event,image){if(!event.metaKey&&!event.ctrlKey){event.preventDefault();var detailRoute=this.localeRoute({name:"PhotoDetailPage",params:{id:image.id,location:window.scrollY}});this.$router.push(detailRoute)}},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},getImgDimension:function getImgDimension(e){this.imgHeight=e.target.naturalHeight,this.imgWidth=e.target.naturalWidth}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"w-full block group relative overflow-hidden rounded-sm focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none bg-dark-charcoal-10 text-dark-charcoal-10",style:"width: "+_vm.containerAspect*_vm.widthBasis+"px;flex-grow: "+_vm.containerAspect*_vm.widthBasis,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},on:{click:function($event){return _vm.onGotoDetailPage($event,_vm.image)}}},[_c("figure",{staticClass:"absolute w-full",style:"width: "+_vm.imageWidth+"%; top: "+_vm.imageTop+"%; left:"+_vm.imageLeft+"%;"},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}]}}}]);