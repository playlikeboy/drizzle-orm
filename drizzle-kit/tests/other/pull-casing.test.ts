import { expect, test } from 'vitest';
import { withCasing } from '../../src/dialects/pull-utils';

test('camel casing reads all-uppercase names as snake_case words', () => {
	expect(withCasing('FIRST_NAME', 'camel')).toBe('firstName');
	expect(withCasing('ORDER_ID', 'camel')).toBe('orderId');
	expect(withCasing('API_KEY', 'camel')).toBe('apiKey');
	expect(withCasing('ID', 'camel')).toBe('id');
	expect(withCasing('CUSTOMERS', 'camel')).toBe('customers');
	expect(withCasing('ADDRESS_LINE_2', 'camel')).toBe('addressLine2');
});

test('camel casing keeps acronyms in mixed-case names', () => {
	// https://github.com/drizzle-team/drizzle-orm/issues/6074
	expect(withCasing('CallID', 'camel')).toBe('callID');
	expect(withCasing('userID', 'camel')).toBe('userID');
	expect(withCasing('first_name', 'camel')).toBe('firstName');
	expect(withCasing('createdAt', 'camel')).toBe('createdAt');
	expect(withCasing('col_1', 'camel')).toBe('col1');
});

test('preserve casing keeps all-uppercase names as they are', () => {
	expect(withCasing('FIRST_NAME', 'preserve')).toBe('FIRST_NAME');
});
