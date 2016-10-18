## 使用

### 1:data-api

在textarea 添加 data-am-md

```js
<textarea data-am-md></textarea>
```

`````html
<textarea data-am-md>
> 引用：Amaze ~ 妹子 UI -- 中国首个开源 HTML5 跨屏前端框架

# 使用 # 设置标题

- # 表示一级标题
- ## 表示二级标题
- ### 表示三级标题

**加粗：Amaze UI 面向 HTML5 开发，使用 CSS3 来做动画交互，平滑、高效，更适合移动设备，让 Web 应用更快速载入。**

_斜体：Amaze UI 以移动优先（Mobile first）为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。_

[我是链接：amazeui](http://amazeui.org)

![我是图片](http://s.amazeui.org/assets/2.x/i/ui/mascot.png "输入图片标题")

- 我是列表
- Amaze UI 以移动优先（Mobile first）为理念
- 从小屏逐步扩展到大屏
- 最终实现所有屏幕适配，适应移动互联潮流</textarea>
`````

### 2:data-api

```js
<div data-provide="am-md-editable">
  <h3>amazeui 啦啦啦啦阿拉啦</h3>
  <p>通过 "data-provide = am-md-editable" 调用MD编辑器</p>
</div>
```

```html
<div data-provide="am-md-editable">
  <h3>amazeui 啦啦啦啦阿拉啦</h3>
  <p>通过 "data-provide = am-md-editable" 调用MD编辑器</p>
</div>
```

### 3: JS

通过JS调用: $('selection').markdown(options)

```js
$("#some-textarea").markdown()
```


## 参数说明：

<table class="am-table am-table-bordered am-table-striped">
  <colgroup>
    <col class="span1">
    <col class="span7">
  </colgroup>
  <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>参数描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>autofocus</code>
      </td>
      <td><code>boolean</code></td>
      <td>编辑器实例化后自动focus。 默认 <code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>savable</code>
      </td>
      <td><code>boolean</code></td>
      <td>是否在底部添加保存按钮。默认为 <code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>hideable</code>
      </td>
      <td><code>boolean</code></td>
      <td>设置为 <code>true</code>在<code>blur</code> 事件后，编辑器会隐藏 。 默认 <code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>width</code>
      </td>
      <td><code>mixed</code></td>
      <td>编辑器宽度。默认 <code>inherit</code></td>
    </tr>
    <tr>
      <td>
        <code>height</code>
      </td>
      <td><code>mixed</code></td>
      <td>编辑器高度。默认 <code>inherit</code></td>
    </tr>
    <tr>
      <td>
        <code>resize</code>
      </td>
      <td><code>string</code></td>
      <td>编辑器大小改变。 <code>none</code>,<code>both</code>,<code>horizontal</code>,<code>vertical</code>. 默认 <code>none</code>
      </td>
    </tr>

    <tr>
      <td>
        <code>footer</code>
      </td>
      <td><code>mixed</code></td>
      <td>编辑器底部DOM。默认为空，即不设置</td>
    </tr>

    <tr>
      <td>
        <code>fullscreen</code>
      </td>
      <td><code>object</code></td>
      <td>是否允许全屏： <code>enable</code> (<code>bool</code>)；改变图标： <code>icons</code> (<code>object</code>) </td>
    </tr>


    <tr>
      <td>
        <code>hiddenButtons</code>
      </td>
      <td><code>mixed</code></td>
      <td>隐藏默认的按钮：单个为字符串，多个为数组</td>
    </tr>

    <tr>
      <td>
        <code>disabledButtons</code>
      </td>
      <td><code>mixed</code></td>
      <td>禁用默认的按钮：单个为字符串，多个为数组</td>
    </tr>
  </tbody>
</table>


## 示例：

### 自定义编辑器宽度和高度

```
<textarea data-am-md data-width="800" data-height="300"></textarea>
```

`````html
<textarea data-am-md data-width="800" data-height="300"></textarea>
`````

### 添加保存按钮

```html
<textarea data-am-md data-savable="true"></textarea>
```

`````html
<textarea data-am-md data-savable="true"></textarea>
`````

### 添加DOM

```html
<textarea data-am-md data-footer="<h1>aaa</h1>"></textarea>
```

`````html
<textarea data-am-md data-footer="<h1>我是添加的</h1>"></textarea>
`````

## 事件接口

6个勾子函数与编辑器整个生命周期挂钩：

- onShow
- onPreview
- onChange
- onSave
- onFocus
- onBlur

```js
$("#target-editor").markdown({
  savable:true,
  onShow: function(e){
    alert("Showing "
      +e.$textarea.prop("tagName").toLowerCase()
      +"#"
      +e.$textarea.attr("id")
      +" as Markdown Editor...")
  },
  onPreview: function(e) {
    var previewContent

    if (e.isDirty()) {
      var originalContent = e.getContent()

      previewContent = "Prepended text here..."
             + "\n"
             + originalContent
             + "\n"
             +"Apended text here..."
    } else {
      previewContent = "Default content"
    }

    return previewContent
  },
  onSave: function(e) {
    alert("Saving '"+e.getContent()+"'...")
  },
  onChange: function(e){
    console.log("Changed!")
  },
  onFocus: function(e) {
    alert("Focus triggered!")
  },
  onBlur: function(e) {
    alert("Blur triggered!")
  }
})
```

## 编辑器按钮组设置

可以修改编辑器按按钮组：包括： 字体、提示信息、图标、回调函数。

如果需要加入额外的按钮和功能，可以使用 additionalButtons 接口：

```js
$("#am-md-bnt").markdown({
  additionalButtons: [
    [{
          name: "groupCustom",
          data: [{
            name: "cmdExtra",
            title: "extra",
            btnText: "我是额外加的",
            icon: "am-icon-angellist am-icon-spin am-icon-sm",  // 使用amazeui图标库
            callback: function(e){
              alert('请在console控制台中查看事件对象')  // 回调函数测试
              console.log(e)
            }
          }]
    }]
  ]
})
```

`````html
<textarea id="am-md-btn"></textarea>
`````

## APIS

<table class="am-table am-table-bordered am-table-striped">
  <colgroup>
    <col class="span1">
    <col class="span7">
  </colgroup>
  <thead>
    <tr>
      <th>方法</th>
      <th>具体描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>showEditor()</code>
      </td>
      <td>设置编辑器可见</td>
    </tr>
    <tr>
      <td>
        <code>showPreview()</code>
      </td>
      <td>进入预览状态</td>
    </tr>
    <tr>
      <td>
        <code>hidePreview()</code>
      </td>
      <td>设置编辑器不可见</td>
    </tr>
    <tr>
      <td>
        <code>isDirty()</code>
      </td>
      <td>获取编辑器数据状态: 返回true表示内容已改变，反之无改变</td>
    </tr>
    <tr>
      <td>
        <code>getContent()</code>
      </td>
      <td>获取编辑区内容（即markdown语法的内容）</td>
    </tr>
    <tr>
      <td>
        <code>parseContent()</code>
      </td>
      <td>获取md解析后的内容</td>
    </tr>
    <tr>
      <td>
        <code>setContent(<em>string</em> content)</code>
      </td>
      <td>设置编辑器内容：字符串</td>
    </tr>
    <tr>
      <td>
        <code>findSelection(<em>string</em> words)</code>
      </td>
      <td>内容检索：输入字符串，返回对象：包括位置、内容等</td>
    </tr>
    <tr>
      <td>
        <code>getSelection()</code>
      </td>
      <td>获取当前鼠标光标选择的内容</td>
    </tr>
    <tr>
      <td>
        <code>setSelection(<em>int</em> start, <em>int</em> end)</code>
      </td>
      <td>编辑器获取内容： <code>start</code> to <code>end</code>.</td>
    </tr>
    <tr>
      <td>
        <code>replaceSelection(<em>string</em> content)</code>
      </td>
      <td>输入字符串替换当前选择的内容</td>
    </tr>
    <tr>
      <td>
        <code>enableButtons(<em>string</em> name)</code>
      </td>
      <td>通过<code>name</code> 设置启用按钮。包括默认的 <code>buttons</code> 和 <code>additionalButtons</code> 。 设置为 <code>all</code>将启用全部的按钮</td>
    </tr>
    <tr>
      <td>
        <code>disableButtons(<em>string</em> name)</code>
      </td>
      <td>通过 <code>name</code> 禁用按钮。包括默认的 <code>buttons</code> 和 <code>additionalButtons</code> 。 设置为 <code>all</code> 会禁用所有的按钮。</td>
    </tr>
    <tr>
      <td>
        <code>showButtons(<em>string</em> name)</code>
      </td>
      <td>通过 <code>name</code> 设置显示按钮。包括 <code>buttons</code> 和 <code>additionalButtons</code> 。</td>
    </tr>
    <tr>
      <td>
        <code>hideButtons(<em>string</em> name)</code>
      </td>
      <td>通过 <code>name</code> 隐藏按钮。 包括<code>buttons</code> 和 <code>additionalButtons</code> 。</td>
    </tr>

  </tbody>
</table>
