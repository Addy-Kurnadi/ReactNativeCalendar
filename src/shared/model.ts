export enum Month {
    January = 0,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

// tslint:disable-next-line:max-line-length
export type DateNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

export interface User {
    id: string
    name: string
    colourIndicator: string
}

export interface UserSelection extends User {
    isSelected: boolean
}

export interface Task {
    id: string
    name: string
    startTime: Date
    endTime: Date
}

export interface TaskSchedule {
    [key: string]: Task[]
}
