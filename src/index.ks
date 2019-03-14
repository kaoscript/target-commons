/**
 * index.ks
 * Version 0.1.0
 * January 9th, 2017
 *
 * Copyright (c) 2017 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
require Compiler

Compiler.registerTargets({
	'trident-v5': 'ecma-v5'
	'trident-v6': 'ecma-v5'
	'trident-v7': 'ecma-v5'
	'trident-v8': 'ecma-v5',
	chakra(version, targets) => targets.ecma['6']
	jsc(version, targets) { // {{{
		if version[0] < 10 {
			return targets.ecma['5']
		}
		else {
			return targets.ecma['6']
		}
	}, // }}}
	monkey(version, targets) { // {{{
		if version[0] < 41 {
			return targets.ecma['5']
		}
		else {
			return targets.ecma['6']
		}
	} // }}}
})