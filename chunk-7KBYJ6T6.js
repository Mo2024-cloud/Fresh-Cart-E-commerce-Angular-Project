import{a as x}from"./chunk-KYXLFBRO.js";import{$ as c,Kb as f,Lb as h,Oa as g,Rb as C,Ta as o,ca as l,db as p,lb as d,sb as m,tb as u,ub as n,vb as a,wb as v}from"./chunk-5OUMWQZE.js";var y=(t,e)=>e._id;function b(t,e){if(t&1&&(n(0,"div",2)(1,"div",3),v(2,"img",4),n(3,"div",5)(4,"h3",6),f(5),a()()()()),t&2){let s=e.$implicit;o(2),d("src",s.image,g)("alt",s.slug),o(3),h(s.name)}}var L=(()=>{let e=class e{constructor(){this.categoriesList=p([]),this._CategoriesService=c(x)}ngOnInit(){this.getAllCategoriesSub=this._CategoriesService.getAllCategories().subscribe({next:i=>{console.log(i),this.categoriesList.set(i.data)},error:i=>{console.log(i)}})}ngOnDestroy(){this.getAllCategoriesSub?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-categories"]],standalone:!0,features:[C],decls:4,vars:0,consts:[[1,"py-5"],[1,"grid","lg:grid-cols-6","md:grid-cols-4","sm:grid-cols-2","gap-7","text-center"],[1,"product","h-full","group","hover:-translate-y-[2%]","relative","p-2"],[1,"cursor-pointer"],[1,"sm:h-[200px]","w-full",3,"src","alt"],[1,"p-3"],[1,"text-sm","text-main"]],template:function(r,S){r&1&&(n(0,"section",0)(1,"div",1),m(2,b,6,3,"div",2,y),a()()),r&2&&(o(2),u(S.categoriesList()))}});let t=e;return t})();export{L as CategoriesComponent};
