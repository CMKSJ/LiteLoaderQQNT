## v2.33.9 - 2024/11/19 09:50:54

## 由于工作原因，该插件将在未来很长一段时间内停止维护，无法保证所有功能在最新版本下的可用性。

### 修复

- `精简侧边栏` 功能在高版本部分图标无法隐藏的问题 @zetaloop


## v2.33.8 - 2024/10/22 20:23:10

# 由于页面结构改动，从该版本开始，消息合并功能仅支持 `28788` 及以上版本，低于该版本无需更新。

### 修复

- `连续消息合并` 功能在 28788 及以上版本无法正常工作的问题


## v2.33.7 - 2024/10/11 11:26:13

### 修复

- `链接预览` 功能的编码识别函数有遗漏导致的乱码问题
- 当启用代理地址后将导致 [Chii Devtools](https://github.com/mo-jinran/chii-devtools/tree/v4) 插件无法正常工作的问题

### 新增

- `界面调整>显示消息发送时间` 新增 `显示相对时间` 功能
- `阻止撤回` 新增 `重定向图片存储路径` 功能

### 调整

- `链接预览` 功能优化数据抓取逻辑

## v2.33.6 - 2024/9/26 10:47:10

### 修复

- 插件初始化完成前尝试读取配置文件导致的错误
- `自定义背景>覆盖侧边栏` 功能启用时没有去除侧边栏半透明遮罩的问题
- 链接预览显示乱码问题没有处理meta标签中的编码类型导致的问题 #328
- 启用消息合并功能后子消息依旧会显示移入时间的问题

### 调整

- 启用 `调试功能>保存日志到本地` 功能

### 移除

- 移除 `背景调整>重绘卡片` 功能

## v2.33.5 - 2024/9/20 10:39:15

### 修复

- `阻止撤回>查看撤回消息` 功能无法正常处理私聊消息导致的撤回数据显示不全的问题 #319 #332
- `本地表情` 功能向输入框插入图片时光标有概率出现在图片前的问题

### 调整

- `阻止撤回>查看撤回消息` 功能优化界面排版，新增支持暗色主题 @YatFanLan

## v2.33.4 - 2024/9/13 13:34:54

### 修复

- `界面调整>图片窗口全局拖拽` 功能窗口鼠标按键抬起判断错误导致窗口位置错误的问题 #329
- `界面调整>消息列表只显示头像` 功能未读气泡消失的问题 #326
- `消息相关>链接预览` 功能不支持 gbk 编码网页的问题 #328

## v2.33.3 - 2024/9/7 00:48:23

### 修复

- `本地表情>快捷输入表情>自动填充` 功能导致渲染进程卡死的问题
- `界面调整>未读气泡显示真实消息数量` 功能在高版本失效的问题

### 调整

- 优化了高版本的主窗口监听资源占用过高的问题

## v2.33.2 - 2024/8/24 16:48:54

### 修复

- `本地表情>快捷输入表情` 功能无法工作的问题 #320

### 调整

- `下载tg贴纸` 功能会将 `webp` 格式转为 `png` 格式，以兼容旧版客户端

### 新增

- `本地表情>右键菜单` 新增 `重命名分组` 功能

> [!NOTE]\
> 该版本暂时移除 `本地表情>快捷输入表情>自动填充` 功能，由于有bug会导致渲染进程卡死，修复时间待定

## v2.33.1 - 2024/8/6 16:34:19

### 新增

- `界面调整>使用系统主题色` 功能 @MapleRecall

### 调整

- 移除 `预载hookVue模块` 选项，因为其没有实际功能
- 重构 `精简侧边栏` 功能，阻止移除 `更多` 按钮，该功能需要重新启用
- 优化 `连续消息合并` 功能，聊天区域悬浮按钮将不会遮挡头像


## v2.33.0 - 2024/7/31 21:45:53

### 修复

- `本地表情` 功能因URI编码导致的图片加载失败的问题 @dasoops
- `右键菜单>消息转图片` 功能无法正确处理带有换行的消息内容的问题
- `消息相关>记录离开时的位置` 功能无法正常工作的问题 #308
- `图片窗口全局拖拽` 功能在系统缩放不为100%时会导致窗口尺寸发生错误（只修复了一半，拖动窗口现在会导致图片缩放被重置为100%，因为会触发窗口的resize事件，以及多屏幕由于 JS 的限制该修复补丁无法正常工作）

### 新增

- `界面调整>解除窗口大小限制` 功能


## v2.32.0 - 2024/7/24 13:59:25

### 新增

- `本地表情>导入EIF贴纸` 功能


## v2.31.1 - 2024/7/19 21:41:45

### 修复

- `消息转图片` 功能在私聊界面使用时头像用户名匹配出错的问题

### 新增

- `插件配置>不保存登录信息` 功能
- `右键菜单>选项高亮` 功能新增高亮颜色自定义

### 调整

- 移动部分功能的配置项到更合理的位置，`右键菜单>图片搜索`，`右键菜单>划词搜索`，`右键菜单>选项高亮` ，`右键菜单>消息转图片` 等功能需要重新配置或启用


## v2.31.0 - 2024/7/15 22:16:13

### 修复

- 在 `25493` 及之后的版本中，`自定义背景` 功能无法正常工作的问题 #295
- `链接预览` 功能没有正确处理实体符号的问题 #293

### 新增

- `本地表情>最近使用分组前置` 功能 @Natsukage 

## v2.30.12 - 2024/7/10 23:49:58

### 修复

- 在 `25300` 及之后的版本中，`头像置底` 功能头像定位错误的问题

### 调整

- 降低卡片预览标题文字透明度，提升可读性

## v2.30.11 - 2024/7/7 21:54:52

### 修复

- `下载tg贴纸` 功能无法保存静态贴纸的问题
- `tgs转gif` 功能的模块修复了未对传入数据进行 utf-8 解码问题导致的报错，需要同步更新该模块到 `1.0.2` 版本才能正常工作 @jiongjiongJOJO


## v2.30.10 - 2024/7/6 17:54:14

### 调整

- `自定义字体` 功能添加单独控制 `emoji` 选项 @MapleRecall
- `下载tg贴纸` 功能现在支持下载并处理 `tgs` 格式贴纸 @jiongjiongJOJO
- `更新日志` 增加 `GitHub` 用户名渲染逻辑

### 修复

- `下载tg贴纸` 功能现在可以将带有透明通道的 `webm` 视频正确转为透明 `gif` 图片
- #285 `阻止撤回>隐蔽模式` 选项无法正常工作且设置页面在重启后一直显示为开启的问题

## v2.30.9 - 2024/7/3 21:03:01

### 调整

- 设置页面子选项增加缩进以方便区分
- `显示消息发送时间` 功能增加更多自定义选项

## v2.30.8 - 2024/6/30 18:15:22

### 新增

- `本地表情` 功能的右键菜单新增 设为分组图标 选项

### 调整

- `下载tg贴纸` 功能将在请求失败时才会提醒用户设置代理


## v2.30.7 - 2024/6/27 19:58:00

### 修复

- `下载tg贴纸` 功能保存到本地的文件后缀名错误的问题

### 调整

- `本地表情` 功能新增表情文件夹内的配置文件读取逻辑
- `本地表情>下载tg贴纸` 功能将自动生成表情包配置文件


## v2.30.6 - 2024/6/25 21:47:15

### 修复

- #249 `本地表情>内存优化` 功能有概率导致表情文件夹无法正常载入的的问题

### 调整

- `消息相关>链接预览` 功能增加对 Twitter 链接的预览支持


## v2.30.5 - 2024/6/24 14:50:52

### 修复

- `消息相关>链接预览` 功能如果遇到请求301跳转时无法正确拼接相对地址导致的问题

### 调整

- `本地表情>下载tg贴纸` 功能的动态表情转码格式从webp改为gif


## v2.30.4 - 2024/6/23 21:05:42

### 新增

- `本地表情>下载tg贴纸` 功能

## v2.30.3 - 2024/6/19 21:04:06

### 修复

- #265 图片 url 拼接错误的问题


## v2.30.2 - 2024/6/18 13:45:40

### 新增

- `阻止撤回>阻止撤回历史消息` 功能

### 修复

- 图片链接识别错误的问题

### 调整

- `自定义rkey获取地址` 功能现在支持两种请求返回格式，具体可在 [getRkey.js](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/blob/v4/src/main_modules/getRkey.js) 中查看

## v2.30.1 - 2024/6/18 09:13:16

### 修复

- #263 getRkey 模块无法正常工作的问题
- `右键菜单>图片搜索` 功能的url拼接逻辑错误的问题


## v2.30.0 - 2024/6/17 23:31:30

### 新增

- `插件配置>代理地址` 配置项，该配置影响 `检查更新`，`插件自更新`，`链接预览` 等功能

### 修复

- `动态编译scss` 功能会重复监听文件的问题

### 调整

- 优化 `本地表情>历史表情` 数据更新频率

> [!NOTE]
> 目前可以通过 `插件配置>自定义rkey获取地址` 功能来使阻止撤回和图片搜索功能恢复正常，前提是需要用户自行搭建此服务，\
> 该功能依赖于 [Lagrange.Core](https://github.com/linyuchen/Lagrange.Core) 的 [get_rkey](https://github.com/linyuchen/Lagrange.Core/blob/dca7d569d0dd05d3f031e8cd5893bb2d1bfab65d/Lagrange.OneBot/Core/Operation/Generic/FetchRkeyOperation.cs#L8) 接口，\
> 可重写此接口并在返回中添加 `expired_time` 属性用于避免频繁更新 \
> 针对此功能的逻辑在 [getRkey.js](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/blob/v4/src/main_modules/getRkey.js) 中


## v2.29.9 - 2024/6/16 22:05:36

### 修复

- #261 在启用消息靠左功能后气泡插入位置错误的问题
- 阻止撤回功能图片下载模块无法正确下载图片的问题，目前大部分图片需要配置 `自定义rkey获取地址` 后才能正常下载


## v2.29.8 - 2024/6/16 02:16:33

### 修复

- 撤回标记无法插入图片元素的问题


## v2.29.7 - 2024/6/16 01:33:30

### 调整

- 补全更新日志历史数据
- 优化切换聊天对象时的处理速度
- 移除 `回退逻辑实现` 功能，调整消息列表处理方式

### 修复

- #259 转发小程序分享卡片时 `小程序分享转url卡片` 功能无法正常工作的问题


## v2.29.6 - 2024/6/12 15:52:32

### 新增

- `插件配置>自定义rkey获取地址`

### 修复

- `自定义字体` 功能在某些情况下会出现样式残留的问题

### 调整

- 优化图片消息时间气泡的插入方式


## v2.29.5 - 2024/6/5 14:42:33

### 修复

- #251 `快速关闭图片` 功能影响双击标题栏最大化窗口的问题
- #250 设置页面元素错位的问题


## v2.29.4 - 2024/6/2 15:56:03

### 修复

- `本地表情>历史表情` 功能的数据可能会丢失的问题


## v2.29.3 - 2024/6/1 18:06:04

### 修复

- `本地表情` 功能的部分逻辑错误
- `阻止撤回>查看撤回消息` 功能有概率获取用户名失败的问题

### 调整

- `消息转图片` 功能优化实现逻辑，增强和其他插件的兼容性
- 使用 ESLint 规范化代码


## v2.29.2 - 2024/5/25 14:50:24

### 新增

- `本地表情>使用文件创建时间排序` 功能
- `本地表情>移入显示文件名` 功能
- `本地表情` 现在可以将一张图片命名为 `icon.*` 来作为表情分类的图标，且该文件不会出现在表情列表中

### 修复

- `消息转图片` 功能无法设置默认保存路径和无法将图片保存到默认路径的问题
- `背景调整` 功能无法正确处理部分只有黄豆表情的气泡消息的问题


## v2.29.1 - 2024/5/25 09:06:52

### 修复

- #246 独立聊天窗口部分功能失效的问题
- `链接预览` 功能有小概率插入两个卡片的问题

## v2.29.0 - 2024/5/24 13:38:03

### 新增

- `取消主窗口最小尺寸限制` 功能

### 修复

- #240 `链接预览` 功能图片下载失败时无法显示卡片的问题
- #242 `头像浮动` 相关功能会影响邮箱推送消息的问题

### 调整

- 优化 `消息列表只显示头像` 功能实现逻辑
- 优化 `本地表情模块` 逻辑
- 调整部分设置选项说明文本


## v2.28.8 - 2024/5/18 23:23:23

### 调整

- 优化本地表情监听逻辑，调整更新检测频率以降低资源占用


## v2.28.7 - 2024/5/18 11:03:26

### 修复

- 部分字体效果不生效和应用了斜体字体后无法恢复的问题
- 移除字体列表过滤函数，这会导致同一字体家族只显示一个字体

### 调整

- 优化自定义字体选择列表，现在将仅加载可见区域字体预览效果


## v2.28.6 - 2024/5/17 21:17:45

### 修复

- 部分字体效果不生效和应用了含有斜体样式的字体后无法恢复的问题
- 移除字体列表过滤函数，这会导致同一字体家族只显示一个字体

### 调整

- 优化自定义字体选择列表，现在将仅加载可见区域字体预览效果


## v2.28.5 - 2024/5/17 11:51:21

### 修复

- #238 `阻止拖拽多选` 功能开启后会出现无法拖拽滚动条的问题
- `本地表情>添加右键菜单` 功能在没有展开二级菜单前初始化位置错误的问题

### 调整

- `阻止拖拽多选消息` 更名为 `阻止消息窗口拖拽操作`


## v2.28.4 - 2024/5/16 10:06:41

### 修复

- #221 侧边栏部分功能按钮禁用效果会被重置的问题
- `清除本地撤回数据` 功能无法使用的问题

### 调整

- `自定义字体` 功能改用浏览器API获取字体数据
- `自定义字体` 功能下拉列表中显示的字体名称将应用对应字体样式
- 优化 `自定义字体` 的输入匹配功能
- 在初始化完成前预先缓存日志内容，等待配置加载后再决定删除还是显示，避免丢失信息
- web调试日志根据类型区分颜色


## v2.28.3 - 2024/5/15 09:28:54

### 修复

- #235 查看撤回消息功能一直处于加载中的问题
- 设置页面显示的本地撤回消息数量显示错误的问题

### 调整

- 在启用消息合并时，移除卡片消息的margin-top以保持相同的消息间隙


## v2.28.2 - 2024/5/11 09:07:23

### 请注意

- 由于当前版本的主进程刚完成重构，可能存在一些未被发现的bug，如果您注重稳定性，请等待一段时间再更新新版本

### 修复

- 首次更新到 `2.28.x` 版本需要重启两次才能正常工作的问题


## v2.28.1 - 2024/5/10 22:52:52

### 请注意

- 由于当前版本的主进程刚完成重构，可能存在一些未被发现的bug，如果您注重稳定性，请等待一段时间再更新新版本

### 修复

- 新用户安装插件会因为无法找到插件路径导致报错的问题
- #228 隐藏头衔等级导致的错位问题

## v2.28.0 - 2024/5/10 19:25:18

### 请注意

- 由于当前版本的主进程刚完成重构，可能存在一些未被发现的bug，如果您注重稳定性，请等待下一个版本的发布

### 新增

- `阻止撤回>隐蔽模式`
- `界面调整>移除头衔`
- `插件配置>独立配置文件`

### 调整

- 重构 `主进程`
- 优化 `图片遮罩>包括收藏表情` 功能判断逻辑
- 优化设置页面初始化速度
- 优化本地表情设置页面逻辑
- 调整设置页面提示内容
- 移动 `右键菜单>保存到本地表情` 功能到 `本地表情>添加右键菜单`
- 在启用了 `显示消息发送时间>插入到用户名后方` 时，移除官方的悬浮显示时间功能

### 修复

- `图片遮罩` 功能无法识别部分图片消息的问题

### 已知问题

- `图片搜索` 和 `阻止撤回` 功能目前无法获取正确的图片URL，会出现图片无法搜索（404）和被撤回图片无法查看（撤回消息图片下载失败）的问题

## v2.27.1 - 2024/4/26 14:23:24

### 新增

- `插件配置>更新后自动重启` 功能

### 调整

- 在启用 `自定义背景` 功能后移除超级表情，收藏表情，商城表情的背景


## v2.27.0 - 2024/4/23 16:29:33

### 修复

- 在启用 `链接预览` 功能后撤回标记和消息发送时间重叠的问题
- 在启用 `头像浮动` 功能后点击头像上方空白区域会打开用户卡片的问题

### 新增

- `消息相关>图片遮罩` 功能
- `链接预览>不加载图片` 功能

### 调整

- 在启用 `自定义背景` 功能后移除超级表情的消息气泡
- 优化 `链接预览` 功能逻辑


## v2.26.3 - 2024/4/20 22:00:18

### 修复

- #214 `链接预览` 功能会尝试请求非html类型的链接导致下载错误内容的问题

### 调整

- 优化 `链接预览` 功能图片获取方式


## v2.26.2 - 2024/4/20 13:47:02

### 修复

- 在 Windows7 系统下设置页面无法正常工作的问题

### 调整

- 优化 `更新日志` 弹窗，适配主题样式


## v2.26.1 - 2024/4/20 00:17:30

### 调整

- 优化 `插件自更新` 功能提示内容
- 顺便供各位测试一下自动更新功能有没有什么问题_(:з)∠)_


## v2.26.0 - 2024/4/19 23:59:28

### 新增

- `插件自更新` 功能，现在可以通过点击设置页面下方版本号直接更新到最新版本和跳转到当前版本的 release 页面

### 调整

- `阻止撤回>自定义颜色` 功能支持分开设置亮色/暗色模式下的自定义颜色
- 优化配置合并模块
- 检查更新模块引入md解析，增加更新日志查看功能

> [!NOTE]\
> 当前是直接从 GitHub 拉取最新的压缩包，没有使用国内代理，如果遇到自动更新失败请手动更新

## v2.25.2 - 2024/4/19 12:34:39

### 修复

- 在启用 `链接预览` 功能后默认主题激活样式遮罩错位的问题
- #212 图标尺寸错误的问题
- 链接预览图片没有居中的问题

### 调整

- 优化项目结构
- 移除css文件，改为构建项目时自动编译


## v2.25.1 - 2024/4/18 14:51:12

### 调整

- 优化消息气泡插入检测逻辑

### 修复

- 被撤回消息在特殊情况下仍旧显示+1按钮的问题
- 新版本消息添加表情评论导致头像浮动计算错位的问题

## v2.25.0 - 2024/4/17 11:57:16

### 新增
- `窗口使用聊天头像作为图标` 功能，仅限 Windows 系统

### 修复
- 元素类名错误
- `搜索图片` 功能获取到的图片链接有概率无效的问题

### 调整
- 右键菜单模块适配 `22961` 版本
- `消息列表只显示头像`功能启用时，移除群助手标题栏中文字使布局更和谐
- 优化链接预览显示内容
- 优化链接预览缓存功能
- 优化配置合并模块
- 将部分公用字段移入配置文件

## v2.24.1 - 2024/4/15 23:31:28

### 修复
- `链接预览` 功能的一点小问题

## v2.24.0 - 2024/4/15 23:08:00

### 新增
- `链接预览` 功能
- `本地表情` 功能右键菜单新增 `删除` 选项

### 调整
- 优化启用背景后的消息气泡阴影效果
- 优化debug模块

### 修复
- 重绘卡片中的文本超长会导致内容错位的问题
- 资料卡片的vip昵称未匹配到的问题

## v2.23.6 - 2024/4/12 14:04:52

### 修复
- `移除vip彩色昵称` 功能无法移除部分彩色昵称
- 阻止撤回功能有可能记录错误消息数据的问题

## v2.23.5 - 2024/4/11 16:29:08

### 修复
- 消息处理函数有概率会占用过多资源的问题

### 调整
- 优化重绘卡片样式

## v2.23.4 - 2024/4/11 09:28:21

### 修复
- `阻止撤回` 功能执行时由于元素还未被渲染导致的错误

## v2.23.3 - 2024/4/10 20:06:42

### 新增
- `背景调整>重绘卡片` 功能开关，启用后将调整 `小程序`，`链接卡片`，`推荐好友`，`推荐群聊` 消息的显示样式，增加背景磨砂效果

## v2.23.2 - 2024/4/10 17:27:25

### 修复
- 阻止撤回功能本地数据切片逻辑错误

## v2.23.1 - 2024/4/9 20:27:18

### 修复
- `移除vip红名` 功能无法隐藏其他颜色昵称，功能更名为 `移除vip彩色昵称`

## v2.23.0 - 2024/4/8 20:43:18

### 修复
- #197 高版本阻止撤回功能无法正常工作
- 修复数字与 NaN 进行对比的逻辑错误

### 调整
- 优化撤回数据持久化存储方式
- 优化图片下载函数逻辑
- 主进程增加激活聊天窗口逻辑
- 引入外部模块来处理 JSON 无法正确处理 JavaScript 基础类型的问题
- 优化 peer 管理模块
- 引入 esbuild 模块
- 适配 LiteLoader 1.1.0
- 修改插件图标以统一图标风格

### 新增
- `阻止撤回>拦截所有群组的撤回事件` 功能，此功能仅在9.9.8及以上版本有效，不开启的话高版本将只能拦截最近打开过的前10个聊天对象。

> [!NOTE]\
> 此次更新内容多为适配新版本 QQ，可能会出现部分旧版本无法兼容的情况，建议升级 QQ 版本。
> 由于修改了撤回数据持久化保存格式，升级前建议执行 **阻止撤回>删除本地数据** 以避免出现未知错误。
> 由于首次引入打包模块，从该版本开始将不能pull本项目直接使用，如果出现问题请在 [issues](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/issues) 中告知

## v2.22.4 - 2024/4/5 23:28:22

### 修复
- 被重绘的卡片消息中的图片有可能加载失败的问题
- 被阻止撤回的消息中的图片有可能加载失败的问题

### 调整
- 优化图片URL获取方式
- 提升代码健壮性
- 优化消息缓存模块
- 统一检测更新模块显示的版本号

## v2.22.3 - 2024/4/4 21:59:19

### 修复
- `自定义背景` 功能在开启了 `覆盖侧边栏` 时，启用背景功能的瞬间会导致窗口闪烁的问题

### 调整
- 优化自定义背景主题的部分效果，URL卡片和小程序卡片将拥有磨砂效果 - 重载消息生效

## v2.22.2 - 2024/4/3 20:02:16

### 修复
- 9.9.9-22578 版本从常驻内存撤回消息中读取数据时只有第一次可以正常读取的问题

## v2.22.1 - 2024/4/3 16:31:23

### 修复
- `阻止撤回` 部分功能依靠bug运行的问题

### 调整
- 优化消息合并功能判断逻辑

## v2.22.0 - 2024/4/2 16:57:25

### 新增
- `其他>插件配置` 选项
- `插件配置>预载hookVue模块` 可解决部分功能概率失效的问题

### 移除
- `临时功能>修复cpu占用过高的问题` 功能

### 修复
- `图片窗口全局拖拽` 功能对过大图片生效的问题
- `自定义背景` 功能开启后，消息外部插槽没有正确应用主题样式的问题

### 调整
- 外部插槽背景色将同步原生消息气泡背景色
- 优化图片文件消息旁图标显示

## v2.21.4 - 2024/4/2 13:09:13

### 修复
- `阻止撤回>拦截自己的撤回操作` 功能在 9.9.9-22578 版本中工作异常的问题
- 修复 `图片窗口全局拖拽` 功能在视频播放器窗口错误启用的问题

## v2.21.3 - 2024/4/1 09:38:32

### 修复
- `精简>消息框` 更多按钮标题消失的问题

### 调整
- 优化 `精简` 功能实现方式

## v2.21.2 - 2024/3/31 18:32:25

### 修复
- 修复本地保存撤回数据格式错误

此次更新需要 **删除本地撤回数据** 以避免可能出现的未知错误

## v2.21.1 - 2024/3/31 11:00:04

### 修复
- 撤回标记在消息离开可见区域后撤回标记消失的问题
- 9.9.9 版本阻止撤回功能无法正常工作的问题
- `移除vip红名` 功能失效的问题

目前最新版本 QQ(9.9.9) 由于修改了消息数据格式，导致插件加载旧版本撤回数据时会引起报错，建议启用了 `阻止撤回>持久化保存` 的用户在升级后 **删除本地撤回数据** 以避免未知错误

## v2.21.0 - 2024/3/30 18:04:09

### 新增
- `图片窗口全局拖拽`

### 修复
- `回退逻辑实现` 功能会导致针对消息列表的功能失效的问题
- `搜索图片` 功能临时修复，由于腾讯正在修改图片服务器，因此不保证该功能的可用性

## v2.20.6 - 2024/3/27 13:58:08

### 修复
- 修复 主题样式错误应用在聊天记录中

## v2.20.5 - 2024/3/26 19:56:01

### 修复
- #187 `连续消息合并` 功能的浮动头像计算高度错误的问题

### 调整
- 优化功能逻辑

## v2.20.4 - 2024/3/26 10:57:37

### 修复
- #176 过大尺寸的图片无法启用 `快速关闭` 功能

### 调整
- 优化 `hookVue3` 模块，避免重复添加同一个组件的索引

## v2.20.3 - 2024/3/25 19:49:45

### 修复
- #193 搜索图片 功能可能失效的问题
- 在启用 [LiteLoaderQQNT-MSpring-Theme](https://github.com/MUKAPP/LiteLoaderQQNT-MSpring-Theme) 主题时 自定义字体功能下拉选择框的背景消失问题

## v2.20.2 - 2024/3/23 20:02:28

### 调整
- `临时功能` > `兼容LLAPI` 改名为 `回退逻辑实现`
- 调整设置描述文本

### 修复
- `内部提示模块` 偶发性载入动画显示消失的问题

### 其他
- 如果聊天界面的部分功能出现问题，请先尝试开启 `回退逻辑实现` ，新版实现逻辑会提高插件处理速度，但是兼容性很差，所以目前增加了一个切换处理方式的开关供用户调整
- 新增一个彩蛋

## v2.20.1 - 2024/3/22 21:22:30

### 调整
- #166 `消息转图片` 功能将跟随主题亮色/暗色 进行生成

### 其他
- 新增一个彩蛋

## v2.20.0 - 2024/3/22 10:42:17

### 新增
- `临时功能` > `兼容LLAPI`

由于 [v2.19.0](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/releases/tag/v2.19.0) 版本修改了部分功能的实现逻辑，导致 轻量工具箱 与 [LiteLoaderQQNT-Plugin-LLAPI](https://github.com/Night-stars-1/LiteLoaderQQNT-Plugin-LLAPI) 不再兼容。启用此功能后，轻量工具箱 将回退到之前的实现方式，性能会略微下降（与新版本相比）

## v2.19.6 - 2024/3/21 21:24:49

### 修复
- #188 图片自适应窗口宽度功能导致的消息气泡尺寸错误

## v2.19.5 - 2024/3/21 21:14:49

### 修复
- `消息合并` 功能开启 `保留时间` 后头像高度计算错误的问题

## v2.19.4 - 2024/3/21 17:09:36

### 修复
- `消息后缀提示` 功能开启后无法关闭的问题
- 几处逻辑错误

## v2.19.3 - 2024/3/21 15:06:05

### 新增
- `消息后缀` 增加临时禁用功能

### 修复
- #183 设置界面自定义字体在进入时不生效的问题


## v2.19.2 - 2024/3/21 12:54:06

### 修复
- 被撤回的消息依旧显示+1按钮的问题
- 撤回标记可能消失的问题
- 消息靠左功能间歇性失效的问题

## v2.19.1 - 2024/3/21 10:25:42

### 修复
- #180 独立聊天窗口下消息合并功能需要重载消息才能生效的问题
- #181 消息合并功能头像浮动位置不统一的问题

## v2.19.0 - 2024/3/20 22:55:16

### 重构
- 重构消息列表代码逻辑，优化执行效率
- 重构 `消息合并` 功能，经测试几乎没有卡顿现象

### 修复
- `聊天记录` 窗口样式错误

### 注意
- 由于此次更新修改了大量代码逻辑，可能会存在一些bug，请在 [issue](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/issues) 中提出

### 消息合并效果演示
https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools/assets/25543545/8a12f695-7af3-4991-952f-4a2cbf4fd3ac

## v2.18.1 - 2024/3/18 23:30:11

### 修复
- #164 `消息转图片` 功能处理含有换行符的消息时排版错乱的问题

## v2.18.0 - 2024/3/18 22:40:35

### 新增
- `阻止 ESC 关闭窗口` 功能

## v2.17.6 - 2024/3/18 20:20:21

### 调整
- `选项高亮` 增加引用按钮

## v2.17.5 - 2024/3/18 17:26:14

### 修复
- #165 消息转图片在好友会话中无法使用
- #167 开启 `图片自适应窗口宽度` 功能表情与图片一起发送表情显示异常

## v2.17.4 - 2024/3/18 16:27:35

### 修复
- #168 联系人界面部分选项展开时会导致渲染进程卡死的问题

## v2.17.3 - 2024/3/16 19:17:04

### 修复
- `禁用表情中的GIF热图` 功能会导致表情窗口图标错误的问题

## v2.17.2 - 2024/3/16 18:49:18

### 修复
- `9.9.8-22106` 版本阻止撤回功能失效的问题

## v2.17.1 - 2024/3/16 16:00:51

### 修复
- `关键词提醒` 功能会记录当前打开的聊天对话关键词

## v2.17.0 - 2024/3/16 15:37:16

### 新增
- #143 `关键词提醒` 功能

**此功能有一定限制，当前只能在主窗口启用，退出登录后无法记录数据，~~且当前打开的聊天对话不会自动清除标记~~**

## v2.16.2 - 2024/3/15 20:35:59

### 调整
- 部分功能增加执行提示

## v2.16.1 - 2024/3/15 12:50:55

### 修复
- `右键菜单>保存表情到本地` 功能保存商城表情时有概率失败的问题

## v2.16.0 - 2024/3/14 22:10:25

### 新增
- `侧键返回` 功能

## v2.15.3 - 2024/3/14 15:16:34

### 修复
- `精简>侧边栏` 功能设置可能会被重置的问题

## v2.15.2 - 2024/3/13 21:52:35

### 修复
- 插件无法处理临时会话的问题

## v2.15.1 - 2024/3/13 21:12:15

### 修复
- `消息，联系人，更多` 功能的设置无法保存的问题

__请注意，`v2.15.0 ` 更新会重置 `精简>侧边栏` 功能，需要重新配置，以及有小概率出现侧边栏功能不受控制等问题，删除本插件配置文件并重启QQ即可解决__

## v2.15.0 - 2024/3/13 21:00:47

### 重构
- `精简>侧边栏` 功能完成重构，能够控制更多的选项 

__请注意，此次更新会重置该功能，需要重新配置，以及有小概率出现侧边栏功能不受控制等问题，删除本插件配置文件并重启QQ即可解决__

## v2.14.8 - 2024/3/12 16:33:59

### 调整
- 优化 `记录离开时位置` 功能逻辑

## v2.14.7 - 2024/3/11 22:59:04

### 修复
- 自己发送的消息选中样式可见性太差的问题

## v2.14.6 - 2024/3/11 11:12:47

### 调整
- `进入聊天时回到离开的位置` 功能更名为 `记录离开时的位置`
- 优化 `记录离开时的位置` 功能实现，没有只生效一次的限制了。

## v2.14.5 - 2024/3/11 10:50:07

### 修复
- `回复移除At` 功能在特殊情况下会误删聊天框内文本的问题

## v2.14.4 - 2024/3/10 09:50:34

### 调整
- 设置界面部分输入框的点击效果改为清除输入值

## v2.14.3 - 2024/3/10 01:00:53

### 修复
- `背景功能` 在没有设置图片路径时显示错误图标的问题

## v2.14.2 - 2024/3/9 00:13:57

### 修复
- `背景调整功能`  附带主题没有对文件消息生效的问题

## v2.14.1 - 2024/3/7 09:02:57

### 修复
-  `背景调整功能` 和 `MSpring Theme` 的兼容问题

## v2.14.0 - 2024/3/6 21:54:38

### 新增
- #145 进入聊天时回到离开的位置

## v2.13.1 - 2024/3/4 22:14:00

### 修复
- #144 保留时间功能判定逻辑错误的问题

## v2.13.0 - 2024/3/4 22:07:08

### 调整
- 重写 `背景调整` 功能
- 新增 `背景调整>磨砂效果` 控制选项
- 新增 `背景调整>增强可读性` 控制选项

## v2.12.4 - 2024/3/3 17:12:18

### 修复
- `回复不带At功能` 保留一个空格的问题

## v2.12.3 - 2024/3/3 15:46:05

### 修复
- #142 `回复不带At功能` 部分情况下光标定位错误的问题

## v2.12.2 - 2024/3/2 22:02:18

### 修复
- `右键菜单>保存到本地表情` 功能无法保存表情商城中表情的问题

## v2.12.1 - 2024/3/2 16:48:53

### 修复
- 视频背景覆盖侧边栏时功能无法点击的问题

## v2.12.0 - 2024/2/29 17:24:57

### 新增
- [右键菜单高亮](https://github.com/yige-yigeren/LiteLoaderQQNT-HighlightReplies) 功能

## v2.11.4 - 2024/2/28 18:27:46

### 调整
- `连续消息合并>保留时间` 功能将会显示时间下方的id和头像

## v2.11.3 - 2024/2/28 17:56:59

### 兼容
- 兼容 [Scriptio](https://github.com/PRO-2684/Scriptio) 中的 [hook-vue](https://github.com/PRO-2684/Scriptio-user-scripts/blob/main/inspectio.js) 模块

## v2.11.2 - 2024/2/28 01:41:28

### 修复
- 外部插槽内的撤回提示不会常驻显示的问题
- 阻止撤回功能捕获到频道聊天数据的问题

### 调整
- 主进程日志模块

## v2.11.1 - 2024/2/26 02:20:30

### 新增
- 临时功能：修复cpu占用过高的问题

## v2.11.0 - 2024/2/23 01:49:32

### 调整
- 设置界面背景功能移动到新的折叠菜单中

### 新增
- `背景功能>覆盖侧边栏`
- `背景功能>窗口磨砂化`
- `背景功能>背景透明度`

## v2.10.1 - 2024/2/22 12:47:18

### 兼容
- #126 [Telegram-Theme](https://github.com/festoney8/LiteLoaderQQNT-Telegram-Theme) 主题下图文混排消息内的时间定位错误

## v2.10.0 - 2024/2/20 21:57:01

### 新增
- #120 图片自适应窗口宽度

## v2.9.0 - 2024/2/20 18:50:52

### 新增
- #121 移除vip红名

## v2.8.0 - 2024/2/20 14:04:27

### 新增
- 未读气泡显示真实消息数量

## v2.7.9 - 2024/2/19 19:48:46

### 调整
- 调试功能新增web调试选项

## v2.7.7 - 2024/2/19 12:27:20

### 修复
- #119 本地表情入口按钮适配夜间模式及位置微调优化

## v2.7.6 - 2024/2/19 12:10:42

### 修复
- `精简>输入框/侧边栏` 功能选项无法正常加载的问题

### 调整
- 主进程配置模块更新事件增加防抖

## v2.7.5 - 2024/2/19 01:00:27

### 调整
-  兼容 [防撤回](https://github.com/xh321/LiteLoaderQQNT-Anti-Recall) 插件
- 默认配置启用 `本地表情>内存优化` 功能
- 更新部分设置选项文本
- 背景功能增加更多图片格式

### 修复
- 一个远古错误
- #115 Linux 下不支持 fs.watch 的 recursive: true 选项
- #117 本地表情包如果选择包含图片过多的文件夹会造成NTQQ卡死

### 优化
- `本地表情>快捷输入表情` 功能初始化速度
- `本地表情` 功能优化内存占用 ~~经测试，在开启 `内存优化` 的情况下可以加载10g的图片文件~~

## v2.7.4 - 2024/2/18 18:41:35

### 修复
- 本地表情功能偶发性无法打开表情面板的问题

## v2.7.3 - 2024/2/18 18:30:08

### 修复
- #114 本地表情自定义快捷键功能设置为`\`时无效的问题

## v2.7.2 - 2024/2/18 16:29:29

### 修复
- 在重复开关 `本地表情>移动功能位置` 功能后表情菜单定位错误的问题

## v2.7.1 - 2024/2/18 12:04:13

### 新增
- #113 移动本地表情功能入口到功能列表左侧选项

## v2.7.0 - 2024/2/18 00:33:58

### 新增
- 本地表情功能增加移入显示历史表情功能

### 优化
- 降低页面初始化时的资源占用

### 调整
- 调整查看撤回界面的时间显示
- 更新主进程配置管理模块
- 调试功能分离通信数据和日志输出

### 修复
- 本地表情功能如果在开启了内存优化后动态加载新的表情文件夹且刚好处于可见范围时不会自动加载图片的问题
- 本地表情功能如果在调用关闭方法前面板已经处于关闭状态的话则会添加一个无用监听的问题

## v2.6.2 - 2024/2/17 02:51:51

### 新增 
 - #110 消息发送时间显示在昵称后方
 - 显示完整消息发送时间
 - 添加 MacOS 和 Linux 系统的修改字体功能下拉选项的适配

## v2.6.1 - 2024/2/14 02:23:34

### 调整
- 优化二级菜单体验，鼠标离开区域后将会等待一定时间后再关闭

## v2.6.0 - 2024/2/14 02:01:01

### 新增
- 右键菜单添加 保存到本地表情 功能

### 调整
- 优化部分功能逻辑

### 修复
- 搜索图片功能出现在错误的右键菜单中

## 2.5.2 - 2024/2/13 02:00:28

### 优化
- 降低背景视频资源占用

### 修复
- 背景功能使用视频时的相关问题

## 2.5.1 - 2024/2/12 17:47:46

### 修复
- 普通用户因为没有开启脚本执行权限导致的错误

## 2.5.0 - 2024/2/12 15:51:47

### 新增
- 自定义字体功能

## 2.4.0 - 2024/2/11 23:07:52

### 新增
- #103 快捷输入表情 功能增加自定义快捷键
- #97 开启消息合并后保留显示日期

### 修复
- #104 自己消息靠左功能含有预期之外的动效
- 优化设置界面io操作频率

## 2.3.6 - 2024/2/10 00:22:52

### 🐲修复
- 本地表情直接发送图片功能不受切换发送类型控制的问题

## 2.3.5 - 2024/2/9 22:59:54

## 🐲祝各位新年快乐！

### 修复
- 部分右键菜单功能被插入到错误的位置

## 2.3.4 - 2024/2/7 22:32:06

### 修复
- #99 对订阅号消息加入复读按钮
- #98 Linux系统下右键菜单修改无效的问题

## 2.3.3 - 2024/2/6 23:36:18

### 修复
- 当开启消息合并功能时，多选消息状态下头像错位的问题

## 2.3.2 - 2024/2/6 21:54:11

### 修复
- #94 连续消息合并功能会错误的在转发消息内开启

## 2.3.1 - 2024/2/6 00:50:45

### 修复
- #93 合并转发消息插槽定位错误

## 2.3.0 - 2024/2/5 22:08:15

### 新增
- 阻止撤回功能 增加 拦截自己的撤回操作
- 本地表情功能 增加 切换发送图片大小

## 2.2.6 - 2024/2/5 16:10:05

### 新增
- 复读功能增加双击发送功能
### 调整
- 当启用LLAPI后停用插件内的hook逻辑

## 2.2.5 - 2024/2/5 01:44:55

### 调整
- 重构消息列表气泡插入算法，适配全局自定义字体

## 2.2.4 - 2024/2/4 16:56:01

### 修复
-  #89 消息列表仅显示头像 功能影响到联系人界面的问题

## 2.2.3 - 2024/2/4 16:19:14

### 调整
- 优化未读气泡显示坐标
- 回调消息列表监听逻辑

## 2.2.2 - 2024/2/4 12:54:28

### 调整
- 消息列表只显示头像 功能保留未读消息提示气泡

## 2.2.1 - 2024/2/4 12:14:07

### 调整
- 消息列表只显示头像功能将覆盖部分主题样式

## 2.2.0 - 2024/2/4 11:32:21

### 新增
- 消息列表只显示头像功能

## 2.1.3 - 2024/2/4 11:12:03

### 修复
- #88 启用连续消息合并进行多选消息时 头像遮挡复选框

## 2.1.2 - 2024/2/4 00:50:01

### 修复
- 主进程空指针bug
- 消息转图片功能增加判断，如果保存路径不存在则回退到选择文件夹的分支

## 2.1.1 - 2024/2/3 23:01:51

### 修复
- 消息转图片功能中，如果id比消息内容长会导致id被裁剪的问题

## 2.1.0 - 2024/2/3 22:39:41

### 新增
- 文本消息转图片

### 调整
- 调整版本号变更规则

## 2.0.12 - 2024/2/1 12:30:23

### 新增
- 快捷输入表情筛选只有一个结果时快速填充到聊天框

### 修复
- 修复uid为空时的错误

## 2.0.11 - 2024/1/31 15:11:03

### 提醒
- 本次更新后消息后缀的全局匹配将对好友生效

## 2.0.10 - 2024/1/31 14:22:52

### 修复
- 自定义背景视频有概率无法自动播放

### 调整
- 合并转发消息窗口现在可以使用图片搜索功能

## 2.0.9 - 2024/1/29 13:47:13

### 修复
- macOS平台本地表情无法正常工作的问题
- macOS平台右键菜单选项无法正确注入的问题

## 2.0.8 - 2024/1/26 19:34:31

### 调整
- 重新启用背景视频 **（需要LiteLoaderQQNT版本大于等于1.0.3）**
### 修复
- 修复快速关闭图片功能有概率不触发的问题

## 2.0.7 - 2024/1/25 23:10:17

### 优化
- 重构大部分本地表情渲染进程代码
- 修复部分本地表情的问题
- 本地表情新增内存优化选项（~~但是似乎没什么用~~）

## 2.0.6 - 2024/1/25 15:44:22

### 调整
- 阻止拖拽多选功能将应用到鼠标中键
- 本地表情新增内存优化功能
- 优化debug模式

### 修复
- 修复因为空指针引起的报错
- 修复本地表情无法识别大写后缀的问题

## 2.0.5 - 2024/1/24 19:30:03

### 修复
- #61 快速关闭图片功能影响正常操作的问题

## 2.0.4 - 2024/1/24 16:09:45

### 新增
- 消息靠左显示
- 撤回提示标记可自定义颜色

### 调整
- 设置界面适配 [MSpring-Theme](https://github.com/MUKAPP/LiteLoaderQQNT-MSpring-Theme)

## 2.0.3 - 2024/1/22 21:40:57

### 修复
- #57 精简部分无法操作

## 2.0.2 - 2024/1/22 19:00:17

### 修复
- 修复使用全局disabled样式导致的问题

## 2.0.1 - 2024/1/21 23:01:18

### 调整
- 设置入口增加禁用提示
- 增加循环调用直到获取到正确的用户信息
- 增加插件图标

## 2.0.0 - 2024/1/20 13:00:04

### 调整
- **不再兼容 LiteLoaderQQNT 低于 1.0.0 的版本**
- 更新插件图标
- 调整设置界面功能排版
- 消息后缀可根据规则进行匹配
- 优化撤回提示
- 阻止撤回不再强制保存数据到本地
- 阻止撤回数据默认不保存到本地，需要手动开启
- 阻止撤回保存在本地的消息进行base64编码，稍微增加一点安全性
- 现在可以查看保存在本地的撤回消息，并且可以直接跳转到对应上下文位置
- 移除自动打开来自手机链接的功能
- 优化滚动监听器处理切换高亮表情文件夹的判断
### 修复
- 重复开关本地表情功能会导致表情列表内图片大小出错

## 1.1.54 - 2024/1/7 14:17:19

### 修复
- #49 临时会话本地表情按钮被隐藏
- 修复历史表情保存数量功能，次要文本显示错误
- 修复红包显示错位问题

## 1.1.53 - 2023/12/27 14:31:37

### 修复
- #47 本地表情功能，开启 “历史表情”功能之后，无法正常使用
- 修复按住alt直接发送表情有概率失败的问题
- 修复不受支持的消息文本字体颜色错误

## 1.1.52 - 2023/12/22 18:07:51

### 新增
- 增加调节本地表情横排显示数量功能
- 增加自定义历史表情数量功能

### 优化
- 优化本地表情实现方式
- 动态更新表情列表图片


## 1.1.51 - 2023/12/10 22:34:27

### 修复
- 如果本地文件被删除，历史文件中的表情将会同步移除
### 优化
- 本地表情右键菜单增加目标对象选中样式
- 如果小程序卡片没有携带外部url，则不执行小程序转换url卡片功能

## 1.1.50 - 2023/12/5 00:40:11

### 修复
- #44 修复快速关闭图片功能会影响到顶部窗口控制按钮的问题

## 1.1.49 - 2023/12/3 22:23:21

### 新增
- 本地表情右键菜单功能

### 调整
- 常用表情功能改名为历史表情

### 修复
- 修复开启快捷关闭图片后窗口内部的功能无法正常交互的问题
- 修复快速关闭图片功能在没有启用的情况下默认生效的问题

## 1.1.48 - 2023/12/1 23:35:55

### 修复

- #43 修复没有开启常用表情功能的情况下依旧会加载对应数据的问题

## 1.1.47 - 2023/12/1 19:53:30

### 修复
- 修复聊天界面部分功能随机失效的问题

## 1.1.46 - 2023/11/30 17:02:43

### 新增
- 本地表情可配合快捷键实现多选表情和直接发送表情功能

### 优化
- 优化快速关闭图片功能实现方法

### 修复
- 修复独立窗口部分功能异常

## 1.1.45 - 2023/11/27 21:34:22

### 修复
- 修复常用表情列会自动消失的问题
### 优化
- 优化本地表情检测更新函数

## 1.1.44 - 2023/11/27 18:26:29

### 新增
- 本地表情增加常用表情功能
### 优化
- 调整设置界面排版

## 1.1.43 - 2023/11/26 17:41:33

### 修复
- #41 本地表情文件夹嵌套子文件夹时可能出现表情路径错误的问题
- 修复消息列表部分功能可能失效的问题

## 1.1.42 - 2023/11/24 14:43:42

## 建议更新

### 修复

- 修复即使没有开启防撤回功能，仍会阻止页面消息被撤回，且没有撤回标记。**但是撤回内容不会被保存**，重新进入对话将正常显示消息被撤回提示

### 优化

- 优化监听器逻辑，降低资源占用

## 1.1.41 - 2023/11/23 19:16:50

### 优化
- 增加本地表情包窗口按住CTRL键可选择多个表情包

## 1.1.40 - 2023/11/18 11:38:54

### 优化
- 优化本地表情包功能，在表情选择界面下方添加表情分类的快捷跳转图标

## 1.1.39 - 2023/11/12 22:28:41

### 新增
- 快捷输入表情功能
### 优化
- 调整设置界面载入逻辑

## 1.1.38 - 2023/11/3 14:01:08

### 优化
- 大幅降低资源占用
- 加快功能载入速度

### 修复
- 输入框切换语音输入后导致功能栏精简失效和本地表情功能入口消失的问题
- 重复打开多个独立聊天窗口后主窗口卡顿的问题

## 1.1.37 - 2023/10/26 21:23:11

### 新增
- 本地表情包功能

## 1.1.36 - 2023/10/21 09:38:43

### 优化
- 优化快速关闭图片功能，现在可以点击任意位置关闭窗口

## 1.1.35 - 2023/10/20 20:18:44

### 修复bug
- 修复新版本无法正确读取旧版本配置文件导致插件设置界面无响应的问题 #28
- 修复修改字体可能导致显示消息发送时间功能文本换行的问题 #34 

## 1.1.34 - 2023/9/24 23:09:43

### 更新
- 新增模块内检测更新功能
- 渲染进程改为模块化加载
- 优化代码逻辑

## 1.1.33 - 2023/9/20 01:14:10

### 修复
- 匿名聊天消息被错误合并的问题 #25 