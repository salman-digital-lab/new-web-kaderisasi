import { NOTIFICATION_TEXT_RENDER } from "@/constants/render/notification";
import { toast } from "sonner";

export const NotifyUser = (type: "SUCCESS" | "ERROR", message: string) => {
  if (type === "SUCCESS") {
    toast.success(NOTIFICATION_TEXT_RENDER[message] || message);
  }

  if (type === "ERROR") {
    toast.error(NOTIFICATION_TEXT_RENDER[message] || message);
  }
};
