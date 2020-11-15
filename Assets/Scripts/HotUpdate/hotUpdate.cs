using UnityEngine;
using UnityEngine.SceneManagement;

public class hotUpdate : MonoBehaviour
{
    public string streamingPath
    {
        get
        {
#if UNITY_ANDROID && !UNITY_EDITOR
        return "jar:file://" + Application.dataPath + "!/assets/";
#elif UNITY_IPHONE && !UNITY_EDITOR
        return Application.dataPath + "/Raw/";
#elif UNITY_STANDALONE_WIN || UNITY_EDITOR
            return "file://" + Application.dataPath + "/StreamingAssets/";
#else
        string.Empty;
#endif
        }
    }

    public string streamingScriptPath
    {
        get
        {
            return System.IO.Path.Combine(streamingPath, "scripts");
        }
    }

    public string persistentScriptPath
    {
        get
        {
            return System.IO.Path.Combine(Application.persistentDataPath, "scripts");
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        var bundleUrl = new System.Uri(System.IO.Path.Combine(streamingScriptPath, "bundle.js"));
        var cor = StartCoroutine(utilsTool.webReqGetText(bundleUrl, onBundleLoadComplete));
    }

    void onBundleLoadComplete(string script)
    {
        if (System.IO.Directory.Exists(persistentScriptPath) == false)//如果不存在就创建file文件夹
        {
            System.IO.Directory.CreateDirectory(persistentScriptPath);
        }
        var bundlePath = System.IO.Path.Combine(persistentScriptPath, "bundle.js");
        utilsTool.CreateFile(bundlePath, "");
        utilsTool.CreateFile(bundlePath, script);
        SceneManager.LoadScene("tetris");
    }
}
