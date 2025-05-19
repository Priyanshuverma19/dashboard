interface NotificationCardProps {
  notification: { id: number; message: string };
}

export default function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <div className="p-3 rounded-lg glass transition-transform hover:scale-[1.02]">
      <p className="text-[var(--foreground)]">{notification.message}</p>
    </div>
  );
}