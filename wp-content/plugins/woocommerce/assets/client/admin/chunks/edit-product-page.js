"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3307],{10314:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(69307),c=o(70444);const a=(0,r.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(c.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},98076:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r=o(69307),c=o(65736),a=o(14599),n=o(9818),l=o(86020),s=o(67221),i=o(85597),d=o(55429),u=o(82405),m=o(68601);const p=()=>{var e,t;const{productId:o}=(0,i.UO)(),p=(0,r.useRef)(),_=(0,r.useRef)(null),{product:h,isLoading:w,isPendingAction:g}=(0,n.useSelect)((e=>{const{getProduct:t,hasFinishedResolution:r,isPending:c}=e(s.PRODUCTS_STORE_NAME);return o?{product:t(parseInt(o,10),void 0),isLoading:!r("getProduct",[parseInt(o,10)]),isPendingAction:c("createProduct")||c("deleteProduct",parseInt(o,10))||c("updateProduct",parseInt(o,10))}:{isLoading:!1,isPendingAction:!1}}));(0,r.useEffect)((()=>{p.current&&h&&p.current.id!==h.id&&_.current&&_.current.resetForm(h),p.current=h}),[h]),(0,r.useEffect)((()=>{(0,a.recordEvent)("view_new_product_management_experience")}),[]);const b=(null===(e=p.current)||void 0===e?void 0:e.id)===(null==h?void 0:h.id)&&"trash"!==(null===(t=p.current)||void 0===t?void 0:t.status)&&"trash"===(null==h?void 0:h.status);return(0,r.createElement)("div",{className:"woocommerce-edit-product"},w&&!h?(0,r.createElement)("div",{className:"woocommerce-edit-product__spinner"},(0,r.createElement)(l.Spinner,null)):null,h&&"trash"===h.status&&!g&&!b&&(0,r.createElement)(d.a,null,(0,r.createElement)("div",{className:"woocommerce-edit-product__error"},(0,c.__)("You cannot edit this item because it is in the Trash. Please restore it and try again.","woocommerce"))),h&&("trash"!==h.status||b)&&(0,r.createElement)(l.Form,{ref:_,initialValues:h||{},errors:{}},(0,r.createElement)(d.a,null,(0,r.createElement)(m.o,null),(0,r.createElement)(u.p,null))))}},55429:(e,t,o)=>{o.d(t,{a:()=>c});var r=o(69307);const c=e=>{let{children:t}=e;return(0,r.createElement)("div",{className:"product-form-layout"},t)}},82405:(e,t,o)=>{o.d(t,{p:()=>w});var r=o(69307),c=o(65736),a=o(55609),n=o(62907),l=o(86158),s=o(10314),i=o(86020),d=o(14599),u=o(9818),m=o(67221),p=o(10431);function _(e){return m.productReadOnlyProperties.forEach((t=>delete e[t])),e}function h(e,t){return"publish"===e&&t?[{label:(0,c.__)("View in store","woocommerce"),onClick:()=>{(0,d.recordEvent)("product_preview_changes",{new_product_page:!0}),window.open(t,"_blank")}}]:[]}const w=()=>{const{createProductWithStatus:e,updateProductWithStatus:t,deleteProductAndRedirect:o,copyProductWithStatus:w,isUpdatingDraft:g,isUpdatingPublished:b,isDeleting:v}=function(){const{createProduct:e,updateProduct:t,deleteProduct:o}=(0,u.useDispatch)(m.PRODUCTS_STORE_NAME),{createNotice:a}=(0,u.useDispatch)("core/notices"),[n,l]=(0,r.useState)(!1),[s,i]=(0,r.useState)({draft:!1,publish:!1}),d=(0,r.useCallback)((async function(t,o){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];i({...s,[o]:!0}),e({...t,status:o}).then((e=>{r||a("success","publish"===e.status?(0,c.__)("🎉 Product published. View in store","woocommerce"):(0,c.__)("🎉 Product successfully created.","woocommerce"),{actions:h(e.status,e.permalink)}),i({...s,[o]:!1}),n||(0,p.navigateTo)({url:"admin.php?page=wc-admin&path=/product/"+e.id})}),(()=>{a("error","publish"===o?(0,c.__)("Failed to publish product.","woocommerce"):(0,c.__)("Failed to create product.","woocommerce")),i({...s,[o]:!1})}))}),[s]),w=(0,r.useCallback)((async function(e,o){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i({...s,[o]:!0}),t(e.id,{...e,status:o}).then((t=>(r||a("success","draft"===e.status&&"publish"===t.status?(0,c.__)("🎉 Product published. View in store.","woocommerce"):(0,c.__)("🎉 Product successfully updated.","woocommerce"),{actions:h(t.status,t.permalink)}),i({...s,[o]:!1}),t)),(e=>(a("error",(0,c.__)("Failed to update product.","woocommerce")),i({...s,[o]:!1}),e)))}),[s]),g=(0,r.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"draft";return d(_({...e,name:(e.name||"AUTO-DRAFT")+" - Copy"}),t)}),[]),b=(0,r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"edit.php?post_type=product";return l(!0),o(e).then((()=>{a("success",(0,c.__)("🎉 Successfully moved product to Trash.","woocommerce")),(0,p.navigateTo)({url:t}),l(!1)}))}),[]);return{createProductWithStatus:d,updateProductWithStatus:w,copyProductWithStatus:g,deleteProductAndRedirect:b,isUpdatingDraft:s.draft,isUpdatingPublished:s.publish,isDeleting:n}}(),{isDirty:E,values:f,resetForm:y}=(0,i.useFormContext)(),P=()=>({product_id:f.id,product_type:f.type,is_downloadable:f.downloadable,is_virtual:f.virtual,manage_stock:f.manage_stock}),k=async()=>{(0,d.recordEvent)("product_publish_and_copy",{new_product_page:!0,...P()}),f.id?await t(f,"publish"):await e(f,"publish",!1,!0),await w(f)},C=async()=>{(0,d.recordEvent)("product_copy",{new_product_page:!0,...P()}),f.id&&await t(f,f.status||"draft"),await w(f)},N=()=>{(0,d.recordEvent)("product_delete",{new_product_page:!0,...P()}),f.id&&o(f.id)},S=f.id&&"publish"===f.status;return(0,r.createElement)("div",{className:"woocommerce-product-form-actions"},(0,r.createElement)(a.Button,{onClick:async()=>{if((0,d.recordEvent)("product_edit",{new_product_page:!0,...P()}),f.id){const e=await t(f,"draft");e&&e.id&&y(e)}else e(f,"draft")},disabled:!E&&!!f.id&&"publish"!==f.status||g||b||v},!E&&f.id&&"publish"!==f.status&&(0,r.createElement)(n.Z,{icon:l.Z}),g?(0,c.__)("Saving","woocommerce"):null,!E&&f.id||g||"publish"===f.status?null:(0,c.__)("Save draft","woocommerce"),"publish"!==f.status||g?null:(0,c.__)("Switch to draft","woocommerce"),E||!f.id||g||"publish"===f.status?null:(0,c.__)("Saved","woocommerce")),(0,r.createElement)(a.Button,{onClick:()=>(0,d.recordEvent)("product_preview_changes",{new_product_page:!0,...P()}),href:f.permalink+"?preview=true",disabled:!f.permalink,target:"_blank"},(0,c.__)("Preview","woocommerce")),(0,r.createElement)(a.ButtonGroup,{className:"woocommerce-product-form-actions__publish-button-group"},(0,r.createElement)(a.Button,{onClick:async()=>{if((0,d.recordEvent)("product_update",{new_product_page:!0,...P()}),f.id){const e=await t(f,"publish");e&&e.id&&y(e)}else e(f,"publish")},variant:"primary",isBusy:b,disabled:!E&&!!S||g||b||v},b?(0,c.__)("Updating","woocommerce"):null,S&&!b?(0,c.__)("Update","woocommerce"):null,S||b?null:(0,c.__)("Publish","woocommerce")),(0,r.createElement)(a.DropdownMenu,{className:"woocommerce-product-form-actions__publish-dropdown",label:(0,c.__)("Publish options","woocommerce"),icon:s.Z,popoverProps:{position:"bottom left"},toggleProps:{variant:"primary"}},(()=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.MenuGroup,null,(0,r.createElement)(a.MenuItem,{onClick:k},S?(0,c.__)("Update & duplicate","woocommerce"):(0,c.__)("Publish & duplicate","woocommerce")),(0,r.createElement)(a.MenuItem,{onClick:C},(0,c.__)("Copy to a new draft","woocommerce")),(0,r.createElement)(a.MenuItem,{onClick:N,isDestructive:!0,disabled:!f.id},(0,c.__)("Move to trash","woocommerce"))))))))}},68601:(e,t,o)=>{o.d(t,{o:()=>w});var r=o(5267),c=o(69307),a=o(55609),n=o(65736),l=o(86020),s=o(83849),i=o.n(s),d=o(14599),u=(o(99196),o(92819)),m=o(70481);const p=e=>{let{children:t,fieldName:o,categoryName:r,location:n,order:l=1}=e;const s=(0,u.snakeCase)(r),i=(0,u.snakeCase)(o);return(0,c.createElement)(a.Fill,{name:`woocommerce_product_${s}_${i}_${n}`},(e=>(0,m.uh)(t,l,e)))};p.Slot=e=>{let{fillProps:t,fieldName:o,categoryName:r,location:n}=e;const l=(0,u.snakeCase)(r),s=(0,u.snakeCase)(o);return(0,c.createElement)(a.Slot,{name:`woocommerce_product_${l}_${s}_${n}`,fillProps:t},m.qk)};const _=e=>{let{fieldName:t,categoryName:o,children:r}=e;return(0,c.createElement)("div",{className:"product-field-layout"},(0,c.createElement)(p.Slot,{fieldName:t,categoryName:o,location:"before"}),r,(0,c.createElement)(p.Slot,{fieldName:t,categoryName:o,location:"after"}))},h=e=>{let{title:t,description:o,children:r}=e;return(0,c.createElement)("div",{className:"product-form-layout__category product-category-layout"},(0,c.createElement)("div",{className:"product-category-layout__header"},(0,c.createElement)("h3",{className:"product-category-layout__title"},t),(0,c.createElement)("div",null,(0,c.createElement)("p",null,o))),(0,c.createElement)("div",{className:"product-category-layout__fields"},c.Children.map(r,(e=>(0,c.isValidElement)(e)&&e.props.name?(0,c.createElement)(_,{fieldName:e.props.name,categoryName:t},e):e))))},w=()=>{const{getInputProps:e}=(0,l.useFormContext)();return(0,c.createElement)(h,{title:(0,n.__)("Product details","woocommerce"),description:(0,n.__)("This info will be displayed on the product page, category pages, social media, and search results.","woocommerce")},(0,c.createElement)(a.TextControl,(0,r.Z)({label:(0,n.__)("Name","woocommerce"),name:"product-details-name",placeholder:(0,n.__)("e.g. 12 oz Coffee Mug","woocommerce")},(t=>{const{className:o,onBlur:r,onChange:c,value:a=""}=e("name");return{value:a,className:i()("woocommerce-add-product__checkbox",o),onChange:c,onBlur:r}})())),(0,c.createElement)(a.CheckboxControl,(0,r.Z)({label:(0,c.createElement)(l.EnrichedLabel,{label:(0,n.__)("Feature this product","woocommerce"),helpDescription:(0,n.__)("Include this product in a featured section on your website with a widget or shortcode.","woocommerce"),moreUrl:"https://woocommerce.com/document/woocommerce-shortcodes/#products",tooltipLinkCallback:()=>(0,d.recordEvent)("add_product_learn_more",{category:"product-details"})})},(t=>{const{checked:o,className:r,onChange:c,onBlur:a}=e(t);return{checked:o,className:i()("woocommerce-add-product__checkbox",r),onChange:e=>((0,d.recordEvent)(`add_product_checkbox_${t}`,{checked:e}),c(e)),onBlur:a}})("featured"))))}}}]);