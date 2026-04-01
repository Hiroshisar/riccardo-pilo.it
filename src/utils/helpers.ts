export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("it", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(dateStr));
}
