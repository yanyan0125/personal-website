
    function banner(id){
        this.tab = document.getElementById(id);
        this.nav = this.tab.children[0].children;
        this.box = this.tab.children[1].children;
    }
    banner.prototype = {
        init : function(id){
            var that = this;
            var arr = ['orange','green','#f40','blue'];
            for(var i=0; i<this.nav.length; i++){
                this.nav[i].index = i;
                this.box[i].style.backgroundColor = arr[i];
                this.nav[i].onclick = function(){
                    that.clickNav(this)
                }
            }

        },
        clickNav : function(obj){
            var that = this;
            for(var i=0; i<that.nav.length; i++){
                that.nav[i].className = '';
                that.box[i].className = '';
            }
            obj.className = 'current';
            that.box[obj.index].className = 'current'
        }
    }


