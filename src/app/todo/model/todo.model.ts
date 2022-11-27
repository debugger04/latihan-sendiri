export interface Todo {
    id: number,
    namaKegiatan: string,
    status: boolean
}

export enum TodoFormField {
    ID = 'id',
    NAMA = 'namaKegiatan',
    STATUS = 'status'
}