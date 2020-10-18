using Puerts;
using System;
using UnityEngine;

public class JsManager : MonoSingleton<JsManager>
{
    JsEnv jsEnv = null;
    public string DebuggerRoot = System.IO.Path.Combine(Application.streamingAssetsPath, "scripts");
    public Action JsOnApplicationQuit;
    public Action JsOnDispose;
    public Action JsOnUpdate;

    public JsEnv GetJsEnv()
    {
        return jsEnv;
    }

    void Awake()
    {
        StartGame();
    }

    private void Update()
    {
        if (jsEnv != null)
        {
            jsEnv.Tick();
        }
        JsOnUpdate?.Invoke();
    }

    public void StartGame()
    {
        Dispose();
        jsEnv = new JsEnv(new JsLoader(DebuggerRoot), 9229);
        //jsEnv.WaitDebugger();
        jsEnv.Eval("require('bundle')");
    }

    private void OnApplicationQuit()
    {
        if (jsEnv != null)
        {
            JsOnApplicationQuit?.Invoke();
        }
    }

    public void Dispose()
    {
        JsOnDispose?.Invoke();
        if (jsEnv != null)
        {
            try
            {
                jsEnv.Dispose();
                jsEnv = null;
            }
            catch (Exception ex)
            {
                string msg = string.Format("js exception : {0}\n {1}", ex.Message, ex.StackTrace);
                Debug.Log(msg);
            }
        }
    }
}

