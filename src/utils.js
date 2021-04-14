const paginate = (followers) => {
  const itemsPerPage = 9;
  //round up
  const pages = Math.ceil(followers.length / itemsPerPage);
};

export default paginate;
