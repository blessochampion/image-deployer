"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/pages/maps.ts
  window.mapLibReadyHandler = () => {
    console.log("Map library is ready");
  };
  console.log("Map library is ready - override");
})();
//# sourceMappingURL=maps.js.map
