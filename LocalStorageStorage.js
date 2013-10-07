function LocalStorageStorage() {

}

LocalStorageStorage.prototype = {

	isSupported: function() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	},
	remove: function(key, handler, errorHandler) {
		try {
			var json = localStorage[key];
			if (json !== undefined && json !== null) {
				var value = JSON.parse(json);
				localStorage.removeItem(key);
				if (handler) {
					handler(value);
				}
			} else {
				if (errorHandler) {
					errorHandler("Failed to remove value in local storage ["+key+"]");
				} else {
					console.log("Failed to remove value in local storage ["+key+"]");
				}
			}
		} catch(e) {
			if (errorHandler) {
				errorHandler(e);
			} else {
				console.log("Failed to remove value in local storage ["+key+"] : "+e);
			}
		}
	},
	get: function(key, handler, errorHandler) {
		try {
			var json = localStorage[key];
			if (json !== undefined && json !== null) {
				var value = JSON.parse(json);
				handler(value);
			} else {
				if (errorHandler) {
					errorHandler("Failed to get value in local storage ["+key+"]");
				} else {
					console.log("Failed to get value in local storage ["+key+"]");
				}
			}
		} catch(e) {
			if (errorHandler) {
				errorHandler(e);
			} else {
				console.log("Failed to get value in local storage ["+key+"] : "+e);
			}
		}
	},
	set: function(key, entry, handler, errorHandler) {
		try {
			localStorage[key] = JSON.stringify(entry);
			if (handler) {
				handler(true);
			}
		} catch (e) {
			if (errorHandler) {
				errorHandler(e);
			} else {
				console.log("Failed to set value in local storage ["+key+"] : "+e);
			}
		}
	}
};

