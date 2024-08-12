import Image from "next/image";
import square from "../../public/square.svg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import github from "../../public/tech-icons/github.svg";
import discord from "../../public/tech-icons/discord.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import notion from "../../public/tech-icons/notion.svg";
import micro from "../../public/tech-icons/micro.svg";
import nextjs from "../../public/tech-icons/nextjs-icon-svgrepo-com.svg"
import react from "../../public/tech-icons/react-svgrepo-com.svg"
import tailwindcss from "../../public/tech-icons/tailwindcss-icon-svgrepo-com.svg"
import javascript from "../../public/tech-icons/javascript-svgrepo-com.svg"
import typescript from "../../public/tech-icons/typescript-svgrepo-com.svg"
import python from "../../public/tech-icons/python-svgrepo-com.svg"
import django from "../../public/tech-icons/django-icon-svgrepo-com.svg"
import fastapi from "../../public/tech-icons/fastapi-svgrepo-com.svg"
import mysql from "../../public/tech-icons/mysql-logo-svgrepo-com.svg"
import mongodb from "../../public/tech-icons/mongodb-logo-svgrepo-com.svg"
import docker from "../../public/tech-icons/docker-svgrepo-com.svg"
import twitter from "../../public/twitter.svg"
import kubernetese from "../../public/tech-icons/kubernetes-svgrepo-com.svg"
import npm from "../../public/tech-icons/npm-svgrepo-com.svg"
import vscode from "../../public/tech-icons/visual-studio-code-svgrepo-com.svg"
import postman from "../../public/tech-icons/postman-icon-svgrepo-com.svg"
import insta from "../../public/insta.svg"
import linkedin from "../../public/linkedin.svg"
import { Button } from "@/components/ui/button";
import pip from "../../public/tech-icons/pip-svgrepo-com.svg"

const socialmedia = [
    {
        id : 1,
        icon : insta,
        name : "Instagram",
        username : "salmankhani_sk",
        link : "https://www.instagram.com/salmankhani_sk"
    },
    {
        id: 2,
        icon : github,
        name : "Github",
        username: "salmankhani-sk",
        link : "https://github.com/salmankhani-sk"
    },
    {
        id: 3,
        icon : linkedin,
        name : "LinkedIn",
        username: "Salman Khan",
        link : "https://www.linkedin.com/in/salman-khan-84924b24a/"

    }
]

const icons = [
    docker, 
    kubernetese,   
    sketch,
    figma,
    vscode,
    postman,
    chatgpt,
    github,
    discord,
    chrome,
    npm,
    pip,
    nextjs,
    react,
    django,
    micro,
]
export function SectionTwo(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div className="w-full relative col-span-1">
                <Image src={square} alt="square" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <Card className="bg-gray-200 border-none">
                    <CardHeader>
                        <CardTitle>Explore my Stack</CardTitle>
                        <CardDescription>Check out the tools i use daily</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 ">
                        {icons.map((item,index)=>(
                            <Image key={index} src={item} alt="icon" height={70} width={70}/>
                        ))}
                    </CardContent>

                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                    {socialmedia.map((item)=>(
                        <Card key={item.id} className="p-4 flex flex-col items-center sm:items-start bg-gray-200 border-none">
                            <Image src={item.icon} alt="icon" className="w-16 h-15" />
                            <h1 className="text-2xl font-medium pt-3"> {item.name} </h1>
                            <p className="text-muted-foreground"> {item.username} </p>
                            <Button className="mt-4 bg-blue-600 hover:bg-blue-500 " size="sm" asChild>
                                <a href={item.link}>Follow</a>
                            </Button>
                        </Card>
                    ))}

                </div>
            </div>
            
        </div>
    )
}