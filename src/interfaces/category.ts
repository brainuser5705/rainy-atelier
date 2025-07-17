import type Grid from './grid.ts';

export default interface Category {
    name: string;
    path: string;
    showing_on_landing: boolean;
    cover_piece: {
        url: string;
    };
    grids: Grid[];
}