export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error,'
}

export interface ItemsSliceProps {
    items: Titem[]
    totalCount: number
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
    item: TitemSize;
}
export type TitemSize = {
    name: string
    width: number
    height: number
    path: string
}
export type Tlinks = {
    self: string;
    first: string;
    last: string;
    next: string;
}
export type Tmeta = {
    totalCount: number
    pageCount: number
    currentPage: number
    perPage: number
}
// <_links>
//     <self>
//         <href>https://api.stoking.ru/v1/brands?selection%5Bfilter%5D=%5B%7B%22id%22%3A%22used%22%2C%22value%22%3A1%7D%5D&expand=thumbnail.sizes&fields=id%2Cname%2Cslug%2Cthumbnail.%2A&per-page=36&page=1&sort=-countDeal%60%29</href>
//     </self>
// < /_links>
