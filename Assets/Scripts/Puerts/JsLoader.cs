using Puerts;
using System.IO;

public class JsLoader : ILoader
{
    public string root { get; private set; }

    public JsLoader(string root)
    {
        this.root = root;
    }

    public bool FileExists(string filepath)
    {
        if (filepath.StartsWith("puerts/")) return true;
#if UNITY_EDITOR
        return System.IO.File.Exists(System.IO.Path.Combine(root, filepath));
#else
			return true;
#endif
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        debugpath = System.IO.Path.Combine(root, filepath);
        UnityEngine.TextAsset asset = null;
        if (filepath.StartsWith("puerts/"))
        {
            asset = UnityEngine.Resources.Load<UnityEngine.TextAsset>(filepath);
            return asset.text;
        }
        return File.ReadAllText(Path.Combine(root, filepath));
    }

    public void Close() { }

}