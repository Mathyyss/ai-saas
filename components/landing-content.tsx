"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Sam",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I've used "
    },
    {
        name: "Brittany",
        avatar: "B",
        title: "Designer",
        description: "The site is easy and pleasant to use. I recommend it!  "
    },
    {
        name: "Ethan",
        avatar: "E",
        title: "Student",
        description: "Prompt responses are fast and accurate. The software is powerful. This helped me a lot in my research. Give it a try!"
    },
    {
        name: "Elodie",
        avatar: "A",
        title: "Web marketer",
        description: "So easy to use. The website is beautiful and intuitive "
    },
]


export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}       
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}