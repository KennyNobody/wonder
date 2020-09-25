import Mmenu from 'mmenu-js';

(function() {
	new Mmenu( "#menu", {
		"extensions": [
		"pagedim-black",
		"position-front"
		],
		"navbar": {
			"title": "#ВерюВЧудо",
			"sticky": false
		},
		"navbars": [
		{
			"position": "bottom",
			"content": [
			"<a class='fa fa-envelope' href='#/'></a>",
			"<a class='fa fa-twitter' href='#/'></a>",
			"<a class='fa fa-facebook' href='#/'></a>"
			]
		}
		]
	});
})();