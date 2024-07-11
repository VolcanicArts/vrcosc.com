---
sidebar_position: 3
description: Create and use module settings
---

# Settings
Settings are a way of letting a user configure your module. Settings are static, and are required to be defined inside `OnPreLoad` so that a user's settings can be loaded when the module loads.

## Creating Settings

### Toggle
```csharp
CreateToggle(MyModule.ToggleSetting, "Toggle Title", "Toggle Description", false);
```
Toggles take in the setting lookup, display title, display description, and the default value.

### TextBox
```csharp
CreateTextBox(MyModule.TextBoxStringSetting, "String Title", "String Description", string.Empty);
CreateTextBox(MyModule.TextBoxIntSetting, "Int Title", "Int Description", 0);
CreateTextBox(MyModuke.TextBoxFloatSetting, "Float Title", "Float Description", 0f);
```
TextBoxes take the setting lookup, display title, display description, and the default value. TextBoxes support strings, ints, and floats, where the validation will be automatically handled for you.

### Slider
```csharp
CreateSlider(MyModule.SliderIntSetting, "Int Title", "Int Description", 0, 0, 10);
CreateSlider(MyModule.SliderFloatSetting, "Float Title", "Float Description", 0f, 0f, 1f);
```
Sliders take the setting lookup, display title, display description, the default value, the minimum value, and the maximum value.

Sliders also have an optional field to pass through that is the tick frequency of the slider that is displayed.

### Dropdown
Note: Dropdowns only accept enums as settings are required to be static. If you need to populate a dynamic list, look at the runtime page.
```csharp
CreateDropdown(MyModule.DropdownSetting, "Dropdown Title", "Dropdown Description", SomeEnum.SomeValue)
```
Dropdowns take the setting lookup, display title, display description, and the default value. The default value also tells the setting which enum to use to populate the dropdown.

### DateTime
Note: DateTime automatically handles timezone conversion, meaning users can share their configs and it will convert to their local time allow things like countdowns to sync up.
```csharp
CreateDateTime(MyModule.DateTimeSetting, "DateTime Title", "DateTime Description", DateTimeOffset.Now);
```
DateTimes take the setting lookup, display title, display description, and default value.

### TextBox List
```csharp
CreateTextBoxList(MyModule.TextBoxListStringSetting, "TextBox String List Title", "TextBox String List Description", ["Some", "Default", "Values"]);
CreateTextBoxList(MyModule.TextBoxListIntSetting, "TextBox Int List Title", "TextBox Int List Description", [1, 2, 3]);
CreateTextBoxList(MyModule.TextBoxListFloatSetting, "TextBox Float List Title", "TextBox Float List Description", [0f, 0.5f, 1f]);
```
TextBox Lists create a list of textboxes. All of the textboxes are require to be the same value, and they support strings, ints, and floats.

### KeyValuePair List
```csharp
CreateKeyValuePairList(MyModule.KeyValuePairSetting, "KeyValuePair Title", "KeyValuePair Description", [{"DefaultKey": "DefaultValue"}], "Key Title", "Value Title")
```
KeyValuePairs allow for mapping a key to a value. This setting is essentially a textbox list but paired up, and with a label for the keys and values.

### Custom
```csharp
CreateCustom(MyModule.CustomSetting, new CustomModuleSetting(new ModuleSettingMetadata("My Custom Setting", "Custom setting description", typeof(CustomModuleSettingPage))));
```
Custom settings takes the setting lookup, the custom setting which requires, at least, the metadata of the display title, display description, and the type of the custom page to render the setting.

Creating custom settings requires knowledge of WPF so that you can create the custom page, and is generally not needed unless you're doing very custom modules. Feel free to reach out on Discord as if I can do a more general implementation of a setting and add it to the SDK that would benefit more.

## Groups
Setting groups can be made by providing setting lookups:
```csharp
CreateGroup("My New Group", MyModule.ToggleSetting, MyModule.SliderIntSetting);
```
These are only visual and allow for organisation.

## Retreiving Settings
There are 2 methods you can use to get a setting. One to get the setting, and one to get the setting value. Getting the setting value is a shorthand for getting the setting. You mostly won't need to access the setting directly, but it's useful for when you're making custom settings and need to access anything inside it.

```csharp
GetSetting<CustomModuleSetting>(MyModule.CustomSetting);
GetSettingValue<bool>(MyModule.ToggleSetting);
```
Most of the time you'll be using the bottom method, where this retrieves the backing value of the setting directly. The raw value of the setting, if allowed, can be converted. For example, if you have a settings list you can either do `GetSettingValue<IEnumerable<string>>()` or `GetSettingValue<List<string>>()`. Both work exactly the same and is completely up to your preference. 