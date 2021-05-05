export function range(start = 0, end, interval = 1) {
  return Array(Math.ceil((end - start + 1) / interval))
    .fill()
    .map((_, idx) => start + idx * interval);
}
