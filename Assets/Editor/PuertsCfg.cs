/*
 * Tencent is pleased to support the open source community by making InjectFix available.
 * Copyright (C) 2019 THL A29 Limited, a Tencent company.  All rights reserved.
 * InjectFix is licensed under the MIT License, except for the third-party components listed in the file 'LICENSE' which may be subject to their corresponding license terms. 
 * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 */

using System.Collections.Generic;
using Puerts;
using System;
using UnityEngine;
using System.Reflection;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class PuertsCfg
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(Debug),
                typeof(Vector3),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(UnityEngine.Object),
                typeof(UnityEngine.Resources),
                typeof(UnityEngine.UI.Button),
                typeof(UnityEngine.UI.Button.ButtonClickedEvent),
                typeof(UnityEngine.Events.UnityEvent),
                typeof(UnityEngine.Renderer),
                typeof(UnityEngine.MeshRenderer),
                typeof(UnityEngine.Material),
                typeof(UnityEngine.Color),
                typeof(UnityEngine.Color32),
                typeof(UnityEngine.AudioSource),
                typeof(UnityEngine.AudioClip),

                typeof(MonoSingleton<JsManager>),
                typeof(JsManager),
                typeof(JsBehaviour),
            };
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }

    static List<List<string>> filterProperty = new List<List<string>>
    {
        new List<string>(){ "UnityEngine.MeshRenderer", "scaleInLightmap" },
        new List<string>(){ "UnityEngine.MeshRenderer", "receiveGI" },
        new List<string>(){ "UnityEngine.MeshRenderer", "stitchLightmapSeams" },
    };

    [Filter]
    static bool Filter(MemberInfo memberInfo)
    {
        if (memberInfo.MemberType == MemberTypes.Property)
        {
            var propertyInfo = memberInfo as PropertyInfo;
            foreach (var sub in filterProperty)
            {
                if (propertyInfo.DeclaringType.FullName == sub[0] && propertyInfo.Name == sub[1])
                {
                    return true;
                }
            }
        }
        return false;
    }
}
