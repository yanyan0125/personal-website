/**
 * Created by libing on 2016/6/24.
 */
function MyCircle(option){
    this.init(option);
}
MyCircle.prototype = {
    //初始化对应的属性
    init : function(option){
        this.x = option.x;
        this.y = option.y;
        this.innerRadius = option.innerRadius;
        this.outerRadius = option.outerRadius;
        this.innerColor = option.innerColor;
        this.outerColor = option.outerColor;
        this.innerOpacity = option.innerOpacity;
        this.outerOpacity = option.outerOpacity;
        this.text = option.text;
        this.fontSize = option.fontSize;
        this.color = option.color;
        var _this = this;
        //创建组
        this.group = new Konva.Group({
            x : _this.x,
            y : _this.y
        });
        //初始化对应的形状  圆环
        var ring = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: _this.innerRadius,
            outerRadius: _this.outerRadius,
            fill: _this.outerColor,
            opacity: _this.outerOpacity
        });
        //创建圆
        var circle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: _this.innerRadius,
            fill: _this.innerColor,
        });
        //创建文字
        var text = new Konva.Text({
            x: 0 - _this.innerRadius,
            y: 0 - _this.fontSize / 2,
            text: _this.text,
            fontSize: _this.fontSize,
            fontFamily: 'Calibri',
            width: _this.innerRadius * 2,
            align: "center",
            fill : "white"
        });
        //将创建的形状，添加到组里面
        this.group.add(ring);
        this.group.add(circle);
        this.group.add(text);
    },
    addGroupOrLayer : function (groupLayer) {
        groupLayer.add(this.group);
    }
};
















