/**
 * @fileOverview WebP Support Detect.
 * @author ChenCheng<sorrycc@gmail.com>
 */(function(){if(this.WebP)return;this.WebP={},WebP._cb=function(e,t){this.isSupport=function(t){t(e)},t(e)},WebP.isSupport=function(e){if(!e)return;if(!window.chrome&&!window.opera)return WebP._cb(!1,e);var t=new Image;t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",t.onload=t.onerror=function(){WebP._cb(t.width===2&&t.height===2,e)}},WebP.run=function(e){this.isSupport(function(t){t&&e()})}})();