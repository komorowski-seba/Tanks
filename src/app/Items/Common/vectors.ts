import {IVector} from './ivector';

export const RIGHT_VECTOR = { x: 1, y: 0 } as const satisfies IVector;
export const LEFT_VECTOR = { x: -1, y: 0 } as const satisfies IVector;
export const UP_VECTOR = { x: 0, y: -1 } as const satisfies IVector;
export const DOWN_VECTOR = { x: 0, y: 1 } as const satisfies IVector;
