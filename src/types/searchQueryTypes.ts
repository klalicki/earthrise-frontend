export interface SearchQueryType {
  query: string;
  page: string;
  types: string[];
}

import articles from "../assets/searchFilters/articles.svg";
import chapters from "../assets/searchFilters/chapters.svg";
import lessons from "../assets/searchFilters/lessons.svg";
import people from "../assets/searchFilters/people.svg";

export const pageTypes = [
  {
    label: "Article",
    value: "article",
    color: "var(--color-local-accent-a)",
    Graphic: articles,
  },
  {
    label: "Chapter",
    value: "chapter",
    color: "var(--color-local-accent-b)",
    Graphic: chapters,
  },
  {
    label: "Lesson",
    value: "lesson",
    color: "var(--color-local-accent-c)",
    Graphic: lessons,
  },
  {
    label: "Person",
    value: "person",
    color: "var(--color-local-accent-d)",
    Graphic: people,
  },
];
