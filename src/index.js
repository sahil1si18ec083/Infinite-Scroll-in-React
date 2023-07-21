import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import InfiniteScroll from "./InfiniteScroll";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <InfiniteScroll />
  </StrictMode>
);
