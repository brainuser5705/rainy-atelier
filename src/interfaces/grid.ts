export default interface Grid {
    grid_id: string;
    pieces: ({ url: string; })[]
    num_rows: number;
    num_cols: number;
    heading: string;
}