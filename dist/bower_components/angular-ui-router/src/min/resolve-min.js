function $Resolve(e,r){var n=1,i=2,t={},o=[],s=t,u=extend(e.when(t),{$$promises:t,$$values:t});this.study=function(t){function l(e,s){if(v[s]!==i){if(h.push(s),v[s]===n)throw h.splice(0,indexOf(h,s)),new Error("Cyclic dependency: "+h.join(" -> "));if(v[s]=n,isString(e))c.push(s,[function(){return r.get(e)}],o);else{var u=r.annotate(e);forEach(u,function(e){e!==s&&t.hasOwnProperty(e)&&l(t[e],e)}),c.push(s,e,u)}h.pop(),v[s]=i}}function a(e){return isObject(e)&&e.then&&e.$$promises}if(!isObject(t))throw new Error("'invocables' must be an object");var f=objectKeys(t||{}),c=[],h=[],v={};return forEach(t,l),t=h=v=null,function(n,i,t){function o(){--w||(b||merge(m,i.$$values),d.$$values=m,d.$$promises=d.$$promises||!0,delete d.$$inheritedValues,v.resolve(m))}function l(e){d.$$failure=e,v.reject(e)}function h(i,s,u){function a(e){c.reject(e),l(e)}function f(){if(!isDefined(d.$$failure))try{c.resolve(r.invoke(s,t,m)),c.promise.then(function(e){m[i]=e,o()},a)}catch(e){a(e)}}var c=e.defer(),h=0;forEach(u,function(e){p.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(h++,p[e].then(function(r){m[e]=r,--h||f()},a))}),h||f(),p[i]=c.promise}if(a(n)&&void 0===t&&(t=i,i=n,n=null),n){if(!isObject(n))throw new Error("'locals' must be an object")}else n=s;if(i){if(!a(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else i=u;var v=e.defer(),d=v.promise,p=d.$$promises={},m=extend({},n),w=1+c.length/3,b=!1;if(isDefined(i.$$failure))return l(i.$$failure),d;i.$$inheritedValues&&merge(m,omit(i.$$inheritedValues,f)),extend(p,i.$$promises),i.$$values?(b=merge(m,omit(i.$$values,f)),d.$$inheritedValues=omit(i.$$values,f),o()):(i.$$inheritedValues&&(d.$$inheritedValues=omit(i.$$inheritedValues,f)),i.then(o,l));for(var j=0,y=c.length;y>j;j+=3)n.hasOwnProperty(c[j])?o():h(c[j],c[j+1],c[j+2]);return d}},this.resolve=function(e,r,n,i){return this.study(e)(r,n,i)}}$Resolve.$inject=["$q","$injector"],angular.module("ui.router.util").service("$resolve",$Resolve);