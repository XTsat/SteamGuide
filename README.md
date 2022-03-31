# SteamGuide

Steam平台指南

目录

- [SteamGuide](#steamguide)
  - [个人资料美化](#个人资料美化)
    - [如何制作](#如何制作)
      - [修改图像数据 （GIF/JPEG）](#修改图像数据-gifjpeg)
      - [修改图像数据 （PNG/APNG）](#修改图像数据-pngapng)
    - [创意工坊展柜](#创意工坊展柜)
    - [上传透明图像](#上传透明图像)
    - [艺术作品展柜](#艺术作品展柜)
    - [代码合集](#代码合集)
      - [有标题上传](#有标题上传)
      - [无标题上传](#无标题上传)
    - [如何从任何内容中删除标题（艺术品，屏幕截图，指南，工作室等）](#如何从任何内容中删除标题艺术品屏幕截图指南工作室等)
      - [从已发布的项目中删除标题](#从已发布的项目中删除标题)
    - [通过浏览器扩展上传](#通过浏览器扩展上传)
  - [参考链接](#参考链接)
  - [作品或模板](#作品或模板)

## 个人资料美化

[我的 Steam 美化展示 🎮](https://steamcommunity.com/id/XTxiaotong)

### 如何制作

开始之前...

如果您不是Steam的创建者，请不要将任何内容上传到Steam，
没有版权，也没有上传权限！

确保您已同意创意工坊法律协议，
否则您将无法上传动画工坊：

[Steam 订户协议](http://steamcommunity.com/sharedfiles/workshoplegalagreement)

[Steam 规则及指引：讨论、评测以及用户生成内容](https://help.steampowered.com/zh-cn/faqs/view/6862-8119-C23E-EA7B)

#### 修改图像数据 （GIF/JPEG）

如果您要上传透明的 GIF，请按照以下步骤操作。

- 访问此站点：<https://hexed.it>
- 单击 `打开文件` 并加载所需的图像：
- 滚动到页面的最底部：
- 将文件的最后一个字节替换为 ``21`` 或 ``2C`` ：
- 单击 `导出` 并保存修改后的图像：
- 对其余四个图像重复此步骤。

![hexed.it](Photo/hexed.it/hexed_open.png)

![hexed.it](Photo/hexed.it/Modify%20image%20data%20(GIF-JPEG)/hexed_down_loss.webp)

![hexed.it](Photo/hexed.it/Modify%20image%20data%20(GIF-JPEG)/hexed_edit_loss.webp)

![hexed.it](Photo/hexed.it/hexed_export.png)

#### 修改图像数据 （PNG/APNG）

上一节中描述的方法也可以应用于 PNG 图像。

但是，图像将无法在某些Web浏览器（包括Firefox）中正确显示。

此修复程序使您可以避免此问题。

此技巧会将您的文件大小增加 1 个字节。

但这是一个非常小的金额，所以你不必太在意它。

如果您要上传透明的 PNG，请按照以下步骤操作。

- 访问此站点：<https://hexed.it>
- 单击 `打开文件` 并加载所需的图像：
- 滚动到页面的最底部：
- 复制以下字节序列。

  ```
  01 49 45 4E 44 00 D1 1A 4F E1
  ```

- 从末尾选择第一个"00"字节跟踪，然后按 Ctrl+V。
选择"覆盖光标位置的字节"和"十六进制值"选项
，然后单击"应用"按钮。
- 单击 `导出` 并保存修改后的图像：
- 对其余四个图像重复此步骤。

![hexed.it](Photo/hexed.it/hexed_open.png)

![hexed.it](Photo/hexed.it/Modify%20image%20data%20(PNG-APNG)/hexed_down_loss.webp)

![hexed.it](Photo/hexed.it/Modify%20image%20data%20(PNG-APNG)/hexed_edit_loss.webp)

![hexed.it](Photo/hexed.it/hexed_export.png)

### 创意工坊展柜

![创意工坊](Photo/Profile/workshop-space.png)

通过网络浏览器访问此 [上传链接](https://steamcommunity.com/sharedfiles/edititem/767/3/)

```JavaScript
$J（'#ConsumerAppID'）.val（480），$J（'[name=file_type]'）.val（0），$J（'[name=visibility]'）.val（0）;
```

```JavaScript
$J('#image_width').val('1000');$J('#image_height').val('1');$J('[name="appid"]').val("766");$J('[name="consumer_app_id"]').val("766");$J('[name="visibility"]').val("0");$J('[name=file_type]').val('11');
```

<https://www.bilibili.com/video/BV1tt411u7Zz>

```JavaScript
$J('#ConsumerAppID').val(480),$J('[name=file_type]').val(0),$J('[name=visibility]').val(0);
```

### 上传透明图像

点击 [上传您的 艺术作品](https://steamcommunity.com/sharedfiles/edititem/767/3/)

```JavaScript
$J（'#image_width'）.val（1000），$J（'#image_height'）.val（1）;
```

### 艺术作品展柜

本指南将指导您如何将长图像上传到艺术品或屏幕截图展示。特别感谢MightyG3发现这个漏洞，它完全改变了蒸汽配置文件艺术品。

![艺术作品前后版本对比](Photo/Profile/undefined-Imgur.gif)

您必须在 Steam 上达到 10 级 或 在点数商店购买 才能展示`插图`/`屏幕截图展示`。

比如[我的个人资料](https://steamcommunity.com/id/XTxiaotong)示例：

![艺术作品](Photo/Profile/home.png)

如果您使用的是普通的艺术品展示（1个中间和1个侧面）;对于中间图稿，宽度应为 506 像素宽和任意高度。然后，侧面图稿应为 100 像素，并且如果希望它对齐，则其高度应与中间相同。

如果您使用的是特色艺术品展示，这只是一个大的中间艺术品，那么它需要是630像素宽和任何高度。

请记住：检查您是否正确复制并粘贴了代码，并且您的图像具有正确的分辨率。

或者打开 [`steam.design`](https://steam.design/) 选择喜欢的壁纸直接下载切割好的图片

具体上传方法

- 先打开 <https://steamcommunity.com/sharedfiles/edititem/767/3/>
- 在"选择文件"下选择您的图片。
- 右键单击页面上的任意位置，单击检查/检查元素，然后转到"控制台"。或者使用快捷方式打开 一般浏览器默认为 `F12` `Ctrl+Shift+J` `Ctrl+Shift+K`
  =>Firefox（只需要做一次）：打开控制台后，手动输入"允许粘贴"，不带引号，然后将其删除（无需按 Enter 键）。默认情况下，Firefox不允许您将代码粘贴到控制台中，这将禁用它。
- 将这些代码之一粘贴到控制台中，然后按回车键。只需要使用其中一个代码，而不是同时使用这两个代码。

- 现在只需给它一个标题，然后勾选"我证明我创作了这件艺术品"框，然后"保存并继续"。

**重要说明**：在图稿选择器上，您的图稿将显示为一条细黑线。这完全没问题，这意味着代码可以正常工作，当您选择图稿时，加载后它应该看起来正常。

![图片黑线](Photo/Profile/updata-in-feature.png)

输入下面的代码上传即可使用

```JavaScript
var num= document.getElementsByName("image_width")[0].value;
document.getElementsByName("image_height")[0].value = num-(num-1);
document.getElementsByName("image_width")[0].value= num*100;
```

### 代码合集

使用 Web 浏览器打开此链接：

<https://steamcommunity.com/sharedfiles/edititem/767/3/>

<https://steamcommunity.com/workshop/edititem/570/11>

请将提供的代码粘贴到浏览器控制台中

#### 有标题上传

作为 `艺术品 Artwork` 或 `精美艺术品 Featured Artwork` 上传

透明艺术品

```JavaScript
$J（'#image_width'）.val（1000），$J（'#image_height'）.val（1）;
```

```JavaScript
$J（'#image_width'）.val（1000）.attr（'id'，''），$J（'#image_height'）.val（1）.attr（'id'，''）;
```

作为 `屏幕截图 Screenshot` 上传

透明截图代码

```JavaScript
$J（'#image_width'）.val（1000）.attr（'id'，''），$J（'#image_height'）.val（1）.attr（'id'，''），$J（'[name=file_type]'）.val（5）;
```

作为 `创意工坊 Workshop` 上传

透明创意工坊代码

```JavaScript
$J（'[name=consumer_app_id]'）.val（480）;$J（'[name=file_type]'）.val（0）;$J（'[name=visibility]'）.val（0）;
```

```JavaScript
$J（'#image_width'）.val（'1000'）;$J（'#image_height'）.val（'1'）;$J（'[name="appid"]'）.val（"480"）;$J（'[name="consumer_app_id"]'）.val（"480"）;$J（'[name="visibility"]'）.val（"0"）;$J（'[name=file_type]'）.val（'11'）;
```

```JavaScript
$J（'#ConsumerAppID'）.val（480），$J（'[name=file_type]'）.val（0），$J（'[name=visibility]'）.val（0）;
```

作为 `指南 Guide` 上传

```JavaScript
$J（'[name=consumer_app_id]'）.val（480）;$J（'[name=file_type]'）.val（9）;$J（'[name=visibility]'）.val（0）;
```

```JavaScript
$J（'#image_width'）.val（'1000'）;$J（'#image_height'）.val（'1'）;;$J（'[name="appid"]'）.val（"760"）;$J（'[name="consumer_app_id"]'）.val（"760"）;$J（'[name="visibility"]'）.val（"0"）;$J（'[name=file_type]'）.val（'9'）;
```

#### 无标题上传

作为 `屏幕截图 Screenshot` / `艺术品 Artwork` 或 `精美艺术品 Featured Artwork` 上传

将标题框留空，并在上传前将脚本粘贴到控制台中

<http://steamcommunity.com/sharedfiles/edititem/767/3/>

```JavaScript
function SubmitItem( bOverrideAppID ){$('SubmitItemForm').submit();}
```

作为 `指南（无游戏） Guide(Game-less)` 上传

将标题框留空，并在上传前将脚本粘贴到控制台中

<http://steamcommunity.com/sharedfiles/editguide/?appid=202352>

```JavaScript
function SubmitGuide(){$('SubmitGuideForm').submit();}
```

作为 `创意工坊 Workshop` 上传

将标题框留空，并在上传前将脚本粘贴到控制台中

<http://steamcommunity.com/workshop/edititem/570/11>

```JavaScript
function SubmitCollection(){$('SubmitCollectionForm').submit();}
```

集合上传 Collection Upload

将标题框留空，并在上传前将脚本粘贴到控制台中

<http://steamcommunity.com/workshop/editcollection/?appid=753>

```JavaScript
function SubmitCollection(){$('SubmitCollectionForm').submit();}
```

### 如何从任何内容中删除标题（艺术品，屏幕截图，指南，工作室等）

#### 从已发布的项目中删除标题

找到项目的已发布ID，并将其添加到此链接的末尾：

<http://steamcommunity.com/sharedfiles/itemedittext/?id>=

在该页面上;打开控制台并粘贴以下所有代码：（别忘了按回车键）

```JavaScript
function ValidateForm（）{var form = document.getElementById（ 'ItemEditText' ）;form.submit（）;}
```

删除原始标题，然后单击保存按钮。

大功告成！

附言此方法适用于所有项目
（艺术品，屏幕截图，指南，worskshop项目和收藏）

### 通过浏览器扩展上传

扩展现在有问题，偶尔有效，也会提示错误。如果使用该扩展程序并看到错误，请检查它是否已上传。

[Steam.Design](https://steam.design/) 的团队创建了一个浏览器 扩展/插件，可以自动上传各种类型的艺术品创作！

[![Chrome 网上应用店](/Photo/Badge/chrome.png)](https://chrome.google.com/webstore/detail/steamdesign-buttons/mjmabgdoainclinjecbkdancpamdiaih/related)
[![Firefox 附加组件](/Photo/Badge/firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/steam-design-buttons/)

使用扩展程序上传时，它具有一个框，您可以直接拖动 `Gif` 图片，然后单击单个按钮并上传所有内容，不需要粘贴代码就能直接上传。

![Steam.Design扩展](Photo/Profile/Steam.Design-extension.gif)

`扩展现在有问题，偶尔有效，也会提示错误。如果使用该扩展程序并看到错误，请检查它是否已上传。`

## 参考链接

[（过时）如何上传长研讨会和指南图片(OUTDATED) How to Upload Long Workshop and Guide Images](https://steamcommunity.com/sharedfiles/filedetails/?id=1627692828)

[上传长时间研讨会/指南图片的更简单方法 An Easier Way To Upload Long Workshop/Guide Images](https://steamcommunity.com/sharedfiles/filedetails/?id=2174159512)

[如何上传长图片用于展示[精选作品] How to Upload Long Images for Showcases [Featured works]](https://steamcommunity.com/sharedfiles/filedetails/?id=748624905)

[没有图标的创意工坊 Animated Workshops WITHOUT Icons](https://steamcommunity.com/sharedfiles/filedetails/?id=2164230951)

[如何从任何内容中删除标题（艺术品，屏幕截图，指南，工作室等） How to Remove Titles from Anything (Artworks, Screenshots, Guides, Workshop, etc)](https://steamcommunity.com/sharedfiles/filedetails/?id=961711822)

[将透明图像上传到 Steam Upload Transparent Images to Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=2175748848)

[如何制作动画 PNG How To Make Animated PNG](https://steamcommunity.com/sharedfiles/filedetails/?id=2216769769)

## 作品或模板

[透明艺术品/工作坊模板 Transparent Artwork/Workshop Templates](https://steamcommunity.com/sharedfiles/filedetails/?id=2187387847)

[蒸汽配置文件纹理和模板 Steam Profile Textures and Templates](https://steamcommunity.com/sharedfiles/filedetails/?id=947556853)

[蒸汽纹理和模板 // 已更新 Steam Textures and Templates // UPDATED](https://steamcommunity.com/sharedfiles/filedetails/?id=2144483683)

[预裁剪的动画背景 Pre-Cropped Animated Backgrounds](https://steamcommunity.com/sharedfiles/filedetails/?id=2144899743https://steamcommunity.com/sharedfiles/filedetails/?id=2144483683)

[新的蒸汽纹理头像模板 New Steam Texture Avatar Templatess](https://steamcommunity.com/sharedfiles/filedetails/?id=2141696853)

[自制创意工坊动态展柜](https://keylol.com/t663578-1-1)

[截至目前的100款展柜合集篇](https://keylol.com/t682419-1-1)
