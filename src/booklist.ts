export type Book = {
    title: string,
    description: string,
    authors: string[],
    starsRating:Star[],
    imgUrl: string
}
export type Star = {
    rating: number,
}
export const starArray: Star[] = [{rating:1},{rating:2},{rating:3},{rating:4},{rating:5}]

export const bookList: Book[] = [
    {
        title:"Harry Potter and the Philosopher's Stone",
        description:"Some short desc for Harry Potter",
        authors:["J.K. Rowling"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title:"Lord of the Rings",
        description:"Some short desc for Lord of The Rings",
        authors:["J. R. R. Tolkein"],
        starsRating:starArray,
        imgUrl:"https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/7361ea7128cbb179b6a2d512437f63f2/the-lord-of-the-rings--book-1--the-fellowship-of-the-ring-tv-series-tie-in-a-30.jpg"
    },
    {
        title:"A Song of Ice and Fire",
        description:"Some short desc for A Song of Ice and Fire",
        authors:["George R. R. Martin"],
        starsRating:starArray,
        imgUrl:"https://cdn.kobo.com/book-images/6701ad1a-fc89-4421-8e3f-79c36187d331/1200/1200/False/a-game-of-thrones-the-story-continues-books-1-5-a-game-of-thrones-a-clash-of-kings-a-storm-of-swords-a-feast-for-crows-a-dance-with-dragons-a-song-of-ice-and-fire.jpg"
    },
    {
        title:"Apartament 16",
        description:"Some short desc for Apartament 16",
        authors:["Adam Nevill"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/81IugA7up3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title:"Sick in the Head: Conversations About Life and Comedy",
        description:"Some short desc for Sick in the Head: Conversations About Life and Comedy",
        authors:["Judd Apatow"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/51D95OSOvrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title:"A Court of Mist and Fury",
        description:"Some short desc for A Court of Mist and Fury",
        authors:["Sarah J. Maas"],
        starsRating:starArray,
        imgUrl:"https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/-/c3774260e2465dcf3d09b754ba43fb42/a-court-of-mist-and-fury-new-edition-30.jpg"
    },
    {
        title:"Thinking, Fast and Slow",
        description:"Some short desc for Thinking, Fast and Slow",
        authors:["Daniel Kahneman"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title:"The Exorcist",
        description:"Some short desc for The Exorcist",
        authors:["William Peter Blatty"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/81uPSRxNpZL._AC_UF894,1000_QL80_DpWeblab_.jpg"
    },
    {
        title:"On Stranger Tides",
        description:"Some short desc for On Stranger Tides",
        authors:["Tim Powers"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/91B+WK1Xj6L._AC_UF894,1000_QL80_.jpg"
    },
    {
        title:"The Silent Patient",
        description:"Some short desc for The Silent Patient",
        authors:["Alex Michaelides"],
        starsRating:starArray,
        imgUrl:"https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg"
    }
]