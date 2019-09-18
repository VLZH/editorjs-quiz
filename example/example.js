import EditorJS from "@editorjs/editorjs";
import QuizTool from "../src/index";

const editor = new EditorJS({
  holder: "app",
  tools: {
    quiz: QuizTool
  },
  data: {
    blocks: [
      {
        type: "quiz",
        data: {
          link:
            "https://www.playbuzz.com/item/6579cfd3-f855-43d9-939a-fca91bb748dd",
          provider: "playbuzz",
          html: `<script>(function (d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s);js.id = id;js.src = "//embed.playbuzz.com/sdk.js";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'playbuzz-sdk'));</script><div class="playbuzz" data-id="6579cfd3-f855-43d9-939a-fca91bb748dd" data-implementation="oembed"></div>`,
          frame: null,
          id: "6579cfd3-f855-43d9-939a-fca91bb748dd",
          thumbnail:
            "//cdn.playbuzz.com/cdn/6579cfd3-f855-43d9-939a-fca91bb748dd/ce232b47-2b29-4447-b95e-411ba2fb81e6.jpg"
        }
      }
    ]
  }
});

const button = document.getElementById("savebutton");
if (button) {
  button.addEventListener("click", async () => {
    const data = await editor.save();
    console.log(data);
  });
}
