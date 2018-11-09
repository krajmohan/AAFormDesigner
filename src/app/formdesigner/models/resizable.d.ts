export interface BoundingRectangle {
	top: number;
	bottom: number;
	left: number;
	right: number;
	height?: number;
	width?: number;
	scrollTop?: number;
	scrollLeft?: number;
	[key: string]: number | undefined;
}

/**
 * The edges that the resize event were triggered on
 */
export interface Edges {
	top?: boolean | number;
	bottom?: boolean | number;
	left?: boolean | number;
	right?: boolean | number;
	[key: string]: boolean | number | undefined;
}

/**
 * The `$event` object that is passed to the resize events
 */
export interface ResizeEvent {
	rectangle: BoundingRectangle;
	edges: Edges;
}
