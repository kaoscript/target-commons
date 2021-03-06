// Generated by kaoscript 0.9.0
module.exports = function(Compiler) {
	Compiler.registerTargets({
		"trident-v5": "ecma-v5",
		"trident-v6": "ecma-v5",
		"trident-v7": "ecma-v5",
		"trident-v8": "ecma-v5",
		chakra: function(version, targets) {
			if(arguments.length < 2) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
			}
			if(version === void 0 || version === null) {
				throw new TypeError("'version' is not nullable");
			}
			if(targets === void 0 || targets === null) {
				throw new TypeError("'targets' is not nullable");
			}
			return targets.ecma["6"];
		},
		jsc: function(version, targets) {
			if(arguments.length < 2) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
			}
			if(version === void 0 || version === null) {
				throw new TypeError("'version' is not nullable");
			}
			if(targets === void 0 || targets === null) {
				throw new TypeError("'targets' is not nullable");
			}
			if(version[0] < 10) {
				return targets.ecma["5"];
			}
			else {
				return targets.ecma["6"];
			}
		},
		monkey: function(version, targets) {
			if(arguments.length < 2) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
			}
			if(version === void 0 || version === null) {
				throw new TypeError("'version' is not nullable");
			}
			if(targets === void 0 || targets === null) {
				throw new TypeError("'targets' is not nullable");
			}
			if(version[0] < 41) {
				return targets.ecma["5"];
			}
			else {
				return targets.ecma["6"];
			}
		}
	});
};