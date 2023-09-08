import { useState } from "react";
import Editor from "@monaco-editor/react";
import styles from "./vscode.module.css";

const Vscode = ({ data }: any) => {
  const [selectedLang, setSelectedLang] = useState("python");
  return (
    <div className={styles.vscode_wrapper}>
      <div className={styles.vscode_header}>
        <div>
          <button
            className={
              selectedLang === "python" ? styles.selected_lang_btn : ""
            }
            onClick={() => setSelectedLang("python")}
            type="button"
          >
            Python
          </button>
          <button
            className={selectedLang === "julia" ? styles.selected_lang_btn : ""}
            onClick={() => setSelectedLang("julia")}
            type="button"
          >
            Julia
          </button>
        </div>
        <div className={styles.vscode_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {selectedLang === "python" ? (
        <Editor
          theme={"vs-dark"}
          height="20vh"
          defaultLanguage={selectedLang}
          defaultValue={data?.cli?.python}
        />
      ) : null}
      {selectedLang === "julia" ? (
        <Editor
          theme={"vs-dark"}
          height="20vh"
          defaultLanguage={selectedLang}
          defaultValue={data?.cli?.julia}
        />
      ) : null}
    </div>
  );
};
export default Vscode;
