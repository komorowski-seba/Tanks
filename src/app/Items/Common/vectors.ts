import {Vector} from './vector';

export const RIGHT_VECTOR = { x: 1, y: 0 } as const satisfies Vector;
export const LEFT_VECTOR = { x: -1, y: 0 } as const satisfies Vector;
export const UP_VECTOR = { x: 0, y: -1 } as const satisfies Vector;
export const DOWN_VECTOR = { x: 0, y: 1 } as const satisfies Vector;
