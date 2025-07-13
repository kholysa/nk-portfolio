export const Product = ({
    image,
    title,
    description
}: {
    image: string;
    title: string;
    description: string;
}) => {

    return <>
        <div>{image}</div>
        <div>{title}</div>
        <div>{description}</div>

    </>
}