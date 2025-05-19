import NotificationCard from './NotificationCard';

interface NotificationsProps {
  notifications: { id: number; message: string }[];
}

export default function Notifications({ notifications }: NotificationsProps) {
  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        Notifications & Tips
      </h2>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}