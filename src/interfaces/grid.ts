export default interface Grid {
    name: string;
    pieces: ({ url: string; })[]
    num_rows: number;
    num_cols: number;
}