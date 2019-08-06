/*
Uma classe para trabalhar com LocalStorage
*/
export default class LocalStorageHandler {
	static _ls = null;

	static _key = null;

	constructor() {}

	//static _ls = localStorage;
	/**
	 * @method get
	 * @param key {String} Item key
	 * @return {String|Object|Null}
	 */
	static get(key) {
		try {
			return JSON.parse(this._ls.getItem(key));
		} catch (e) {
			return this._ls.getItem(key);
		}
	}

	/**
	 * @method set
	 * @param key {String} Item key
	 * @param val {String|Object} Item value
	 * @return {String|Object} The value of the item just set
	 */
	static set(key, val) {
		this._ls.setItem(key, JSON.stringify(val));
		return this.get(key);
	}

	/**
	 * @method key
	 * @param index {Number} Item index
	 * @return {String|Null} The item key if found, null if not
	 */

	static key(index) {
		if (typeof index === 'number') {
			return this._ls.key(index);
		}
	}

	/**
	 * @method data
	 * @return {Array|Null} An array containing all items in localStorage through key{string}-value{String|Object} pairs
	 */
	static data() {
		var i = 0;
		var data = [];

		while (this._ls.key(i)) {
			data[i] = [this._ls.key(i), this.get(this._ls.key(i))];
			i++;
		}

		return data.length ? data : null;
	}

	static getDataByKey(key) {
		try {
			this._key = key;
			let data = localStorage.getItem(key);

			if (data === null) {
				return 0;
			}
			return JSON.parse(data);
		} catch (e) {
			return e;
		}
	}

	static count(key) {
		try {
			let data = localStorage.getItem(key);

			if (data === null) {
				return 0;
			}
			return parseInt(JSON.parse(data).length);
		} catch (e) {
			return e;
		}
	}

	/**
	 * @method remove
	 * @param keyOrIndex {String|Number} Item key or index (which will be converted to key anyway)
	 * @return {Boolean} True if the key was found before deletion, false if not
	 */

	static remove(keyOrIndex) {
		
		var result = false;
		
		var key = typeof keyOrIndex === 'number' ? this.key(keyOrIndex) : keyOrIndex;
		
		let data = localStorage

		if (data === null) {
			return 'KEY_NOT_EXISTS';
		}

		if (key in localStorage) {
			result = true;
			localStorage.removeItem(key);
		}
		
		return result;
	}
/**
 * 
 * @param {*} keyOrIndex 
 * @param {*} key 
 */
	static removeByIdInArray(keyOrIndex, key) {

		let data = localStorage.getItem(key);

		if (data === null) {
			return 'KEY_NOT_EXISTS';
		}

		let storageProducts = JSON.parse(localStorage.getItem(key));

		let products = storageProducts.filter(product => product.productId !== keyOrIndex);

		localStorage.setItem(key, JSON.stringify(products));

		return products;
	}

	/**
	 * @method clear
	 * @return {Number} The total of items removed
	 */
	static clear() {
		var len = this._ls.length;
		this._ls.clear();
		return len;
	}
}
