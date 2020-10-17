using Puerts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;

public class JsManager : MonoSingleton<JsManager>
{
    JsEnv jsEnv = null;
    public Dictionary<string, string> jscache = new Dictionary<string, string>();

    public Action JsOnApplicationQuit;
    public Action JsOnDispose;

    public async Task<JsEnv> GetJsEnv()
    {
        if (jsEnv == null)
        {
            await StartGame();
        }
        return jsEnv;
    }

    public static async Task<bool> PreloadJS(string jsLabel)
    {
        var list = await Addressables.LoadAssetsAsync<TextAsset>(jsLabel, null).Task;
        if (list != null)
        {
            JsManager.Instance.jscache.Clear();
            foreach (var txt in list)
            {
                JsManager.Instance.jscache.Add(txt.name, txt.text);
            }
            return true;
        }
        else
        {
            Debug.Log("加载JS失败......");
            return false;
        }
    }

    async void Awake()
    {
        await StartGame();
    }

    private void Update()
    {
        if (jsEnv != null)
        {
            jsEnv.Tick();
        }
    }

    async Task StartGame()
    {
        Dispose();
        await PreloadJS(AddressableConfig.JSLable);
        jsEnv = new JsEnv(new JsLoader(), 8888);
        jsEnv.Eval(@"require('bundle')");
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

