import React from "react";
import "./Blog.css";
import Blogcard from "./Blogcard";
// import Image1 from "https://unsplash.com/photos/hjwKMkehBco";

const data = [
    {
        img: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        heading:
            "India is the Second-Fastest-Growing freelance market in the world, Says report",
        para: "India is the Second-Fastest-Growing freelance market in the world with a massive increase with a number of freelancers this year.",
        show: "According to a report on 'Freelancing in 2020: An Abundance of Opportunities' by payoneer. Ranked as the Second-Fastest-Growing freelance market in the world India's freelance economy currently consists of an estimated 15 millon freelancers, the report said.The report further highlighted how the pandemic has changed the future of work with increased technology adoption, stating that a permanent change in the global workforce is inevitable. Going forward, while there will still be space for full-time employees, more and more companies will seek remote and freelance workers for a wider variety of tasks, the report said.",
    },
    {
        img: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        heading: "What is The Future Of Freelancing In India?",
        para: "Factors such as independence, freedom to choose the kind of work they want to do and better financial prospects are the main reasons. Another key driving force is technology.",
        show: "Most freelancers are remote workers. Technology has made this possible. Newer tech gadgets and digital advancements are enhancing the way freelancers work. Collaborative tools such as Slack, Dropbox, and Google Docs have made working with teams across the globe a piece of cake. According to the McKinsey study, the online marketplace could add $ 2.7 trillion to global GDP by 2025.",
    },
    {
        img: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        heading: "A study reveals one in five Indian freelancers is a woman",
        para: "One in every five Indian freelancers is a woman, according to global study by global digital payment services firm Payoneer.",
        show: "Most women in India freelance for online marketplaces, with a major chunk of clients based in the United States and average work times of 2-2.5 hours. How freelancing captured the market and interests of females? Home, children, and social responsibilities take plenty of time in a day. Working two tasks at a time gets tricky. This is where freelance career options help women. With the changing times, many women now prefer to leave their full-time jobs to pick freelancing as it is lucrative.",
    },
    {
        img: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        heading: "Heading 3",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel perspiciatis officia velit corrupti, obcaecati placeat animi in sit odio!",
        show: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dolorem, cumque omnis atque animi odit dolor dignissimos facere inventore sed aliquam blanditiis repellat velit nemo corporis dolore vero porro accusamus!",
    },
    {
        img: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        heading: "Heading 3",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel perspiciatis officia velit corrupti, obcaecati placeat animi in sit odio!",
        show: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dolorem, cumque omnis atque animi odit dolor dignissimos facere inventore sed aliquam blanditiis repellat velit nemo corporis dolore vero porro accusamus!",
    },
];

function Blog() {
    return (
        <div className="blog">
            <h1>Blogs</h1>
            <section>
                {data.map((item, index) => {
                    return <Blogcard key={index} item={item} />;
                })}
            </section>
        </div>
    );
}

export default Blog;
