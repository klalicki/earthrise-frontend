import { loadFromCMS } from "./loadFromCMS";
import { parse as parseYaml } from "yaml";
type PageContentBlock = {
  id: string;
  headline: string;
  content: string;
};

type PageContentMap = {
  [key: string]: {
    headline: string;
    content: string;
  };
};

export const getPageContents = async (pageID: string) => {
  const data = await loadFromCMS({
    query: `page("page-contents").find("${pageID}")`,
    select: { articles: "page.content.articles" },


  });
  const parsedData: PageContentBlock[] = parseYaml(data.articles);
  const returnObj: PageContentMap = {};
  parsedData.forEach((article) => {
    returnObj[article.id] = {
      headline: article.headline,
      content: article.content,
    };
  });
  return returnObj;
};
