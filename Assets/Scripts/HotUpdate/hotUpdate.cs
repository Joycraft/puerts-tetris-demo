using UnityEngine;

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

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
