const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f8c2eeaa18bd7d558e87137de797de35',
    originalImage: (imgPath) =>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;