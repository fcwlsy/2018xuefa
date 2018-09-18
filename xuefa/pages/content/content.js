var t = "今日心情,美美哒!", n = [];

Page({
    data: {
        text: t
    },
    add: function(e) {
        n.push(t), this.setData({
            text: t + "\n" + n.join("\n")
        });
    },
    remove: function(e) {
        n.length > 0 && (n.pop(), this.setData({
            text: t + "\n" + n.join("\n")
        }));
    },
    usernameinput: function(n) {
        t = n.detail.value;
    }
});