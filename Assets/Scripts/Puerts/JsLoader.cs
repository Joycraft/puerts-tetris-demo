using Puerts;
using System.IO;

public class JsLoader : ILoader
{
    public string debugRoot { get; private set; }

    public JsLoader(string debugRoot)
    {
        this.debugRoot = debugRoot;
    }

    public bool FileExists(string filepath)
    {
        if (filepath.StartsWith("puerts/")) return true;
#if UNITY_EDITOR
        return System.IO.File.Exists(System.IO.Path.Combine(debugRoot, filepath));
#else
			return true;
#endif
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        debugpath = System.IO.Path.Combine(debugRoot, filepath);
        if (filepath.StartsWith("puerts/"))
        {
            var asset = UnityEngine.Resources.Load<UnityEngine.TextAsset>(filepath);
            return asset.text;
        }
        return File.ReadAllText(Path.Combine(debugRoot, filepath));
    }

    public void Close() { }

}