export function Main(params) {
  return (
    <div>
      <div className="flex flex-col gap-[32px]">
        <h2>All Blog Post</h2>
        <div className="flex justify-between">
          <div className="flex gap-[20px]">
            <a>All</a>
            <a>Design</a>
            <a>Travel</a>
            <a>Fashion</a>
            <a>Technology</a>
            <a>Branding</a>
          </div>
          <a>View All</a>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
export async function getServerSideProps() {
  const [article, setArticle] = useState(9);
  const articles = await fetch("https://dev.to/api/articles").then((res) =>
    res.json()
  );
  console.log("articles= ", articles);

  return {
    props: {
      articles: articles,
    },
  };
}
