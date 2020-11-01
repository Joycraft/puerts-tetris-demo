using System;
using UnityEngine;

public delegate void ModuleInit(JsBehaviour monoBehaviour);

public class JsBehaviour : MonoBehaviour
{
    public string ModuleName;//可配置加载的js模块

    public Action JsStart;
    public Action JsOnDestroy;

    void Awake()
    {
        var init = JsManager.Instance.GetJsEnv().Eval<ModuleInit>(ModuleName + ".create.bind(" + ModuleName + ")");
        if (init != null) init(this);
    }

    void Start()
    {
        if (JsStart != null) JsStart();
    }

    void OnDestroy()
    {
        if (JsOnDestroy != null) JsOnDestroy();
        JsStart = null;
        JsOnDestroy = null;
    }
}