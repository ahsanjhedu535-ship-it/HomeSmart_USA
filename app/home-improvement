import { articles, categories } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
export const metadata = { title: "Home Improvement Guides" };
export default function HomeImprovement() {
  const cat = categories[1];
  return (
    <> <section className="page-hero"> <div className="eyebrow">{cat.kicker}</div> <h1 className="page-title">Make your home work better.</h1> <p> Find practical ways to plan projects, improve comfort, maintain key systems, and use energy more efficiently — one manageable step at a time. </p> </section> <section className="content-wrap"> <div className="article-grid"> {articles .filter((a) => a.category === "Home Improvement") .map((a) => ( <ArticleCard key={a.slug} article={a} /> ))} </div> <div className="prose" style={{ marginTop: 45 }}> <h2>Plan before you renovate</h2> <p> Write down the problem you want to solve, set a realistic budget with a contingency, check local permit requirements, and compare qualified professionals. For safety-critical work involving electricity, gas, structure, or hazardous materials, consult appropriately licensed experts. </p> </div> </section> </>
  );
}
