import { TextEncoder, TextDecoder } from 'node:util';

global.TextEncoder = TextEncoder;
// @ts-expect-error: This is a test
global.TextDecoder = TextDecoder;
