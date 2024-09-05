import { Button } from "@nextui-org/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

const Bookmarks = () => {
  return (
    <div className="p-2">
      <Button
        onClick={() => {
          const webview = new WebviewWindow("theUniqueLabel", {
            url: "https://www.google.com/",
          });
          // since the webview window is created asynchronously,
          // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
          webview.once("tauri://created", function () {
            console.log("webview window successfully created");
            // webview window successfully created
          });
          webview.once("tauri://error", function (e) {
            console.log(e.payload);
            // an error occurred during webview window creation
          });
        }}
      >
        tauri api
      </Button>
    </div>
  );
};

export const Route = createLazyFileRoute("/bookmarks")({
  component: Bookmarks,
});
