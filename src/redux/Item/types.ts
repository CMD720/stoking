export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error,'
}

export interface ItemsSliceProps {
    items: Titem[]
    status: Status
    links: Tlinks
    meta: Tmeta
}

export type Titem = {
    id: number;
    name: string;
    slug: string;
    thumbnail: Tthumbnail;
}
export type Tthumbnail = {
    id: number;
    date_create: Date;
    path: string;
    name: string;
    sizes: Tsizes[];
}

export type Tsizes = {
    name: string
    width: number
    height: number
    path: string
}

export type Tlinks = {
    self: {href:string};
    first: {href:string};
    last: {href:string};
    next: {href:string};
}
export type Tmeta = {
    totalCount: number
    pageCount: number
    currentPage: number
    perPage: number
}

