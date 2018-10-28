import * as sourcegraph from "sourcegraph";

export function activate(): void {
    const panelView = sourcegraph.app.createPanelView("wordCount.panel");
    panelView.title = "Word count";
    panelView.content = "Open a file to see the word count.";

    sourcegraph.workspace.onDidOpenTextDocument.subscribe(doc => {
        const numWords = doc.text.split(/\b/).length;
        panelView.content = `**Word count:** ${numWords}`;
    });
}
