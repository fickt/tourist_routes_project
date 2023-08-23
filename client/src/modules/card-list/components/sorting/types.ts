export type Tab = {
    id: string,
    title: string,
}

export type TSortProps = {
    tabs: Tab[];
}

export type TSortOption = {
    label: string,
    value?: string
    options?: { label: string, value: string }[]
} 

export type TSortOptions = TSortOption[];

export type TSortingProps = {
    options: TSortOptions
}