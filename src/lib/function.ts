export function formatTime(time: number): string {
  return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
    hour: "numeric",
    minute: "numeric",
  }).format(time);
}
