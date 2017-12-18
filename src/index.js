/**
* @module not-inform-rule-tag
*/

const Rule = require('not-inform').Rule;

class InformRuleTag extends Rule{
	/**
     * @param {object} options
     */
	constructor(options){
		super(options);
		if (this.options && this.options.tags){
			this.tags = new Set(this.options.tags);
		}else{
			throw new Error('no tags in options');
		}
		return this;
	}

	/**
	* Test message.tags array, if all elements in this.tags Set returns true
	* @param {object} message message data object
	* @return {boolean} if check passed
	*/
	criteria(message){
		if (message.tags && Array.isArray(message.tags) && message.tags.length > 0){
			for(let t = 0; t < message.tags.length; t++){
				if (!this.tags.has(message.tags[t])){
					return false;
				}
			}
			return true;
		}else{
			return false;
		}
	}
}

module.exports = InformRuleTag;
