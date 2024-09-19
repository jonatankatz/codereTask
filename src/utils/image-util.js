function getImageUrl(name, subfolder) {
  const assetsPath = "../assets/";
  const wholePath = `${assetsPath}${subfolder ? subfolder : ""}${
    subfolder ? "/" : ""
  }${name}`;

  return new URL(wholePath, import.meta.url).href;
}

export { getImageUrl };
