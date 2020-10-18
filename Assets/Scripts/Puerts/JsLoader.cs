using Puerts;
using System.IO;
using UnityEngine;

public class JsLoader : ILoader
{
    private string root = "";

    public JsLoader() { }

    public JsLoader(string root)
    {
        this.root = root;
    }

    public bool FileExists(string filepath)
    {
        return true;
    }

    public string ReadFile(string filepath, out string debugpath)
    {
#if UNITY_EDITOR
        var scriptDir = Path.Combine(Application.dataPath, "AssetsPackage/Js");
        debugpath = Path.Combine(scriptDir, filepath);
#endif
#if UNITY_EDITOR_WIN || UNITY_STANDALONE_WIN
        debugpath = debugpath.Replace("/", "\\");
#endif
        var jscache = JsManager.Instance.jscache;
        string jsName = filepath.Replace("puerts/", "");
        string text;
        jscache.TryGetValue(jsName, out text);

        if (text == null)
        {
            UnityEngine.TextAsset file = (UnityEngine.TextAsset)UnityEngine.Resources.Load(filepath);
            text = file == null ? null : file.text;
        }
        return text;
    }

}