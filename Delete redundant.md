---
autoGroup-1: 个人资料美化
# autoGroup+10: group10
title: 删除不想要的元素
autoSort: -1
---

## 如何从已发布的内容中删除标题（艺术作品，屏幕截图，指南，创意工坊等）

找到项目的已发布ID，并将其添加到此链接的末尾：

<http://steamcommunity.com/sharedfiles/itemedittext/?id=>

在该页面上;打开控制台并粘贴以下所有代码：（别忘了按回车键）

```JavaScript:no-line-numbers
function ValidateForm（）{var form = document.getElementById（ 'ItemEditText' ）;form.submit（）;}
```

删除原始标题，然后单击保存按钮。

大功告成！

附言:
此方法适用于所有项目
（艺术作品，屏幕截图，指南，worskshop项目和收藏）

## 从成就展柜中删除成就

在浏览器中转到您个人主页的编辑作品集页面。steamcommunity.com/my/edit/showcases

找到您要从成就展柜中删除的成就。右键单击它，然后单击检查元素按钮。

⠀您应该看到一些看起来与下面类似的代码。

```:no-line-numbers
<input type="hidden" name="rgShowcaseConfig[17][0][appid]" value="209330">
<input type="hidden" name="rgShowcaseConfig[17][0][title]" value="2_4">
```

将 `value=" "` 改成 `value="0"`,如下面所示

```:no-line-numbers
<input type="hidden" name="rgShowcaseConfig[17][0][appid]" value="0">
<input type="hidden" name="rgShowcaseConfig[17][0][title]" value="0">
```

继续并关闭控制台，然后保存页面，然后刷新页面。

## 如何移除精选徽章

导航到浏览器中的特色徽章设置，右键单击任意位置前往检查元素，然后单击控制台选项卡。复制下面提供的代码，粘贴到控制台中，然后按 Enter 发送。发送代码后，只需关闭控制台并在设置页面上单击保存，然后返回您的个人资料。您的特色徽章将被删除。

```:no-line-numbers
var access_token = "";var badgeid = 0;if （window.location.href.indexOf（"steampowered"） > -1） { access_token = $J（"[data-loyaltystore]"）.data（"loyaltystore"）.webapi_token; } else if（window.location.href.indexOf（"steamcommunity"） > -1） { access_token = JSON.parse（$J（"#profile_edit_config"）.attr（"data-profile-edit"））.webapi_token;SetFavoriteFeaturedBadge（access_token， badgeid）;} else { console.log（"go to： https://store.steampowered.com/points/shop or https://steamcommunity.com/my/edit/info"）;SetFavoriteFeaturedBadge（access_token， badgeid）;} function SetFavoriteFeaturedBadge（access_token， badgeid） { $J.post（ 'https://api.steampowered.com/IPlayerService/SetFavoriteBadge/v1？'， { access_token： access_token， badgeid： badgeid }）; }
```
