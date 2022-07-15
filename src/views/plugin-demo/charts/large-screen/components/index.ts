export type LayoutItem = {
    i: number|string|import('vue').Component;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
    maxW?: number | string;
    maxH?: number | string;
    isDraggable?: boolean | null;
    isResizable?: boolean | null;
    static?: boolean;
    dragIgnoreFrom?: string;
    dragAllowFrom?: string | null;
    resizeIgnoreFrom?: string;
};
