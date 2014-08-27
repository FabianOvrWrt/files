
;+function (window, document, undefined) {
	var activity, size;
	var file;
	var _ = window.navigator.mozL10n.get;
	
	function setFontSize() {
		window.localStorage.fontSize = size.toString();
		document.querySelector('textarea').style.fontSize = size.toString() + 'rem'
	}
	
	function setWrap() {
		document.querySelector('textarea').wrap = window.localStorage.wrap;
	}
	
	if (!('fontSize' in window.localStorage)) {
		window.localStorage.fontSize = '2';
		size = 2;
	} else {
		size = parseInt(window.localStorage.fontSize);
	}
	
	if (!('wrap' in window.localStorage)) {
		window.localStorage.wrap = 'off';
	}

	window.navigator.mozSetMessageHandler('activity', function(request) {
		activity = request;
		
		var option = activity.source;
		var data = option.data;
		var reader = new FileReader();
		
		file = data.name;
		
		document.querySelector('#name').innerHTML = '';
		document.querySelector('#name').appendChild(document.createTextNode(data.filename));
		
		reader.onload = function (e) {
			document.querySelector('textarea').value = e.target.result;
		};
		
		reader.readAsText(data.blob);
		
		document.querySelector('#close').onclick = function (e) {
			activity.postResult({saved: false});
			activity = null;
		};
		
	});
	
	document.querySelector('#more').onclick = function (e) {
		size = Math.min(size + 0.5, 8);
		setFontSize();
	};
	
	document.querySelector('#less').onclick = function (e) {
		size = Math.max(size - 0.5, 0.5);
		setFontSize();
	};
	
	document.querySelector('#adjust').onclick = function (e) {
		if (window.localStorage.wrap === 'off') {
			window.localStorage.wrap = '';
		} else {
			window.localStorage.wrap = 'off';
		}
		setWrap();
	};
	
	document.querySelector('#save').addEventListener('click', function () {
		var parts = file.split('/');
		
		if (parts.length > 1) {
			storage.set(parts[1]);
		} else {
			alert(_('storage-not-found'));
		}
		
		storage.delete(file, function () {
			var blob = new Blob([document.querySelector('textarea').value]);
			
			storage.create(blob, file, function () {
				activity.postResult({'saved': true, 'file': file, 'blob': blob});
				activity = null;
			}, function () {
				console.warn(_('unable-save'));
				activity.postResult({saved: false});
				activity = null;
			});
		}, function () {
			console.warn(_('unable-save'));
			activity.postResult({saved: false});
			activity = null;
		});
		
	});
	
	setFontSize();
	setWrap();
	
} (window, document, undefined);