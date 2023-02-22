import Image from "next/image";

export default function ArtPiecePreview({image, title, artist}) {
return (
    <div>
<image src={image} alt={title} />
<p>{title}</p>
<p>{artist}</p>
    </div>
)
}