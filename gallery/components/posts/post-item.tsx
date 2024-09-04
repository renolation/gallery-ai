import Image from "next/image";
import classes from './post-item.module.css'
import React from "react";
import { Link } from "@nextui-org/link";

type PostItemProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  uploadedBy: string;
  userId: string;
  galleryId?: string;
  createdAt: string;
  updatedAt: string;
};

export default function PostItem({ title, imageUrl, description, status }: PostItemProps) {
  return (
    <>
      <article className={classes.meal}>
        <header>
          <div className={classes.image}>
            <Image src={imageUrl} alt={title} fill />
          </div>
          <div className={classes.headerText}>
            <h2>{title}</h2>
            <p>by {description}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>{description}</p>
          <div className={classes.actions}>
            <Link href={`/`}>View Details</Link>
          </div>
        </div>
      </article>
    </>
  );
}