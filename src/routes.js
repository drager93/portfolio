import pages from "./pages";

const pagesMap = Object.keys(pages).map(key => ({
  path: "/" + key,
  component: pages[key]
}));

export default [{ path: "/", component: pages.main }, ...pagesMap];
