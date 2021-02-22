## 安卓输入框被软键盘遮住的问题

```javascript
if(/Android [4-7]/.test(navigator.appVersion)) {
   window.addEventListener("resize", function() {
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
         window.setTimeout(function() {
            document.activeElement.scrollIntoViewIfNeeded();
         },0);
      }
   })
}
```

参考链接：[Android does not correctly scroll on input focus if not body element](https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element)