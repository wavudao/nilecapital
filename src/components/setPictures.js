const setPictures = (arr) => {
  let images = {};

  arr.keys().map((item, index) => {
    images[item.replace("./", "")] = arr(item);
  });
  return images;
};

export default setPictures;
