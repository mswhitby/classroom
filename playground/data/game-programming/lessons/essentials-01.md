# Find your way around a scene

## Open the Essentials project

Follow Unity Learn’s installation and project-opening tutorials before the Editor activities. Open the supplied Essentials project in the supported Editor version. In the Scene view, practice selecting, orbiting, panning, and zooming before arranging the mural. Save your work outside Play mode.

## Scene, Game, Hierarchy, Inspector

Think of a scene as a stage: you arrange the objects, then test what the player will see. The **Scene view** is your workspace for arranging a world. The **Game view** shows the view rendered by the game cameras. The **Hierarchy** lists **GameObjects** in the open scene; the **Inspector** shows the selected object’s components and settings. The **Project window** contains assets saved in the project.

## Play mode is an experiment

Save your scene, enter Play mode, change a value, then stop. Ordinary scene changes made during Play mode are not kept when you exit it. Make lasting edits outside Play mode. The Console shows messages, warnings, and errors; fix compilation errors before testing behavior.

## Your first C# value

A **string** is text inside double quotation marks. A declaration such as `string label = "Arena";` stores a value in a named **variable**. C# statements usually end with a semicolon. In the provided `GetArenaName()` method, `return` hands one value back to the caller. `Main()` is where this console program starts; `Console.WriteLine` displays the returned value. Keep the provided class and method wrappers for now.

## Try tracing this example

```csharp
string label = "Practice room";
return label;
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
