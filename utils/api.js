import fetch from "isomorphic-unfetch";

export async function get(origin) {
  const res = await fetch(`${origin}/api/get`);
  const data = await res.json();
  return data.count;
}

export function incr(origin) {
  fetch(`${origin}/api/incr`);
}
