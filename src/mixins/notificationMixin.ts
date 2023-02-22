import { store } from "@/store";
import { NOTIFICATE } from "@/store/mutations-types";
import { NotificationType } from "@/types/INotification";

export const notificationMixin = {
    methods: {
        notificate(type: NotificationType, title: string, content: string) {
            store.commit(NOTIFICATE, {
                title,
                content,
                type
              })
        }
    }
}