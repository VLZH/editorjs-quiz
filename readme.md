# Editor.js plugin for inserting links to quizzes

## Disclaimer
My advice: Do not use this library =)

## Info
Supported quizzes:
* playbuzz.com

### Installation
```bash
yarn add editorjs-quiz
```

### Usage
```javascript
import QuizTool from "editorjs-quiz";
// ...
var editor = EditorJS({
  tools: {
    quiz: {
      class: QuizTool,
    }
  }
});
```

### Data example
```json
{
    "type": "quiz",
    "data": {
        "link": "https://www.playbuzz.com/item/6579cfd3-f855-43d9-939a-fca91bb748dd",
        "provider": "playbuzz",
        "html": "...",
        "frame": null,
        "id": "6579cfd3-f855-43d9-939a-fca91bb748dd",
        "thumbnail": null
    }
}
```
