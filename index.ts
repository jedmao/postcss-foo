import postcss from 'postcss';

const plugin = 'postcss-foo';

export default postcss.plugin<Foo.Options>(plugin, options => {
	// Type "options." below and you should see
	// bar (property) Foo.Options.bar: string

	// options.

	return root => {};
});

export module Foo {
	export interface Options {
		bar?: string;
	}
}
