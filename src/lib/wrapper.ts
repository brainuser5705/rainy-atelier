import type Category from '../interfaces/category';
import type Grid from '../interfaces/grid';
import STRAPI_URL from '../lib/env';

interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - Set to true if the data is first
 * @returns
 */
async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList
}: Props): Promise<T> {

    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`${STRAPI_URL}/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    console.log(url.toString());

    const res = await fetch(url.toString());
    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey];
    }

    if (wrappedByList) {
        data = data[0];
    }

    return data as T;

}

/**
 * Fetches all categories in database.
 * @returns
 */
export function getCategories(): Promise<Category[]> {
    return fetchApi<Category[]>({
        endpoint: 'categories',
        query: { "populate": "*" },
        wrappedByKey: 'data'
    }); 
}

/**
 * Given the path of the category selected, return the
 * list of Grids associated with it, as a list of Grids
 * @param path the Astro path of the category
 * @returns 
 */
export async function getGridsFromCategory(path: string) : Promise<Grid[]>{
    const category : Category = await fetchApi<Category>({
        endpoint: 'categories',
        query: { 'path': path, 'populate': 'grids' },
        wrappedByKey: 'data',
        wrappedByList: true
    });
    return category.grids;
}

/**
 * Get the URL of the pieces from the specific grid
 * @param grid_name the name of the grid to get pieces from
 * @returns 
 */
export async function getPiecesFromGrid(grid_name: string) {
    const grid : Grid = await fetchApi<Grid>({
        endpoint: 'grids',
        query: { 'name': grid_name, 'populate': 'pieces'},
        wrappedByKey: 'data',
        wrappedByList: true
    });
    return grid.pieces;
}