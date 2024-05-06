import Image from "next/image";
import {CardWrapper} from "@/components/Card/styles";

interface ProductVariation {
    colorName?: string;
    color?: string;
    imagePath?: string;
}

export interface ICardData {
    id: number;
    productName: string;
    height: number;
    length: number;
    width: number;
    weight: number;
    price: number;
    description: string;
    availability: boolean;
    collection: string[];
    imagePath?: string;
    variations?: ProductVariation[];
}


export default function Card ({ id, productName, imagePath, height, length, width, price, description, availability, collection, variations }: ICardData) {

    return (
        <CardWrapper>
            {imagePath ?
                <Image src={imagePath} alt={productName} width={260} height={250}/> : 'Скоро добавим фотографию!'}
            <p>{productName}</p>
            <p>{height}x{length}x{width}см</p>
            {price ? <p>₽{price}</p> : ''}
            <p>{description}</p>
            <ul>
                {variations?.map((variation, index) => {
                    return <li key={index} style={{background: variation.color}}></li>;
                })}
            </ul>
            <button>Добавить</button>
        </CardWrapper>
    )
}