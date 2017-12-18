const expect = require("chai").expect,
	RuleTag = require('../index.js');


describe("rule tag", function() {
	describe("init", function() {
		it("empty options is passed, should throw", function() {
			let t = function(){new RuleTag({});};
			expect(t).to.throw('no tags in options');
		});

		it("no options is passed, should throw", function() {
			let t = ()=>{new RuleTag();};
			expect(t).to.throw('no tags in options');
		});

		it("no options is passed, should not throw", function() {
			let t = ()=>{new RuleTag({
				tags: ['list']
			});};
			expect(t).to.not.throw(Error);
		});

	});

	describe("test", function() {
		it("try one in list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list']})).to.be.ok;
		});

		it("try one not in list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list1']})).to.be.false;
		});

		it("try few in list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list', 'info']})).to.be.ok;
		});

		it("try few not in list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list1', 'info1']})).to.be.false;
		});

		it("try one in list and few out", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list', 'info1', 'info2']})).to.be.false;
		});

		it("try same list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:['list', 'info']})).to.be.true;
		});

		it("try empty list", function() {
			let rule = new RuleTag({tags: ['list', 'info']});
			expect(rule.test({tags:[]})).to.be.false;
		});

		it("try empty rule list", function() {
			let rule = new RuleTag({tags: []});
			expect(rule.test({tags:[]})).to.be.false;
		});
	});

});
