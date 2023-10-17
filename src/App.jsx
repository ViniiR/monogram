import GalleryComponent from "./GalleryComponent";

const miniConsole = {
    title: "MINI CONSOLE",
    price: 249, //TODO: make price calculation depending on currency
    description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
    regularImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_750x500_crop_center.jpg.webp?v=1660013247",
    hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_750x500_crop_center.jpg.webp?v=1668446709",
};

const audioConsole = {
    title: "AUDIO CONSOLE",
    price: 499, //TODO: make price calculation depending on currency
    description: "Ideal for music & audio. Adaptable to any workflow.",
    regularImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_750x500_crop_center.jpg.webp?v=1623682377",
    hoverImg: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_750x500_crop_center.jpg.webp?v=1668433146",
};

function App() {
    return (
        <>
            <GalleryComponent {...miniConsole} />
            <GalleryComponent {...audioConsole} />
        </>
    );
}

export default App;
