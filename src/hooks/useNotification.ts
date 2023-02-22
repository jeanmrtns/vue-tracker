import { store } from "@/store";
import { NOTIFICATE } from "@/store/mutations-types";
import { NotificationType } from "@/types/INotification";

interface Notification {
    notificate: (type: NotificationType, title: string, content: string) => void
}

export function useNotification(): Notification {
    function notificate(type: NotificationType, title: string, content: string) {
        store.commit(NOTIFICATE, {
            title,
            content,
            type
          })
    }

    return {
        notificate
    }
}