export const apiMovies = (isFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFail) reject(new Error('ошибка api.'));
      resolve("успех");
    }, 500)
  })
}