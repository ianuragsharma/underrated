import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Underrated | ${title}`;
  }, [title]);
};
export { useDocumentTitle };
