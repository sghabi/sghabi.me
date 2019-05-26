const serverUrl = process.env.REACT_APP_SERVER_URL || "/";

/**
 * Get the files metadata.
 */
export async function getFilesMeta() {
  const res = await fetch(serverUrl + "filesMeta", {
    method: "GET"
  });
  return await res.json();
}
