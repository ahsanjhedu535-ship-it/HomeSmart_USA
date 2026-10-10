import Link from "next/link";
import { articles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}
export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article)
    return (
      <div className="not-found"> <h1>Guide not found</h1> <Link className="button" href="/"> Back home </Link> </div>
    );
  return (
    <> <div className="breadcrumbs"> <Link href="/">Home</Link>　/　 <Link href={article.categoryHref}>{article.category}</Link>　/　Article </div> <article className="article-layout"> <div className="eyebrow">{article.category}</div> <h1>{article.title}</h1> <div className="article-meta"> {article.date}　·　{article.read}　·　HomeSmart USA Editorial </div> <p className="article-intro">{article.intro}</p> <img className="article-hero-image" src={article.image} alt="" /> <div className="prose"> {article.sections.map(([heading, body]) => ( <section key={heading}> <h2>{heading}</h2> <p>{body}</p> </section> ))} <h2>A thoughtful next step</h2> <p> Every home is different. Use these points as a starting place, check current local requirements, and consult qualified professionals when a decision involves safety, building work, or significant spending. </p> <p> <em> Editorial note: This article is general educational information and is not a substitute for professional, financial, tax, or legal advice. </em> </p> <p> <Link className="read-link" href={article.categoryHref}> Explore more in {article.category} → </Link> </p> </div> </article> <section className="section" style={{ paddingTop: 10 }}> <div className="section-heading"> <div> <div className="section-kicker">Keep exploring</div> <h2>More useful guides.</h2> </div> </div> <div className="article-grid"> {articles .filter((a) => a.slug !== article.slug) .slice(0, 2) .map((a) => ( <ArticleCard key={a.slug} article={a} /> ))} </div> </section> </>
  );
}
