using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System;
using System.IO;

public class utilsTool
{
    public static IEnumerator webReqGetText(System.Uri url, Action<string> action)
    {
        using (UnityWebRequest webRequest = UnityWebRequest.Get(url))
        {
            yield return webRequest.SendWebRequest();
            if (webRequest.isHttpError || webRequest.isNetworkError)
            {
                Debug.LogError(webRequest.error + "\n" + webRequest.downloadHandler.text);
            }
            else
            {
                action(webRequest.downloadHandler.text);
            }
        }
    }

    /**
    *   path：文件创建目录
    *   name：文件的名称
    *   info：写入的内容
    */
    public static void CreateFile(string path, string info)
    {
        //文件流信息
        StreamWriter sw;
        FileInfo t = new FileInfo(path);
        sw = t.CreateText();
        //以行的形式写入信息
        sw.Write(info);
        //关闭流
        sw.Close();
        //销毁流
        sw.Dispose();
    }
}
