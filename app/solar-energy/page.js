import { articles, categories } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
export const metadata = { title: "Solar Energy Guides" };
export default function Solar() {
  const cat = categories[0];
  return (
    <> <section className="page-hero"> <div className="eyebrow">{cat.kicker}</div> <h1 className="page-title">Solar energy, explained clearly.</h1> <p> Learn the basics of home solar, compare installer proposals, understand equipment, and know which questions to ask before making a major decision. </p> </section> <section className="content-wrap"> <div className="article-grid"> {articles .filter((a) => a.category === "Solar Energy") .map((a) => ( <ArticleCard key={a.slug} article={a} /> ))} </div> <div className="prose" style={{ marginTop: 45 }}> <h2>Before you go solar</h2> <p> Review recent utility bills, check roof age and shading, and ask several qualified installers for written estimates. Verify current incentive details with official sources because programs and eligibility requirements can change. </p> </div> </section> </>
  );
}
