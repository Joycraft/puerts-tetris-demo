using UnityEngine;
using UnityEngine.SceneManagement;

public class gameInit : MonoBehaviour
{
    async void Awake()
    {
        await JsManager.Instance.GetJsEnv();
        SceneManager.LoadScene("tetris");
    }
}
