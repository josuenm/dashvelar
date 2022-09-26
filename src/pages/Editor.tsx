import {EditorData} from "@assets/data/dummy";
import { Header } from "@components/index";
import { RichTextEditorComponent, HtmlEditor, Inject, Toolbar, Link, QuickToolbar } from "@syncfusion/ej2-react-richtexteditor";

const Editor = () => {
    return (
        <div className="m-3 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Kanban" />
            <RichTextEditorComponent>
                <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>
    );
};

export default Editor;
