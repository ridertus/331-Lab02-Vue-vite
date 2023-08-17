export interface EventItem{
    id: number
    category: string
    title: string
    description: string
    location: string
    date: string
    time: string
    organizer: string
}

export interface EItem{
    category: string
    organizer: string
}

export interface studentItem{
    id: number
    studentId: string
    name: string
    surname: string
    gpa: number
    image: string
    penAmount: number
    description: string
}