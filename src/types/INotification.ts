export enum NotificationType {
    SUCCESS,
    FAIL,
    ATTENTION
}

export interface Notification {
    title: string
    content: string
    type: NotificationType
    id: number
}