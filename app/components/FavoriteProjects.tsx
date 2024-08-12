import { Item } from "@radix-ui/react-navigation-menu";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData(){
    const query =` *[_type=='project'] | order(_createdAt desc) [0...2] {
    title,
      _id,
      link,
      description,
      tags,
      "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query,{},{next :{revalidate : 30}});
  return data;
}
export async function FavoriteProjects(){
    const data: ProjectsCard[] = await getData();
    
    return(
        <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-12 grid-cols-1">
            {data.map((item) =>(
                    <a href={item.link} key={item._id} className="group block" target="_blank">
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
                            <Image src={item.imageUrl} alt="Image Description" fill className="object-cover group-hover:scale-95 transition-transform duration-500 ease-in-out rounded-2xl" />
                        </div>
                        <div className="mt-5">
                            <h2 className="font-medium text-lg hover:underline">{item.title}</h2>
                            <p className="mt-1 text-muted-foreground line-clamp-1">{item.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                               {item.tags.map((tagItem,index) =>(
                                <span key={index} className="inline-flex items-center  bg-primary/10  text-xs px-3 py-1.5 rounded-md sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20 ">{tagItem}</span>
                               ))}
                            </div>
                        </div>
                    </a>
                ))}
        </div>
    )
}