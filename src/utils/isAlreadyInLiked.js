const isAlreadyInLiked = (id, liked) => liked.some(({ _id }) => _id === id);
export { isAlreadyInLiked };
