import { articles, categories } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
export const metadata = { title: "Smart Home Guides" };
export default function SmartHome() {
  const cat = categories[2];
  return (
    <> <section className="page-hero"> <div className="eyebrow">{cat.kicker}</div> <h1 className="page-title"> Smart home technology without the confusion. </h1> <p> Explore connected devices, home security basics, automation, and privacy-aware setup tips that help technology work for your household. </p> </section> <section className="content-wrap"> <div className="article-grid"> {articles .filter((a) => a.category === "Smart Home") .map((a) => ( <ArticleCard key={a.slug} article={a} /> ))} </div> <div className="prose" style={{ marginTop: 45 }}> <h2>Start with a simple setup</h2> <p> Choose devices that solve a clear need, check compatibility before buying, update firmware, secure accounts with unique passwords, and review what data a device collects. Keep a manual backup for important security functions. </p> </div> </section> </>
  );
}
