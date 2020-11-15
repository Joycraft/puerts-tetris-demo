namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Delegate), System_Delegate_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Canvas), UnityEngine_Canvas_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button), UnityEngine_UI_Button_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button.ButtonClickedEvent), UnityEngine_UI_Button_ButtonClickedEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent), UnityEngine_Events_UnityEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Renderer), UnityEngine_Renderer_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshRenderer), UnityEngine_MeshRenderer_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Material), UnityEngine_Material_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color), UnityEngine_Color_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color32), UnityEngine_Color32_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSource), UnityEngine_AudioSource_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioClip), UnityEngine_AudioClip_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(MonoSingleton<JsManager>), MonoSingleton_1_JsManager__Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(JsManager), JsManager_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(JsBehaviour), JsBehaviour_Wrap.GetRegisterInfo);
            
        }
    }
}