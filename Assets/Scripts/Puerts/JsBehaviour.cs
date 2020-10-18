﻿using System;
using UnityEngine;

public delegate void ModuleInit(JsBehaviour monoBehaviour);

//只是演示纯用js实现MonoBehaviour逻辑的可能，
//但从性能角度这并不是最佳实践，会导致过多的跨语言调用
public class JsBehaviour : MonoBehaviour
{
    public string ModuleName;//可配置加载的js模块

    public Action JsStart;
    public Action JsOnDestroy;

    void Awake()
    {
        var init = JsManager.Instance.GetJsEnv().Eval<ModuleInit>(ModuleName + ".create");
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