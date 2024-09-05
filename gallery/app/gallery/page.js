import GalleryForm from "@/components/gallery/gallery-form";
import Link from "next/link";
import {getGalleries} from "@/lib/prisma-gallery";
import {Suspense} from "react";

async function Gallery() {
  const gallery = await getGalleries();
  return <ul>
    {gallery.map(gallery => (
      <li key={gallery.id}>
        <Link href={`/gallery/${gallery.name}`}>{gallery.name}</Link>
      </li>
    ))}
  </ul>;
}



export default function GalleryPage() {
  return (
    <>
      <p>Gallery</p>
       <button> <Link href="/gallery/new">Gallery new</Link></button>
        <Suspense fallback={
        <p>Fetching gallery....</p>
        }><Gallery/></Suspense>
    </>
  );
}