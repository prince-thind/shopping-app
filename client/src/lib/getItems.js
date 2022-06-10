export default async function getItems() {
    await sleep(2);
    return fakeData();

}

async function sleep(n) {
    return new Promise(r => setTimeout(r, n * 1000));
}


function fakeData() {
    return [
        {
            name: "Item1",
            price: 45,
            count: 0,
            imageSrc:
                "https://cdn.pixabay.com/photo/2016/09/01/09/52/seagull-1635657_960_720.jpg",
            shortDescription: "a very short shortDescription lorem ipsum",
            id: 0,
        },
        {
            name: "Item2",
            price: 45,
            count: 0,
            imageSrc:
                "https://cdn.pixabay.com/photo/2021/10/10/06/22/seagull-6695728_960_720.jpg",
            id: 1,
            shortDescription: "a very short shortDescription lorem ipsum",
        },
        {
            name: "Item3",
            price: 45,
            shortDescription: "a very short shortDescription lorem ipsum",
            count: 2,
            id: 2,

            imageSrc:
                "https://cdn.pixabay.com/photo/2022/05/30/14/05/paw-7231300_960_720.jpg",
        },
        {
            name: "Item4",
            shortDescription: "a very short shortDescription lorem ipsum",
            price: 45,
            id: 3,
            count: 0,
            imageSrc:

                "https://cdn.pixabay.com/photo/2022/01/22/09/42/animal-6956681_960_720.jpg",
        },
        {
            name: "Item5",
            price: 45,
            shortDescription: "a very short shortDescription lorem ipsum",
            count: 5,
            id: 4,

            imageSrc:
                "https://cdn.pixabay.com/photo/2022/06/02/11/01/snowdrop-anemone-7237694_960_720.jpg",
        },
    ];
}