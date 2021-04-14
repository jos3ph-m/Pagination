const paginate = (followers) => {
  const itemsPerPage = 9;
  //round up
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
  });
};

export default paginate;
