
declare module 'csharp' {
    interface $Ref<T> {}
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace UnityEngine {
        class Debug extends System.Object {
            public static unityLogger: UnityEngine.ILogger;
            public static developerConsoleVisible: boolean;
            public static isDebugBuild: boolean;
            public constructor();
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean):void;
            public static Break():void;
            public static DebugBreak():void;
            public static Log(message: any):void;
            public static Log(message: any, context: UnityEngine.Object):void;
            public static LogFormat(format: string, ...args: any[]):void;
            public static LogFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogFormat(logType: UnityEngine.LogType, logOptions: UnityEngine.LogOption, context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogError(message: any):void;
            public static LogError(message: any, context: UnityEngine.Object):void;
            public static LogErrorFormat(format: string, ...args: any[]):void;
            public static LogErrorFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static ClearDeveloperConsole():void;
            public static LogException(exception: System.Exception):void;
            public static LogException(exception: System.Exception, context: UnityEngine.Object):void;
            public static LogWarning(message: any):void;
            public static LogWarning(message: any, context: UnityEngine.Object):void;
            public static LogWarningFormat(format: string, ...args: any[]):void;
            public static LogWarningFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static Assert(condition: boolean):void;
            public static Assert(condition: boolean, context: UnityEngine.Object):void;
            public static Assert(condition: boolean, message: any):void;
            public static Assert(condition: boolean, message: string):void;
            public static Assert(condition: boolean, message: any, context: UnityEngine.Object):void;
            public static Assert(condition: boolean, message: string, context: UnityEngine.Object):void;
            public static AssertFormat(condition: boolean, format: string, ...args: any[]):void;
            public static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogAssertion(message: any):void;
            public static LogAssertion(message: any, context: UnityEngine.Object):void;
            public static LogAssertionFormat(format: string, ...args: any[]):void;
            public static LogAssertionFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            
        }
        interface ILogger {
            
        }
        class Vector3 extends System.ValueType {
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;
            public x: number;
            public y: number;
            public z: number;
            public normalized: UnityEngine.Vector3;
            public magnitude: number;
            public sqrMagnitude: number;
            public static zero: UnityEngine.Vector3;
            public static one: UnityEngine.Vector3;
            public static forward: UnityEngine.Vector3;
            public static back: UnityEngine.Vector3;
            public static up: UnityEngine.Vector3;
            public static down: UnityEngine.Vector3;
            public static left: UnityEngine.Vector3;
            public static right: UnityEngine.Vector3;
            public static positiveInfinity: UnityEngine.Vector3;
            public static negativeInfinity: UnityEngine.Vector3;
            public constructor(x: number, y: number, z: number);
            public constructor(x: number, y: number);
            public static Slerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static SlerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>):void;
            public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>, binormal: $Ref<UnityEngine.Vector3>):void;
            public static RotateTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number):UnityEngine.Vector3;
            public static Lerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static LerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static MoveTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxDistanceDelta: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number, deltaTime: number):UnityEngine.Vector3;
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public Set(newX: number, newY: number, newZ: number):void;
            public static Scale(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public Scale(scale: UnityEngine.Vector3):void;
            public static Cross(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public Equals(other: any):boolean;
            public Equals(other: UnityEngine.Vector3):boolean;
            public static Reflect(inDirection: UnityEngine.Vector3, inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Normalize(value: UnityEngine.Vector3):UnityEngine.Vector3;
            public Normalize():void;
            public static Dot(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):number;
            public static Project(vector: UnityEngine.Vector3, onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static ProjectOnPlane(vector: UnityEngine.Vector3, planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Angle(from: UnityEngine.Vector3, to: UnityEngine.Vector3):number;
            public static SignedAngle(from: UnityEngine.Vector3, to: UnityEngine.Vector3, axis: UnityEngine.Vector3):number;
            public static Distance(a: UnityEngine.Vector3, b: UnityEngine.Vector3):number;
            public static ClampMagnitude(vector: UnityEngine.Vector3, maxLength: number):UnityEngine.Vector3;
            public static Magnitude(vector: UnityEngine.Vector3):number;
            public static SqrMagnitude(vector: UnityEngine.Vector3):number;
            public static Min(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Max(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Addition(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Subtraction(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_UnaryNegation(a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Multiply(a: UnityEngine.Vector3, d: number):UnityEngine.Vector3;
            public static op_Multiply(d: number, a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Division(a: UnityEngine.Vector3, d: number):UnityEngine.Vector3;
            public static op_Equality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):boolean;
            public static op_Inequality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):boolean;
            public ToString():string;
            public ToString(format: string):string;
            
        }
        class Color extends System.ValueType {
            public r: number;
            public g: number;
            public b: number;
            public a: number;
            public static red: UnityEngine.Color;
            public static green: UnityEngine.Color;
            public static blue: UnityEngine.Color;
            public static white: UnityEngine.Color;
            public static black: UnityEngine.Color;
            public static yellow: UnityEngine.Color;
            public static cyan: UnityEngine.Color;
            public static magenta: UnityEngine.Color;
            public static gray: UnityEngine.Color;
            public static grey: UnityEngine.Color;
            public static clear: UnityEngine.Color;
            public grayscale: number;
            public linear: UnityEngine.Color;
            public gamma: UnityEngine.Color;
            public maxColorComponent: number;
            public constructor(r: number, g: number, b: number, a: number);
            public constructor(r: number, g: number, b: number);
            public ToString():string;
            public ToString(format: string):string;
            public Equals(other: any):boolean;
            public Equals(other: UnityEngine.Color):boolean;
            public static op_Addition(a: UnityEngine.Color, b: UnityEngine.Color):UnityEngine.Color;
            public static op_Subtraction(a: UnityEngine.Color, b: UnityEngine.Color):UnityEngine.Color;
            public static op_Multiply(a: UnityEngine.Color, b: UnityEngine.Color):UnityEngine.Color;
            public static op_Multiply(a: UnityEngine.Color, b: number):UnityEngine.Color;
            public static op_Multiply(b: number, a: UnityEngine.Color):UnityEngine.Color;
            public static op_Division(a: UnityEngine.Color, b: number):UnityEngine.Color;
            public static op_Equality(lhs: UnityEngine.Color, rhs: UnityEngine.Color):boolean;
            public static op_Inequality(lhs: UnityEngine.Color, rhs: UnityEngine.Color):boolean;
            public static Lerp(a: UnityEngine.Color, b: UnityEngine.Color, t: number):UnityEngine.Color;
            public static LerpUnclamped(a: UnityEngine.Color, b: UnityEngine.Color, t: number):UnityEngine.Color;
            public static op_Implicit(c: UnityEngine.Color):UnityEngine.Vector4;
            public static op_Implicit(v: UnityEngine.Vector4):UnityEngine.Color;
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public static RGBToHSV(rgbColor: UnityEngine.Color, H: $Ref<number>, S: $Ref<number>, V: $Ref<number>):void;
            public static HSVToRGB(H: number, S: number, V: number):UnityEngine.Color;
            public static HSVToRGB(H: number, S: number, V: number, hdr: boolean):UnityEngine.Color;
            
        }
        class Object extends System.Object {
            public name: string;
            public hideFlags: UnityEngine.HideFlags;
            public constructor();
            public GetInstanceID():number;
            public static op_Implicit(exists: UnityEngine.Object):boolean;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, instantiateInWorldSpace: boolean):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, worldPositionStays: boolean):UnityEngine.Object;
            public static Destroy(obj: UnityEngine.Object, t: number):void;
            public static Destroy(obj: UnityEngine.Object):void;
            public static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean):void;
            public static DestroyImmediate(obj: UnityEngine.Object):void;
            public static FindObjectsOfType(type: System.Type):System.Array$1<UnityEngine.Object>;
            public static DontDestroyOnLoad(target: UnityEngine.Object):void;
            public static FindObjectOfType(type: System.Type):UnityEngine.Object;
            public static op_Equality(x: UnityEngine.Object, y: UnityEngine.Object):boolean;
            public static op_Inequality(x: UnityEngine.Object, y: UnityEngine.Object):boolean;
            
        }
        enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        enum LogOption { None = 0, NoStacktrace = 1 }
        class Time extends System.Object {
            public static time: number;
            public static timeSinceLevelLoad: number;
            public static deltaTime: number;
            public static fixedTime: number;
            public static unscaledTime: number;
            public static fixedUnscaledTime: number;
            public static unscaledDeltaTime: number;
            public static fixedUnscaledDeltaTime: number;
            public static fixedDeltaTime: number;
            public static maximumDeltaTime: number;
            public static smoothDeltaTime: number;
            public static maximumParticleDeltaTime: number;
            public static timeScale: number;
            public static frameCount: number;
            public static renderedFrameCount: number;
            public static realtimeSinceStartup: number;
            public static captureDeltaTime: number;
            public static captureFramerate: number;
            public static inFixedTimeStep: boolean;
            public constructor();
            
        }
        class Transform extends UnityEngine.Component {
            public position: UnityEngine.Vector3;
            public localPosition: UnityEngine.Vector3;
            public eulerAngles: UnityEngine.Vector3;
            public localEulerAngles: UnityEngine.Vector3;
            public right: UnityEngine.Vector3;
            public up: UnityEngine.Vector3;
            public forward: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public localRotation: UnityEngine.Quaternion;
            public localScale: UnityEngine.Vector3;
            public parent: UnityEngine.Transform;
            public worldToLocalMatrix: UnityEngine.Matrix4x4;
            public localToWorldMatrix: UnityEngine.Matrix4x4;
            public root: UnityEngine.Transform;
            public childCount: number;
            public lossyScale: UnityEngine.Vector3;
            public hasChanged: boolean;
            public hierarchyCapacity: number;
            public hierarchyCount: number;
            public SetParent(p: UnityEngine.Transform):void;
            public SetParent(parent: UnityEngine.Transform, worldPositionStays: boolean):void;
            public SetPositionAndRotation(position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):void;
            public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space):void;
            public Translate(translation: UnityEngine.Vector3):void;
            public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Space):void;
            public Translate(x: number, y: number, z: number):void;
            public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform):void;
            public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Transform):void;
            public Rotate(eulers: UnityEngine.Vector3, relativeTo: UnityEngine.Space):void;
            public Rotate(eulers: UnityEngine.Vector3):void;
            public Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space):void;
            public Rotate(xAngle: number, yAngle: number, zAngle: number):void;
            public Rotate(axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space):void;
            public Rotate(axis: UnityEngine.Vector3, angle: number):void;
            public RotateAround(point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number):void;
            public LookAt(target: UnityEngine.Transform, worldUp: UnityEngine.Vector3):void;
            public LookAt(target: UnityEngine.Transform):void;
            public LookAt(worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3):void;
            public LookAt(worldPosition: UnityEngine.Vector3):void;
            public TransformDirection(direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformDirection(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformDirection(direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformDirection(x: number, y: number, z: number):UnityEngine.Vector3;
            public TransformVector(vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformVector(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformVector(vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformVector(x: number, y: number, z: number):UnityEngine.Vector3;
            public TransformPoint(position: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformPoint(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformPoint(position: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformPoint(x: number, y: number, z: number):UnityEngine.Vector3;
            public DetachChildren():void;
            public SetAsFirstSibling():void;
            public SetAsLastSibling():void;
            public SetSiblingIndex(index: number):void;
            public GetSiblingIndex():number;
            public Find(n: string):UnityEngine.Transform;
            public IsChildOf(parent: UnityEngine.Transform):boolean;
            public GetEnumerator():System.Collections.IEnumerator;
            public GetChild(index: number):UnityEngine.Transform;
            
        }
        class Component extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public gameObject: UnityEngine.GameObject;
            public tag: string;
            public constructor();
            public GetComponent(type: System.Type):UnityEngine.Component;
            public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>):boolean;
            public GetComponent(type: string):UnityEngine.Component;
            public GetComponentInChildren(t: System.Type, includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren(t: System.Type):UnityEngine.Component;
            public GetComponentsInChildren(t: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren(t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentInParent(t: System.Type):UnityEngine.Component;
            public GetComponentsInParent(t: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public CompareTag(tag: string):boolean;
            public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards(methodName: string, value: any):void;
            public SendMessageUpwards(methodName: string):void;
            public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, value: any):void;
            public SendMessage(methodName: string):void;
            public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any):void;
            public BroadcastMessage(methodName: string):void;
            public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            
        }
        class Quaternion extends System.ValueType {
            
        }
        class Matrix4x4 extends System.ValueType {
            
        }
        enum Space { World = 0, Self = 1 }
        class GameObject extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public layer: number;
            public activeSelf: boolean;
            public activeInHierarchy: boolean;
            public isStatic: boolean;
            public tag: string;
            public scene: UnityEngine.SceneManagement.Scene;
            public sceneCullingMask: bigint;
            public gameObject: UnityEngine.GameObject;
            public constructor(name: string);
            public constructor();
            public constructor(name: string, ...components: System.Type[]);
            public static CreatePrimitive(type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            public GetComponent(type: System.Type):UnityEngine.Component;
            public GetComponent(type: string):UnityEngine.Component;
            public GetComponentInChildren(type: System.Type, includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren(type: System.Type):UnityEngine.Component;
            public GetComponentInParent(type: System.Type):UnityEngine.Component;
            public GetComponents(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public GetComponentsInChildren(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren(type: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(type: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>):boolean;
            public static FindWithTag(tag: string):UnityEngine.GameObject;
            public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public AddComponent(componentType: System.Type):UnityEngine.Component;
            public SetActive(value: boolean):void;
            public CompareTag(tag: string):boolean;
            public static FindGameObjectWithTag(tag: string):UnityEngine.GameObject;
            public static FindGameObjectsWithTag(tag: string):System.Array$1<UnityEngine.GameObject>;
            public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards(methodName: string, value: any):void;
            public SendMessageUpwards(methodName: string):void;
            public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, value: any):void;
            public SendMessage(methodName: string):void;
            public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any):void;
            public BroadcastMessage(methodName: string):void;
            public static Find(name: string):UnityEngine.GameObject;
            
        }
        enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
        enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        class ParticleSystem extends UnityEngine.Component {
            public isPlaying: boolean;
            public isEmitting: boolean;
            public isStopped: boolean;
            public isPaused: boolean;
            public particleCount: number;
            public time: number;
            public randomSeed: number;
            public useAutoRandomSeed: boolean;
            public proceduralSimulationSupported: boolean;
            public main: UnityEngine.ParticleSystem.MainModule;
            public emission: UnityEngine.ParticleSystem.EmissionModule;
            public shape: UnityEngine.ParticleSystem.ShapeModule;
            public velocityOverLifetime: UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            public limitVelocityOverLifetime: UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            public inheritVelocity: UnityEngine.ParticleSystem.InheritVelocityModule;
            public forceOverLifetime: UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            public colorOverLifetime: UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            public colorBySpeed: UnityEngine.ParticleSystem.ColorBySpeedModule;
            public sizeOverLifetime: UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            public sizeBySpeed: UnityEngine.ParticleSystem.SizeBySpeedModule;
            public rotationOverLifetime: UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            public rotationBySpeed: UnityEngine.ParticleSystem.RotationBySpeedModule;
            public externalForces: UnityEngine.ParticleSystem.ExternalForcesModule;
            public noise: UnityEngine.ParticleSystem.NoiseModule;
            public collision: UnityEngine.ParticleSystem.CollisionModule;
            public trigger: UnityEngine.ParticleSystem.TriggerModule;
            public subEmitters: UnityEngine.ParticleSystem.SubEmittersModule;
            public textureSheetAnimation: UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            public lights: UnityEngine.ParticleSystem.LightsModule;
            public trails: UnityEngine.ParticleSystem.TrailModule;
            public customData: UnityEngine.ParticleSystem.CustomDataModule;
            public constructor();
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):void;
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number):void;
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):void;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):number;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number):number;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):number;
            public SetCustomParticleData(customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, streamIndex: UnityEngine.ParticleSystemCustomData):void;
            public GetCustomParticleData(customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, streamIndex: UnityEngine.ParticleSystemCustomData):number;
            public GetPlaybackState():UnityEngine.ParticleSystem.PlaybackState;
            public SetPlaybackState(playbackState: UnityEngine.ParticleSystem.PlaybackState):void;
            public GetTrails():UnityEngine.ParticleSystem.Trails;
            public SetTrails(trailData: UnityEngine.ParticleSystem.Trails):void;
            public Simulate(t: number, withChildren: boolean, restart: boolean, fixedTimeStep: boolean):void;
            public Simulate(t: number, withChildren: boolean, restart: boolean):void;
            public Simulate(t: number, withChildren: boolean):void;
            public Simulate(t: number):void;
            public Play(withChildren: boolean):void;
            public Play():void;
            public Pause(withChildren: boolean):void;
            public Pause():void;
            public Stop(withChildren: boolean, stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            public Stop(withChildren: boolean):void;
            public Stop():void;
            public Clear(withChildren: boolean):void;
            public Clear():void;
            public IsAlive(withChildren: boolean):boolean;
            public IsAlive():boolean;
            public Emit(count: number):void;
            public Emit(emitParams: UnityEngine.ParticleSystem.EmitParams, count: number):void;
            public TriggerSubEmitter(subEmitterIndex: number):void;
            public TriggerSubEmitter(subEmitterIndex: number, particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            public TriggerSubEmitter(subEmitterIndex: number, particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            public static ResetPreMappedBufferMemory():void;
            
        }
        class Color32 extends System.ValueType {
            public r: number;
            public g: number;
            public b: number;
            public a: number;
            public constructor(r: number, g: number, b: number, a: number);
            public static op_Implicit(c: UnityEngine.Color):UnityEngine.Color32;
            public static op_Implicit(c: UnityEngine.Color32):UnityEngine.Color;
            public static Lerp(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number):UnityEngine.Color32;
            public static LerpUnclamped(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number):UnityEngine.Color32;
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public ToString():string;
            public ToString(format: string):string;
            
        }
        enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
        enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
        class Vector4 extends System.ValueType {
            
        }
        enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
        enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
        class Canvas extends UnityEngine.Behaviour {
            public renderMode: UnityEngine.RenderMode;
            public isRootCanvas: boolean;
            public pixelRect: UnityEngine.Rect;
            public scaleFactor: number;
            public referencePixelsPerUnit: number;
            public overridePixelPerfect: boolean;
            public pixelPerfect: boolean;
            public planeDistance: number;
            public renderOrder: number;
            public overrideSorting: boolean;
            public sortingOrder: number;
            public targetDisplay: number;
            public sortingLayerID: number;
            public cachedSortingLayerValue: number;
            public additionalShaderChannels: UnityEngine.AdditionalCanvasShaderChannels;
            public sortingLayerName: string;
            public rootCanvas: UnityEngine.Canvas;
            public worldCamera: UnityEngine.Camera;
            public normalizedSortingGridSize: number;
            public constructor();
            public static add_willRenderCanvases(value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static remove_willRenderCanvases(value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            public static ForceUpdateCanvases():void;
            
        }
        class Behaviour extends UnityEngine.Component {
            public enabled: boolean;
            public isActiveAndEnabled: boolean;
            public constructor();
            
        }
        enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        class Rect extends System.ValueType {
            
        }
        enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        class Camera extends UnityEngine.Behaviour {
            
        }
        class Material extends UnityEngine.Object {
            public shader: UnityEngine.Shader;
            public color: UnityEngine.Color;
            public mainTexture: UnityEngine.Texture;
            public mainTextureOffset: UnityEngine.Vector2;
            public mainTextureScale: UnityEngine.Vector2;
            public renderQueue: number;
            public globalIlluminationFlags: UnityEngine.MaterialGlobalIlluminationFlags;
            public doubleSidedGI: boolean;
            public enableInstancing: boolean;
            public passCount: number;
            public shaderKeywords: System.Array$1<string>;
            public constructor(shader: UnityEngine.Shader);
            public constructor(source: UnityEngine.Material);
            public HasProperty(nameID: number):boolean;
            public HasProperty(name: string):boolean;
            public EnableKeyword(keyword: string):void;
            public DisableKeyword(keyword: string):void;
            public IsKeywordEnabled(keyword: string):boolean;
            public SetShaderPassEnabled(passName: string, enabled: boolean):void;
            public GetShaderPassEnabled(passName: string):boolean;
            public GetPassName(pass: number):string;
            public FindPass(passName: string):number;
            public SetOverrideTag(tag: string, val: string):void;
            public GetTag(tag: string, searchFallbacks: boolean, defaultValue: string):string;
            public GetTag(tag: string, searchFallbacks: boolean):string;
            public Lerp(start: UnityEngine.Material, end: UnityEngine.Material, t: number):void;
            public SetPass(pass: number):boolean;
            public CopyPropertiesFromMaterial(mat: UnityEngine.Material):void;
            public ComputeCRC():number;
            public GetTexturePropertyNames():System.Array$1<string>;
            public GetTexturePropertyNameIDs():System.Array$1<number>;
            public GetTexturePropertyNames(outNames: System.Collections.Generic.List$1<string>):void;
            public GetTexturePropertyNameIDs(outNames: System.Collections.Generic.List$1<number>):void;
            public SetFloat(name: string, value: number):void;
            public SetFloat(nameID: number, value: number):void;
            public SetInt(name: string, value: number):void;
            public SetInt(nameID: number, value: number):void;
            public SetColor(name: string, value: UnityEngine.Color):void;
            public SetColor(nameID: number, value: UnityEngine.Color):void;
            public SetVector(name: string, value: UnityEngine.Vector4):void;
            public SetVector(nameID: number, value: UnityEngine.Vector4):void;
            public SetMatrix(name: string, value: UnityEngine.Matrix4x4):void;
            public SetMatrix(nameID: number, value: UnityEngine.Matrix4x4):void;
            public SetTexture(name: string, value: UnityEngine.Texture):void;
            public SetTexture(nameID: number, value: UnityEngine.Texture):void;
            public SetTexture(name: string, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement):void;
            public SetTexture(nameID: number, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement):void;
            public SetBuffer(name: string, value: UnityEngine.ComputeBuffer):void;
            public SetBuffer(nameID: number, value: UnityEngine.ComputeBuffer):void;
            public SetConstantBuffer(name: string, value: UnityEngine.ComputeBuffer, offset: number, size: number):void;
            public SetConstantBuffer(nameID: number, value: UnityEngine.ComputeBuffer, offset: number, size: number):void;
            public SetFloatArray(name: string, values: System.Collections.Generic.List$1<number>):void;
            public SetFloatArray(nameID: number, values: System.Collections.Generic.List$1<number>):void;
            public SetFloatArray(name: string, values: System.Array$1<number>):void;
            public SetFloatArray(nameID: number, values: System.Array$1<number>):void;
            public SetColorArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Color>):void;
            public SetColorArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Color>):void;
            public SetColorArray(name: string, values: System.Array$1<UnityEngine.Color>):void;
            public SetColorArray(nameID: number, values: System.Array$1<UnityEngine.Color>):void;
            public SetVectorArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            public SetVectorArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            public SetVectorArray(name: string, values: System.Array$1<UnityEngine.Vector4>):void;
            public SetVectorArray(nameID: number, values: System.Array$1<UnityEngine.Vector4>):void;
            public SetMatrixArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            public SetMatrixArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            public SetMatrixArray(name: string, values: System.Array$1<UnityEngine.Matrix4x4>):void;
            public SetMatrixArray(nameID: number, values: System.Array$1<UnityEngine.Matrix4x4>):void;
            public GetFloat(name: string):number;
            public GetFloat(nameID: number):number;
            public GetInt(name: string):number;
            public GetInt(nameID: number):number;
            public GetColor(name: string):UnityEngine.Color;
            public GetColor(nameID: number):UnityEngine.Color;
            public GetVector(name: string):UnityEngine.Vector4;
            public GetVector(nameID: number):UnityEngine.Vector4;
            public GetMatrix(name: string):UnityEngine.Matrix4x4;
            public GetMatrix(nameID: number):UnityEngine.Matrix4x4;
            public GetTexture(name: string):UnityEngine.Texture;
            public GetTexture(nameID: number):UnityEngine.Texture;
            public GetFloatArray(name: string):System.Array$1<number>;
            public GetFloatArray(nameID: number):System.Array$1<number>;
            public GetColorArray(name: string):System.Array$1<UnityEngine.Color>;
            public GetColorArray(nameID: number):System.Array$1<UnityEngine.Color>;
            public GetVectorArray(name: string):System.Array$1<UnityEngine.Vector4>;
            public GetVectorArray(nameID: number):System.Array$1<UnityEngine.Vector4>;
            public GetMatrixArray(name: string):System.Array$1<UnityEngine.Matrix4x4>;
            public GetMatrixArray(nameID: number):System.Array$1<UnityEngine.Matrix4x4>;
            public GetFloatArray(name: string, values: System.Collections.Generic.List$1<number>):void;
            public GetFloatArray(nameID: number, values: System.Collections.Generic.List$1<number>):void;
            public GetColorArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Color>):void;
            public GetColorArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Color>):void;
            public GetVectorArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            public GetVectorArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Vector4>):void;
            public GetMatrixArray(name: string, values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            public GetMatrixArray(nameID: number, values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>):void;
            public SetTextureOffset(name: string, value: UnityEngine.Vector2):void;
            public SetTextureOffset(nameID: number, value: UnityEngine.Vector2):void;
            public SetTextureScale(name: string, value: UnityEngine.Vector2):void;
            public SetTextureScale(nameID: number, value: UnityEngine.Vector2):void;
            public GetTextureOffset(name: string):UnityEngine.Vector2;
            public GetTextureOffset(nameID: number):UnityEngine.Vector2;
            public GetTextureScale(name: string):UnityEngine.Vector2;
            public GetTextureScale(nameID: number):UnityEngine.Vector2;
            
        }
        enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        class Resources extends System.Object {
            public constructor();
            public static FindObjectsOfTypeAll(type: System.Type):System.Array$1<UnityEngine.Object>;
            public static Load(path: string):UnityEngine.Object;
            public static Load(path: string, systemTypeInstance: System.Type):UnityEngine.Object;
            public static LoadAsync(path: string):UnityEngine.ResourceRequest;
            public static LoadAsync(path: string, type: System.Type):UnityEngine.ResourceRequest;
            public static LoadAll(path: string, systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            public static LoadAll(path: string):System.Array$1<UnityEngine.Object>;
            public static GetBuiltinResource(type: System.Type, path: string):UnityEngine.Object;
            public static UnloadAsset(assetToUnload: UnityEngine.Object):void;
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            
        }
        class ResourceRequest extends UnityEngine.AsyncOperation {
            
        }
        class AsyncOperation extends UnityEngine.YieldInstruction {
            
        }
        class YieldInstruction extends System.Object {
            
        }
        class MonoBehaviour extends UnityEngine.Behaviour {
            
        }
        class Renderer extends UnityEngine.Component {
            public bounds: UnityEngine.Bounds;
            public enabled: boolean;
            public isVisible: boolean;
            public shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
            public receiveShadows: boolean;
            public forceRenderingOff: boolean;
            public motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
            public lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
            public reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
            public renderingLayerMask: number;
            public rendererPriority: number;
            public rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
            public sortingLayerName: string;
            public sortingLayerID: number;
            public sortingOrder: number;
            public allowOcclusionWhenDynamic: boolean;
            public isPartOfStaticBatch: boolean;
            public worldToLocalMatrix: UnityEngine.Matrix4x4;
            public localToWorldMatrix: UnityEngine.Matrix4x4;
            public lightProbeProxyVolumeOverride: UnityEngine.GameObject;
            public probeAnchor: UnityEngine.Transform;
            public lightmapIndex: number;
            public realtimeLightmapIndex: number;
            public lightmapScaleOffset: UnityEngine.Vector4;
            public realtimeLightmapScaleOffset: UnityEngine.Vector4;
            public materials: System.Array$1<UnityEngine.Material>;
            public material: UnityEngine.Material;
            public sharedMaterial: UnityEngine.Material;
            public sharedMaterials: System.Array$1<UnityEngine.Material>;
            public constructor();
            public HasPropertyBlock():boolean;
            public SetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock):void;
            public SetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock, materialIndex: number):void;
            public GetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock):void;
            public GetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock, materialIndex: number):void;
            public GetMaterials(m: System.Collections.Generic.List$1<UnityEngine.Material>):void;
            public GetSharedMaterials(m: System.Collections.Generic.List$1<UnityEngine.Material>):void;
            public GetClosestReflectionProbes(result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>):void;
            
        }
        class Bounds extends System.ValueType {
            
        }
        class MaterialPropertyBlock extends System.Object {
            
        }
        enum MotionVectorGenerationMode { Camera = 0, Object = 1, ForceNoMotion = 2 }
        class MeshRenderer extends UnityEngine.Renderer {
            public additionalVertexStreams: UnityEngine.Mesh;
            public subMeshStartIndex: number;
            public constructor();
            
        }
        class Mesh extends UnityEngine.Object {
            
        }
        enum ReceiveGI { Lightmaps = 1, LightProbes = 2 }
        class Shader extends UnityEngine.Object {
            
        }
        class Texture extends UnityEngine.Object {
            
        }
        class Vector2 extends System.ValueType {
            
        }
        enum MaterialGlobalIlluminationFlags { None = 0, RealtimeEmissive = 1, BakedEmissive = 2, EmissiveIsBlack = 4, AnyEmissive = 3 }
        class RenderTexture extends UnityEngine.Texture {
            
        }
        class ComputeBuffer extends System.Object {
            
        }
        class AudioSource extends UnityEngine.AudioBehaviour {
            public volume: number;
            public pitch: number;
            public time: number;
            public timeSamples: number;
            public clip: UnityEngine.AudioClip;
            public outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
            public isPlaying: boolean;
            public isVirtual: boolean;
            public loop: boolean;
            public ignoreListenerVolume: boolean;
            public playOnAwake: boolean;
            public ignoreListenerPause: boolean;
            public velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
            public panStereo: number;
            public spatialBlend: number;
            public spatialize: boolean;
            public spatializePostEffects: boolean;
            public reverbZoneMix: number;
            public bypassEffects: boolean;
            public bypassListenerEffects: boolean;
            public bypassReverbZones: boolean;
            public dopplerLevel: number;
            public spread: number;
            public priority: number;
            public mute: boolean;
            public minDistance: number;
            public maxDistance: number;
            public rolloffMode: UnityEngine.AudioRolloffMode;
            public constructor();
            public Play():void;
            public Play(delay: bigint):void;
            public PlayDelayed(delay: number):void;
            public PlayScheduled(time: number):void;
            public PlayOneShot(clip: UnityEngine.AudioClip):void;
            public PlayOneShot(clip: UnityEngine.AudioClip, volumeScale: number):void;
            public SetScheduledStartTime(time: number):void;
            public SetScheduledEndTime(time: number):void;
            public Stop():void;
            public Pause():void;
            public UnPause():void;
            public static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3):void;
            public static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3, volume: number):void;
            public SetCustomCurve(type: UnityEngine.AudioSourceCurveType, curve: UnityEngine.AnimationCurve):void;
            public GetCustomCurve(type: UnityEngine.AudioSourceCurveType):UnityEngine.AnimationCurve;
            public GetOutputData(samples: System.Array$1<number>, channel: number):void;
            public GetSpectrumData(samples: System.Array$1<number>, channel: number, window: UnityEngine.FFTWindow):void;
            public SetSpatializerFloat(index: number, value: number):boolean;
            public GetSpatializerFloat(index: number, value: $Ref<number>):boolean;
            public GetAmbisonicDecoderFloat(index: number, value: $Ref<number>):boolean;
            public SetAmbisonicDecoderFloat(index: number, value: number):boolean;
            
        }
        class AudioBehaviour extends UnityEngine.Behaviour {
            
        }
        class AudioClip extends UnityEngine.Object {
            public length: number;
            public samples: number;
            public channels: number;
            public frequency: number;
            public loadType: UnityEngine.AudioClipLoadType;
            public preloadAudioData: boolean;
            public ambisonic: boolean;
            public loadInBackground: boolean;
            public loadState: UnityEngine.AudioDataLoadState;
            public LoadAudioData():boolean;
            public UnloadAudioData():boolean;
            public GetData(data: System.Array$1<number>, offsetSamples: number):boolean;
            public SetData(data: System.Array$1<number>, offsetSamples: number):boolean;
            public static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean):UnityEngine.AudioClip;
            public static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback):UnityEngine.AudioClip;
            public static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback):UnityEngine.AudioClip;
            
        }
        enum AudioVelocityUpdateMode { Auto = 0, Fixed = 1, Dynamic = 2 }
        enum AudioSourceCurveType { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        class AnimationCurve extends System.Object {
            
        }
        enum AudioRolloffMode { Logarithmic = 0, Linear = 1, Custom = 2 }
        enum FFTWindow { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        enum AudioClipLoadType { DecompressOnLoad = 0, CompressedInMemory = 1, Streaming = 2 }
        enum AudioDataLoadState { Unloaded = 0, Loading = 1, Loaded = 2, Failed = 3 }
        
    }
    namespace System {
        class Object {
            public constructor();
            public Equals(obj: any):boolean;
            public static Equals(objA: any, objB: any):boolean;
            public GetHashCode():number;
            public GetType():System.Type;
            public ToString():string;
            public static ReferenceEquals(objA: any, objB: any):boolean;
            
        }
        class Void extends System.ValueType {
            
        }
        class ValueType extends System.Object {
            
        }
        class Single extends System.ValueType {
            
        }
        class Boolean extends System.ValueType {
            
        }
        class String extends System.Object {
            
        }
        class Enum extends System.ValueType {
            
        }
        class Exception extends System.Object {
            
        }
        class Int32 extends System.ValueType {
            
        }
        class Type extends System.Reflection.MemberInfo {
            public static FilterAttribute: System.Reflection.MemberFilter;
            public static FilterName: System.Reflection.MemberFilter;
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            public static Missing: any;
            public static Delimiter: number;
            public static EmptyTypes: System.Array$1<System.Type>;
            public MemberType: System.Reflection.MemberTypes;
            public DeclaringType: System.Type;
            public DeclaringMethod: System.Reflection.MethodBase;
            public ReflectedType: System.Type;
            public StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
            public GUID: System.Guid;
            public static DefaultBinder: System.Reflection.Binder;
            public Module: System.Reflection.Module;
            public Assembly: System.Reflection.Assembly;
            public TypeHandle: System.RuntimeTypeHandle;
            public FullName: string;
            public Namespace: string;
            public AssemblyQualifiedName: string;
            public BaseType: System.Type;
            public TypeInitializer: System.Reflection.ConstructorInfo;
            public IsNested: boolean;
            public Attributes: System.Reflection.TypeAttributes;
            public GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
            public IsVisible: boolean;
            public IsNotPublic: boolean;
            public IsPublic: boolean;
            public IsNestedPublic: boolean;
            public IsNestedPrivate: boolean;
            public IsNestedFamily: boolean;
            public IsNestedAssembly: boolean;
            public IsNestedFamANDAssem: boolean;
            public IsNestedFamORAssem: boolean;
            public IsAutoLayout: boolean;
            public IsLayoutSequential: boolean;
            public IsExplicitLayout: boolean;
            public IsClass: boolean;
            public IsInterface: boolean;
            public IsValueType: boolean;
            public IsAbstract: boolean;
            public IsSealed: boolean;
            public IsEnum: boolean;
            public IsSpecialName: boolean;
            public IsImport: boolean;
            public IsSerializable: boolean;
            public IsAnsiClass: boolean;
            public IsUnicodeClass: boolean;
            public IsAutoClass: boolean;
            public IsArray: boolean;
            public IsGenericType: boolean;
            public IsGenericTypeDefinition: boolean;
            public IsConstructedGenericType: boolean;
            public IsGenericParameter: boolean;
            public GenericParameterPosition: number;
            public ContainsGenericParameters: boolean;
            public IsByRef: boolean;
            public IsPointer: boolean;
            public IsPrimitive: boolean;
            public IsCOMObject: boolean;
            public HasElementType: boolean;
            public IsContextful: boolean;
            public IsMarshalByRef: boolean;
            public GenericTypeArguments: System.Array$1<System.Type>;
            public IsSecurityCritical: boolean;
            public IsSecuritySafeCritical: boolean;
            public IsSecurityTransparent: boolean;
            public UnderlyingSystemType: System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public MakePointerType():System.Type;
            public MakeByRefType():System.Type;
            public MakeArrayType():System.Type;
            public MakeArrayType(rank: number):System.Type;
            public static GetTypeFromProgID(progID: string):System.Type;
            public static GetTypeFromProgID(progID: string, throwOnError: boolean):System.Type;
            public static GetTypeFromProgID(progID: string, server: string):System.Type;
            public static GetTypeFromProgID(progID: string, server: string, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string, throwOnError: boolean):System.Type;
            public static GetTypeCode(type: System.Type):System.TypeCode;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>, modifiers: System.Array$1<System.Reflection.ParameterModifier>, culture: System.Globalization.CultureInfo, namedParameters: System.Array$1<string>):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>, culture: System.Globalization.CultureInfo):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>):any;
            public static GetTypeHandle(o: any):System.RuntimeTypeHandle;
            public GetArrayRank():number;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor(types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            public GetConstructors(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            public GetMethod(name: string):System.Reflection.MethodInfo;
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            public GetMethods(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            public GetField(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            public GetField(name: string):System.Reflection.FieldInfo;
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            public GetFields(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            public GetInterface(name: string):System.Type;
            public GetInterface(name: string, ignoreCase: boolean):System.Type;
            public GetInterfaces():System.Array$1<System.Type>;
            public FindInterfaces(filter: System.Reflection.TypeFilter, filterCriteria: any):System.Array$1<System.Type>;
            public GetEvent(name: string):System.Reflection.EventInfo;
            public GetEvent(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            public GetEvents(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, returnType: System.Type, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type):System.Reflection.PropertyInfo;
            public GetProperty(name: string):System.Reflection.PropertyInfo;
            public GetProperties(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            public GetNestedTypes():System.Array$1<System.Type>;
            public GetNestedTypes(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            public GetNestedType(name: string):System.Type;
            public GetNestedType(name: string, bindingAttr: System.Reflection.BindingFlags):System.Type;
            public GetMember(name: string):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember(name: string, bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember(name: string, type: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            public FindMembers(memberType: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags, filter: System.Reflection.MemberFilter, filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            public GetElementType():System.Type;
            public GetGenericArguments():System.Array$1<System.Type>;
            public GetGenericTypeDefinition():System.Type;
            public GetEnumNames():System.Array$1<string>;
            public GetEnumValues():System.Array;
            public GetEnumUnderlyingType():System.Type;
            public IsEnumDefined(value: any):boolean;
            public GetEnumName(value: any):string;
            public IsSubclassOf(c: System.Type):boolean;
            public IsInstanceOfType(o: any):boolean;
            public IsAssignableFrom(c: System.Type):boolean;
            public IsEquivalentTo(other: System.Type):boolean;
            public static GetTypeArray(args: System.Array$1<any>):System.Array$1<System.Type>;
            public Equals(o: any):boolean;
            public Equals(o: System.Type):boolean;
            public static op_Equality(left: System.Type, right: System.Type):boolean;
            public static op_Inequality(left: System.Type, right: System.Type):boolean;
            public GetInterfaceMap(interfaceType: System.Type):System.Reflection.InterfaceMapping;
            public GetType():System.Type;
            public static GetType(typeName: string):System.Type;
            public static GetType(typeName: string, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public static ReflectionOnlyGetType(typeName: string, throwIfNotFound: boolean, ignoreCase: boolean):System.Type;
            public static GetTypeFromHandle(handle: System.RuntimeTypeHandle):System.Type;
            public GetType():System.Type;
            
        }
        class Array extends System.Object {
            
        }
        class UInt64 extends System.ValueType {
            
        }
        class Delegate extends System.Object {
            public Method: System.Reflection.MethodInfo;
            public Target: any;
            public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean):Function;
            public DynamicInvoke(...args: any[]):any;
            public Clone():any;
            public GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext):void;
            public GetInvocationList():System.Array$1<Function>;
            public static Combine(a: Function, b: Function):Function;
            public static Combine(...delegates: Function[]):Function;
            public static Remove(source: Function, value: Function):Function;
            public static RemoveAll(source: Function, value: Function):Function;
            public static op_Equality(d1: Function, d2: Function):boolean;
            public static op_Inequality(d1: Function, d2: Function):boolean;
            
        }
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        class Char extends System.ValueType {
            
        }
        type Func$2<T,TResult> = (arg: T) => TResult;
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        class Attribute extends System.Object {
            
        }
        class Guid extends System.ValueType {
            
        }
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        class UInt32 extends System.ValueType {
            
        }
        class Byte extends System.ValueType {
            
        }
        class Double extends System.ValueType {
            
        }
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
    }
    namespace System.Collections {
        interface IEnumerator {
            
        }
        
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object {
            
        }
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class AssemblyName extends System.Object {
            
        }
        class Assembly extends System.Object {
            
        }
        class Binder extends System.Object {
            
        }
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        class ParameterModifier extends System.ValueType {
            
        }
        class Module extends System.Object {
            
        }
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace System.Collections.Generic {
        class List$1<T> extends System.Object {
            
        }
        
    }
    namespace UnityEngine.SceneManagement {
        class Scene extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.Serialization {
        class SerializationInfo extends System.Object {
            
        }
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object {
            
        }
        
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType {
            
        }
        class PlaybackState extends System.ValueType {
            
        }
        class Trails extends System.ValueType {
            
        }
        class EmitParams extends System.ValueType {
            
        }
        class MainModule extends System.ValueType {
            
        }
        class EmissionModule extends System.ValueType {
            
        }
        class ShapeModule extends System.ValueType {
            
        }
        class VelocityOverLifetimeModule extends System.ValueType {
            
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType {
            
        }
        class InheritVelocityModule extends System.ValueType {
            
        }
        class ForceOverLifetimeModule extends System.ValueType {
            
        }
        class ColorOverLifetimeModule extends System.ValueType {
            
        }
        class ColorBySpeedModule extends System.ValueType {
            
        }
        class SizeOverLifetimeModule extends System.ValueType {
            
        }
        class SizeBySpeedModule extends System.ValueType {
            
        }
        class RotationOverLifetimeModule extends System.ValueType {
            
        }
        class RotationBySpeedModule extends System.ValueType {
            
        }
        class ExternalForcesModule extends System.ValueType {
            
        }
        class NoiseModule extends System.ValueType {
            
        }
        class CollisionModule extends System.ValueType {
            
        }
        class TriggerModule extends System.ValueType {
            
        }
        class SubEmittersModule extends System.ValueType {
            
        }
        class TextureSheetAnimationModule extends System.ValueType {
            
        }
        class LightsModule extends System.ValueType {
            
        }
        class TrailModule extends System.ValueType {
            
        }
        class CustomDataModule extends System.ValueType {
            
        }
        
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Canvas {
        type WillRenderCanvases = () => void;
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
    }
    namespace UnityEngine.UI {
        class Button extends UnityEngine.UI.Selectable {
            public onClick: UnityEngine.UI.Button.ButtonClickedEvent;
            public OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        class Selectable extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
    }
    namespace UnityEngine.EventSystems {
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            
        }
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
            
        }
        class AbstractEventData extends System.Object {
            
        }
        
    }
    namespace UnityEngine.UI.Button {
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
            public constructor();
            
        }
        
    }
    namespace UnityEngine.Events {
        class UnityEvent extends UnityEngine.Events.UnityEventBase {
            public constructor();
            public AddListener(call: UnityEngine.Events.UnityAction):void;
            public RemoveListener(call: UnityEngine.Events.UnityAction):void;
            public Invoke():void;
            
        }
        class UnityEventBase extends System.Object {
            
        }
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        
    }
    namespace UnityEngine.Rendering {
        enum ShadowCastingMode { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
        enum LightProbeUsage { Off = 0, BlendProbes = 1, UseProxyVolume = 2, CustomProvided = 4 }
        enum ReflectionProbeUsage { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
        class ReflectionProbeBlendInfo extends System.ValueType {
            
        }
        enum RenderTextureSubElement { Color = 0, Depth = 1, Stencil = 2, Default = 3 }
        
    }
    namespace UnityEngine.Experimental.Rendering {
        enum RayTracingMode { Off = 0, Static = 1, DynamicTransform = 2, DynamicGeometry = 3 }
        
    }
    namespace UnityEngine.Audio {
        class AudioMixerGroup extends UnityEngine.Object {
            
        }
        
    }
    namespace UnityEngine.AudioClip {
        type PCMReaderCallback = (data: System.Array$1<number>) => void;
        var PCMReaderCallback: {new (func: (data: System.Array$1<number>) => void): PCMReaderCallback;}
        type PCMSetPositionCallback = (position: number) => void;
        var PCMSetPositionCallback: {new (func: (position: number) => void): PCMSetPositionCallback;}
        
    }
    
        class JsManager extends MonoSingleton$1<JsManager> {
            public jsRoot: string;
            public JsOnApplicationQuit: System.Action;
            public JsOnDispose: System.Action;
            public JsOnUpdate: System.Action;
            public constructor();
            public GetJsEnv():Puerts.JsEnv;
            public StartGame():void;
            public Dispose():void;
            
        }
        class MonoSingleton$1<T> extends UnityEngine.MonoBehaviour {
            public static Instance: T;
            
        }
        class JsBehaviour extends UnityEngine.MonoBehaviour {
            public ModuleName: string;
            public JsStart: System.Action;
            public JsOnDestroy: System.Action;
            public constructor();
            
        }
        
    
    namespace Puerts {
        class JsEnv extends System.Object {
            
        }
        
    }
    
}