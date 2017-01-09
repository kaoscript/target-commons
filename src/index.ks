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
	'safari-v8': 'ecma-v5'
	'safari-v9': 'ecma-v5'
	'safari-v10': 'ecma-v6'
	'trident-v5': 'ecma-v5'
	'trident-v6': 'ecma-v5'
	'trident-v7': 'ecma-v5'
	'trident-v8': 'ecma-v5'
})