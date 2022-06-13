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
            id: '0',
            name: "Item1",
            price: 25,
            count: 0,
            rating: 3,
            imageSrc: "https://cdn.pixabay.com/photo/2016/09/01/09/52/seagull-1635657_960_720.jpg",
            shortDescription: "a very short shortDescription lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: '1',
            name: "Item2",
            price: 45,
            count: 0,
            rating: 4.5,
            imageSrc: "https://cdn.pixabay.com/photo/2021/10/10/06/22/seagull-6695728_960_720.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            shortDescription: "a very short shortDescription lorem ipsum",
        },
        {
            id: '2',
            name: "Item3",
            price: 45,
            count: 2,
            rating: 5,
            imageSrc: "https://cdn.pixabay.com/photo/2022/05/30/14/05/paw-7231300_960_720.jpg",
            shortDescription: "a very short shortDescription lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: '3',
            name: "Item4",
            shortDescription: "a very short shortDescription lorem ipsum",
            price: 45,
            count: 0,
            rating: 2.5,
            imageSrc: "https://cdn.pixabay.com/photo/2022/01/22/09/42/animal-6956681_960_720.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: '4',
            name: "Item5",
            price: 45,
            shortDescription: "a very short shortDescription lorem ipsum",
            count: 5,
            rating: 4.5,
            imageSrc: "https://cdn.pixabay.com/photo/2022/06/02/11/01/snowdrop-anemone-7237694_960_720.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];
}